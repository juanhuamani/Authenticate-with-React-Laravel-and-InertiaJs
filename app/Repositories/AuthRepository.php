<?php

namespace App\Repositories;

use App\Interfaces\AuthRepositoryInterface;
use App\Models\User;
use App\Classes\ApiResponseClass;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;


class AuthRepository implements AuthRepositoryInterface
{
    public function index(){
        return User::all();
    }
    
    public function register(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'name' => 'required|string|max:255',
                'email' => 'required|string|email|max:255|unique:users',
                'password' => 'required|string',
            ]);

            if ($validator->fails()) {
                ApiResponseClass::throw('',$validator->errors()->first());
            }

            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
            ]);

            $token = $user->createToken('auth_token')->plainTextToken;

            return [
                'accessToken' => $token,
                'tokenType' => 'Bearer',
                'user' => $user
            ];
        } catch (\Exception $e) {
            ApiResponseClass::rollback($e, "User registration failed");
        }
    }

    public function login(Request $request)
    {
            if (!Auth::attempt(($request->only('email', 'password')))) {
                ApiResponseClass::throw("","Invalid credentials");
            }
            $user = User::where('email', $request->email)->first();
            $token = $user->createToken('auth_token')->plainTextToken;

            return [
                'accessToken' => $token,
                'tokenType' => 'Bearer',
                'user' => $user
            ];
    }

    public function logout()
    {
        auth()->user()->tokens()->delete();
        return [
            'message' => 'Logged out'
        ];
    }

    public function user(Request $request)
    {
        try {
            return $request->user();
        } catch (\Exception $e) {
            ApiResponseClass::rollback($e, "User not found");
        }
    }

    public function show($request)
    {
        try {
            $user = User::find($request);
            if (!$user) {
                ApiResponseClass::throw("User not found");
            }
            return $user;
        } catch (\Exception $e) {
            ApiResponseClass::rollback($e, "User not found");
        }
    }
}