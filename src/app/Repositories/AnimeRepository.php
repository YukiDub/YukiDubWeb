<?php
/*
 * Copyright (c) YukiDub. Author: M9snikFeed <m9snikfeed@gmail.com>.
 *
 * 5.8.2021
 */

namespace App\Repositories;

use App\Models\Anime;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

class AnimeRepository extends BaseRepository
{
    protected function getModelClass(): string
    {
        return Anime::class;
    }

    /**
     * @return array|Application[]|Collection|Model[]
     */
    public function getList(){;
        return $this->startConditions()->all();
    }

    public function whereGenre($genre){
        return $this->startConditions()::with('genres')->whereHas('genres', function ($q) use ($genre) {
            $q->where("genre", "=", $genre);
        });
    }

    /**
     * @param int|array $id
     * @return mixed
     */
    public function getById($id)
    {
        return $this->startConditions()->find($id);
    }

    public function allRelationsPaginate(): \Illuminate\Database\Eloquent\Builder
    {
        return $this->startConditions()->with(['genres', 'staff', 'characters', 'producer', 'score']);
    }

    public function getByPeopleId(int $id){
        return $this->startConditions()
            ->with(['genres', 'characters', 'producer', 'score'])
            ->join('animes_staff', 'animes_staff.anime_id', '=', 'animes.anime_id')
            ->where('animes_staff.staff_id', '=', $id);
    }
}