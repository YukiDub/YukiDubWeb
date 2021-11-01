<?php

/*
 * Copyright (c) YukiDub. Author: M9snikFeed <m9snikfeed@gmail.com>.
 */

/**
 * @OA\Schema(
 *     description="Genre",
 *     type="object",
 *     title="genre model",
 * )
 */
class Genres
{
    /**
     * @OA\Property(
     *     title="name",
     *     description="The name",
     *     format="string",
     *     example="Comedy"
     * )
     *
     * @var string
     */
    public $name;


}