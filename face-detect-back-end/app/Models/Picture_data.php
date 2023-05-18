<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Picture_data extends Model
{
    use HasFactory;

    protected $table = "picture_data";
    protected $primaryKey = "picture_id";
}
