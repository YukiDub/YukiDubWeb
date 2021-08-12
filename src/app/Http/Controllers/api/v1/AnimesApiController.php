<?php

/*
 * Copyright (c) YukiDub. Author: M9snikFeed <m9snikfeed@gmail.com>.
 */

namespace App\Http\Controllers\api\v1;

use App\Http\Controllers\Controller;
use App\Http\Requests\AnimeRequest;
use App\Http\Resources\AnimeCollection;
use App\Http\Resources\AnimeResource;
use App\Models\Anime;
use App\Repositories\AnimeRepository;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class AnimesApiController extends ApiController
{
    protected $animeRepo;

    public function __construct()
    {
        $this->animeRepo = new AnimeRepository();
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
     *          name = "genre",
     *          in = "query",
     *          description = "genre",
     *          required=false,
     *          @OA\Schema(
     *             type="int"
     *         )
     *     )
     * )
     *
     * @return AnimeCollection
     */
    public function index(AnimeRequest $request): AnimeCollection
    {
        $perPage = $request->get("perPage") ? $request->get('perPage') : 6;
        $fields = $request->get('fields');

        return new AnimeCollection(
            $this->animeRepo
                ->getList(
                    $fields,
                    $request->get('genres') ? $request->get('genres') : [],
                    $request->get('genres') ? $request->get('studios') : []
                )
                ->paginate($perPage)
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
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
     * @return AnimeResource
     */
    public function show($id)
    {
        $this->recordExists($anime = $this->animeRepo->getById($id));

        return AnimeResource::make($anime);
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
     *         description="The people id",
     *         required=true,
     *         @OA\Schema(
     *             type="integer",
     *         )
     *     )
     * )
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id): \Illuminate\Http\Response
    {
        $this->recordExists($anime = Anime::find($id));
        $anime->delete();

        return response(null, 204);
    }
}
