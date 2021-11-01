<?php
/*
 * Copyright (c) YukiDub. Author: M9snikFeed <m9snikfeed@gmail.com>.
 *
 * 18.9.2021
 */

namespace App\Http\Controllers\api\v1\Auth;

use App\Services\AuthServices\SocialAuthService;
use Illuminate\Http\Request;

class SocialLoginController
{
    protected SocialAuthService $socialAuthService;

    public function __construct()
    {
        $this->socialAuthService = new SocialAuthService();
    }

    public function redirect($provider): \Symfony\Component\HttpFoundation\RedirectResponse
    {
        return $this->socialAuthService
            ->setProvider($provider)
            ->redirect();
    }

    public function login($provider)
    {
        $socialUser = $this->socialAuthService
            ->setProvider($provider)
            ->callback()
            ->login();

        if (!$socialUser->chekActive()) {
            \Auth::login($socialUser->getUser());

            return view('Auth.Registration.completion', [
                'user'         => $socialUser->getUser(),
                'refresh_token'=> $socialUser->getRefreshToken(),
                'access_token' => $socialUser->getAccessToken(),
                'token_type'   => $socialUser->getTokenType(),
                'expires_in'   => $socialUser->expiresIn(),
            ]);
        }

        return redirect()->route('auth.success', [
            'access_token'  => $socialUser->getAccessToken(),
            'token_type'    => $socialUser->getTokenType(),
            'expires_in'    => $socialUser->expiresIn(),
            'refresh_token' => $socialUser->getRefreshToken(),
        ]);
    }

    public function completion(Request $request): \Illuminate\Http\RedirectResponse
    {
        $user = auth()->user();

        if (!$user->name) {
            $user->name = $request->get('name');
        }

        if (!$user->email) {
            $user->email = $request->get('email');
        }

        $user->password = bcrypt($request->get('password'));

        $user->active = true;
        $user->save();

        return redirect()->route('auth.success', [
            'access_token'  => $request->get('access_token'),
            'token_type'    => $request->get('token_type'),
            'expires_in'    => $request->get('expires_in'),
            'refresh_token' => $request->get('refresh_token'),
        ]);
    }
}
