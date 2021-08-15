<?php

/*
 * Copyright (c) YukiDub. Author: M9snikFeed <m9snikfeed@gmail.com>.
 */

namespace App\Http\Controllers\api\v1;

use App\Http\Requests\StaffCreateRequest;
use App\Http\Requests\PeopleAnimesRequest;
use App\Http\Requests\PeopleIndexRequest;
use App\Http\Requests\StaffUpdateRequest;
use App\Http\Resources\AnimeCollection;
use App\Http\Resources\AnimeResource;
use App\Http\Resources\PeopleResource;
use App\Http\Resources\RoleResource;
use App\Models\Staff;
use App\Repositories\AnimeRepository;
use App\Repositories\PeopleRepository;
use App\Repositories\GenresRepository;
use App\Services\HistoryService;
use App\YukiDub\Images;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Support\Facades\Auth;

class PeopleApiController extends ApiController
{
    protected $peopleRepo;
    protected $peopleRolesRepo;
    protected $animeRepo;
    protected $historyService;

    public function __construct()
    {
        $this->peopleRepo = new PeopleRepository();
        $this->peopleRolesRepo = new GenresRepository();
        $this->animeRepo = new AnimeRepository();
        $this->historyService = new HistoryService();
        $this->resource = PeopleResource::class;
        parent::__construct();
    }

