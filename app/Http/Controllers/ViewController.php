<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class ViewController extends Controller
{
    public function main() {
        return view('main', []);
    }
}
