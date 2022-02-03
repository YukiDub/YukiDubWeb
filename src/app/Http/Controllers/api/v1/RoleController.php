<?php

/*
 * Copyright (c) YukiDub. Author: M9snikFeed <m9snikfeed@gmail.com>.
 */

namespace App\Http\Controllers\api\v1;

use App\Http\Requests\PeopleRoleRequest;
use App\Http\Resources\RoleCollection;
use App\Http\Resources\RoleResource;
use App\Models\Role;
use Illuminate\Http\Request;

class RoleController extends ApiController
{

    /**
     * Display a listing of the resource.
     *
     * @param PeopleRoleRequest $request
     * @return RoleCollection
     *
     * @OA\Get(
     *     path="/roles",
     *     tags = {"People"},
     *     @OA\Response(response="200", description="Display a listing of the resource"),
     *     @OA\Parameter(
     *         name="perPage",
     *         in="path",
     *         description="Number of people roles per page. 1 > perPage <= 40",
     *         required=false,
     *         @OA\Schema(
     *             type="integer",
     *         )
     *     ),
     *     @OA\Response(
     *          response="404",
     *          description="not found",
     *          @OA\JsonContent(
     *              type="array",
     *              @OA\Items(ref="#/components/schemas/NotFoundRequest")
     *          )
     *      )
     *
     * )
     */
    public function index(PeopleRoleRequest $request): RoleCollection
    {
        $perPage = $request->get('perPage') ?? 12;
        return new RoleCollection(Role::paginate($perPage));
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param Role $role
     * @return RoleResource
     *
     * @OA\Get(
     *     path="/roles/{id}",
     *     tags = {"People"},
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="The role id",
     *         required=true,
     *         @OA\Schema(
     *             type="integer",
     *         )
     *     ),
     *     @OA\Response(response="200", description="Display a listing of the resource"),
     *     @OA\Response(
     *          response="404",
     *          description="not found",
     *          @OA\JsonContent(
     *              type="array",
     *              @OA\Items(ref="#/components/schemas/NotFoundRequest")
     *          )
     *      )
     * )
     */
    public function show(Role $role): RoleResource
    {
        return new RoleResource($role);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int                      $id
     *
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
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
}
