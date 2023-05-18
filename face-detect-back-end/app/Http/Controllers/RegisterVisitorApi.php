<?php

namespace App\Http\Controllers;

use App\Mail\VisitorAccess;
use App\Models\Visitor;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class RegisterVisitorApi extends Controller
{
    //Add user to database 
    public function addVisitor(Request $request){
      
        $val = $request->validate([
            "name"=> "required|min:2",
            "surname"=> "required|min:2",
            "cell"=> "required|min:10|max:10",
            "email"=> "required|email",
            "password"=> "required",
            "address"=> "required|min:2",
            "code"=> "required|min:4|numeric",
            "id"=> "required|min:13|max:13|unique:visitor,visitor_id_number"
        ]);

        //New visitor object
        $add_data = new Visitor;
        $randomNumber = random_int(100000, 999999);
        $data = ['key' => $randomNumber];

        // Asign all data from db with the request+
        $add_data->visitor_name = $request->name;
        $add_data->visitor_surname = $request->surname;
        $add_data->visitor_cell = $request->cell;
        $add_data->visitor_email = $request->email;
        $add_data->visitor_password = $request->password;
        $add_data->visitor_address = $request->address;
        $add_data->visitor_postal_code = $request->code;
        $add_data->visitor_id_number = $request->id;

        if(intval(substr($request->id,6,1)) < 5){
            $add_data->visitor_gender = "female";
        }else{ 
            $add_data->visitor_gender = "male";
        }


        $add_data->save();
       
        // if($add_data->save() == true){
        //     return Mail::to($request->email)->send(new VisitorAccess());
        // }
    }
}
