<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use Illuminate\Http\Request;

class RegisterEmployee extends Controller
{
    public function addEmployee(Request $request){
             
        $val = $request->validate([
            "name"=> "required|min:2",
            "surname"=> "required|min:2",
            "cell"=> "required|min:10|max:10",
            "address"=> "required|min:2",
            "email"=> "required|email|unique:employee,employee_email",
            "password"=> "required",
            "code"=> "required|min:4|numeric",
            "id"=> "required|min:13|max:13|numeric",
        ]);

        $emp = new Employee;
        
        $emp->employee_name = $request->name;
        $emp->employee_surname = $request->surname;
        $emp->employee_email = $request->email;
        $emp->employee_password = $request->password;
        $emp->employee_cell = $request->cell;
        $emp->employee_address = $request->address;
        $emp->employee_postal_code = $request->code;
        $emp->employee_id_number = $request->id;
        $emp->employee_access = "Inactive";

        //9408175893086
        if(intval(substr($request->id,6,1)) < 5){
            $emp->employee_gender = "female";
        }else{
            $emp->employee_gender = "male";
        }



        $emp->save();
      
        if($emp->save() == true){
            return response()->json(['add' => "successfull"]);

        }else{
            return response()->json(['add' => "errror"]);
        }
    }
}
