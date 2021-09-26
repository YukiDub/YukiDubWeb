<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Third Party Services
    |--------------------------------------------------------------------------
    |
    | This file is for storing the credentials for third party services such
    | as Mailgun, Postmark, AWS and more. This file provides the de facto
    | location for this type of information, allowing packages to have
    | a conventional file to locate the various service credentials.
    |
    */

    'mailgun' => [
        'domain'   => env('MAILGUN_DOMAIN'),
        'secret'   => env('MAILGUN_SECRET'),
        'endpoint' => env('MAILGUN_ENDPOINT', 'api.mailgun.net'),
    ],

    'postmark' => [
        'token' => env('POSTMARK_TOKEN'),
    ],

    'ses' => [
        'key'    => env('AWS_ACCESS_KEY_ID'),
        'secret' => env('AWS_SECRET_ACCESS_KEY'),
        'region' => env('AWS_DEFAULT_REGION', 'us-east-1'),
    ],

    'shikimori'=> [
        'url'   => env('SHIKIMORI_API_URL'),
        'client'=> env('SHIKIMORI_CLIENT_ID'),
        'secret'=> env('SHIKIMORI_SECRET'),
    ],

<<<<<<< HEAD
    'google'=>[
        'redirect'=>env('GOOGLE_API_REDIRECT', 'http://dev.yukidub.fun/auth/google/callback'),
        'client_id'=>env('GOOGLE_API_CLIENT_ID'),
        'client_secret'=>env('GOOGLE_API_CLIENT_SECRET'),
    ],

    'vkontakte' => [
        'client_id' => env('VKONTAKTE_CLIENT_ID'),
        'client_secret' => env('VKONTAKTE_CLIENT_SECRET'),
        'redirect' => env('VKONTAKTE_REDIRECT_URI')
=======
    'google'=> [
        'redirect'     => env('GOOGLE_API_REDIRECT', 'http://dev.yukidub.fun/auth/google/callback'),
        'client_id'    => env('GOOGLE_API_CLIENT_ID'),
        'client_secret'=> env('GOOGLE_API_CLIENT_SECRET'),
>>>>>>> b5ff7be4efed93c02586ea0bcf1623f32daae17e
    ],

];
