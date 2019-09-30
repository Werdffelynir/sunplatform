<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Permissions extends Model
{
    use Notifiable;

    protected $table = 'permissions';

    protected $fillable = [
        'id',
        'id_service',
        'access',
    ];
}
