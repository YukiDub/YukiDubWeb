<?php

/*
 * Copyright (c) YukiDub. Author: M9snikFeed <m9snikfeed@gmail.com>.
 */

namespace App\Http\Controllers\api\v1;

use App\Http\Resources\RoleCollection;
use App\Http\Resources\RoleResource;
use App\Models\Role;
use App\Repositories\PeopleRolesRepository;
use Illuminate\Http\Request;

class RoleController extends ApiController
{
    public $repository;

    public function __construct()
    {
        $this->repository = new PeopleRolesRepository();
    }

    /**
     * Display a listing of the resource.
     *
     * @return RoleCollection
     *
     * @OA\Get(
     *     path="/roles",
     *     tags = {"Peoples"},
     *     @OA\Response(response="200", description="Display a listing of the resource"),
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
    public function index(): RoleCollection
    {
        return new RoleCollection($this->repository->getList());
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
     * @param  int  $id
     * @return RoleResource
     */
    public function show($id): RoleResource
    {
        return new RoleResource($this->repository->get($id));
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
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
