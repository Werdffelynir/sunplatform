<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class ServicesTypes extends Model
{
    use Notifiable;

    protected $table = 'services_types';

    protected $fillable = [
        'id',
        'id_user',
        'id_service',
        'status',
    ];
}
