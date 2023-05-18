<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Visitor_access_log extends Model
{
    use HasFactory;

    protected $table = "visitor_access_log";
    protected $primaryKey = "visitor_access_log_id";
}
