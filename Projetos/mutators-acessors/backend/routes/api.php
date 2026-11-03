<?php

use App\Http\Controllers\SongController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Instanciar novo registro no banco
Route::post('/register-song', [SongController::class, 'store']);
Route::get('/get-song/{id}', [SongController::class, 'show']);
