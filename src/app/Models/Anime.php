<?php
/*
 * Copyright (c) YukiDub. Author: M9snikFeed <m9snikfeed@gmail.com>.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\Anime
 *
 * @property int $animeId
 * @property string $posterUrl
 * @property string $type
 * @property int $episode
 * @property int $episodesReleased
 * @property string $nextEpisode
 * @property string $episodeDuration
 * @property string $status
 * @property string $startDate
 * @property string $releaseDate
 * @property int $genres
 * @property string $ageRating
 * @property string $nameJp
 * @property string $nameEn
 * @property string|null $nameRu
 * @property string $descriptionJp
 * @property string $descriptionEn
 * @property string $descriptionRu
 * @property int $staff
 * @property int $characters
 * @property int $score
 * @property int $producer
 * @property int $playerVideos
 * @method static \Illuminate\Database\Eloquent\Builder|Anime newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Anime newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Anime query()
 * @method static \Illuminate\Database\Eloquent\Builder|Anime whereAgeRating($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Anime whereAnimeId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Anime whereCharacters($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Anime whereDescriptionEn($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Anime whereDescriptionJp($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Anime whereDescriptionRu($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Anime whereEpisode($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Anime whereEpisodeDuration($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Anime whereEpisodesReleased($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Anime whereGenres($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Anime whereNameEn($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Anime whereNameJp($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Anime whereNameRu($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Anime whereNextEpisode($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Anime wherePlayerVideos($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Anime wherePosterUrl($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Anime whereProducer($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Anime whereReleaseDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Anime whereScore($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Anime whereStaff($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Anime whereStartDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Anime whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Anime whereType($value)
 * @mixin \Eloquent
 */
class Anime extends Model
{
    use HasFactory;

    protected $primaryKey = "anime_id";
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
        "ageRating",
        "nameJp",
        "nameEn",
        "nameRu",
        "descriptionJp",
        "descriptionEn",
        "descriptionRu",
        "score",
        "producer",
        "playerVideos",
    ];


    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function genres(): \Illuminate\Database\Eloquent\Relations\BelongsToMany
    {
        return $this->belongsToMany(Genre::class, 'animes_genres', 'anime_id', 'genre_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function staff(): \Illuminate\Database\Eloquent\Relations\BelongsToMany
    {
        return $this->belongsToMany(Staff::class, 'animes_staff', 'anime_id', 'staff_id');
    }


    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function characters(): \Illuminate\Database\Eloquent\Relations\BelongsToMany
    {
        return $this->belongsToMany(Character::class, 'animes_characters', 'anime_id', 'character_id');
    }


    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function producer(): \Illuminate\Database\Eloquent\Relations\HasOne
    {
        return $this->hasOne(AnimeProducer::class, 'producerId', 'producer');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function score(): \Illuminate\Database\Eloquent\Relations\HasOne
    {
        return $this->hasOne(Score::class, 'score_id', 'score');
    }

}