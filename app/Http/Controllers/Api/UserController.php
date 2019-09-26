<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function get()
    {
        $user = Auth::user();
        $data = [
            'name' => $user->name,
            'email' => $user->email,
            'created_at' => $user->created_at,
        ];

        return response()
            ->json([
                'user' => $data
            ])->getContent();
    }

}
