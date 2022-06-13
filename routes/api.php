<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\StockController;
use App\Http\Controllers\UserController;
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

// Test app without auth func
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('stock')->group(function () {
    Route::get('/get-all', [StockController::class, 'index']);
    Route::post('/create', [StockController::class, 'store']);
    Route::delete('/delete', [StockController::class, 'destroy']);
    Route::patch('/update', [StockController::class, 'update']);
});

Route::prefix('client')->group(function () {
    Route::get('/get-all', [UserController::class, 'index']);
    Route::post('/create', [UserController::class, 'create']);
    Route::patch('/buy-stock', [StockController::class, 'buyStock']);
    Route::get('/personal-data', [UserController::class, 'getClientById']);
});
