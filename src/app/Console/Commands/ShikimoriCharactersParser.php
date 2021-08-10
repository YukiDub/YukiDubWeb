<?php

namespace App\Console\Commands;

use App\Models\Character;
use App\Models\Staff;
use App\Services\ShikimoriService;
use Illuminate\Console\Command;

class ShikimoriCharactersParser extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'shiki:charters';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'shikimori charters parser';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $shikiService = new ShikimoriService();
        $character = new Character();

        try{
            for ($i = 1; $i <= 1000; $i++){
                $charactersParse = $shikiService->getCharactersById($i);
                $this->alert('parsing new character');
                $character->firstOrCreate([
                    'malId'=>$charactersParse['id'],
                    'nameJp'=>$charactersParse['japanese'],
                    'nameEn'=>$charactersParse['name'] ? $charactersParse['name'] : null,
                    'nameRu'=>$charactersParse['russian'] ? $charactersParse['russian'] : null,
                    'descriptionJp'=>null,
                    'descriptionEn'=>null,
                    'descriptionRu'=>$charactersParse['description'] ? $charactersParse['description'] : null,
                ]);
                sleep(rand(10,20));
                $this->alert("sleeping");
            }
        }
        catch (\Exception $ex){

        }

        return "Good";
    }
}
