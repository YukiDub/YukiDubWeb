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
            $table->id('characterId');
            $table->string("nameJp", 24)->nullable(false);
            $table->string("nameEn", 30)->default(null);
            $table->string("nameRu", 30)->default(null);
            $table->string("descriptionJp")->default(null);
            $table->string("descriptionEn")->default(null);
            $table->string("descriptionRu")->default(null);
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
