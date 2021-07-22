<?php

namespace App\Http\Controllers\api\v1\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class LoginController extends Controller
{
    /**
     * @return \Symfony\Component\HttpFoundation\Response
     * @throws \Exception
     */
    function login(LoginRequest $request): \Symfony\Component\HttpFoundation\Response
    {
        $client = DB::table('oauth_clients')
            ->where('password_client', true)
            ->first();


        $data = [
            'grant_type' => 'password',
            'client_id' => $client->id,
            'client_secret' => $client->secret,
            'username' => $request->get('email'),
            'password' => $request->get('password'),
        ];

        $request = Request::create('/oauth/token', 'POST', $data);

        return app()->handle($request);
    }
}
