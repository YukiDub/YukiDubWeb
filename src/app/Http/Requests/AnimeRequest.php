<?php

/*
 * Copyright (c) YukiDub. Author: M9snikFeed <m9snikfeed@gmail.com>.
 */

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AnimeRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            "posterUrl" => "required|image",
            "type"=> "required|in:TV Series,Movie,OVA,ONA,Special,Music",
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
    }
}
