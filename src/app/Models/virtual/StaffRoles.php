<?php

/*
 * Copyright (c) YukiDub. Author: M9snikFeed <m9snikfeed@gmail.com>.
 */

/**
 * @OA\Schema(
 *     description="StaffModel",
 *     type="object",
 *     title="StaffModel's model",
 * )
 */
class StaffRoles
{
    /**
     * @OA\Property(
     *     title="role_id",
     *     description="The role_id",
     *     format="string",
     *     example=1
     * )
     *
     * @var int
     */
    public $role_id;

    /**
     * @OA\Property(
     *     title="name",
     *     description="The name",
     *     format="string",
     *     example="mangaka"
     * )
     *
     * @var string
     */
    public $name;
}
