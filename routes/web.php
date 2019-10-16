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

//'/domains/{option?}/{id?}',

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
    '/domains/settings/id',
    '/services',
    '/services/register',
    '/services/item',
    '/editor',
];

array_walk($ROUTERS, function ($path) {
    Route::get($path, 'ViewController@main')->name('main');
});
