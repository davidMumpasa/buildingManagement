<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Employee extends Model
{
    use HasFactory;

    protected $table = "employee";
    protected $primaryKey = "employee_id";

    public function Pictures(): HasMany
    {
        return $this->hasMany(Picture_data::class, 'employee_id');
    }
}
