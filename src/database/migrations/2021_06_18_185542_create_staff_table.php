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
            $table->string("nameJp", 24)->nullable(false);
            $table->string("nameEn", 30)->nullable(true);
            $table->string("nameRu", 30)->default(null)->nullable(true);;
            $table->date("birthday")->default(null)->nullable(true);
            $table->string("webSite")->default(null)->nullable(true);
            $table->integer('malId')->nullable(true)->default(null);
            $table->string("avatarExtention")->default(null)->nullable(true);
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
