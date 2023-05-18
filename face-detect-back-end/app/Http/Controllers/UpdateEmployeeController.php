<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use Illuminate\Http\Request;

class UpdateEmployeeController extends Controller
{
    //Update employee Api
    public function Update(Request $request){
     
        $val = $request->validate([
            "name"=> "required|min:2",
            "surname"=> "required|min:2",
            "cell"=> "required|min:10|max:10",
            "address"=> "required|min:2",
            "code"=> "required|min:4|numeric",
            "id"=> "required",
            "emp_id"=> "required"
        ]);

        $emp = Employee::find($request->emp_id);
        
        $emp->employee_name = $request->name;
        $emp->employee_surname = $request->surname;
        $emp->employee_cell = $request->cell;
        $emp->employee_address = $request->address;
        $emp->employee_postal_code = $request->code;
        $emp->employee_id_number = $request->id;

        $emp->save();
      
        if($emp->save() == true){
            return response()->json(['update' => "successfull"]);

        }else{
            return response()->json(['update' => "errror"]);
        }




    }
}
