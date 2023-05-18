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
        Schema::create('employee', function (Blueprint $table) {
            $table->id('employee_id');
            $table->timestamps();
            $table->string("employee_email");
            $table->string("employee_password");
            $table->string("employee_name");
            $table->string("employee_surname");
            $table->string("employee_cell");
            $table->string("employee_access");
            $table->string("employee_address");
            $table->string("employee_postal_code");
            $table->string("employee_id_number", 64);
            $table->string("employee_gender");
            
        });
    }

    /**
     * Reverse the migrations.j
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('employee');
    }
};
