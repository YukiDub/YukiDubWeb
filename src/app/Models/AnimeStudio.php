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
 * @property int $studio_id
 * @property string $name
 * @method static \Illuminate\Database\Eloquent\Builder|AnimeStudio newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|AnimeStudio newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|AnimeStudio query()
 * @method static \Illuminate\Database\Eloquent\Builder|AnimeStudio whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AnimeStudio whereProducerId($value)
 * @mixin \Eloquent
 */
class AnimeStudio extends Model
{
    use HasFactory;
    protected $primaryKey = "studio_id";
    public $timestamps = false;

    protected $fillable = [
        'name'
    ];


    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function animes(): \Illuminate\Database\Eloquent\Relations\BelongsToMany
    {
        return $this->belongsToMany(Anime::class, 'anime_anime_studios', 'anime_id');
    }
}
