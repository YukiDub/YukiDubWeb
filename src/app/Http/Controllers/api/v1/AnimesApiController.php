<?php

/*
 * Copyright (c) YukiDub. Author: M9snikFeed <m9snikfeed@gmail.com>.
 */

namespace App\Http\Controllers\api\v1;

use App\Http\Requests\AnimeRequest;
use App\Http\Requests\CreateAnimeRequest;
use App\Http\Requests\SendVoteRequest;
use App\Http\Resources\AnimeCollection;
use App\Http\Resources\AnimeResource;
use App\Models\Anime;
use App\Repositories\AnimeRepository;
use App\Services\VoteService;
use Illuminate\Http\Request;

class AnimesApiController extends ApiController
{
    protected $animeRepo;

    public function __construct()
    {
        $this->animeRepo = new AnimeRepository();

        $this->resource = AnimeResource::class;
        parent::__construct();
    }

    /**
     * Display a listing of the resource.
     *
     * @OA\Get(
     *     path="/anime",
     *     tags = {"Anime"},
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
     *          name = "genres",
     *          in = "query",
     *          description = "genres",
     *          required=false,
     *          @OA\Schema(
     *             type="array",
     *             @OA\Items(
     *                  type="string"
     *              )
     *         )
     *     ),
     *
     *    @OA\Parameter(
     *          name = "studios",
     *          in = "query",
     *          description = "studios",
     *          required=false,
     *          @OA\Schema(
     *             type="array",
     *             @OA\Items(
     *                  type="string"
     *              )
     *         )
     *     )
     * )
     *
     * @return AnimeCollection
     */
    public function index(AnimeRequest $request)
    {
        $perPage = $request->get("perPage") ? $request->get('perPage') : 6;

        $data = $this->animeRepo
            ->getList(
                $request->get("fields") ? $request->get('fields') : [],
                $request->get('genres') ? $request->get('genres') : [],
                $request->get('studios') ? $request->get('studios') : [],
                $request->get('seasons') ? $request->get('seasons') : []
            )
            ->paginate($perPage);
        return $this->response->withCollection($data);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CreateAnimeRequest $request)
    {
        //if(!$this->aired_on){
        //    return null;
        //}

        //$date = (Carbon::make($this->aired_on))->format('z');
        //if($date < 80 || $date > 356){
        //    return 'Winter';
        //}
        //if($date < 173){
        //    return 'Spring';
        //}
        //if($date < 266){
        //    return 'Summer';
        //}
    }

    /**
     * Display the specified resource.
     *
     *   @OA\Get   (
     *     path="/anime/{id}",
     *     tags = {"Anime"},
     *     @OA\Response(
     *          response=201,
     *          description="Display the specified resource",
     *          @OA\MediaType(mediaType="application/json")
     *     ),
     *     @OA\Response(
     *          response="404",
     *          description="anime not found",
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
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id)
    {
        $this->recordExists($anime = $this->animeRepo->getByIdAllRelations($id));

        return $this->response->withItem($anime);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     *  @OA\Delete  (
     *     path="/anime/{id}",
     *     tags = {"Anime"},
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
     *          description="anime not found",
     *          @OA\JsonContent(
     *              type="array",
     *              @OA\Items(ref="#/components/schemas/NotFoundRequest")
     *          )
     *      ),
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="the anime id",
     *         required=true,
     *         @OA\Schema(
     *             type="integer",
     *         )
     *     )
     * )
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id): \Illuminate\Http\JsonResponse
    {
        $this->recordExists($anime = Anime::find($id));
        $anime->delete();

        return $this->response->withNoContent();
    }


    /** Sending vote
     *  @OA\Post  (
     *  path="/anime/{id}/vote",
     *  tags = {"Anime"},
     *  security={
     *    {"Authorization": {   }},
     *  },
     *  @OA\Response(
     *          response=201,
     *          description="sended",
     *          @OA\MediaType(mediaType="application/json")
     *     ),
     *  @OA\Response(
     *       response="404",
     *       description="anime not found",
     *       @OA\JsonContent(
     *           type="array",
     *           @OA\Items(ref="#/components/schemas/NotFoundRequest")
     *       )
     *   ),
     *  @OA\Parameter(
     *      name="id",
     *      in="path",
     *      description="the anime id",
     *      required=true,
     *      @OA\Schema(
     *          type="integer",
     *      )
     *  ),
     *  @OA\Parameter(
     *      name="vote",
     *      in="query",
     *      description="vote field",
     *      required=true,
     *      @OA\Schema(
     *          type="integer",
     *      )
     *  )
     * )
     * Sending vote
     * @param $id
     * @param SendVoteRequest $request
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\JsonResponse|\Illuminate\Http\Response
     */
    public function vote($id, SendVoteRequest $request){
        $this->recordExists($anime = Anime::find($id));

        if($request->user()->cannot('createVote', $anime)){
            return $this->response->withForbidden(['Access denied']);
        };

        $voteService = new VoteService();
        $status = $voteService->createVote(Auth()->user()->id, $request->get('vote'), $anime->score);

        return $this->response->json(['status'=>$status]);
    }

    /** Show score the anime
     *
     *  @OA\Get  (
     *  path="/anime/{id}/score",
     *  tags = {"Anime"},
     *  @OA\Response(
     *          response=201,
     *          description="sended",
     *          @OA\MediaType(mediaType="application/json")
     *     ),
     *  @OA\Response(
     *       response="404",
     *       description="anime not found",
     *       @OA\JsonContent(
     *           type="array",
     *           @OA\Items(ref="#/components/schemas/NotFoundRequest")
     *       )
     *   ),
     *  @OA\Parameter(
     *      name="id",
     *      in="path",
     *      description="the anime id",
     *      required=true,
     *      @OA\Schema(
     *          type="integer",
     *      )
     *  )
     * )
     * @return array
     */
    public function getScore($id): array
    {
        $this->recordExists($anime = Anime::find($id));
        $score = $this->scoreRepo;

        return [
            'score'=>[
                'total'=>8,
                'count'=>2,
            ],
            'votes'=>
                [
                    [
                        'user'=>[
                            'id'=>1,
                            'name'=>'Admin'
                        ],
                        'score'=>8,
                        'created_at'=>'..',
                        'updated_at'=>'..'
                    ],

                    [
                        'user'=>[
                            'id'=>1,
                            'name'=>'test123'
                        ],
                        'score'=>8,
                        'created_at'=>'..',
                        'updated_at'=>'..'
                    ],
                ]
        ];
    }
}
