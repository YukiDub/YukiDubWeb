<?php
/*
 * Copyright (c) YukiDub. Author: M9snikFeed <m9snikfeed@gmail.com>.
 *
 * 18.9.2021
 */

namespace App\Http\Controllers\api\v1\Auth;

use App\Http\Requests\SocialRegRequest;
use App\Services\AuthServices\SocialAuthService;
use Illuminate\Http\Request;

class SocialLoginController
{
    protected $socialAuthService;

    public function __construct()
    {
        $this->socialAuthService = new SocialAuthService();
    }

    public function redirect($provider){
        return $this->socialAuthService
            ->setProvider($provider)
            ->redirect();
    }

    public function login($provider){
        $auth = $this->socialAuthService
            ->setProvider($provider)
            ->callback()
            ->login();

        if (!$auth->chekActive()){
            \Auth::login($auth->getUser());

            return view('Auth.Registration.completion', [
                'user'=>$auth->getUser(),
                'refresh_token'=>$auth->getRefreshToken(),
                'access_token'=>$auth->getAccessToken(),
                'token_type'=> $auth->getTokenType(),
                'expires_in'=> $auth->expiresIn()
            ]);
        }

        return redirect()->route('auth.success',[
            'access_token'=> $auth->getAccessToken(),
            'token_type'=> $auth->getTokenType(),
            'expires_in' => $auth->expiresIn(),
            'refresh_token' => $auth->getRefreshToken()
        ]);

    }

    public function completion(Request $request){
        $user = auth()->user();

        if(!$user->name){
            $user->name = $request->get('name');
        }

        if(!$user->email){
            dd('oops');
            $user->email = $request->get('email');
        }

        $user->password = bcrypt($request->get('password'));

        $user->active = true;
        $user->save();

        return redirect()->route('auth.success',[
            'access_token'=> $request->get('access_token'),
            'token_type' => $request->get('token_type'),
            'expires_in' => $request->get('expires_in'),
            'refresh_token' => $request->get('refresh_token')
        ]);
    }
}