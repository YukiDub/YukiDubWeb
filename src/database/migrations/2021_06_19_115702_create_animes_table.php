<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAnimesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('animes', function (Blueprint $table) {
            $table->id("anime_id");
            $table->string("posterUrl")->nullable(false)->default('default.png');
            $table->enum("type", ["TV Series", "Movie", "OVA", "ONA", "Special", "Music"])->nullable(false);
            $table->integer("episode")->nullable(false)->default(0);
            $table->integer("episodesReleased")->nullable(false)->default(0);
            $table->date("nextEpisode")->nullable(true)->default(null);
            $table->time("episodeDuration")->nullable(true)->default(null);
            $table->enum("status", ["released", "ongoing", "announced"]);
            $table->date("startDate")->nullable(true)->default(null);
            $table->date("releaseDate")->nullable(true)->default(null);
            $table->enum("ageRating", ["G", "PG", "PG-13", "R-17", "R+", "Rx"]);
            $table->string("nameJp", 50)->nullable(false);
            $table->string("nameEn", 120)->nullable(false);
            $table->string("nameRu", 120)->nullable(true);
            $table->string("descriptionJp")->nullable(true)->default(null);
            $table->string("descriptionEn")->nullable(true)->default(null);
            $table->string("descriptionRu")->nullable(true)->default(null);

            $table->unsignedBigInteger("score");
            $table->foreign("score")->on("scores")->references("score_id")->onDelete("cascade");

            $table->unsignedBigInteger("producer");
            $table->foreign("producer")->on("anime_producers")->references("producerId")->onDelete("cascade");

            $table->unsignedBigInteger("playerVideos")->default(null);
            $table->foreign("playerVideos")->on("player_videos")->references("videoId")->onDelete("cascade");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('animes');
    }
}
