<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Records extends Model
{
    use Notifiable;

    protected $table = 'records';
    protected $dateFormat = 'd.m.Y H:i:s';

    protected $fillable = [
        'id',
        'key',
        'name',
        'title',
        'body',
        'options',
    ];

    protected $hidden = [];

    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];
}
