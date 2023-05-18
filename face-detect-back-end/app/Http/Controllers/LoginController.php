<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use App\Models\Company;
use App\Models\Employee;
use App\Models\Employee_access_log;
use Illuminate\Http\Request;
Use Alert;
use App\Models\Visitor;
use App\Models\Visitor_access_log;

class LoginController extends Controller
{
    //Login API
    public function Login(Request $request){
        $val = $request->validate([
            "email"=> "required|",
            "password"=> "required|",
        ]);

        //Check employees first
        $emp = Employee::where('employee_email', $request->email)->where('employee_password', $request->password)->first();

        if(isset($emp->employee_id)){
            $access_log = Employee_access_log::where('employee_id',  $emp->employee_id)->get();
            $company = Company::where('employee_id',  $emp->employee_id)->first();
    
            if (!empty($emp)) {
                return response()->json(['employee' => $emp , 'access_log' => $access_log, 'company' => $company]);
            }
        }else{

            //Check visitor if it exist 
            $visitor = Visitor::where('visitor_email', $request->email)->where('visitor_password', $request->password)->first();
            $access_log = Visitor_access_log::where('visitor_id',  $visitor->visitor_id)->get();
            //$company = Company::where('visitor_id',  $visitor->visitor_id)->first();

            if (!empty($visitor)) {
                return response()->json(['visitor' => $visitor , 'access_log' => $access_log]);
            }
        }
        
    }

    //Admin login
    public function adminLogin(Request $request){

        $admin = Admin::where('admin_email',$request->email)->where('admin_password', $request->password)->first();
        if($admin == null){
            toast('Error! please enter correct login info!','warning');
            return back();
        }else{
            toast('Successful login | Welcome!','success');
            session()->put('admin',$admin);
            return redirect()->route('dashboard');
        }
        
    }

    // New endpoint to retrieve employee data
    public function retrieveEmpData(Request $request)
    {
        $val = $request->validate([
            "email" => "required|",
            "password" => "required|",
        ]);
    
        // Check employees first
        $emp = Employee::where('employee_email', $request->email)
            ->where('employee_password', $request->password)
            ->first();
    
        if ($emp !== null) {
            return response()->json(['employee' => $emp]);
        } else {
            return response()->json("Not found");
        }
    }
    

}
