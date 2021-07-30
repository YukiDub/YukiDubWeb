<?php

/*
 * Copyright (c) YukiDub. Author: M9snikFeed <m9snikfeed@gmail.com>.
 */

namespace App\Http\Controllers\api\v1;

use App\Http\Requests\PeopleIndexRequest;
use App\Http\Requests\RemoveRoleStaffRequest;
use App\Http\Requests\StaffRequest;
use App\Http\Resources\PeopleCollection;
use App\Http\Resources\PeopleResource;
use App\Http\Resources\RoleCollection;
use App\Http\Resources\RoleResource;
use App\Models\Staff;
use App\Repositories\PeopleRepository;
use App\Repositories\GenresRepository;
use App\YukiDub\Images;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Http\Response;

class PeopleApiController extends ApiController
{
    protected $peopleRepo;
    protected $peopleRolesRepo;

    public function __construct()
    {
        $this->peopleRepo = new PeopleRepository();
        $this->peopleRolesRepo = new GenresRepository();
    }

    /**
     * Display a listing of the resource.
     *
     * @param PeopleIndexRequest $request
     * @return PeopleCollection
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
     *          name = "count",
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
    public function index(PeopleIndexRequest $request): PeopleCollection
    {
        $peopleRepository = $this->peopleRepo;

        $perPage = $request->get("count") ? $request->get('count') : 6;

        if($request->get("role")){
            $peopleRepository->setRole($request->get("role"));
        }

        return new PeopleCollection($peopleRepository->getList($perPage));
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
     * @param StaffRequest $request
     * @return JsonResponse
     */
    public function store(StaffRequest $request): JsonResponse
    {
        if($request->user()->cannot('create', Staff::class)){
            return response()->json(['status'=>403, 'message'=>'Access denied'], 403);
        };

        $people = new Staff();
        $people->fill($request->validated());

        if($request->hasFile("avatar")){
            $people->avatarExtention = $request->file("avatar")->getClientOriginalExtension();
            Images::upload($request->file("avatar"), $people->staff_id, "/public/images/peoples/");
        }

        $people->save();
        $people->roles()->attach($request->get("roles"));

        return response()->json(["data"=>new PeopleResource($people), "status"=>"created"], 201);
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
     * @return PeopleResource
     */
    public function show(int $id): PeopleResource
    {
        $repository = $this->peopleRepo;
        $this->recordExists($people = $repository->getById($id));

        return new PeopleResource($people);
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
     * @param StaffRequest $request
     * @param int $id
     * @return PeopleResource
     */
    public function update(StaffRequest $request, int $id): PeopleResource
    {
        $rolesRepository = $this->peopleRolesRepo;

        $this->recordExists($people = Staff::find($id));
        $people->fill($request->all());

        $people->update();

        $people->roles()->sync($request->get("roles"));

        return new PeopleResource($people);
    }

    /**
     * Remove roles this person
     * @param int $peopleId
     * @param RemoveRoleStaffRequest $request
     * @return RoleCollection|\Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\Routing\ResponseFactory|Response
     * @OA\Delete (
     *     path="/people/{id}/roles",
     *     tags = {"People"},
     *     security={
     *       {"Authorization": {}},
     *     },
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
     */
    public function removeRole(int $peopleId, RemoveRoleStaffRequest $request)
    {
        $peopleRepository = $this->peopleRepo;

        $this->recordExists($peopleRepository->getById($peopleId));
        $staff = Staff::find($peopleId);

        $staff->roles()->detach($request->validated());

        return response(null, 204);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return Response
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
    public function destroy(int $id): Response
    {
        $this->recordExists($people = Staff::find($id));
        $people->first()->delete();

        return response(null, 204);
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
        $repository = $this->peopleRepo;
        return "заглушка, здесь пока ничего нет";
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
