<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class CreateAnimeRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return Auth::check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'mal_id'=>'integer',
            "type"=>'required|string|in:tv,movie,ova,ona,special,music',
            "episodes"=>'integer',
            "episodes_released"=>'integer',
            "next_episode_at"=>'date',
            "episode_duration"=>'date', //переделать
            "status"=>'required|string|in:released,ongoing,announced',
            "aired_on"=>'date',
            "released_on"=>'date',
            "age_rating"=>'required|string|in:g,pg,pg_13,r_plus,rx',
            "name_jp"=>'required|string|max:50',
            "name_en"=>'required|string|max:120',
            "name_ru"=>'string|max:120',
            "description_jp"=>'string',
            "description_en"=>'string',
            "description_ru"=>'string',
            'description_ru_source'=>'string',
            'description_en_source'=>'string',
            'description_jp_source'=>'string',
            'genres'=>'array',
            'genres.*'=>'required|integer|exists:genres,genre_id',
            'studios'=>'array',
            'studios.*'=>'required|integer|exists:anime_studios,studio_id'
        ];
    }
}
