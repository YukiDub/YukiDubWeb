<?php
/*
 * Copyright (c) YukiDub. Author: M9snikFeed <m9snikfeed@gmail.com>.
 *
 * 16.8.2021
 */

namespace App\Filters;

use App\Support\Filter;
use Illuminate\Database\Eloquent\Model;

interface FilterInterface
{
    /**
     * @var array
     */

    /**
     * @var array
     */

    /**
     * @var array
     */

    /**
     * @var array
     */

    /**
     * @var Model
     */

    /**
     * @param array $fields
     *
     * @return FilterInterface
     */
    public function fields(array $fields): FilterInterface;

    /**
     * @param array $filters
     *
     * @return FilterInterface
     */
    public function filters(array $filters): FilterInterface;

    /**
     * @param array $order
     *
     * @return FilterInterface
     */
    public function orders(array $order): FilterInterface;

    /**
     * @return Filter
     */
    public function build(): Filter;
}
