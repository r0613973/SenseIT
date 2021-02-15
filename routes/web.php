<?php

use App\Http\Controllers\MeasurementController;
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
    Route::get('/overzicht', 'MeasurementController@overzicht');

    Route::get('/temperatuur', 'MeasurementController@temperatuur');
    Route::get('/bodemTemperatuur', 'MeasurementController@bodemTemperatuur');
    Route::get('/luchtkwaliteit', 'MeasurementController@luchtkwaliteit');
    Route::get('/luchtvochtigheid', 'MeasurementController@luchtvochtigheid');
    Route::get('/bodemvochtigheid', 'MeasurementController@bodemvochtigheid');
    Route::view('/locatie', 'data-schermen/locatie');
    Route::get('/zonlicht', 'MeasurementController@zonlicht');
    Route::get('/tokenQry','MeasurementController@tokenQry');
    Route::get('/maprequeset/{boxid}','MeasurementController@maprequeset')->name('maprequeset.post');
    Route::view('/datatablestest', 'data-schermen/datatablestest');
    Route::get('/sateliet', 'MeasurementController@sateliet');
    Route::get('/datatable', 'MeasurementController@Datatablestest');



    Route::resource('/account', 'AccountController');

    //datatabels calls

    Route::get('/temperatuurmetingen', 'MeasurementController@temperatuurmetingen');
    Route::get('/bodemTemperatuurmetingen', 'MeasurementController@bodemTemperatuurmetingen');
    Route::get('/luchtvochtigheidmetingen', 'MeasurementController@luchtvochtigheidmetingen');
    Route::get('/bodemvochtigheidmetingen', 'MeasurementController@bodemvochtigheidmetingen');
    Route::get('/zonlichtmetingen', 'MeasurementController@zonlichtmetingen');
    Route::get('/luchtkwaliteitMeting', 'MeasurementController@luchtkwaliteitMeting');



    Route::get('/', 'HomeController@index');

    Route::resource('box', 'CrudBoxController');
    Route::get('qryBoxen', 'CrudBoxController@qryBoxen');

    Route::resource('user', 'CrudUserController');
    Route::get('qryUsers', 'CrudUserController@qryUsers');

});

Route::middleware(['auth'])->prefix('admin')->group(function () {



    //voorbeeld code uit de cursus

    /*    route::redirect('/', 'records');
        Route::get('records', 'Admin\RecordController@index');*/
});


//Route::get('/home', 'HomeController@index')->name('home');
