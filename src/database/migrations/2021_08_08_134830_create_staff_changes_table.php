<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStaffChangesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('staff_changes', function (Blueprint $table) {
            $table->unsignedBigInteger('staff_id');
            $table->unsignedBigInteger('change_id');

            $table->foreign('staff_id')->on('staff')->references('staff_id')->onDelete('cascade');
            $table->foreign('change_id')->on('changes_histories')->references('change_id')->onDelete('cascade');

            $table->primary(['staff_id', 'change_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('staff_changes');
    }
}
