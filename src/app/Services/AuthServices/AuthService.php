<?php
/*
 * Copyright (c) YukiDub. Author: M9snikFeed <m9snikfeed@gmail.com>.
 *
 * 12.9.2021
 */

namespace App\Services\AuthServices;

use App\Exceptions\AuthException;
use App\Models\User;
use App\Services\AuthServices\External\ExternalAuthInterface;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;

class AuthService
{
    protected $refreshToken = '';
    protected $accessToken = '';

    /**
     * @return string
     */
    public function getRefreshToken(): string
    {
        return $this->refreshToken;
    }

    /**
     * @return string
     */
    public function getAccessToken(): string
    {
        return $this->accessToken;
    }

    public function register(string $name, string $email, string $password)
    {
        return User::create([
            'name'=>$name,
            'email'=>$email,
            'password'=>bcrypt($password)
        ]);
    }

    function login(string $email, string $password)
    {
        $client = DB::table('oauth_clients')
            ->where('password_client', true)
            ->first();

        $data = [
            'grant_type' => 'password',
            'client_id' => $client->id,
            'client_secret' => $client->secret,
            'username' => $email,
            'password' => $password,
            'scope'=>'*'
        ];

        $request = Request::create('/oauth/token', 'POST', $data);
        $data = json_decode(app()->handle($request)->getContent());
        $this->accessToken = $data->access_token;
        $this->refreshToken = $data->refresh_token;

        return $this;
    }

    public static function updateAccessToken($refreshToken){
        $client = DB::table('oauth_clients')
            ->where('password_client', true)
            ->first();

        $data = [
            'grant_type' => 'refresh_token',
            'refresh_token' => $refreshToken,
            'client_id' => $client->id,
            'client_secret' => $client->secret,
            'scope'=>''
        ];

        $response = Http::asForm()->post(config('app.url').'/oauth/token', $data);

        return $response->json();
    }
}