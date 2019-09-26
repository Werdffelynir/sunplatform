<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class DomainsController extends Controller
{
    public function __construct()
    {
        // $this->middleware('auth');
    }

    public function get()
    {
/*        $user = Auth::user();
        $data = [
            'name' => $user->name,
            'email' => $user->email,
            'created_at' => $user->created_at,
        ];

        return response()
            ->json([
                'user' => $data
            ])->getContent();*/
    }


    public function settings () {}

    public function register () {
        $address = trim( \request('address'));

        if ($address) {
            DB::beginTransaction();

            var_dump(Auth::user());

//            $domain = new \App\Domains();
//            $domain->address = $address;
//            $id = $domain->save();

//            $domainType = new \App\DomainsTypes();
//            $domainType->id_domain = $id;
//            $domainType->id_user = Auth::user()->id;

            DB::commit();
        }
    }

}
