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
          "nameJp"=>$this->nameJp,
          "nameEn"=>$this->nameEn,
          "nameRu"=>$this->nameRu,
          "birthday"=>$this->birthday,
          "webSite"=>$this->webSite,
          "roles"=>$this->roles,
          "images"=>[
              'original'=>$this->avatar_original,
              'preview'=>$this->avatar_preview,
              'x94'=>$this->avatar_x96,
              'x48'=>$this->avatar_x48
          ],
          "person_favoured"=>false,
          "topic_id"=>"не реализовано"
        ];
    }
}
