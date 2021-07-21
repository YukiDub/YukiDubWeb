<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAnimeStaffTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('anime_staff', function (Blueprint $table) {
            $table->id("animeStaffId");
            $table->unsignedBigInteger("staff");
            $table->foreign("staff")->on("staff")->references("staff_Id")->onDelete("cascade");

            $table->unsignedBigInteger("role");
            $table->foreign("role")->on("staff_role")->references("role_id");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('anime_staff');
    }
}
