<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class StaffRoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\Role::factory(['name'=>'test'])->create();
        \App\Models\Role::factory(['name'=>'test'])->create();
        \App\Models\Role::factory(['name'=>'test'])->create();
        \App\Models\Role::factory(['name'=>'test'])->create();
        \App\Models\Role::factory(['name'=>'test'])->create();
        \App\Models\Role::factory(['name'=>'test'])->create();
        \App\Models\Role::factory(['name'=>'test'])->create();
        \App\Models\Role::factory(['name'=>'test'])->create();
        \App\Models\Role::factory(['name'=>'test'])->create();
        \App\Models\Role::factory(['name'=>'test'])->create();
        \App\Models\Role::factory(['name'=>'test'])->create();
        \App\Models\Role::factory(['name'=>'test'])->create();
    }
}
