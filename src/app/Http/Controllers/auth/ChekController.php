<?php

namespace App\Http\Controllers\auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class ChekController extends Controller
{
    function userName($name){

    }

    function email($email){
        $user = User::where('email', '=', $email)->first();

        if(is_null($user)){
            return false;
        }
        else{
            response()->json(['status'=>false]);
        }
    }
}
