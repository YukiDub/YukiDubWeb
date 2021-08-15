<?php
/*
 * Copyright (c) YukiDub. Author: M9snikFeed <m9snikfeed@gmail.com>.
 *
 * 5.8.2021
 */

namespace App\Repositories;

use App\Models\Score;


class ScoresRepository extends BaseRepository
{

    protected function getModelClass(): string
    {
        return new Score();
    }


    /**
     * @param int|array $id
     * @return mixed
     */
    public function getByAnimeId($id)
    {

    }

}