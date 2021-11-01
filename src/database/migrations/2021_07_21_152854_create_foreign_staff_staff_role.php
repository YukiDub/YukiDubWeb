<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateForeignStaffStaffRole extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('staff_role_staff', function (Blueprint $table) {
            $table->id('id');

            $table->unsignedBigInteger('role_id');
            $table->foreign('role_id')->on('staff_role')->references('role_id')->onDelete('cascade');

            $table->unsignedBigInteger('staff_id');
            $table->foreign('staff_id')->on('staff')->references('staff_id')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('staff_role_staff');
    }
}
