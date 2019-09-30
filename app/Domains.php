<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Domains extends Model
{
    use Notifiable;

    protected $table = 'domains';

/*    protected $fillable = [
        'address',
    ];

    protected $hidden = [];

    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
        'actived_to' => 'datetime',
    ];*/
}
