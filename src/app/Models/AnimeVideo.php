<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AnimeVideo extends Model
{
    use HasFactory;
    protected $primaryKey = 'video_id';
    public $timestamps = true;
}
