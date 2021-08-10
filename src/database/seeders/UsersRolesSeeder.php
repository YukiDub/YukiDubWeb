<?php

namespace Database\Seeders;

use App\Models\UserRole;
use Illuminate\Database\Seeder;

class UsersRolesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        UserRole::factory(['id'=>1, 'name'=>'Administrator'])->create();
        UserRole::factory(['id'=>2, 'name'=>'User'])->create();
        UserRole::factory(['id'=>3, 'name'=>'Anime moderator'])->create();
        UserRole::factory(['id'=>4, 'name'=>'Manga moderator'])->create();
        UserRole::factory(['id'=>5, 'name'=>'Ranobe moderator'])->create();
        UserRole::factory(['id'=>6, 'name'=>'Super moderator'])->create();
        UserRole::factory(['id'=>7, 'name'=>'Youtuber'])->create();
    }
}
