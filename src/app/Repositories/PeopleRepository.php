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

    public function getChangesById($id){
        $data =  $this->startConditions()
            ->with(['changes'=>function($query){
                $query
                    ->join('users', 'users.id', '=', 'changes_histories.user_id')
                    ->addSelect(['changes_histories.*', 'users.name as user_name']);
            }])
            ->find($id);

        if($data){
            return $data->changes;
        } else return null;
    }
}