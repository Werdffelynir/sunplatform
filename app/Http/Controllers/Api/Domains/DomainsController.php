<?php

namespace App\Http\Controllers\Api\Domains;


use \Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use \App\Models\Domains;
use Illuminate\Support\Facades\DB;

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

    public function list(Request $request)
    {
        $user = Auth::user();
        $domains = DB::table('domains as d')
            ->select(['d.*', 'dt.status', 'dt.id_user', 'dt.id_service'])
            ->leftJoin('domains_types as dt', 'd.id', '=', 'dt.id_domain')
            ->leftJoin('users as u', 'u.id', '=', 'dt.id_user')
            ->where('u.id', $user->id)
            ->get();

        $responseData = [
            'message' => 'List of domains is upload',
            'errors' => false
        ];

        if ($domains) {
            unset($responseData['errors']);
            $responseData['list'] = $domains;
        } else {
            $responseData['message'] = 'Internal error';
            $responseData['errors'] = true;
        }

        return response()->json($responseData);
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
