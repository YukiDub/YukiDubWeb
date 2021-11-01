<?php
/*
 * Copyright (c) YukiDub. Author: M9snikFeed <m9snikfeed@gmail.com>.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\AnimeCharacter.
 *
 * @property int $animeCharactersId
 * @property int $character
 * @property int $main
 *
 * @method static \Illuminate\Database\Eloquent\Builder|AnimeCharacter newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|AnimeCharacter newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|AnimeCharacter query()
 * @method static \Illuminate\Database\Eloquent\Builder|AnimeCharacter whereAnimeCharactersId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AnimeCharacter whereCharacter($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AnimeCharacter whereMain($value)
 * @mixin \Eloquent
 */
class AnimeCharacter extends Model
{
    use HasFactory;
    protected $primaryKey = 'animeCharactersId';
    public $timestamps = false;

    protected $fillable = ['character', 'main'];
}
