<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAnimeAnimeStudios extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('anime_anime_studios', function (Blueprint $table) {
            $table->unsignedBigInteger('anime_id');
            $table->unsignedBigInteger('studio_id');

            $table->foreign('anime_id')->on('animes')->references('anime_id')->onDelete('cascade');
            $table->foreign('studio_id')->on('anime_studios')->references('studio_id')->onDelete('cascade');

            $table->primary(['anime_id', 'studio_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('anime_anime_studios');
    }
}
