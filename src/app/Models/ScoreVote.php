<?php

/*
 * Copyright (c) YukiDub. Author: M9snikFeed <m9snikfeed@gmail.com>.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\ScoreVote
 *
 * @property int $scoreVoteId
 * @property int $user
 * @property int $score
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|ScoreVote newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ScoreVote newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ScoreVote query()
 * @method static \Illuminate\Database\Eloquent\Builder|ScoreVote whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ScoreVote whereScore($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ScoreVote whereScoreVoteId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ScoreVote whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ScoreVote whereUser($value)
 * @mixin \Eloquent
 */
class ScoreVote extends Model
{
    use HasFactory;

    protected $primaryKey = 'score_vote_id';
    public $timestamps = true;

    protected $fillable = [
      'score_vote_id',
      'user',
      'rating',
      'score_id',
    ];

    /**
     * @param $scoreId
     * @return array|int[][]
     */
    static function scoreVotes($scoreId): array
    {
        $scores = ScoreVote::where('score_id', '=', $scoreId)->get();
        $data = [
            1 =>[
                "rating"=>1,
                "count_votes"=>0,
            ],
            2=> [
                "rating"=>2,
                "count_votes"=>0,
            ],
            3=> [
                "rating"=>3,
                "count_votes"=>0,
            ],
            4=> [
                "rating"=>4,
                "count_votes"=>0,
            ],
            5=> [
                "rating"=>5,
                "count_votes"=>0,
            ],
            6=> [
                "rating"=>6,
                "count_votes"=>0,
            ],
            7=> [
                "rating"=>7,
                "count_votes"=>0,
            ],
            8=> [
                "rating"=>8,
                "count_votes"=>0,
            ],
            9=> [
                "rating"=>9,
                "count_votes"=>0,
            ],
            10=> [
                "rating"=>10,
                "count_votes"=>0,
            ],
        ];

        foreach ($scores as $score){
            $rating = $score->rating;
            $data[$rating]['count_votes'] += 1;
        }

        return $data;
    }

}
