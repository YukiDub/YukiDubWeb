<?php

/*
 * Copyright (c) YukiDub. Author: M9snikFeed <m9snikfeed@gmail.com>.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

/**
 * App\Models\Staff
 *
 * @property int $staff_id
 * @property string $nameJp
 * @property string|null $nameEn
 * @property string|null $nameRu
 * @property string|null $birthday
 * @property string|null $webSite
 * @property string|null $avatarExtention
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Role[] $roles
 * @property-read int|null $roles_count
 * @method static \Illuminate\Database\Eloquent\Builder|Staff newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Staff newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Staff query()
 * @method static \Illuminate\Database\Eloquent\Builder|Staff whereAvatarExtention($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Staff whereBirthday($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Staff whereNameEn($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Staff whereNameJp($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Staff whereNameRu($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Staff whereStaffId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Staff whereWebSite($value)
 * @mixin \Eloquent
 */
class Staff extends Model
{
    use HasFactory;

    public $timestamps = false;
    public $primaryKey = "staff_id";

    protected $fillable = [
        "nameJp",
        "nameEn",
        "nameRu",
        "birthday",
        "webSite",
        "staff_role",
        "avatarExtention"
    ];


    /**
     * @return BelongsToMany
     */
    public function roles(): BelongsToMany
    {
        return $this->belongsToMany(Role::class, "staff_role_staff", "staff_id", "role_id");
    }
}
