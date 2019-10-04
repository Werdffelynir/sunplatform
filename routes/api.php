<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use \Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/*Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});*/

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:api');

Route::group(['namespace' => 'Api'], function () {

    Route::group(['namespace' => 'Auth'], function () {
        Route::post('register', 'RegisterController');
        Route::post('login', 'LoginController');
        Route::post('logout', 'LogoutController')
            ->middleware('auth:api');
    });

    Route::group(['namespace' => 'Profile'], function () {
        Route::get('/profile', 'ProfileController')
            ->middleware('auth:api');
        Route::post('/profile/update', 'ProfileController@update')
            ->middleware('auth:api');
    });

    Route::group(['namespace' => 'Domains'], function () {
        Route::get('/domains', 'DomainsController')
            ->middleware('auth:api');
        Route::post('/domains/register', 'DomainsController@register')
            ->middleware('auth:api');
    });
});
