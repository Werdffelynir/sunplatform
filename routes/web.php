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

Route::get('/', 'ViewController@main')->name('main');
Route::get('/home', 'ViewController@main')->name('main');
Route::get('/dashboard', 'ViewController@dashboard')->name('dashboard');
Route::get('/profile', 'ViewController@profile')->name('profile');
Route::get('/domains', 'ViewController@domains')->name('domains');
Route::get('/services', 'ViewController@services')->name('services');
