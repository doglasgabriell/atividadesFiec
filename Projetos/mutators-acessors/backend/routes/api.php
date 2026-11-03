<?php

use App\Http\Controllers\SongController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Instanciar novo registro no banco
Route::post('/register-song', [SongController::class, 'store']);
// http://127.0.0.1:8000/api/register-song

Route::get('/get-song/{id}', [SongController::class, 'show']);
// http://127.0.0.1:8000/api/get-song/