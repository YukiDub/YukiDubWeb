<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OauthUserLogin extends Model
{
    use HasFactory;
    protected $primaryKey = 'login_id';
    public $timestamps = false;

    protected $fillable = [
        'user_id',
        'provider',
        'provider_user_id'
    ];
}
