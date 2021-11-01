<?php

namespace App\Http\Controllers\auth;

use App\Http\Controllers\Controller;
use App\Models\User;

class ChekController extends Controller
{
    public function userName($name)
    {
    }

    public function email($email)
    {
        $user = User::where('email', '=', $email)->first();

        if (is_null($user)) {
            return false;
        } else {
            response()->json(['status'=>false]);
        }
    }
}
