<?php
/*
 * Copyright (c) YukiDub. Author: M9snikFeed <m9snikfeed@gmail.com>.
 *
 * 6.9.2021
 */

namespace App\Services\Shikimori;

use App\Exceptions\ShikimoriException;
use Illuminate\Support\Facades\Http;

class ShikimoriCore
{
    protected $url;
    protected $userAgent;

    public function __construct()
    {
        $this->url = config('services.shikimori.url');
        $this->userAgent = config('app.name');
    }

    /**Ага,
     * @param string $type
     * @param $path
     * @param array $data
     * @return mixed
     * @throws ShikimoriException
     */
    public function collApi(string $type, $path, array $data = [], &$headers = [])
    {
        $headers['Accept'] = 'application/json';

        $response = Http::withUserAgent($this->userAgent)->withHeaders($headers)
            ->$type($this->url.$path, $data);

        $data = $response->json();

        if ($response->serverError()) {
            throw new ShikimoriException('Server error');
        }

        return $data;
    }
}
