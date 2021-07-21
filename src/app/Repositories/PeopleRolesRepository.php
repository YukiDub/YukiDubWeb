<?php

/*
 * Copyright (c) YukiDub. Author: M9snikFeed <m9snikfeed@gmail.com>.
 *
 * 18.7.2021
 */

namespace App\Repositories;

use App\Http\Resources\PeopleCollection;
use App\Models\Role;
use App\Models\Staff;
use Exception;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

class PeopleRolesRepository extends BaseRepository
{

    protected $role;

    protected function getModelClass(): string
    {
        return Role::class;
    }

    /**
     * @return array|Application[]|Collection|Model[]
     */
    public function getList(){;
        return $this->startConditions()->all();
    }

    /**
     * @param int|string|array $value
     * @return mixed
     */
    public function get($value){
        return $this->startConditions()->find($value);
    }
}