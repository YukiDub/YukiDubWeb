<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAnimesGenresTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('animes_genres', function (Blueprint $table) {
            $table->unsignedBigInteger('anime_id');
            $table->unsignedBigInteger('genre_id');

            $table->foreign('anime_id')->on('animes')->references('anime_id')->onDelete('cascade');
            $table->foreign('genre_id')->on('genres')->references('genre_id')->onDelete('cascade');

            $table->primary(['anime_id', 'genre_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('animes_genres');
    }
}
