<?php
/*
 * Copyright (c) YukiDub. Author: M9snikFeed <m9snikfeed@gmail.com>.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Character extends Model
{
    use HasFactory;

    public $primaryKey = "characterId";

    protected $fillable = [
        "nameJp",
        "nameEn",
        "nameRu",
        "descriptionJp",
        "descriptionEn",
        "descriptionRu",
    ];
}
