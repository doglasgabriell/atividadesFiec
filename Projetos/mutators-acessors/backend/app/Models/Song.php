<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;


class Song extends Model
{
    protected $fillable = [
        'name',
        'seconds'
    ];

    protected $appends = ['duration_formatted'];

    protected function name(): Attribute
    {
        return Attribute::make(
            set: fn(string $value) => Str::replace('a', 'b', $value)
        );
    }

    protected function durationFormatted(): Attribute
    {
        return Attribute::make(
            get: fn() => sprintf(
                '%02d:%02d',
                intdiv((int) $this->seconds, 60),
                (int) $this->seconds % 60
            ),
        );
    }
}
