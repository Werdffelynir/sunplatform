<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class PermissionsTypes extends Model
{
    use Notifiable;

    protected $table = 'permissions_types';

    protected $fillable = [
        'id',
        'id_user',
        'id_permission',
        'status',
    ];

}
