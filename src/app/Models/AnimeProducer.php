<?php
/*
 * Copyright (c) YukiDub. Author: M9snikFeed <m9snikfeed@gmail.com>.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AnimeProducer extends Model
{
    use HasFactory;
    protected $primaryKey = "producerId";
    public $timestamps = false;

    protected $fillable = [
        "name"
    ];
}
