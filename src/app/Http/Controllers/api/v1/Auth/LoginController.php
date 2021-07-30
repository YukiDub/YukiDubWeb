<?php

namespace App\Http\Controllers\api\v1\Auth;

use App\Http\Controllers\api\v1\ApiController;
use App\Http\Requests\LoginRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class LoginController extends ApiController
{
    /**
     * @return \Symfony\Component\HttpFoundation\Response
     * @throws \Exception
     *
     * @OA\Get (
     *     path="/auth/login",
     *     tags = {"Auth"},
     *
     *     @OA\Response(
     *         response="200",
     *         description="....",
     *         @OA\MediaType(mediaType="application/json")
     *     )
     *
     * )
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
            'scope'=>'*'
        ];

        $request = Request::create('/oauth/token', 'POST', $data);
        $data = json_decode(app()->handle($request)->getContent());

        return redirect('index#access_token='. $data->access_token . "&refresh_token=$data->refresh_token");
    }


    /**
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\Response
     * @throws \Exception
     */
    function getAccessToken(Request $request): \Symfony\Component\HttpFoundation\Response
    {
        $client = DB::table('oauth_clients')
            ->where('password_client', true)
            ->first();

        $data = [
            'grant_type' => 'refresh_token',
            'refresh_token' => $request->get('refresh_token'),
            'client_id' => $client->id,
            'client_secret' => $client->secret,
            'scope'=>'*'
        ];

        $request = Request::create('/oauth/token', 'POST', $data);
        return app()->handle($request);
    }
}
