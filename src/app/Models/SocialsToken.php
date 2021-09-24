<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SocialsToken extends Model
{
    use HasFactory;
    protected $primaryKey = 'token_id';
    public $timestamps = false;
    protected $fillable = [
        'user_id',
        'type',
        'token',
    ];
}
