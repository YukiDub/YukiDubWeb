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
    protected string $provider;
    protected string $accessToken;
    protected string $refreshToken;
    protected string $tokenType = "Bearer";
    protected $expiresIn;
    private $user;
    protected $userProviderId;

    /**
     * @param $provider
     * @return $this
     */
    public function setProvider($provider): SocialAuthService
    {
        $this->provider = $provider;
        return $this;
    }

    /**
     * @throws AuthException
     */
    public function callback() : SocialAuthService
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

        if(!$login){
            $this->user = \App\Models\User::firstOrCreate($userData);

            OauthUserLogin::create([
                'user_id'=>$this->user->id,
                'provider'=>$this->provider,
                'provider_user_id'=>$externalUser->getId()
            ]);
        }
        else{
            $this->user = \App\Models\User::find($login->user_id);
        }

        return $this;
    }

    public function chekActive(): bool {
        return $this->user->active;
    }

    /**
     * @throws Exception
     */
    public function login() : SocialAuthService
    {
        $client = DB::table('oauth_clients')
            ->where('password_client', true)
            ->first();

        $data = [
            'grant_type' => $this->provider,
            'client_id' => $client->id,
            'client_secret' => $client->secret,
            'google_id' => $this->userProviderId,
            'scope'=>'*'
        ];

        $request = Http::asForm()->post(config('app.url').'/oauth/token', $data);
        $tokens = $request->json();

        $this->accessToken = $tokens['access_token'];
        $this->refreshToken = $tokens['refresh_token'];
        $this->tokenType = $tokens['token_type'];
        $this->expiresIn = $tokens['expires_in'];

        return $this;
    }

    public function getUser(): User{
        return $this->user;
    }

    public function redirect()
    {
        return Socialite::driver($this->provider)
            ->redirect();
    }

    public function getAccessToken(): string{
        return $this->accessToken;
    }

    public function getRefreshToken(): string{
        return $this->refreshToken;
    }

    public function getTokenType(): string {
        return $this->tokenType;
    }

    public function expiresIn(): string {
        return $this->expiresIn;
    }
}
