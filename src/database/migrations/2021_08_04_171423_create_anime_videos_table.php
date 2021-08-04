<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAnimeVideosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('anime_videos', function (Blueprint $table) {
            $table->id('video_id');
            $table->string('url');
            $table->timestamps();

            $table->unsignedBigInteger('anime_id');
            $table->foreign('anime_id')->on('animes')->references('anime_id')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('anime_videos');
    }
}
