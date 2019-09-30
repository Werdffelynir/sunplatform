<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class DomainsTypes extends Model
{
    use Notifiable;

    protected $table = 'domains_types';

    protected $fillable = [
        'id',
        'id_domain',
        'id_service',
        'id_user',
        'status',
    ];

    protected $hidden = [];

    protected $casts = [];
}
