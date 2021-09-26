<?php

namespace App\Http\Controllers\api\v1\Auth;

use App\Http\Controllers\api\v1\ApiController;
use App\Http\Requests\LoginRequest;
use App\Services\AuthServices\AuthService;
use Illuminate\Http\Request;

class LoginController extends ApiController
{
    /**
     * @throws \Exception
     *
     * @return \Symfony\Component\HttpFoundation\Response
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
    public function login(LoginRequest $request): \Symfony\Component\HttpFoundation\Response
    {
        $user = (new AuthService())->login($request->get('email'), $request->get('password'));

        return redirect('index#access_token='.$user->getAccessToken().'&refresh_token='.$user->getRefreshToken());
    }

    /**
     * @param Request $request
     *
     * @throws \Exception
     *
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function getAccessToken(Request $request)
    {
        $token = AuthService::updateAccessToken($request->get('refresh_token'));

        return $this->response->json(['refresh_token'=>$token]);
    }
}
