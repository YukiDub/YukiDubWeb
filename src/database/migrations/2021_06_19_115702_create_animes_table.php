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
            $table->integer("mal_id")->nullable(true)->default(null)->unique();
            $table->integer("shiki_score")->nullable(true)->default(null);
            $table->string("poster_original")->nullable(false)->default('default_original.png');
            $table->string("poster_preview")->nullable(false)->default('default_preview.png');
            $table->string("poster_x96")->nullable(false)->default('default_x96.png');
            $table->string("poster_x48")->nullable(false)->default('default_original.png');

            $table->enum("type", ["tv", "movie", "ova", "ona", "special", "music"])->nullable(false);
            $table->integer("episodes")->nullable(false)->default(0);
            $table->integer("episodes_released")->nullable(false)->default(0);
            $table->date("next_episode_at")->nullable(true)->default(null);
            $table->time("episode_duration")->nullable(true)->default(null);
            $table->enum("status", ["released", "ongoing", "announced"]);
            $table->date("aired_on")->nullable(true)->default(null);
            $table->date("released_on")->nullable(true)->default(null);
            $table->enum("age_rating", ["g", "pg", "pg_13", "r", "r_plus", "rx"])->nullable(true)->default(null);
            $table->string("name_jp", 50)->nullable(false);
            $table->string("name_en", 120)->nullable(false);
            $table->string("name_ru", 120)->nullable(true);

            $table->text("description_jp")->nullable(true)->default(null);
            $table->text("description_jp_source")->nullable(true)->default(null);
            $table->unsignedBigInteger("description_jp_author")->nullable(true)->default(null);
            $table->text("description_en")->nullable(true)->default(null);
            $table->string("description_en_source")->nullable(true)->default(null);
            $table->unsignedBigInteger("description_en_author")->nullable(true)->default(null);
            $table->text("description_ru")->nullable(true)->default(null);
            $table->string("description_ru_source")->nullable(true)->default(null);
            $table->unsignedBigInteger("description_ru_author")->nullable(true)->default(null);

            $table->unsignedBigInteger("score");
            $table->foreign("score")->on("scores")->references("score_id")->onDelete("cascade");

            $table->foreign('description_jp_author')->on('users')->references('id')->onDelete('cascade');
            $table->foreign('description_en_author')->on('users')->references('id')->onDelete('cascade');
            $table->foreign('description_ru_author')->on('users')->references('id')->onDelete('cascade');
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
