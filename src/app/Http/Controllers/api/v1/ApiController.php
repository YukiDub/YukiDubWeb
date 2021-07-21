<?php

/*
 * Copyright (c) YukiDub. Author: M9snikFeed <m9snikfeed@gmail.com>.
 */

namespace App\Http\Controllers\api\v1;


/**
 * @OA\Info(
 *     title="YukiDub API documentation",
 *     version="1.0.0",
 *     @OA\Contact(
 *         email="admin@example.com"
 *     ),
 *     @OA\License(
 *         name="Apache 2.0",
 *         url="https://www.apache.org/licenses/LICENSE-2.0.html"
 *     )
 * )
 * @OA\Tag(
 *     name="People",
 * )
 *
 * @OA\Tag(
 *     name="Genres",
 *     description="for anime, manga, ranobe, genres"
 * )
 *
 * @OA\Tag(
 *     name="Anime"
 * )
 *
 * @OA\Tag(
 *     name="Manga"
 * )
 *
 * @OA\Tag(
 *     name="Ranobe"
 * )
 *
 * @OA\Tag(
 *     name="Users"
 * )
 *
 * @OA\Server(
 *     description="Default server",
 *     url="http://localhost/api/v1"
 * )
 * @OA\SecurityScheme(
 *     type="apiKey",
 *     in="header",
 *     name="X-APP-ID",
 *     securityScheme="X-APP-ID"
 * )
 */

use App\Http\Controllers\Controller;

class ApiController extends Controller
{
    protected function recordExists($record)
    {
        if(!$record){
            abort(404);
        }
    }
}
