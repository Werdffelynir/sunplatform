<?php

namespace App\Http\Controllers\Api\Profile;


use \Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ProfileController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    public function __invoke(Request $request)
    {
        $token = $request->only('token');
        $token = \request('token');
        $credentials = $request->only('email', 'password');

        if (!Auth::attempt(['token'=>$token])) {
            return response()->json([
                'message' => 'You cannot sign with those credentials',
                'errors' => 'Unauthorised'
            ], 401);
        }

        $credentials = ['token'=>$token];

        return response()->json([
            '$request' => $request,
            '$token' => $token,
            'check' => $request->user(),
        ]);
    }

    public function update(Request $request)
    {
        $id = \request('id');
        $user = Auth::user();
        $data = \request([
            'name',
            'real_name',
            'phone',
            'address',
            'avatar',
            'company',
            'company_spec',
            'requisites',
            'currency',
            'email',
        ]);
        $responseData = [
            'message' => 'Profile is updated',
            'errors' => false
        ];

        if ($id && $user->id === $id) {
            $result = \App\Models\Users::updateOne($data, $id);
            if (!$result) {
                $responseData['message'] = 'Profile update have internal error';
                $responseData['errors'] = true;
            }
        } else {
            $responseData['message'] = 'Identify id not recognized';
            $responseData['errors'] = true;
        }

        return response()->json(
            $responseData,
            $responseData['errors'] ? 401 : 200
        );
    }
}
