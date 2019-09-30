<?php

namespace App\Http\Controllers\Api\Domains;


use \Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use \App\Models\Domains;

class DomainsController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
//        $credentials = $request->only('email', 'password');
//        $token = Auth::user()->createToken(config('app.name'));
    }


    public function register(Request $request)
    {
        $user = Auth::user();
        $errors = $ok = null;
        $param = $request->only('address', 'active');
        $data = ['address' => $param['address'],'status' => $param['active'],'uid' => $user->id];

        try {
            $ok = Domains::create($data);
        } catch (\Illuminate\Database\QueryException $error) {
            $errors = $error->getCode() .'||'. $error->getMessage();
        }

        if ($ok)
            return response()->json([
                'message' => 'Register domain "'.$param['address'].'" is success',
                'data' => $data,
            ]);
        else
            return response()->json([
                'message' => 'Error of creation new domain record',
                'errors' => $errors
            ]);
    }


}
