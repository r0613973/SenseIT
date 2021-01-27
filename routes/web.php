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
Auth::routes();
Route::view('/', 'home');
Route::redirect('home', '/');
Route::get('logout', 'Auth\LoginController@logout');
Route::get('/temperatuur', 'TemperatuurController@index');
Route::view('/luchtkwaliteit', 'data-schermen/luchtkwaliteit');
Route::get('/luchtvochtigheid', 'LuchtvochtigheidController@index');
Route::view('/locatie', 'data-schermen/locatie');
Route::view('/zonlicht', 'data-schermen/zonlicht');

Route::middleware(['auth'])->prefix('admin')->group(function () {

    //voorbeeld code uit de cursus

    /*    route::redirect('/', 'records');
        Route::get('records', 'Admin\RecordController@index');*/
});


//Route::get('/home', 'HomeController@index')->name('home');
