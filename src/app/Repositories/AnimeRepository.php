<?php
/*
 * Copyright (c) YukiDub. Author: M9snikFeed <m9snikfeed@gmail.com>.
 *
 * 5.8.2021
 */

namespace App\Repositories;

use App\Models\Anime;

class AnimeRepository extends BaseRepository
{

    protected function getModelClass(): string
    {
        return Anime::class;
    }

    /**
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function getList(array $fields = [], array $filterGenres = [], array $filterStudios = [], array $filterSeasons = []){
        $relations = array_diff($fields, $this->startConditions()->getFillable());
        $primaryKey = $this->startConditions()->getKeyName();
        $fields = array_diff($fields, $relations);
        array_push($fields, 'anime_id');

        $query = $this->startConditions()::with($relations);
        if (!empty($filterGenres)){
            array_push($relations, 'genres');
            foreach ($filterGenres as $genre){
                $query->whereHas('genres', function ($query) use ($genre) {
                $query->where('nameEn', '=', $genre);
                });
            }
        }

        if (!empty($filterStudios)){
            array_push($relations, 'studios');
            foreach ($filterStudios as $studio){
                $query->whereHas('studios', function ($query) use ($studio) {
                    $query->where('name', '=', $studio);
                });
            }
        }

        return $query->select($fields)->join('scores', 'scores.score_id', '=', 'animes.score');
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

    /**
     * @param int|array $id
     * @return mixed
     */
    public function getByIdAllRelations($id)
    {
        return $this->startConditions()->with(['genres', 'staff', 'characters', 'studios'])->find($id);
    }

    
    public function allRelations(): \Illuminate\Database\Eloquent\Builder
    {
        return $this->startConditions()->with(['genres', 'staff', 'characters', 'studios']);
    }

    public function getByPeopleId(int $id){
        return $this->startConditions()
            ->with(['genres', 'characters', 'studios', 'scoreInfo'])
            ->join('animes_staff', 'animes_staff.anime_id', '=', 'animes.anime_id')
            ->where('animes_staff.staff_id', '=', $id);
    }
}