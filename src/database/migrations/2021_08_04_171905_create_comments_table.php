<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCommentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('comments', function (Blueprint $table) {
            $table->id('comment_id');
            $table->text('comment')->nullable(false);
            $table->timestamps();

            $table->unsignedBigInteger('author_id');
            $table->foreign('author_id')->on('users')->references('id')->onDelete('cascade');

            $table->unsignedBigInteger('reply_id')->nullable(true);
            $table->foreign('reply_id')->on('comments')->references('comment_id')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('comments');
    }
}
