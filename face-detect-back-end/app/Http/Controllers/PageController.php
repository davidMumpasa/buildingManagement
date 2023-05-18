<?php

namespace App\Http\Controllers;

use App\Charts\Admin;
use App\Models\Employee;
use App\Models\Employee_access_log;
use App\Models\Visitor;
use App\Models\Visitor_access_log;
use Illuminate\Http\Request;
use App\Charts\EmpAccess;
use App\Charts\VisitAccess;
use App\Models\Picture_data;

class PageController extends Controller
{

    
    public $nav_user = false;

    //Login section
    public function login(){
        return view('/page/login');
    }

    //Dashbord section
    public function dashbord(){

        //Nav
        $nav_dash  = false;

        //Chart
        $chart = new Admin;

        $today_users = Employee_access_log::whereDate('created_at', today())->count();
        $yesterday_users = Employee_access_log::whereDate('created_at', today()->subDays(1))->count();
        $users_2_days_ago = Employee_access_log::whereDate('created_at', today()->subDays(2))->count();
        $users_3_days_ago = Employee_access_log::whereDate('created_at', today()->subDays(3))->count();


        $today_visitors = Visitor_access_log::whereDate('created_at', today())->count();
        $yesterday_visitors = Visitor_access_log::whereDate('created_at', today()->subDays(1))->count();
        $visitors_2_days_ago = Visitor_access_log::whereDate('created_at', today()->subDays(2))->count();
        $visitors_3_days_ago = Visitor_access_log::whereDate('created_at', today()->subDays(3))->count();

        $chart->labels(['Today', 'Yesterday', '2 Days Ago', ' 3 Days Ago']);
        $chart->dataset('Active Employees', 'bar', [ $today_users, $yesterday_users, $users_2_days_ago, $users_3_days_ago]);
        $chart->dataset('Active Visitors', 'bar', [ $today_visitors, $yesterday_visitors, $visitors_2_days_ago, $visitors_3_days_ago]);
        $chart->dataset('My dataset 2', 'line', [4, 3, 2, 1]);

        $nav_dash = true;
        return view('/page/dashbord',compact('chart', 'nav_dash'));
    }

    // Company
    public function company(Request $request){
        return view('/page/company');
    }

    // Employees
    public function employees(Request $request){

        //Nav
        $nav_emp = false;

        // Emp
        $emp = Employee::all();

        $nav_emp == true;
        return view('/page/employees', compact('emp','nav_emp'));
    }

    // Employee emp
    public function emp(Request $request){

        // Emp user
        $data = Employee::find($request->id);

        return view('/page/emp', compact('data'));
    }

    // Visitir visit
    public function visit(Request $request){

        // Emp user
        $data = Visitor::find($request->id);

        return view('/page/visit', compact('data'));
    }
    
    // Visitors data
    public function visitor(Request $request){

        //Nav
        $nav_visitor = false;

        // Emp user
        $visitor = Visitor::all();

        $nav_visitor = true;
        return view('/page/visitor', compact('visitor', 'nav_visitor'));
    }

    public function emp_access(Request $request){

        //Nav
        $nav_emp_access = false;

        //Chart
        $emp_cart = new EmpAccess;

        $today_users = Employee_access_log::whereDate('created_at', today())->count();
        $yesterday_users = Employee_access_log::whereDate('created_at', today()->subDays(1))->count();
        $users_2_days_ago = Employee_access_log::whereDate('created_at', today()->subDays(2))->count();

        $emp_cart->labels(['Today', 'Yesterday', 'Third Day']);
        $emp_cart->dataset('Building Access Chart', 'bar', [$today_users, $yesterday_users, $users_2_days_ago])->backgroundColor('rgb(115, 115, 115)');

        //AllEmp access
        $employees_all = Employee_access_log::all();

        $nav_emp_access = true;
        return view('/page/employee_access',compact('nav_emp_access', 'emp_cart','employees_all' ));
    }
    
    public function visit_access(Request $request){

        //Nav
        $nav_visit_access = false;

        //Chart
        $visit_cart = new VisitAccess;

        $today_users = Visitor_access_log::whereDate('created_at', today())->count();
        $yesterday_users = Visitor_access_log::whereDate('created_at', today()->subDays(1))->count();
        $users_2_days_ago = Visitor_access_log::whereDate('created_at', today()->subDays(2))->count();

        $visit_cart->labels(['Today', 'Yesterday', 'Third Day']);
        $visit_cart->dataset('Building Access Chart', 'bar', [$today_users, $yesterday_users, $users_2_days_ago])->backgroundColor('rgb(115, 115, 115)');

        $nav_emp_access = true;
        return view('/page/visitor_access', compact('nav_visit_access', 'visit_cart'));
    }

    //Save picture
    public function pictureAdd(Request $request){

        $pic = new Picture_data;
        $pic->picture = $request->img;
        $pic->employee_id = 1;
        $pic->save();

        toast('Picture saved successfully!','success');
        return back();
    }
}
