<?php

use App\Http\Controllers\LoginController;
use App\Http\Controllers\LogOut;
use App\Http\Controllers\PageController;
use App\Http\Controllers\Processing;
use App\Http\Controllers\RegisterVisitorApi;
use App\Http\Middleware\LoginAuth;
use GuzzleHttp\Psr7\Request;
use Illuminate\Support\Facades\Route;

// Login route user API
Route::GET('/', [PageController::class, 'login'])->name('login');

// Login route Admin
Route::POST('adminLogin', [LoginController::class, 'adminLogin'])->name('adminLogin');

Route::middleware([LoginAuth::class])->group(function () {
    // Delete emp
    Route::GET('delete_emp', [Processing::class, 'delete_emp'])->name('delete_emp');

    //Dasbord route
    Route::GET('/page/dashbord', [PageController::class, 'dashbord'])->name('dashbord');

    //Company route
    Route::GET('/page/company', [PageController::class, 'company'])->name('company');

    //Employees route
    Route::GET('/page/employees', [PageController::class, 'employees'])->name('employees');

    //Employees route
    Route::GET('/page/visitor', [PageController::class, 'visitor'])->name('visitor');

    //Employees update
    Route::POST('update_emp', [Processing::class, 'update_emp'])->name('update_emp');

    //Employees user route
    Route::GET('/page/emp', [PageController::class, 'emp'])->name('emp');

    //Visitor user route
    Route::GET('/page/visit', [PageController::class, 'visit'])->name('visit');

    Route::GET('/page/employee_access', [PageController::class, 'emp_access'])->name('emp_access');
    Route::GET('/page/visitor_access', [PageController::class, 'visit_access'])->name('visit_access');

    // Logout route
    Route::GET('logOut', [LogOut::class, 'logout'])->name('logout');

    Route::POST('pictureAdd', [PageController::class, 'pictureAdd'])->name('pictureAdd');
});