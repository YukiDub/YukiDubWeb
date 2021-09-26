<?php

/*
 * Copyright (c) YukiDub. Author: M9snikFeed <m9snikfeed@gmail.com>.
 */

/**
 * @OA\Schema(
 *     description="PeopleModel",
 *     type="object",
 *     title="PeopleModel's model",
 * )
 */
class PeopleModel
{
    /**
     * @OA\Property(
     *     title="staff_id",
     *     description="The staff id",
     *     format="integer",
     *     example=4
     * )
     *
     * @var int
     */
    public $staff_id;

    /**
     * @OA\Property(
     *     title="nameJp",
     *     description="The nameJp",
     *     format="string",
     *     example="緑川 光"
     * )
     *
     * @var string
     */
    public $nameJp;

    /**
     * @OA\Property(
     *     title="nameEn",
     *     description="The nameEn",
     *     format="string",
     *     example="Hikaru Midorikawa"
     * )
     *
     * @var string
     */
    public $nameEn;

    /**
     * @OA\Property(
     *     title="nameRu",
     *     description="nameRu",
     *     format="string",
     *     example="Хикару Мидорикава"
     * )
     *
     * @var string
     */
    public $nameRu;

    /**
     * @OA\Property(
     *     title="birthday",
     *     description="birthday",
     *     format="date",
     *     example="1997-01-11"
     * )
     *
     * @var string
     */
    public $birthday;

    /**
     * @OA\Property(
     *     title="webSite",
     *     description="webSite",
     *     format="url",
     *     example="http://hikaru23.hatenablog.com/"
     * )
     *
     * @var string
     */
    public $webSite;
}
