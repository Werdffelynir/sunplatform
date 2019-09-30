<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class RecordsFields extends Model
{
    use Notifiable;

    protected $table = 'records_fields';

    protected $fillable = [
        'id',
        'id_record',
        'type',
        'body',
    ];

    protected $hidden = [];

    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];
}
