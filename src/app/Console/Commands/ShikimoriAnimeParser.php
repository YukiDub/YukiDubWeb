<?php

namespace App\Console\Commands;

use App\Exceptions\ShikimoriException;
use App\Facades\ImageService;
use App\Models\Anime;
use App\Models\AnimeStudio;
use App\Models\Genre;
use App\Models\Score;
use App\Services\Shikimori\ShikimoriService;
use Illuminate\Console\Command;
use Illuminate\Database\QueryException;
use Illuminate\Support\Facades\Log;

class ShikimoriAnimeParser extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'shiki:anime';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'shikimori people(staff) parser';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $shikiService = new ShikimoriService();
        for ($id = 1; $id <= 400; $id++){
            try{
                $animeParse = $shikiService->getAnimeById($id);
                $this->alert('parsing new anime');
                $score = Score::create();

                $imageOriginalPath = 'https://shikimori.one' . $animeParse['image']['original'];
                $imagePreviewPath = 'https://shikimori.one' . $animeParse['image']['preview'];
                $imageX96Path = 'https://shikimori.one' . $animeParse['image']['x96'];
                $imageX48nalPath = 'https://shikimori.one' . $animeParse['image']['x48'];

                $anime = Anime::create([
                    'mal_id'=>$animeParse['id'],
                    'shiki_score'=>$animeParse['score'],
                    "poster_original"=>ImageService::remoteUpload($imageOriginalPath, 'images/animes/original'),
                    "poster_preview"=>ImageService::remoteUpload($imagePreviewPath, 'images/animes/preview'),
                    "poster_x96"=>ImageService::remoteUpload($imageX96Path, 'images/animes/x96'),
                    "poster_x48"=>ImageService::remoteUpload($imageX48nalPath, 'images/animes/x48'),
                    "type"=>$animeParse['kind'],
                    "episodes"=>(int)$animeParse['episodes'] ? $animeParse['episodes'] : 0,
                    "episodes_released"=>(int)
                          $animeParse['episodes_aired'] ? $animeParse['episodes_aired']
                        : ($animeParse['status'] == 'released' ? $animeParse['episodes'] : 0),
                    "next_episode_at"=>null,
                    "episode_duration"=>$animeParse['duration'] ? date('G:i:s', mktime(0, $animeParse['duration'], 0)) : null,
                    "status"=>$animeParse['status'],
                    "aired_on"=> (int)$animeParse['aired_on'] ? $animeParse['aired_on'] : null,
                    "released_on"=> (int)$animeParse['released_on'] ? $animeParse['released_on'] : null,
                    "age_rating"=> $animeParse['rating'] ?: null,
                    "name_jp"=>$animeParse['japanese'][0],
                    "name_en"=>$animeParse['name'],
                    "name_ru"=> $animeParse['russian'] ?: null,
                    "description_ru"=>$animeParse['description'] ?: null,
                    "description_ru_source"=>'https://shikimori.one/animes/' . $id,
                    'score'=>$score->score_id
                ]);

                foreach ($animeParse['studios'] as $studioItem){
                    if(empty($studio = AnimeStudio::where('name', '=', $studioItem['name'])->first())){
                        $studio = AnimeStudio::create(['name'=>$studioItem['name']]);
                    }
                    $anime->studios()->attach($studio);
                }

                foreach ($animeParse['genres'] as $genreItem){
                    $genre = Genre::where('nameEn', '=', $genreItem['name'])->first();
                    $anime->genres()->attach($genre);
                }
            }
           catch (QueryException $queryException){

           }
           catch (ShikimoriException $shikiEx){
                Log::emergency($shikiEx);
           }
                $this->alert("sleeping");
                sleep(rand(20,60));
        }
    }
}
