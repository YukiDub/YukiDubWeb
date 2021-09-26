<?php
/*
 * Copyright (c) YukiDub. Author: M9snikFeed <m9snikfeed@gmail.com>.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\Score.
 *
 * @property int $scoreId
 * @property int $count
 * @property int $total
 *
 * @method static \Illuminate\Database\Eloquent\Builder|Score newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Score newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Score query()
 * @method static \Illuminate\Database\Eloquent\Builder|Score whereCount($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Score whereScoreId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Score whereTotal($value)
 * @mixin \Eloquent
 */
class Score extends Model
{
    use HasFactory;
    protected $primaryKey = 'score_id';

    protected $fillable = [
        'rating',
    ];

    protected $hidden = [
        'score_id',
    ];

    public $timestamps = false;

    public function votes()
    {
        return $this->hasMany(ScoreVote::class, 'score_id', 'score_id');
    }
}
