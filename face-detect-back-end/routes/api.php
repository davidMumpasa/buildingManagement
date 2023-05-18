<?php

use App\Http\Controllers\LoginController;
use App\Http\Controllers\Processing;
use App\Http\Controllers\RegisterEmployee;
use App\Http\Controllers\RegisterVisitorApi;
use App\Http\Controllers\UpdateEmployeeController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::POST('add', [RegisterVisitorApi::class, 'addVisitor']);
Route::POST('login', [LoginController::class, 'Login']);
Route::POST('update', [UpdateEmployeeController::class, 'Update']);
Route::POST('addEmp', [RegisterEmployee::class, 'addEmployee']);
Route::POST('add_face', [Processing::class, 'add_face']);
Route::POST('new-endpoint', [LoginController::class, 'retrieveEmpData']);
Route::post('faceDetection', [Processing::class, 'access_building'])->middleware('cors')->name('api.faceDetection')->withoutMiddleware([VerifyCsrfToken::class]);



