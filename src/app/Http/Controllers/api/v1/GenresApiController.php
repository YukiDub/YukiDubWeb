<?php

/*
 * Copyright (c) YukiDub. Author: M9snikFeed <m9snikfeed@gmail.com>.
 */

namespace App\Http\Controllers\api\v1;

use App\Http\Resources\GenresResource;
use App\Models\Genre;
use App\Repositories\GenresRepository;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class GenresApiController extends ApiController
{
    protected $genresRep;

    public function __construct()
    {
        $this->genresRep = new GenresRepository();
    }

    /**
     * Display a listing of the resource.
     *
     *     @OA\Get(
     *          path="/genres",
     *          tags = {"Genres"},
     *     @OA\Response(response="default", description="Display a listing of the resource")
     * )
     *
     * @return AnonymousResourceCollection
     */
    public function index(): AnonymousResourceCollection
    {
        return GenresResource::collection($this->genresRep->getList());
    }

    /**
     * Display the specified resource.
     *
     *     @OA\Get (
     *          path="/genres/{id}",
     *          tags = {"Genres"},
     *     @OA\Response(response="default", description="Display the specified resource"),
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="The genre id",
     *         required=true,
     *         @OA\Schema(
     *             type="integer",
     *         )
     *     )
     * )
     *
     * @param int $id
     *
     * @return GenresResource
     */
    public function show($id): GenresResource
    {
        $this->recordExists($genre = $this->genresRep->getById($id));

        return new GenresResource($genre);
    }
}
