<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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
});
*/
Route::get('/categories', 'Api\CategoryController@index')->name('category');
Route::post('/category/store', 'Api\CategoryController@store')->name('category.store');

Route::get('/category/edit/{id}', 'Api\CategoryController@edit')->name('category.edit');
Route::put('/category/update/{id}', 'Api\CategoryController@update')->name('category.update');

Route::delete('/category/delete/{id}', 'Api\CategoryController@destroy')->name('category.destroy');
