<?php
/*
 * Copyright (c) YukiDub. Author: M9snikFeed <m9snikfeed@gmail.com>.
 */

namespace App\Repositories;

use Illuminate\Contracts\Foundation\Application;
use Illuminate\Database\Eloquent\Model;

abstract class BaseRepository
{

    /**
     * @var Model
     */
    protected $model;

    /**
     * BaseRepository constructor
     */
    public function __construct(){
        $this->model = app($this->getModelClass());
    }

    protected function getModelClass(){}


    /**
     * @return Application|Model|mixed
     */
    protected function startConditions(){
        return clone $this->model;
    }
}