<?php

use Illuminate\Support\Facades\Route;

// Web api
require 'web/auth.php';

// Vue
Route::get('/', function () {
	return view('vue');
})->name('login');

// Vue last
if (!app()->runningUnitTests()) {
	Route::fallback(function () {
		return view('vue');
	});
}
