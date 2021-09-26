<?php
/*
 * Copyright (c) YukiDub. Author: M9snikFeed <m9snikfeed@gmail.com>.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\Genre.
 *
 * @property int    $genreId
 * @property string $nameJp
 * @property string $nameEn
 * @property string $nameRu
 *
 * @method static \Illuminate\Database\Eloquent\Builder|Genre newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Genre newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Genre query()
 * @method static \Illuminate\Database\Eloquent\Builder|Genre whereGenreId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Genre whereNameEn($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Genre whereNameJp($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Genre whereNameRu($value)
 * @method static \Database\Factories\UserFactory factory(...$parameters)
 * @mixin \Eloquent
 */
class Genre extends Model
{
    use HasFactory;

    protected $primaryKey = 'genre_id';
    public $timestamps = false;

    protected $hidden = ['pivot'];

    protected $fillable = [
        'nameJp',
        'nameEn',
        'nameRu',
    ];
}
