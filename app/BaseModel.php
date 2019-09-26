<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class BaseModel extends Model
{
    use Notifiable;

    protected $dateFormat = 'd.m.Y H:i:s';
}
