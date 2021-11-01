<?php
/*
 * Copyright (c) YukiDub. Author: M9snikFeed <m9snikfeed@gmail.com>.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\AnimeStaff
 *
 * @property int $animeStaffId
 * @property int $staff
 * @property int $role
 * @method static \Illuminate\Database\Eloquent\Builder|AnimeStaff newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|AnimeStaff newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|AnimeStaff query()
 * @method static \Illuminate\Database\Eloquent\Builder|AnimeStaff whereAnimeStaffId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AnimeStaff whereRole($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AnimeStaff whereStaff($value)
 * @mixin \Eloquent
 */
class AnimeStaff extends Model
{
    use HasFactory;
    protected $primaryKey = "animeStaffId";
    public $timestamps = false;
}
