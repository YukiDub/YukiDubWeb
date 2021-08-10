<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateChangesHistoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('changes_histories', function (Blueprint $table) {
            $table->id('change_id');
            $table->string('action');
            $table->enum('status', ['accepted', 'moderate', 'rejected']);
            $table->json('changes')->nullable(true)->default(null);
            $table->timestamps();

            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')->on('users')->references('id')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('changes_histories');
    }
}
