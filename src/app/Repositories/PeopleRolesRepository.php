<?php

/*
 * Copyright (c) YukiDub. Author: M9snikFeed <m9snikfeed@gmail.com>.
 *
 * 18.7.2021
 */

namespace App\Repositories;

use App\Models\Role;
use Illuminate\Contracts\Foundation\Application;
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
     */
    public function get($value)
    {
        return $this->startConditions()->find($value);
    }
}