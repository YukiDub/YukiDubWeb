<?php

/*
 * Copyright (c) YukiDub. Author: M9snikFeed <m9snikfeed@gmail.com>.
 */

namespace App\Models;

use App\Observers\StaffObserver;
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

    protected $hidden = ['pivot'];

    protected $fillable = [
        'name_jp',
        'name_en',
        'name_ru',
        'birthday',
        'website',
        'avatar_original',
        'avatar_preview',
        'avatar_x96',
        'avatar_x48',
        'mal_id'
    ];

    /**
     * @return BelongsToMany
     */
    public function roles(): BelongsToMany
    {
        return $this->belongsToMany(Role::class, "animes_staff", "staff_id", "role_id");
    }


    /**
     * @return BelongsToMany
     */
    public function animes(): BelongsToMany
    {
        return $this->belongsToMany(Anime::class, "animes_staff", "staff_id", "anime_id");
    }

    /**
     * @return BelongsToMany
     */
    public function changes(): BelongsToMany
    {
        return $this->belongsToMany(ChangesHistory::class, "staff_changes", "staff_id", "change_id")
            ->join('users', 'users.id', '=', 'changes_histories.user_id')
            ->addSelect(['changes_histories.*', 'users.name as user_name']);
    }

    /**
     * @param int $count
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function popularAnimes(int $count = 4): \Illuminate\Database\Eloquent\Collection
    {
        return $this->belongsToMany(Anime::class, "animes_staff", "staff_id", "anime_id")
            ->join('scores', 'animes.score', '=', 'scores.score_id')
            // ->orderBy('scores.total', 'DESC')
            ->limit($count)
            ->get();
    }


    public function getChanges(): \Illuminate\Database\Eloquent\Builder
    {
        return $this->with(['changes'=>function($query){
            $query
                ->join('users', 'users.id', '=', 'changes_histories.user_id')
                ->addSelect(['changes_histories.*', 'users.name as user_name']);
            }]);
            //->find($id);
    }

   public function scopeOfRole($query, string $roleName = null){
        if($roleName){
            $query->with('roles')->whereHas('roles', function ($q) use ($roleName) {
                $q->where("name", "=", $roleName);
            });
        }

       return $query;
   }
}
