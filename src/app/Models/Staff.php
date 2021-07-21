<?php

/*
 * Copyright (c) YukiDub. Author: M9snikFeed <m9snikfeed@gmail.com>.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Staff extends Model
{
    use HasFactory;

    public $timestamps = false;
    public $primaryKey = "staff_id";

    protected $fillable = [
        "nameJp",
        "nameEn",
        "nameRu",
        "birthday",
        "webSite",
        "staff_role",
        "avatarExtention"
    ];


    /**
     * @return BelongsToMany
     */
    public function roles(): BelongsToMany
    {
        return $this->belongsToMany(Role::class, "staff_role_staff", "staff_id", "role_id");
    }
}
