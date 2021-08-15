<?php
/*
 * Copyright (c) YukiDub. Author: M9snikFeed <m9snikfeed@gmail.com>.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

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

    protected $dates =[
      'aired_on',
      'released_on'
    ];

    public $fillable =[
        'anime_id',
        'mal_id',
        'shiki_score',
        "poster_url",
        "type",
        "episodes",
        "episodes_released",
        "next_episode_at",
        "episode_duration",
        "status",
        "aired_on",
        "released_on",
        "age_rating",
        "name_jp",
        "name_en",
        "name_ru",
        "description_jp",
        "description_en",
        "description_ru",
        'description_jp_author',
        'description_en_author',
        'description_ru_author',
        'description_ru_source',
        'description_en_source',
        'description_jp_source'
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
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function studios(): \Illuminate\Database\Eloquent\Relations\BelongsToMany
    {
        return $this->belongsToMany(AnimeStudio::class, 'anime_anime_studios', 'anime_id', 'studio_id');
    }

    /**
     * @return HasOne
     */
    public function scoreInfo(): HasOne
    {
        return $this->hasOne(Score::class, 'score_id', 'score')
            ->leftJoin('score_votes', 'score_votes.score_id', '=', 'scores.score_id')
            ->selectRaw('scores.*, count(score_votes.score_vote_id) as count_votes')
            ->groupBy('scores.score_id');
    }

}