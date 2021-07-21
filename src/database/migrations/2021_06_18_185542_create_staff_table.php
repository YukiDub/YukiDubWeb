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
            $table->string("avatarExtention")->default(null)->nullable(true);
        });
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
