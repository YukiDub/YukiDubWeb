<?php

/*
 * Copyright (c) YukiDub. Author: M9snikFeed <m9snikfeed@gmail.com>.
 *
 * 18.7.2021
 */

namespace App\Repositories;

use App\Models\Genre;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

class GenresRepository extends BaseRepository
{

    protected $role;

    protected function getModelClass(): string
    {
        return Genre::class;
    }

    /**
     * @return array|Application[]|Collection|Model[]
     */
    public function getList(){;
        return $this->startConditions()->all();
    }

    /**
     * @param int|array $id
     * @return mixed
     */
    public function getById($id)
    {
        return $this->startConditions()->find($id);
    }
}