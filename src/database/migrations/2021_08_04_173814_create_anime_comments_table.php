<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAnimeCommentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('anime_comments', function (Blueprint $table) {
            $table->unsignedBigInteger('anime_id');
            $table->unsignedBigInteger('comment_id');

            $table->foreign('anime_id')->on('animes')->references('anime_id')->onDelete('cascade');
            $table->foreign('comment_id')->on('comments')->references('comment_id')->onDelete('cascade');

            $table->primary(['comment_id', 'anime_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('anime_comments');
    }
}
