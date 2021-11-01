<?php
/*
 * Copyright (c) YukiDub. Author: M9snikFeed <m9snikfeed@gmail.com>.
 *
 * 16.8.2021
 */

namespace App\Filters;

use App\Models\Anime;
use App\Support\Filter;
use Illuminate\Database\Eloquent\Model;

class AnimeFilter extends BaseFilter
{
    /**
     * Fields list
     * @var array
     */
    public $fields;

    /**
     * Filters list
     * @var array
     */
    public $filters;

    /**
     * Relations list
     * @var string[]
     */
    public $relations = ['studios'=>'name', 'genres'=>'nameEn'];

    /**
     * @var Model
     */
    public $model;

    public function __construct()
    {
        $this->model = new Anime();
    }
}