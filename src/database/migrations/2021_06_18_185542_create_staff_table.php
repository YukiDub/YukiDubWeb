<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStaffTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('staff', function (Blueprint $table) {
            $table->id("staff_id");
            $table->integer('mal_id')->nullable(true)->default(null)->unique();
            $table->string("name_jp", 24)->nullable(false);
            $table->string("name_en", 30)->nullable(true);
            $table->string("name_ru", 30)->default(null)->nullable(true);;
            $table->date("birthday")->default(null)->nullable(true);
            $table->string("website")->default(null)->nullable(true);
            $table->string("avatar_original")->default(null)->nullable(true);
            $table->string("avatar_preview")->default(null)->nullable(true);
            $table->string("avatar_x96")->default(null)->nullable(true);
            $table->string("avatar_x48")->default(null)->nullable(true);
        });

        DB::table('permissions')->insert([
            ['name'=>'staff.viewAny'],
            ['name'=>'staff.view'],
            ['name'=>'staff.update'],
            ['name'=>'staff.create'],
            ['name'=>'staff.delete']
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('staff');
    }
}
