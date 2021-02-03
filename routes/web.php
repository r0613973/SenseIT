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
Route::get('/logout', 'LoginController@logout');

Route::redirect('home', '/');
Route::post('/registreer', 'RegistreerController@Post')->name('registreer.post');
Route::post('/login', 'LoginController@Login')->name('login');
Route::view('/login','auth.login');

Route::middleware(['auth'])->group(function () {
    Route::get('/temperatuur', 'MeasurementController@temperatuur');
    Route::get('/luchtkwaliteit', 'MeasurementController@luchtkwaliteit');
    Route::get('/luchtvochtigheid', 'MeasurementController@luchtvochtigheid');
    Route::view('/locatie', 'data-schermen/locatie');
    Route::get('/zonlicht', 'MeasurementController@zonlicht');

   
    Route::view('/sateliet', 'data-schermen/sateliet');

    Route::get('/', 'HomeController@index');

});

Route::middleware(['auth'])->prefix('admin')->group(function () {

    //voorbeeld code uit de cursus

    /*    route::redirect('/', 'records');
        Route::get('records', 'Admin\RecordController@index');*/
});


//Route::get('/home', 'HomeController@index')->name('home');
