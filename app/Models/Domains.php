<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\DB;

class Domains extends Model
{
    use Notifiable;

    protected $table = 'domains';

    public static function create($data) {
        DB::beginTransaction();

        $idDomain = DB::table('domains')->insertGetId([
            'address' => $data['address']
            ]);

        $result = DB::table('domains_types')->insert([
            'status' => $data['status'] ? 1 : 0,
            'id_user' => $data['uid'],
            'id_domain' => $idDomain,
            ]);

        DB::commit();
        return $result;
    }
}
