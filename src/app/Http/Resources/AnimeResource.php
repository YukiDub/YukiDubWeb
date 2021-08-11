<?php

/*
 * Copyright (c) YukiDub. Author: M9snikFeed <m9snikfeed@gmail.com>.
 */

namespace App\Http\Resources;

use App\Models\AnimeStudio;
use Illuminate\Http\Resources\Json\JsonResource;

class AnimeResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id'=>$this->anime_id,
            'mal_id'=>$this->mal_id,
            'shiki_score'=>$this->shiki_score,
            "poster_url" => $this->poster_url,
            "type"=> $this->type,
            "episodes"=> $this->episodes,
            "episodes_released"=> $this->episodes_released,
            "next_episode"=> $this->next_episode,
            "episode_duration"=> $this->episode_duration,
            "status"=> $this->status,
            "aired_on"=> $this->aired_on,
            "released_on"=> $this->released_on,
            'age_rating'=> $this->age_rating,
            'name_jp'=> $this->name_jp,
            'name_en'=> $this->name_en,
            'name_ru'=> $this->name_ru,
            'description'=>[
                'en'=>[
                    'text'=> $this->description_en,
                    'source'=> $this->description_en_source,
                    'author_id'=> !$this->description_en_source ? $this->description_en_author : null
                ],
                'ru'=>[
                    'text'=> $this->description_ru,
                    'source'=> $this->description_ru_source,
                    'author_id'=> !$this->description_ru_source ? $this->description_ru_author : null
                ],
                'jp'=>[
                    'text'=> $this->description_jp,
                    'source'=> $this->description_jp_source,
                    'author_id'=> !$this->description_jp_source ? $this->description_jp_author : null
                ]
            ],
            'genres'=> GenresResource::collection($this->whenLoaded('genres')),
            'staff'=> new PeopleCollection($this->whenLoaded('staff')),
            'characters'=> new CharactersCollection($this->whenLoaded('characters')),
            'score'=> $this->score()->get(),
            'studios'=>AnimeStudiosResource::collection($this->whenLoaded('studios')),
            'rates_scores_stats'=> [
                1=>10,
                2=>5,
                3=>19,
                4=>3,
                5=>1,
                6=>8,
                7=>10,
                8=>30,
                9=>1352,
                10=>4903,
            ],
            'anime_favoured' => false
        ];
    }
}
