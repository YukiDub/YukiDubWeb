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
            'nameJp'       => $this->nameJp,
            'nameEn'       => $this->nameEn,
            'nameRu'       => $this->nameRu,
            'descriptionJp'=> $this->descriptionJp,
            'descriptionEn'=> $this->descriptionEn,
            'descriptionRu'=> $this->descriptionRu,
            'created_at'   => $this->created_at,
            'updated_at'   => $this->updated_at,
        ];
    }
}
