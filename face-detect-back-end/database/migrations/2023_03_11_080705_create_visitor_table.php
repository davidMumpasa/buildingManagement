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
        Schema::create('visitor', function (Blueprint $table) {
            $table->id("visitor_id");
            $table->timestamps();
            $table->string("visitor_name");
            $table->string("visitor_surname");
            $table->string("visitor_email");
            $table->string("visitor_password");
            $table->string("visitor_cell");
            $table->string("visitor_address");
            $table->string("visitor_postal_code");
            $table->string("visitor_id_number", 64);
            $table->string("visitor_gender", 64);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('visitor');
    }
};
