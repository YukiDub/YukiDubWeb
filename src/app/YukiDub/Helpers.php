<?php
/*
 * Copyright (c) YukiDub. Author: M9snikFeed <m9snikfeed@gmail.com>.
 *
 * 21.7.2021
 */

use Illuminate\Http\JsonResponse;

function notFoundRequest(): JsonResponse{
    return response()->json(['status'=>404, 'message'=>'Not found'], 404);
}