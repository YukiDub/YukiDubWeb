<?php
/*
 * Copyright (c) YukiDub. Author: M9snikFeed <m9snikfeed@gmail.com>.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AnimeCharacter extends Model
{
    use HasFactory;
    protected $primaryKey = "animeCharactersId";
    public $timestamps = false;

    protected $fillable = ["character", "main"];
}
