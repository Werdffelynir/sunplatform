<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Roles extends Model
{
    use Notifiable;

    protected $table = 'roles';

    protected $fillable = [
        'id',
        'name',
        'description',
    ];

    protected $hidden = [];

    protected $casts = [];
}
