<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Lables extends Model
{
    use HasFactory;

    
    protected $table = "lables";
    protected $primaryKey = "lable_id";
}
