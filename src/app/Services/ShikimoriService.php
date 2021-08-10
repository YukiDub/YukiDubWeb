<?php
/*
 * Copyright (c) YukiDub. Author: M9snikFeed <m9snikfeed@gmail.com>.
 *
 * 10.8.2021
 */

namespace App\Services;

use Illuminate\Support\Facades\Http;
use Mockery\Exception;
use function PHPUnit\Framework\isNan;

class ShikimoriService
{
    protected $url;
    protected $token;

    public function __construct()
    {
        $this->url = config('services.shikimori.url');
    }

    public function send(string $type, $path, $data = []){
        $response =  Http::withUserAgent('YukiDub-parser')
                ->$type($this->url . $path, $data);
        $data = $response->json();

        if(array_key_exists('message', $data)){
            throw new Exception('not found');
        };
        return $data;
    }

    public function getPeopleById($id){
        $path = 'people/' . $id;
        return $this->send('get', $path);
    }
}