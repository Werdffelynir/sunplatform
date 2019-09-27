<?php

use \Illuminate\Support\Facades\Auth;
use \Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Auth::routes();

Route::get('/', 'ViewController@main')
//    ->middleware('auth')
    ->name('main');

Route::get('/home', 'ViewController@main')
//    ->middleware('auth')
    ->name('main');

Route::get('/profile', 'ViewController@main')->name('main');
Route::get('/domains', 'ViewController@main')->name('main');
Route::get('/services', 'ViewController@main')->name('main');
Route::get('/editor', 'ViewController@main')->name('main');
