<?php

use App\Http\Controllers\Auth\LocaleController;
use App\Http\Controllers\Auth\LoggedController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\LogoutController;
use App\Http\Controllers\Auth\PasswordResetController;
use App\Http\Controllers\Auth\RegisterController;
use Illuminate\Support\Facades\Route;

Route::middleware(['locales'])->prefix('/web/api')->group(function () {
	Route::get('/locale/{locale}', [LocaleController::class, 'index']);
	Route::get('/logged', [LoggedController::class, 'index']);
	Route::get('/logout', [LogoutController::class, 'index']);
	Route::post('/login', [LoginController::class, 'index']);
	Route::post('/register', [RegisterController::class, 'index']);
	Route::post('/password', [PasswordResetController::class, 'index']);
});
