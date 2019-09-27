<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class ViewController extends Controller
{
    public function main() {
        return view('main', [
            'component' => 'app',
        ]);
    }

    public function login() {
        return view('main', [
            'component' => 'login',
        ]);
    }

    public function register() {
        return view('main', [
            'component' => 'register',
        ]);
    }
}
