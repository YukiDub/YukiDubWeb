<?php

namespace App\YukiDub;


use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;

class Images
{
    static function upload($image, $name, $path){
        $image = $image->storeAs($path, $name . "_original." . $image->getClientOriginalExtension());

//        $image = Image::make($image);
//        $image->resize($image->getWidth() / 2, $image->getHeight() / 2);
//        Storage::disk("local")->put("images/peoples", $image);
    }
}