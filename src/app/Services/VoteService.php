<?php
/*
 * Copyright (c) YukiDub. Author: M9snikFeed <m9snikfeed@gmail.com>.
 *
 * 13.8.2021
 */

namespace App\Services;

use App\Jobs\UpdateScoreJob;
use App\Models\Score;
use App\Models\ScoreVote;

class VoteService
{
    protected $scoreVote;
    protected $score;

    public function __construct()
    {
        $this->scoreVote = new ScoreVote();
        $this->score = new Score();
    }

    /**
     * @param int $userId
     * @param int $rating
     * @param $scoreId
     * @return string status: updated, created
     */
    public function createVote(int $userId, int $rating, $scoreId): string
    {
        if ($vote = $this->scoreVote->where('user', '=', $userId)->first()){
            $oldRating = (int)$vote->rating;
            $vote->rating = $rating;
            $vote->update();
            $this->updateScore($scoreId, $rating, $oldRating);
            return 'updated';
        }

        $vote = $this->scoreVote::create(
            [
                'user'=>$userId,
                'rating'=>$rating,
                'score_id'=>$scoreId,
            ]
        );
        $this->updateScore($scoreId, $rating);
        return 'created';
    }



    public function updateScore($scoreId, $rating = 0, $oldRating = 0){
        $score = $this->score->find($scoreId)
            ->leftJoin('score_votes', 'score_votes.score_id', '=', 'scores.score_id')
            ->selectRaw('scores.*, count(score_votes.score_vote_id) as count_votes')
            ->groupBy('scores.score_id')->first();

        $score = $this->score->find($scoreId)
            ->leftJoin('score_votes', 'score_votes.score_id', '=', 'scores.score_id')
            ->selectRaw('scores.*, count(score_votes.score_vote_id) as count_votes')
            ->groupBy('scores.score_id')->first();

        $calc = $score->getAttribute('rating') + $rating - $oldRating / $score->getAttribute('count_votes');
        $score = $this->score->find($scoreId);
        $score->rating = $calc;
        $score->update();
    }
}