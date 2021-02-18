<?php

use Illuminate\Support\Facades\Route;

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

Route::get('/', function () {
    return view('shaghaf');
});
Route::get('/add_service', function () {
    return view('add_service');
});
Route::get('/my_account', function () {
    return view('my_account');
});
Route::get('/my_account_2', function () {
    return view('my_account_2');
});
Route::get('/orders', function () {
    return view('orders');
});
Route::get('/orders_details', function () {
    return view('orders_details');
});
Route::get('/orders_2', function () {
    return view('orders_2');
});
Route::get('/orders_details_2', function () {
    return view('orders_details_2');
});
Route::get('/our_serve', function () {
    return view('our_serve');
});
Route::get('/serve_user', function () {
    return view('serve_user');
});
