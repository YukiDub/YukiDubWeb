<?php
/*
 * Copyright (c) YukiDub. Author: M9snikFeed <m9snikfeed@gmail.com>.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\AnimeProducer
 *
 * @property int $producerId
 * @property string $name
 * @method static \Illuminate\Database\Eloquent\Builder|AnimeProducer newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|AnimeProducer newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|AnimeProducer query()
 * @method static \Illuminate\Database\Eloquent\Builder|AnimeProducer whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AnimeProducer whereProducerId($value)
 * @mixin \Eloquent
 */
class AnimeProducer extends Model
{
    use HasFactory;
    protected $primaryKey = "producerId";
    public $timestamps = false;

    protected $fillable = [
        "name"
    ];
}
