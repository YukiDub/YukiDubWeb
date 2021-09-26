<?php

namespace Database\Seeders;

use App\Models\Staff;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            GenresSeeder::class,
            StaffRoleSeeder::class,
            UsersRolesSeeder::class,
        ]);

        User::factory(10)->create();
        Staff::factory(10)->create();

        User::all()->each(function ($user) {
            $user->roles()->attach(2);
        });
    }
}
