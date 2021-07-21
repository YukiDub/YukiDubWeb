<?php

/*
 * Copyright (c) YukiDub. Author: M9snikFeed <m9snikfeed@gmail.com>.
 */

/**
 * @OA\Schema(
 *     type="object",
 *     title="People model",
 *     description="People model object",
 * )
 */
class PeopleRequest
{
    /**
     * @OA\Property(
     *     title="User model",
     *     description="Some text field",
     *     @OA\Schema(ref="#/components/schemas/PeopleModel")
     * )
     *
     * @var PeopleModel
     */
    public $user;

    /**
     * @OA\Property(
     *     title="Staff model",
     *     description="Staff model",
     *     @OA\Schema(ref="#/components/schemas/StaffRoles")
     * )
     *
     * @var StaffRoles
     */
    public $roles;
}
