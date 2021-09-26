<?php
/*
 * Copyright (c) YukiDub. Author: M9snikFeed <m9snikfeed@gmail.com>.
 *
 * 18.9.2021
 */

namespace App\Services\AuthServices;

use App\Exceptions\AuthException;
use App\Models\OauthUserLogin;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;
use Laravel\Socialite\Facades\Socialite;

class SocialAuthService
{
<<<<<<< HEAD
    protected string $provider;
    protected string $accessToken;
    protected string $refreshToken;
    protected string $tokenType = "Bearer";
=======
    protected $provider;
    protected $accessToken;
    protected $refreshToken;
    protected $tokenType = 'Bearer';
>>>>>>> b5ff7be4efed93c02586ea0bcf1623f32daae17e
    protected $expiresIn;
    private $user;
    protected $userProviderId;

    /**
     * @param $provider
     *
     * @return $this
     */
    public function setProvider($provider): SocialAuthService
    {
        $this->provider = $provider;
        return $this;
    }

<<<<<<< HEAD
    /**
     * @throws AuthException
     */
    public function callback() : SocialAuthService
=======
    public function callback(): SocialAuthService
>>>>>>> b5ff7be4efed93c02586ea0bcf1623f32daae17e
    {
        $token = Socialite::driver($this->provider);
        $externalUser = $token->user();

        $this->userProviderId = $externalUser->getId();

        $userData = [];

        if(!is_null($externalUser->getEmail())){
            $login = User::where('email', '=', $externalUser->getEmail())
                ->first();

            $login = $login ? $login->oauthLogins()->where('provider', '!=', $this->provider)->first() : $login;

            if (!is_null($login)){
                throw new AuthException('User with this email is already registered');
            }

            $userData['email'] = $externalUser->getEmail();
        }

        if(!is_null($externalUser->getNickname())){
            $login = User::where('name', '=', $externalUser->getNickname())
                ->first();

            $login = $login ? $login->oauthLogins()->where('provider', '!=', $this->provider)->first() : $login;

            if ($login){
                $userData['name'] = $externalUser->getNickname();
                $userData['email_verified_at'] = date("Y-m-d H:i:s");
            }
        }

        $login = OauthUserLogin::where('provider', $this->provider)
            ->where('provider_user_id', '=', $externalUser->getId())
            ->first();

<<<<<<< HEAD
        if(!$login){
            $this->user = \App\Models\User::firstOrCreate($userData);
=======
        if (!$login) {
            $this->user = \App\Models\User::firstOrCreate([
                'email'            => $externalUser->getEmail(),
                'email_verified_at'=> date('Y-m-d H:i:s'),
            ]);
>>>>>>> b5ff7be4efed93c02586ea0bcf1623f32daae17e

            OauthUserLogin::create([
                'user_id'         => $this->user->id,
                'provider'        => $this->provider,
                'provider_user_id'=> $externalUser->getId(),
            ]);
        } else {
            $this->user = \App\Models\User::find($login->user_id);
        }

        return $this;
    }

    public function chekActive(): bool
    {
        return $this->user->active;
    }

    /**
     * @throws Exception
     */
    public function login(): SocialAuthService
    {
        $client = DB::table('oauth_clients')
            ->where('password_client', true)
            ->first();

        $data = [
<<<<<<< HEAD
            'grant_type' => $this->provider,
            'client_id' => $client->id,
=======
            'grant_type'    => 'google',
            'client_id'     => $client->id,
>>>>>>> b5ff7be4efed93c02586ea0bcf1623f32daae17e
            'client_secret' => $client->secret,
            'google_id'     => $this->userProviderId,
            'scope'         => '*',
        ];

        $request = Http::asForm()->post(config('app.url').'/oauth/token', $data);
        $tokens = $request->json();

        $this->accessToken = $tokens['access_token'];
        $this->refreshToken = $tokens['refresh_token'];
        $this->tokenType = $tokens['token_type'];
        $this->expiresIn = $tokens['expires_in'];

        return $this;
    }

    public function getUser(): User
    {
        return $this->user;
    }

    public function redirect()
    {
        return Socialite::driver($this->provider)
            ->redirect();
    }

    public function getAccessToken(): string
    {
        return $this->accessToken;
    }

    public function getRefreshToken(): string
    {
        return $this->refreshToken;
    }

    public function getTokenType(): string
    {
        return $this->tokenType;
    }

    public function expiresIn(): string
    {
        return $this->expiresIn;
    }
}
