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

$ROUTERS = [
    '/',
    '/home',
    '/login',
    '/logout',
    '/register',
    '/profile',
    '/profile/register',
    '/domains',
    '/domains/register',
    '/domains/settings',
    '/services',
    '/services/register',
    '/services/settings',
];
//Route::any('/', 'ViewController@main')->name('main');
array_walk($ROUTERS, function ($path) {
    Route::get($path, 'ViewController@main')->name('main');
});

/*die;
//Auth::routes();

Route::get('/', 'ViewController@main')->name('main');
Route::get('/home', 'ViewController@main')->name('main');
Route::get('/login', 'ViewController@main')->name('main');
Route::get('/register', 'ViewController@main')->name('main');
Route::get('/profile', 'ViewController@main')->name('main');
Route::get('/profile/settings', 'ViewController@main')->name('main');
Route::get('/domains', 'ViewController@main')->name('main');
Route::get('/domains/register', 'ViewController@main')->name('main');
Route::get('/domains/settings', 'ViewController@main')->name('main');
Route::get('/services', 'ViewController@main')->name('main');
Route::get('/services/register', 'ViewController@main')->name('main');
Route::get('/services/settings', 'ViewController@main')->name('main');*/
