<?php

namespace App\Http\Controllers;

use App\Models\Song;
use Illuminate\Http\Request;

class SongController extends Controller
{
    public function store(Request $request)
    {
        $data = $request->validate([
            'name'    => 'nullable|string',
            'seconds' => 'nullable|integer|min:0',
        ]);

        $song = Song::create($data);

        return response()->json([
            "message" => "Dados registrados no banco e formatados com sucesso",
            "data"    => $song,
        ], 201);
    }

    public function show(int $id)
    {
        $data = Song::findOrFail($id);

        return response()->json([
            "message" => "Dados transformados e retornados com sucesso",
            "data" => $data
        ], 200);
    }
}
