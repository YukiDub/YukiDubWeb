<?php
/*
 * Copyright (c) YukiDub. Author: M9snikFeed <m9snikfeed@gmail.com>.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Anime extends Model
{
    use HasFactory;

    protected $primaryKey = "animeId";
    public $timestamps = false;

    public $attributes =[
        "posterUrl",
        "type",
        "episode",
        "episodesReleased",
        "nextEpisode",
        "episodeDuration",
        "status",
        "startDate",
        "releaseDate",
        "genres",
        "ageRating",
        "nameJp",
        "nameEn",
        "nameRu",
        "descriptionJp",
        "descriptionEn",
        "descriptionRu",
        "staff",
        "characters",
        "score",
        "producer",
        "playerVideos",
    ];
}