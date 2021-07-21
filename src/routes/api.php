<?php
/*
 * Copyright (c) YukiDub. Author: M9snikFeed <m9snikfeed@gmail.com>.
 */

use App\Http\Controllers\api\v1\AnimesApiController;
use App\Http\Controllers\api\v1\GenresApiController;
use App\Http\Controllers\api\v1\PeopleApiController;
use App\Http\Controllers\api\v1\RoleController;
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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});



Route::prefix("v1")->group(function (){
    Route::apiResource("people", PeopleApiController::class);
    Route::get('people/{id}/works', [PeopleApiController::class, "getWorks"]);
    Route::get('people/{id}/roles', [PeopleApiController::class, "getRoles"]);

    Route::apiResource("genres", GenresApiController::class)->only(['index', 'show']);
    Route::apiResource("anime", AnimesApiController::class);

    Route::apiResource("roles", RoleController::class);
});
