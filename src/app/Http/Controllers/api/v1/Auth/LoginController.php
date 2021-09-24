<?php

namespace App\Http\Controllers\api\v1\Auth;

use App\Http\Controllers\api\v1\ApiController;
use App\Http\Requests\LoginRequest;
use App\Services\AuthServices\AuthService;
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
        $user = (new AuthService())->login($request->get('email'), $request->get('password'));

        return redirect('index#access_token='. $user->getAccessToken() . "&refresh_token=" . $user->getRefreshToken());
    }


    /**
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\Response
     * @throws \Exception
     */
    function getAccessToken(Request $request)
    {
        $token =  AuthService::updateAccessToken($request->get('refresh_token'));

        return $this->response->json(['refresh_token'=>$token]);
    }
}
