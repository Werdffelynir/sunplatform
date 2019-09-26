<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class Users extends Authenticatable
{
    use Notifiable;

    protected $table = 'users';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'real_name',
        'company',
        'company_spec',
        'requisites',
        'address',
        'phone',
        'currency',
        'avatar',
        'created_at',
        'updated_at',
        'email',
        'password',
    ];
}
