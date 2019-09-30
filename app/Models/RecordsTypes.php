<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class RecordsTypes extends Model
{
    use Notifiable;

    protected $table = 'records_types';

    protected $fillable = [
        'id',
        'id_user',
        'id_record',
        'key',
        'group',
        'status',
    ];

}
