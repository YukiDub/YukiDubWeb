<?php

namespace Database\Seeders;

use App\Models\Role;
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
        Role::factory(['name'=>'Mangaka'])->create();
        Role::factory(['name'=>'Producer'])->create();
        Role::factory(['name'=>'Seiyu'])->create();
    }
}
