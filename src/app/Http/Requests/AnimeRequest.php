<?php

/*
 * Copyright (c) YukiDub. Author: M9snikFeed <m9snikfeed@gmail.com>.
 */

namespace App\Http\Requests;

use App\Models\Anime;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class AnimeRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        switch ($this->method()){
            case 'GET':
                return [
                    'perPage'=>'integer|max:100|min:1',
                    'fields'=>'array',
                    'fields.*'=>[
                        'string',
                        Rule::in((new Anime())->getFillable())
                    ],
                    'genres'=>'array',
                    'genres.*'=>'string|exists:genres,nameEn',
                    'studios'=>'array',
                    'studios.*'=>'string|exists:anime_studios,name',
                    'status'=>'string|in:ongoing,released,announced',
                    'episodes'=>'integer',
                    'episodes_released'=>'integer',
                    'episode_duration'=>'string',
                    'age_rating'=>'string|in:g,pg,pg_13,r,r+,rx',
                    'orders'=>'array',
                    'orders.*'=>'string',
                    'orders.*.*'=>'required|in:ASC,DESC'
                        ];
                break;
            case 'PUT' AND 'PATH':
                return [
                    "posterUrl" => "image",
                    "type"=> "in:tv,Movie,OVA,ONA,Special,Music",
                    "episode"=> "integer",
                    "episodes_released"=> "integer",
                    "next_episode"=> "date",
//            "episodeDuration"=> "time",
                    "status"=> "string",
                    "start_date"=> "date",
                    "release_date"=> "date",
//            "genres"=> "string",
                    "ageRating"=> "in:G,PG,PG-13,R-17,R+,Rx",
                    "name_jp"=> "string|min:1|max:50",
                    "name_en"=> "string|min:1|max:120",
                    "name_ru"=> "string|min:1|max:120",
                    "description_jp"=> "string",
                    "description_en"=> "string",
                    "description_ru"=> "string",
                    "genres"
                ];
                break;
            case 'POST':
                return [
                    "posterUrl" => "required|image",
                    "type"=> "required|in:tv,Movie,OVA,ONA,Special,Music",
                    "episode"=> "integer",
                    "episodesReleased"=> "integer",
                    "nextEpisode"=> "date",
//            "episodeDuration"=> "time",
                    "status"=> "required",
                    "startDate"=> "required|date",
                    "releaseDate"=> "date",
//            "genres"=> "string",
                    "ageRating"=> "required|in:G,PG,PG-13,R-17,R+,Rx",
                    "nameJp"=> "required|string|min:1|max:50",
                    "nameEn"=> "required|string|min:1|max:120",
                    "nameRu"=> "string|min:1|max:120",
                    "descriptionJp"=> "string",
                    "descriptionEn"=> "string",
                    "descriptionRu"=> "string",
//            "staff"=> "string",
//            "characters"=> "",
//            "score"=> "",
//            "producer"=> "",
//            "playerVideos"=> "",
                ];
                break;
        }
    }
}
