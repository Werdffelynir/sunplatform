<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class RolesTypes extends Model
{
    use Notifiable;

    protected $table = 'roles_types';

    protected $fillable = [
        'id',
        'id_role',
        'id_user',
    ];

}
