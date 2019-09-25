<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ViewController extends Controller
{
    public function main() {
        return view('main', []);
    }
    public function dashboard() {
        return view('main', []);
    }
    public function profile() {
        return view('main', []);
    }
    public function domains() {
        return view('main', []);
    }
    public function services() {
        return view('main', []);
    }
}
