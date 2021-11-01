<?php

namespace App\Http\Controllers\api\v1\Auth;

use App\Exceptions\AuthException;
use App\Http\Controllers\api\v1\ApiController;
use App\Services\AuthServices\AuthService;
use Illuminate\Http\Request;

class LoginController extends ApiController
{
    /**
     *@throws \Exception
     *
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
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
    public function login(Request $request)
    {
        try {
            $user = (new AuthService())->login($request->get('name'), $request->get('password'));

            return redirect(config('app.url').'/auth/success#access_token='.$user->getAccessToken().'&refresh_token='.$user->getRefreshToken());
        } catch (AuthException $ex) {
            return view('login', ['error'=>true]);
        }
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
