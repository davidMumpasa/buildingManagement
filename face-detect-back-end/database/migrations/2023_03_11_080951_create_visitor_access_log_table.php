<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('visitor_access_log', function (Blueprint $table) {
            $table->id('visitor_access_log_id');
            $table->timestamps();
            $table->unsignedBigInteger('visitor_id');
            $table->foreign('visitor_id')->references('visitor_id')->on('visitor')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('visitor_access_log');
    }
};
