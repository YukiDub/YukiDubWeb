<?php
/*
 * Copyright (c) YukiDub. Author: M9snikFeed <m9snikfeed@gmail.com>.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\Character
 *
 * @property int $characterId
 * @property string $nameJp
 * @property string $nameEn
 * @property string $nameRu
 * @property string $descriptionJp
 * @property string $descriptionEn
 * @property string $descriptionRu
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|Character newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Character newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Character query()
 * @method static \Illuminate\Database\Eloquent\Builder|Character whereCharacterId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Character whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Character whereDescriptionEn($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Character whereDescriptionJp($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Character whereDescriptionRu($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Character whereNameEn($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Character whereNameJp($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Character whereNameRu($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Character whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class Character extends Model
{
    use HasFactory;

    public $primaryKey = "character_id";

    protected $hidden = ['pivot'];

    protected $fillable = [
        "malId",
        "nameJp",
        "nameEn",
        "nameRu",
        "descriptionJp",
        "descriptionEn",
        "descriptionRu",
    ];
}
