<?php

/*
 * Copyright (c) YukiDub. Author: M9snikFeed <m9snikfeed@gmail.com>.
 */

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PeopleResource extends JsonResource
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
          "staff_id"=>$this->staff_id,
          'mal_id'=>$this->staff_id,
          "name_jp"=>$this->name_jp,
          "name_en"=>$this->name_en,
          "name_ru"=>$this->name_ru,
          "birthday"=>$this->birthday,
          "website"=>$this->website,
          "roles"=>RoleResource::collection($this->whenLoaded('roles')),
          "images"=>[
              'original'=>$this->avatar_original,
              'preview'=>$this->avatar_preview,
              'x94'=>$this->avatar_x96,
              'x48'=>$this->avatar_x48
          ],
          "animes"=>AnimeCollection::make($this->whenLoaded('animes')),
          "person_favoured"=>false,
          "topic_id"=>"не реализовано"
        ];
    }
}
