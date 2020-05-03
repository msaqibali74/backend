<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
Route::get('/', function () {
    return view('welcome');
})->middleware('auth');
Auth::routes();
Route::get('/home', 'HomeController@index')->name('home');
