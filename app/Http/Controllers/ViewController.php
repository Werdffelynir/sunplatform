<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ViewController extends Controller
{
    public function main() {
        $user = [
            'name' => 'Guest Name',
            'email' => 'guest@email.com',
            'created_at' => '00/00/0000',
        ];

        if (Auth::user()) {
            $user = [
                'name' => Auth::user()->name,
                'email' => Auth::user()->email,
                'created_at' => Auth::user()->created_at,
            ];
        }

        return view('main', [
            'user' => $user,
        ]);
    }

}
