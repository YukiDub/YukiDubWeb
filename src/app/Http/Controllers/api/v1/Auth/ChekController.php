<?php
/*
 * Copyright (c) YukiDub. Author: M9snikFeed <m9snikfeed@gmail.com>.
 *
 * 15.10.2021
 */

namespace App\Http\Controllers\api\v1\Auth;

use App\Http\Controllers\api\v1\ApiController;
use App\Models\User;

class ChekController extends ApiController
{
    function userName($name){
        $user = User::where('name', '=', $name)->first();

        if(is_null($user)){
            return $this->response->json(['status'=>false]);
        }

        return $this->response->json(['status'=>true]);
    }

    function email($email){
        $user = User::where('email', '=', $email)->first();

        if(is_null($user)){
            return $this->response->json(['status'=>false]);
        }

        return $this->response->json(['status'=>true]);
    }
}
