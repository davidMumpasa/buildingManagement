<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LogOut extends Controller
{
    //Logout fun
    public function logout(){
        session()->forget('admin');
        return redirect()->route('login');
    }
}
