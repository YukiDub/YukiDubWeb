<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCharactersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('characters', function (Blueprint $table) {
            $table->id('character_id');
            $table->integer("mailId")->nullable(true)->default(null)->unique();
            $table->string("nameJp", 24)->nullable(false);
            $table->string("nameEn", 30)->nullable(true)->default(null);
            $table->string("nameRu", 30)->nullable(true)->default(null);
            $table->text("descriptionJp")->nullable(true)->default(null);
            $table->text("descriptionEn")->nullable(true)->default(null);
            $table->text("descriptionRu")->nullable(true)->default(null);
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
        Schema::dropIfExists('characters');
    }
}
