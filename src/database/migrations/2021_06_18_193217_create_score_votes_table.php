<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateScoreVotesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('score_votes', function (Blueprint $table) {
            $table->id("scoreVoteId");
            $table->bigInteger("user")->unsigned();
            $table->foreign("user")->on("users")->references("id")->onDelete("cascade");
            $table->bigInteger("score")->unsigned();
            $table->foreign("score")->on("scores")->references("scoreId")->onDelete("cascade");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('score_votes');
    }
}
