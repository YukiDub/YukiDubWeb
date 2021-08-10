<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;

class ChangesHistory extends Model
{
    use HasFactory;

    protected $primaryKey = 'change_id';
    public $timestamps = true;

    protected $hidden = ['pivot'];

    protected $fillable = [
      'change_id',
      'action',
      'status',
      'changes',
      'created_at',
      'updated_at',
      'user_id'
    ];

    protected $casts = [
      'changes' => 'array'
    ];
}
