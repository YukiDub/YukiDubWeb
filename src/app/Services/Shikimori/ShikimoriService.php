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
    protected $userAgent;

    public function __construct()
    {
        $this->userAgent = config('app.name');
        $this->url = config('services.shikimori.url');
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
//        if($response->status()){
//            throw new ShikimoriException('Not found');
//        }

        return $data;
    }

    /**
     * @param int $id
     * @return mixed
     * @throws ShikimoriException
     */
    public function getPeopleById(int $id){
        try{
            $path = 'api/people/' . $id;
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
            $path = 'api/characters/' . $id;
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
            $path = 'api/animes/' . $id;
            return $this->collApi('get', $path);
        }
        catch (ShikimoriException $ex){
            throw new ShikimoriException('Anime not found');
        }
    }

    public function getUrl(){
        return $this->url;
    }

    /**
     * @param \Illuminate\Config\Repository|\Illuminate\Contracts\Foundation\Application|mixed $secret
     */
    public function setSecret($secret): void
    {
        $this->secret = $secret;
    }

    /**
     * @param \Illuminate\Config\Repository|\Illuminate\Contracts\Foundation\Application|mixed $clientId
     */
    public function setClientId($clientId): void
    {
        $this->clientId = $clientId;
    }

    /**
     * @param \Illuminate\Config\Repository|\Illuminate\Contracts\Foundation\Application|mixed $userAgent
     */
    public function setUserAgent($userAgent): void
    {
        $this->userAgent = $userAgent;
    }

    /**
     * @param array $scopes
     */
    public function setScopes(array $scopes): void
    {
        $this->scopes = $scopes;
    }
}