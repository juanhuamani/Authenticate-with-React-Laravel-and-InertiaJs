<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\DashboardController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use SebastianBergmann\CodeCoverage\Report\Html\Dashboard;

// Auth

Route::get('/login',[LoginController::class, 'index'])
    ->name('login')
    ->middleware('guest');

Route::post('/login',[LoginController::class, 'store'])
    ->name('login.store')
    ->middleware('guest');

Route::get('/register', [RegisterController::class, 'index'])
    ->name('register')
    ->middleware('guest');

Route::delete('/logout', [LoginController::class, 'destroy'])
    ->name('logout');
    
// Dashboard

Route::get('/', [DashboardController::class, 'index'])
    ->name('dashboard')
    ->middleware('auth');
