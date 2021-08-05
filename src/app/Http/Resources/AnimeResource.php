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
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id'=>$this->anime_id,
            "posterUrl" => $this->posterUrl,
            "type"=> $this->type,
            "episode"=> $this->episode,
            "episodesReleased"=> $this->episodesReleased,
            "nextEpisode"=> $this->nextEpisode,
            "episodeDuration"=> $this->episodeDuration,
            "status"=> $this->status,
            "startDate"=> $this->startDate,
            "releaseDate"=> $this->releaseDate,
            "ageRating"=> $this->ageRating,
            "nameJp"=> $this->nameJp,
            "nameEn"=> $this->nameEn,
            "nameRu"=> $this->nameRu,
            "descriptionJp"=> $this->descriptionJp,
            "descriptionEn"=> $this->descriptionEn,
            "descriptionRu"=> $this->descriptionRu,
            "genres"=> GenresResource::collection($this->whenLoaded('genres')),
            "staff"=> new PeopleCollection($this->whenLoaded('staff')),
            "characters"=> new CharactersCollection($this->whenLoaded('characters')),
            "score"=> $this->score()->get(),
            "producer"=>$this->producer()->get()
        ];
    }
}
