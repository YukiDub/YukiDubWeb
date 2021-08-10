<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StaffCreateRequest extends FormRequest
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
        return [
            "nameJp"=>[
                "required",
                "string",
                "min:2",
                "max:24"
            ],
            "nameEn"=>[
                "required",
                "string",
                "min:2",
                "max:30"
            ],
            "nameRu"=>[
                "string",
                "min:2",
                "max:30"
            ],
            "birthday"=>[
                "date",
                "date_format:Y-m-d"
            ],
            "webSite"=>[
                "max:255",
                "url"
            ],
//            "roles"=>"array|required",
//            "roles.*"=>"integer|distinct|exists:staff_role,role_id",
            "avatar"=>"image|max:9900|dimensions:width=225,height=317"
        ];
    }
}
