<?php
/*
 * Copyright (c) YukiDub. Author: M9snikFeed <m9snikfeed@gmail.com>.
 *
 * 28.7.2021
 */

namespace App\Repositories;

use App\Models\User;

class UserRepository extends BaseRepository
{


    protected $role;

    /**
     * @return string
     */
    public function getModelClass(): string
    {
        return User::class;
    }


    public function setRole($name){
        $this->role = $name;
    }

    /**
     * @param $id
     * @return mixed
     */
    public function getById($id){
        return $this->startConditions()->find($id);
    }

    /**
     * @return \Illuminate\Contracts\Pagination\LengthAwarePaginator
     */
    public function getListPaginate($perPage = 6){

        if($this->role){
            return $this->startConditions()->with('roles')->whereHas('roles', function ($roles){
                $roles->where('name', '=', $this->role);
            })->paginate($perPage);
        }

        return $this->startConditions()->paginate($perPage);
    }

    public function getList(){
        return $this->startConditions()->all();
    }
}