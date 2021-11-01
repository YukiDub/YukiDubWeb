<?php
/*
 * Copyright (c) YukiDub. Author: M9snikFeed <m9snikfeed@gmail.com>.
 *
 * 18.8.2021
 */

namespace App\Filters;

use App\Models\Anime;
use App\Support\Filter;
use Illuminate\Database\Eloquent\Model;

class BaseFilter implements FilterInterface
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
    public $relations;

    /**
     * Relations list
     * @var string[]
     */
    public $order;

    /**
     * @var Model
     */
    public $model;


    /**
     * @param array $fields
     * @return FilterInterface
     */
    public function fields(array $fields): FilterInterface
    {
        $this->fields = $fields;
        array_push($fields, $this->model->getKeyName());
        return $this;
    }

    /**
     * @param array $filters
     * @return FilterInterface
     */
    public function filters(array $filters): FilterInterface
    {
        $this->filters = $filters;
        return $this;
    }

    /**
     * @param array $order
     * @return FilterInterface
     */
    public function orders(array $order): FilterInterface
    {
        $this->order = $order;
        return $this;
    }

    /**
     * Builder
     * @return Filter
     */
    public function build(): Filter
    {
        return new Filter($this);
    }
}