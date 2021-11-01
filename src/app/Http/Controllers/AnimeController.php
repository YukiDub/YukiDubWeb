<?php

namespace App\Http\Controllers;

use App\Models\Anime;
use Illuminate\Routing\Controller as BaseController;

class AnimeController extends BaseController
{
    public function view()
    {
        return \View(
            'animesList',
            [
                'animes'=> Anime::with('genres')->paginate(9),
            ]
        );
    }
}
