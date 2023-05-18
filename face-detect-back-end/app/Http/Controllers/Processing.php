<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use App\Models\Employee_access_log;
use App\Models\Lables;
use Illuminate\Http\Request;

class Processing extends Controller
{
    //Update emp
    public function update_emp(Request $request){

        //Data
        $val = $request->validate([
            "name"=> "required|min:2",
            "surname"=> "required|min:2",
            "cell"=> "required|min:10|max:10",
            "address"=> "required|min:2",
            "email"=> "required|email",
            "code"=> "required|min:4|numeric",
            "id"=> "required",
        ]);


        $emp = Employee::find($request->emp_id);

        $emp->employee_name = $request->name;
        $emp->employee_surname = $request->surname;
        $emp->employee_cell = $request->cell;
        $emp->employee_address = $request->address;
        $emp->employee_postal_code = $request->code;
        $emp->employee_id_number = $request->id;
        $emp->employee_access = $request->emp_access;

        $emp->save();
        toast('Employee updated successfully!','success');
        return back();
    }

    //Delete emp
    public function delete_emp(Request $request){

        $emp = Employee::find($request->emp_id);

        $emp->delete();
        toast('Employee deleted successfully!','success');

        return back();
    }

    //Building Access

    public function access_building(Request $request){

        //Get All Labels
        $getLables = Lables::all();
        return response()->json(['lables' => $getLables]);

    }

    public function add_face(Request $request){

        //Add emp entry
        $add_emp = new Employee_access_log;
        $add_emp->employee_id = $request->employee_id;
       
        $add_emp->save();
        return response()->json();
      
    
    }
}
