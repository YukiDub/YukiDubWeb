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
        if($this->avatarExtention){
            $images = [
                "original"=> "/storage/images/peoples/" . $this->staff_id . "_original." . $this->avatarExtention,
                "preview"=> "/storage/images/peoples/" . $this->staff_id . "_preview." . $this->avatarExtention,
            ];
        }
        else{
            $images = [
                "original"=> "/storage/images/peoples/default_original.png",
                "preview"=> "/storage/images/peoples/default_preview.png",
            ];
        }

        return [
          "staff_id"=>$this->staff_id,
          "nameJp"=>$this->nameJp,
          "nameEn"=>$this->nameEn,
          "nameRu"=>$this->nameRu,
          "birthday"=>$this->birthday,
          "webSite"=>$this->webSite,
          "roles"=>$this->roles,
          "image"=>$images,
          "person_favoured"=>false,
          "topic_id"=>"не реализовано"
        ];
    }
}
