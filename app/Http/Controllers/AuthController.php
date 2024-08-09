<?php

namespace App\Http\Controllers;

use App\Interfaces\AuthRepositoryInterface;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    private AuthRepositoryInterface $authRepositoryinterface;

    public function __construct(AuthRepositoryInterface $authRepositoryinterface)
    {
        $this->authRepositoryinterface = $authRepositoryinterface;
    }

    public function index()
    {
        return $this->authRepositoryinterface->index();
    }

    public function show($id)
    {
        return $this->authRepositoryinterface->show($id);
    }

    public function register(Request $request)
    {
        return $this->authRepositoryinterface->register($request);
    }

    public function login(Request $request)
    {
        return $this->authRepositoryinterface->login($request);
    }

    public function logout()
    {
        return $this->authRepositoryinterface->logout();
    }

    public function user(Request $request)
    {
        return $this->authRepositoryinterface->user($request);
    }
}
