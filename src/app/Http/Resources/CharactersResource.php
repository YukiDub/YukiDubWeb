<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CharactersResource extends JsonResource
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
            'id'           => $this->character_id,
            'name_jp'       => $this->nameJp,
            'name_en'       => $this->nameEn,
            'name_ru'       => $this->nameRu,
            'description_jp'=> $this->descriptionJp,
            'description_en'=> $this->descriptionEn,
            'description_ru'=> $this->descriptionRu,
            'created_at'   => $this->created_at,
            'updated_at'   => $this->updated_at,
        ];
    }
}
