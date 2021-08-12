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
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function getList(array $fields = [], array $filterGenres = [], array $filterStudios = []){
        $relations = array_diff($fields, $this->startConditions()->getFillable());
        $fields = array_diff($fields, $relations);
        array_push($fields, 'anime_id', 'score');

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

        return $query->select($fields);
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

    
    public function allRelations(): \Illuminate\Database\Eloquent\Builder
    {
        return $this->startConditions()->with(['genres', 'staff', 'characters', 'studios', 'score']);
    }

    public function getByPeopleId(int $id){
        return $this->startConditions()
            ->with(['genres', 'characters', 'studios', 'score'])
            ->join('animes_staff', 'animes_staff.anime_id', '=', 'animes.anime_id')
            ->where('animes_staff.staff_id', '=', $id);
    }
}