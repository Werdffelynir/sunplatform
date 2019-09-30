<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Services extends Model
{
    use Notifiable;

    protected $table = 'services';

    protected $fillable = [
        'id',
        'name',
        'public_key',
    ];

    protected $hidden = [
        'private_key'
    ];

    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
        'actived_to' => 'datetime',
    ];
}
