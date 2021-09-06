<?php
/*
 * Copyright (c) YukiDub. Author: M9snikFeed <m9snikfeed@gmail.com>.
 *
 * 10.8.2021
 */

namespace App\Services\Shikimori;

use App\Exceptions\ShikimoriException;
use Illuminate\Support\Facades\Http;

class ShikimoriService
{
    protected $url;
    protected $token;
    protected $userAgent;

    public function __construct()
    {
        $this->url = config('services.shikimori.url');
        $this->userAgent = config('app.name');
    }

    /**
     * @param string $type
     * @param $path
     * @param array $data
     * @return mixed
     * @throws ShikimoriException
     */
    public function collApi(string $type, $path, array $data = []){
        $response =  Http::withUserAgent($this->userAgent)
                ->$type($this->url . $path, $data);
        $data = $response->json();

        if($response->serverError()){
            throw new ShikimoriException('Server error');
        }
        if($response->status()){
            throw new ShikimoriException('Not found');
        }

        return $data;
    }

    /**
     * @param int $id
     * @return mixed
     * @throws ShikimoriException
     */
    public function getPeopleById(int $id){
        try{
            $path = 'people/' . $id;
            return $this->collApi('get', $path);
        }
        catch (ShikimoriException $ex){
            throw new ShikimoriException('People not found');
        }
    }

    /**
     * @param int $id
     * @return mixed
     * @throws ShikimoriException
     */
    public function getCharacterById(int $id){
        try{
            $path = 'characters/' . $id;
            return $this->collApi('get', $path);
        }
        catch (ShikimoriException $ex){
            throw new ShikimoriException('Character not found');
        }
    }

    /**
     * @param int $id
     * @return mixed
     * @throws ShikimoriException
     */
    public function getAnimeById(int $id){
        try{
            $path = 'animes/' . $id;
            return $this->collApi('get', $path);
        }
        catch (ShikimoriException $ex){
            throw new ShikimoriException('Anime not found');
        }
    }

    public function getUrl(){
        return $this->url;
    }
}