<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ViewController extends Controller
{
    public function main() {
        $user = [
            'name' => Auth::user()->name,
            'email' => Auth::user()->email,
            'created_at' => Auth::user()->created_at,
        ];

        return view('main', [
            'user' => $user,
        ]);
    }

//    public function dashboard() {
//        return view('main', []);
//    }
//    public function profile() {
//        return view('main', []);
//    }
//    public function domains() {
//        return view('main', []);
//    }
//    public function services() {
//        return view('main', []);
//    }
}
