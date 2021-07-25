<?php
/*
 * Copyright (c) YukiDub. Author: M9snikFeed <m9snikfeed@gmail.com>.
 *
 * 25.7.2021
 */

namespace App\Policies;

abstract class PolicyBase
{
    /**
     * @param $user
     * @param string $permissionName
     * @return bool
     */
    function checkPermission($user, string $permissionName): bool
    {
        if($user->roles()->with('permissions')->whereHas('permissions', function ($permissions) use ($permissionName) {
            $permissions->whereName($permissionName);
        })->first()) return true; else return false;
    }
}