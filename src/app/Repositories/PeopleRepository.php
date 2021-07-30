<?php
/*
 * Copyright (c) YukiDub. Author: M9snikFeed <m9snikfeed@gmail.com>.
 */

namespace App\Repositories;

use App\Models\Staff;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;

class PeopleRepository extends BaseRepository
{

    protected $role;

    protected function getModelClass(): string
    {
        return Staff::class;
    }

    /**
     * @param string $role
     */
    public function setRole(string $role){
        $this->role = $role;
    }

    /**
     * @param $perPage int count people items
     * @return LengthAwarePaginator people paginate;
     */
    public function getList(int $perPage): LengthAwarePaginator
    {
        if($this->role){
            return $this->startConditions()::with('roles')->whereHas('roles', function ($q){
                $q->where("name", "=", $this->role);
            })->paginate($perPage);
        }

        return $this->startConditions()::paginate($perPage);
    }

    /**
     * get peoples
     * @param int $id
     * @return mixed
     */
    public function getById(int $id)
    {
        return $this->startConditions()::find($id);
    }

    /**
     * @param $id
     * @return mixed
     */
    public function getRoles($id){
        return $this->startConditions()->find($id)->roles;
    }
}