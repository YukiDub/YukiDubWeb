<?php

/*
 * Copyright (c) YukiDub. Author: M9snikFeed <m9snikfeed@gmail.com>.
 */

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class AnimeResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param \Illuminate\Http\Request $request
     *
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id'          => $this->anime_id,
            'name_jp'     => $this->when($this->name_jp, $this->name_jp),
            'name_en'     => $this->when($this->name_en, $this->name_en),
            'name_ru'     => $this->name_ru,
            'mal_id'      => $this->when($this->mal_id, $this->mal_id),
            'shiki_score' => $this->when($this->shiki_score, $this->shiki_score),
            'poster'      => [
                'original'=> '/storage/' . $this->poster_original,
                'preview' => '/storage/' . $this->poster_preview,
                'x96'     => '/storage/' . $this->poster_x96,
                'x48'     => '/storage/' . $this->poster_x48,
            ],
            'type'        => [
                [
                    'name'=>'anime',
                ],
                [
                    'name'=>$this->type,
                ]
            ],
            'episodes'                => $this->when($this->episodes, $this->episodes),
            'episodes_released'       => $this->when($this->episodes_released, $this->episodes_released),
            'next_episode_at'         => $this->when($this->next_episode_at, $this->next_episode_at),
            'episode_duration'        => $this->when($this->episode_duration, $this->episode_duration),
            'season'                  => $this->when($this->season, $this->season),
            'status'                  => $this->when($this->status, $this->status),
            'aired_on'                => $this->when($this->aired_on, $this->aired_on),
            'released_on'             => $this->released_on,
            'age_rating'              => $this->when($this->age_rating, $this->age_rating),
            'description_en'          => $this->when($this->description_en, $this->description_en),
            'description_en_source'   => $this->when($this->description_en_source, $this->description_en_source),
            'description_en_author_id'=> $this->when($this->description_en_author_id, $this->description_en_author_id),
            'description_ru'          => $this->when($this->description_ru, $this->description_ru),
            'description_ru_source'   => $this->when($this->description_ru_source, $this->description_ru_source),
            'description_ru_author_id'=> $this->when($this->description_ru_author, $this->description_ru_author),
            'description_jp'          => $this->when($this->description_jp, $this->description_jp),
            'description_jp_source'   => $this->when($this->description_jp_source, $this->description_jp_source),
            'description_jp_author_id'=> $this->when($this->description_jp_author, $this->description_jp_author),
            'genres'                  => GenresResource::collection($this->whenLoaded('genres')),
            'staff'                   => new PeopleCollection($this->whenLoaded('staff')),
            'characters'              => new CharactersCollection($this->whenLoaded('characters')),
            'studios'                 => AnimeStudiosResource::collection($this->whenLoaded('studios')),
            'score_info'              => new ScoreInfoResource($this->whenLoaded('scoreInfo')),
            'anime_favoured'          => false,
        ];
    }
}
