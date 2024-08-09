<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::prefix('v1')->group(function(){
    Route::middleware('auth:sanctum')->get('/user', [AuthController::class, 'user']);
    Route::post('auth/login', [AuthController::class, 'login']);
    Route::post('auth/register', [AuthController::class, 'register']);
    
    Route::middleware('auth:sanctum')->group(function(){
        Route::get('auth/logout', [AuthController::class, 'logout']);
    });

    Route::apiResource('auth', AuthController::class);
});
