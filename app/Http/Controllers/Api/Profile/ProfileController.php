<?php

namespace App\Http\Controllers\Api\Profile;


use \Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ProfileController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
//        $credentials = $request->only('email', 'password');
//        $token = Auth::user()->createToken(config('app.name'));
    }
}
