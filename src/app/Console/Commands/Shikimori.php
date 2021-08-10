<?php

namespace App\Console\Commands;

use App\Models\Staff;
use App\Services\ShikimoriService;
use Illuminate\Console\Command;
use SebastianBergmann\Timer\Timer;

class Shikimori extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'shikimori:parse';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'shikimori parser';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $shikiService = new ShikimoriService();
        $staff = new Staff();

        try{
            for ($i = 1; $i <= 1000; $i++){
                $peopleParse = $shikiService->getPeopleById($i);
                $staff->firstOrCreate([
                    'malId'=>$peopleParse['id'],
                    'nameJp'=>$peopleParse['japanese'],
                    'nameEn'=>$peopleParse['name'],
                    'nameRu'=>$peopleParse['russian'],
                    'birthday'=>$peopleParse['birthday'],
                    'webSite'=>$peopleParse['website']
                ]);
                sleep(rand(120,340));
            }
        }
        catch (\Exception $exception){

        }
        return "Good";
    }
}
