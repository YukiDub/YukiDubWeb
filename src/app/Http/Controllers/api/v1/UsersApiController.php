<?php

/*
 * Copyright (c) YukiDub. Author: M9snikFeed <m9snikfeed@gmail.com>.
 */

namespace App\Http\Controllers\api\v1;

use App\Http\Requests\UserIndexRequest;
use App\Http\Requests\UserRequest;
use App\Http\Resources\UserCollection;
use App\Http\Resources\UserResource;
use App\Models\User;
use App\Repositories\UserRepository;
use Auth;
use Illuminate\Http\Request;

class UsersApiController extends ApiController
{
    protected $userRepo;

    public function __construct()
    {
        $this->userRepo = new UserRepository();
    }

    /**
     * Display a listing of the resource.
     *
     * @OA\Get(
     *     path="/users",
     *     tags = {"Users"},
     *     @OA\Response(
     *          response=200,
     *          description="Display a listing of the resource",
     *          @OA\MediaType(mediaType="application/json")
     *     ),
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
    public function index(UserIndexRequest $request): UserCollection
    {
        $userRepo = $this->userRepo;

        $userRepo->setRole($request->get('role'));

        $perPage = $request->get('count') ? $request->get('count') : 6;

        $this->recordExists($users = $userRepo->getListPaginate($perPage));

        return new UserCollection($users);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     *
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
    }

    /**
     * Display the specified resource.
     *
     * @OA\Get(
     *     path="/users/{id}",
     *     tags = {"Users"},
     *     @OA\Response(
     *          response=200,
     *          description="Display the specified resource",
     *          @OA\MediaType(mediaType="application/json")
     *     ),
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
     *          name = "id",
     *          in = "path",
     *          description = "user id",
     *          required=false,
     *          @OA\Schema(
     *             type="integer"
     *         )
     *     )
     * )
     *
     * @param int $id
     *
     * @return UserResource
     */
    public function show($id): UserResource
    {
        $userRepo = $this->userRepo;
        $this->recordExists($user = $userRepo->getById($id));

        return new UserResource($user);
    }

    /**
     * Update the specified resource in storage.
     *
     *    @OA\Patch (
     *     path="/users/{id}",
     *     tags = {"Users"},
     *     @OA\Response(
     *          response=201,
     *          description="Update the specified resource in storage",
     *          @OA\MediaType(mediaType="application/json")
     *     ),
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
     *          name = "id",
     *          in = "path",
     *          description = "user id",
     *          required=false,
     *          @OA\Schema(
     *             type="integer"
     *         )
     *     )
     * )
     *
     * @param \Illuminate\Http\Request $request
     * @param int                      $id
     *
     * @return UserResource
     */
    public function update(UserRequest $request, $id): UserResource
    {
        $userRepository = $this->userRepo;

        $this->recordExists($user = User::find($id));
        $user->fill($request->all());

        $user->update();

        $user->roles()->sync($request->get('roles'));

        return new UserResource($user);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     *
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    /**
     * @return UserResource
     *
     * Display auth user.
     *
     * @OA\Get(
     *     path="/auth/profile",
     *     tags = {"Auth"},
     *     security={
     *       {"Authorization": {}},
     *     },
     *     @OA\Response(
     *          response=200,
     *          description="success",
     *          @OA\MediaType(mediaType="application/json")
     *     ),
     *     @OA\Response(
     *          response=401,
     *          description="Unauthorized",
     *          @OA\MediaType(mediaType="application/json")
     *     ),
     * )
     */
    public function authUser(): UserResource
    {
        return UserResource::make(Auth::user());
    }
}