    /**
     * Display a listing of the resource.
     *
     * @param PeopleIndexRequest $request
     *
     * @OA\Get(
     *     path="/people",
     *     tags = {"People"},
     *     @OA\Response(response="200", description="Display a listing of the resource"),
     *     @OA\Response(
     *          response="404",
     *          description="not found",
     *          @OA\JsonContent(
     *              type="array",
     *              @OA\Items(ref="#/components/schemas/NotFoundRequest")
     *          )
     *      ),
     *
     *     @OA\Parameter(
     *          name = "perPage",
     *          in = "query",
     *          description = "number of people per page",
     *          required=false,
     *          @OA\Schema(
     *             type="integer"
     *         )
     *     ),
     *     @OA\Parameter(
     *          name = "page",
     *          in = "query",
     *          description = "page",
     *          required=false,
     *          @OA\Schema(
     *             type="integer"
     *         )
     *     ),
     *
     *     @OA\Parameter(
     *          name = "role",
     *          in = "query",
     *          description = "role",
     *          required=false,
     *          @OA\Schema(
     *             type="string"
     *         )
     *     )
     * )
     */
    public function index(PeopleIndexRequest $request)
    {
        $peopleRepository = $this->peopleRepo;

        $perPage = $request->get("perPage") ? $request->get('perPage') : 6;

        if($request->get("role")){
            $peopleRepository->setRole($request->get("role"));
        }

        return $this->response->withCollection($peopleRepository->getList($perPage));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @OA\Post (
     *     path="/people",
     *     tags = {"People"},
     *     security={
     *       {"Authorization": {}},
     *     },
     *     @OA\Response(
     *          response="201",
     *          description="added a new people",
     *          @OA\JsonContent(
     *              type="array",
     *              @OA\Items(ref="#/components/schemas/PeopleRequest")
     *          )
     *      ),
     *      @OA\Response(
     *          response="422",
     *          description="Unprocessable Entity",
     *          @OA\JsonContent(
     *              type="array",
     *              @OA\Items(ref="#/components/schemas/UnprocessableEntityRequest")
     *          )
     *      ),
     *     @OA\Response(
     *          response="404",
     *          description="people not found",
     *          @OA\JsonContent(
     *              type="array",
     *              @OA\Items(ref="#/components/schemas/NotFoundRequest")
     *          )
     *      ),
     *     @OA\Parameter(
     *          name = "nameJp",
     *          in = "query",
     *          description = "nameJp",
     *          required=true,
     *          example = "緑川 光",
     *          @OA\Schema(
     *             type="string",
     *             maximum = 24,
     *             minimum = 2
     *         )
     *     ),
     *     @OA\Parameter(
     *          name = "nameEn",
     *          in = "query",
     *          description = "nameEn",
     *          required=true,
     *          example = "Hikaru Midorikawa",
     *          @OA\Schema(
     *             type="string",
     *             maximum = 30,
     *             minimum = 2
     *         )
     *     ),
     *     @OA\Parameter(
     *          name = "nameRu",
     *          in = "query",
     *          description = "nameRu",
     *          required=false,
     *          example = "Хикару Мидорикава",
     *          @OA\Schema(
     *             type="string",
     *             maximum = 30,
     *             minimum = 2
     *         )
     *     ),
     *
     *    @OA\Parameter(
     *          name = "birthday",
     *          in = "query",
     *          description = "birthday",
     *          required=false,
     *          example = "1997-01-11",
     *          @OA\Schema(
     *             type="date"
     *         )
     *     ),
     *
     *     @OA\Parameter(
     *          name = "webSite",
     *          in = "query",
     *          description = "",
     *          required=false,
     *          example = "http://hikaru23.hatenablog.com/",
     *          @OA\Schema(
     *             type="url"
     *         )
     *     ),
     *
     *     @OA\Parameter(
     *          name = "roles",
     *          in = "query",
     *          description = "roles",
     *          required=true,
     *          @OA\Schema(
     *             type="array",
     *             @OA\Items(
     *                 type="integer"
     *              )
     *         )
     *     )
     * )
     * @param StaffCreateRequest $request
     * @return JsonResponse
     */
    public function store(StaffCreateRequest $request): JsonResponse
    {
        if($request->user()->cannot('create', Staff::class)){
            return $this->response->withBadRequest('Access denied');
        };

        $people = new Staff();
        $people->fill($request->validated());

        if($request->hasFile("avatar")){
            $people->avatarExtention = $request->file("avatar")->getClientOriginalExtension();
            Images::upload($request->file("avatar"), $people->staff_id, "/public/images/peoples/");
        }
        $people->save();

        $this->historyService->createAction(
            'Adding a new staff',
            'accepted',
            Auth::user()->id,
            $people
        );

        return $this->response->withNoContent();
    }

    /**
     * Display the specified resource.
     *
     * @OA\Get (
     *     path="/people/{id}",
     *     tags = {"People"},
     *     @OA\Response(response="default", description="Display the specified resource"),
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="The people id",
     *         required=true,
     *         @OA\Schema(
     *             type="integer",
     *         )
     *     )
     * )
     * @param  int  $id
     * @return JsonResponse
     */
    public function show(int $id): JsonResponse
    {
        $repository = $this->peopleRepo;
        $this->recordExists($people = $repository->getById($id));

        return $this->response->withItem($people);
    }

    /**
     * Update the specified resource in storage.
     *
     * @OA\Patch  (
     *     path="/people/{id}",
     *     tags = {"People"},
     *     security={
     *       {"Authorization": {}},
     *     },
     *     @OA\Response(
     *          response=200,
     *          description="removed",
     *          @OA\MediaType(mediaType="application/json")
     *     ),
     *     @OA\Response(
     *          response="404",
     *          description="people not found",
     *          @OA\JsonContent(
     *              type="array",
     *              @OA\Items(ref="#/components/schemas/NotFoundRequest")
     *          )
     *      ),
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="The people id",
     *         required=true,
     *         @OA\Schema(
     *             type="integer",
     *         )
     *     )
     * )
     *
     *
     * @param StaffUpdateRequest $request
     * @param int $id
     * @return JsonResponse
     */
    public function update(StaffUpdateRequest $request, int $id): JsonResponse
    {
        $this->recordExists($people = Staff::find($id));
        $afterAttributes = $people->getAttributes();
        $people->fill($request->all());
        $moderate = true;

        if(!$people->isDirty()){
            return $this->response->withBadRequest('There were no changes');
        }

        if(!$request->user()->cannot('update', $people)){
            $moderate = false;
            $people->update();
        };

        $this->historyService->updateAction(
            'Staff update',
            $moderate ? 'moderate' : 'accepted',
            Auth::user()->id,
            $people,
            $afterAttributes,
            $request->all(),
        );

        if($moderate){
            return $this->response->json(['status'=>'Sent for moderation']);
        }
        return $this->response->withItem($people);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return JsonResponse
     *
     * @OA\Delete  (
     *     path="/people/{id}",
     *     tags = {"People"},
     *     security={
     *       {"Authorization": {}},
     *     },
     *     @OA\Response(
     *          response=200,
     *          description="removed",
     *          @OA\MediaType(mediaType="application/json")
     *     ),
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="The people id",
     *         required=true,
     *         @OA\Schema(
     *             type="integer",
     *         )
     *     )
     * )
     */
    public function destroy(int $id): JsonResponse
    {
        $this->recordExists($people = Staff::find($id));
        $peopleData = $people->getAttributes();
        $people->first()->delete();

        $this->historyService->removeAction($peopleData, Auth::user()->id, 'Staff removal');
        return $this->response->withNoContent();
    }

    /**
     * Display a listing changes
     * @param $id
     * @return JsonResponse
     * @OA\Get(
     *     path="/people/{id}/changes",
     *     tags = {"People"},
     *     @OA\Response(response="200", description="Display a listing of the resource"),
     *     @OA\Response(
     *          response="404",
     *          description="not found",
     *          @OA\JsonContent(
     *              type="array",
     *              @OA\Items(ref="#/components/schemas/NotFoundRequest")
     *          )
     *      ),
     *
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="The people id",
     *         required=true,
     *         @OA\Schema(
     *             type="integer",
     *         )
     *     )
     * )
     */
    public function changes($id): JsonResponse
    {
        $this->recordExists($changes = $this->peopleRepo->getChangesById($id));
        return $this->response->json($changes);
    }

    /**
     * Display a listing of the work this person
     * @param $id
     * @return string
     * @OA\Get(
     *     path="/people/{id}/works",
     *     tags = {"People"},
     *     @OA\Response(response="200", description="Display a listing of the resource"),
     *     @OA\Response(
     *          response="404",
     *          description="not found",
     *          @OA\JsonContent(
     *              type="array",
     *              @OA\Items(ref="#/components/schemas/NotFoundRequest")
     *          )
     *      ),
     *
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="The people id",
     *         required=true,
     *         @OA\Schema(
     *             type="integer",
     *         )
     *     )
     * )
     */
    public function getWorks(int $id){
        $this->recordExists($people = $this->peopleRepo->getById($id));
        $animeCollection = $this->response->setResource(AnimeResource::class)->withCollection($people->popularAnimes());

        $data = [
            'animes'=>$animeCollection, //надо будет выводить только самые топовые анимехи (т.е сортировать по рейтингу)
            'mangas'=>[
                '..'
            ],
            'ranobe'=>[
                '..'
            ],
            'visual-novel'=>[
                '...'
            ]
        ];

        return $this->response->json($data);
    }

    /**
     * Display a listing of the anime list this person
     * @param $id
     * @return AnimeCollection
     * @OA\Get(
     *     path="/people/{id}/animes",
     *     tags = {"People"},
     *     @OA\Response(response="200", description="Display a listing of the resource"),
     *     @OA\Response(
     *          response="404",
     *          description="not found",
     *          @OA\JsonContent(
     *              type="array",
     *              @OA\Items(ref="#/components/schemas/NotFoundRequest")
     *          )
     *      ),
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="The people id",
     *         required=true,
     *         @OA\Schema(
     *             type="integer",
     *         )
     *     ),
     *     @OA\Parameter(
     *         name="perPage",
     *         in="query",
     *         description="Count of objects per page. ( 1 <= perPage >= 100 )",
     *         required=true,
     *         @OA\Schema(
     *             type="integer",
     *         )
     *     )
     * )
     */
    public function getAnime(PeopleAnimesRequest $request,int $id)
    {
        $perPage = $request->get("perPage") ? $request->get('perPage') : 6;
        $data = $this->animeRepo->getByPeopleId($id)->paginate($perPage);

        return $this->response->setResource(AnimeResource::class)->withCollection($data);
    }

    /**
     * Display a listing of the manga list this person
     * @param $id
     * @return AnimeCollection
     * @OA\Get(
     *     path="/people/{id}/mangas",
     *     tags = {"People"},
     *     @OA\Response(response="200", description="Display a listing of the resource"),
     *     @OA\Response(
     *          response="404",
     *          description="not found",
     *          @OA\JsonContent(
     *              type="array",
     *              @OA\Items(ref="#/components/schemas/NotFoundRequest")
     *          )
     *      ),
     *
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="The people id",
     *         required=true,
     *         @OA\Schema(
     *             type="integer",
     *         )
     *     )
     * )
     */
    public function getMangas(int $id)
    {
        //
    }

    /**
     * Display a listing of the roles this person
     * @param $id
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     * @OA\Get(
     *     path="/people/{id}/roles",
     *     tags = {"People"},
     *     @OA\Response(response="200", description="Display a listing of the resource"),
     *     @OA\Response(
     *          response="404",
     *          description="not found",
     *          @OA\JsonContent(
     *              type="array",
     *              @OA\Items(ref="#/components/schemas/NotFoundRequest")
     *          )
     *      ),
     *
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="The people id",
     *         required=true,
     *         @OA\Schema(
     *             type="integer",
     *         )
     *     )
     * )
     */
    public function getRoles(int $id): AnonymousResourceCollection
    {
        $repository = $this->peopleRepo;
        return RoleResource::collection($repository->getRoles($id));
    }
}
