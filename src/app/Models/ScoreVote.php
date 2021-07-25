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
}
