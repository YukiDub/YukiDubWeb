<?php
/*
 * Copyright (c) YukiDub. Author: M9snikFeed <m9snikfeed@gmail.com>.
 *
 * 18.9.2021
 */

namespace App\Http\Controllers\api\v1\Auth;

<<<<<<< HEAD

use App\Http\Requests\SocialRegRequest;
=======
>>>>>>> b5ff7be4efed93c02586ea0bcf1623f32daae17e
use App\Services\AuthServices\SocialAuthService;
use Illuminate\Http\Request;

class SocialLoginController
{
    protected SocialAuthService $socialAuthService;

    public function __construct()
    {
        $this->socialAuthService = new SocialAuthService();
    }

<<<<<<< HEAD
    public function redirect($provider): \Symfony\Component\HttpFoundation\RedirectResponse
=======
    public function redirect($provider)
>>>>>>> b5ff7be4efed93c02586ea0bcf1623f32daae17e
    {
        return $this->socialAuthService
            ->setProvider($provider)
            ->redirect();
    }

<<<<<<< HEAD
    public function login($provider){
        $socialUser = $this->socialAuthService
=======
    public function login($provider)
    {
        $auth = $this->socialAuthService
>>>>>>> b5ff7be4efed93c02586ea0bcf1623f32daae17e
            ->setProvider($provider)
            ->callback()
            ->login();

<<<<<<< HEAD
        if (!$socialUser->chekActive()){
            \Auth::login($socialUser->getUser());

            return view('Auth.Registration.completion', [
                'user'=>$socialUser->getUser(),
                'refresh_token'=>$socialUser->getRefreshToken(),
                'access_token'=>$socialUser->getAccessToken(),
                'token_type'=> $socialUser->getTokenType(),
                'expires_in'=> $socialUser->expiresIn()
            ]);
        }

        return redirect()->route('auth.success',[
            'access_token'=> $socialUser->getAccessToken(),
            'token_type'=> $socialUser->getTokenType(),
            'expires_in' => $socialUser->expiresIn(),
            'refresh_token' => $socialUser->getRefreshToken()
=======
        if (!$auth->chekActive()) {
            \Auth::login($auth->getUser());

            return view('Auth.Registration.completion', [
                'user'         => $auth->getUser(),
                'refresh_token'=> $auth->getRefreshToken(),
                'access_token' => $auth->getAccessToken(),
                'token_type'   => $auth->getTokenType(),
                'expires_in'   => $auth->expiresIn(),
            ]);
        }

        return redirect()->route('auth.success', [
            'access_token'  => $auth->getAccessToken(),
            'token_type'    => $auth->getTokenType(),
            'expires_in'    => $auth->expiresIn(),
            'refresh_token' => $auth->getRefreshToken(),
>>>>>>> b5ff7be4efed93c02586ea0bcf1623f32daae17e
        ]);
    }

<<<<<<< HEAD
    public function completion(Request $request): \Illuminate\Http\RedirectResponse
=======
    public function completion(Request $request)
>>>>>>> b5ff7be4efed93c02586ea0bcf1623f32daae17e
    {
        $user = auth()->user();

        if (!$user->name) {
            $user->name = $request->get('name');
        }

<<<<<<< HEAD
        if(!$user->email){
=======
        if (!$user->email) {
            dd('oops');
>>>>>>> b5ff7be4efed93c02586ea0bcf1623f32daae17e
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
