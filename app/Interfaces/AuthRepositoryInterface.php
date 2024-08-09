<?php

namespace App\Interfaces;
use Illuminate\Http\Request;

interface AuthRepositoryInterface
{
    public function index();
    public function show($request);
    public function register(Request $request);
    public function login(Request $request);
    public function logout();
    public function user(Request $request);
}
