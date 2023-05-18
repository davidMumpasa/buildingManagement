<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employee_access_log extends Model
{
    use HasFactory;
    
    protected $table = "employee_access_log";
    protected $primaryKey = "employee_access_log_id";
}
