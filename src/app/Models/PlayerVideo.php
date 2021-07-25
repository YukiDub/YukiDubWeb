<?php
/*
 * Copyright (c) YukiDub. Author: M9snikFeed <m9snikfeed@gmail.com>.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\PlayerVideo
 *
 * @property int $videoId
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|PlayerVideo newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|PlayerVideo newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|PlayerVideo query()
 * @method static \Illuminate\Database\Eloquent\Builder|PlayerVideo whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PlayerVideo whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PlayerVideo whereVideoId($value)
 * @mixin \Eloquent
 */
class PlayerVideo extends Model
{
    use HasFactory;
    protected $primaryKey = "videoId";
}
