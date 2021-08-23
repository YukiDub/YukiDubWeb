<?php

namespace App\Console\Commands;

use App\Models\Staff;
use App\Services\ShikimoriService;
use Illuminate\Console\Command;
use SebastianBergmann\Timer\Timer;

class ShikimoriPeopleParser extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'shiki:peoples';

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
        $staff = new Staff();

        try{
            for ($i = 1; $i <= 1000; $i++){
                $peopleParse = $shikiService->getPeopleById($i);
                $this->alert('parsing new people');
                $staff->firstOrCreate([
                    'mal_id'=>$peopleParse['id'],
                    'name_jp'=>$peopleParse['japanese'],
                    'name_en'=>$peopleParse['name'] ? $peopleParse['name'] : null,
                    'name_ru'=>$peopleParse['russian'] ? $peopleParse['russian'] : null,
                    'birthday'=>$peopleParse['birthday'] ? $peopleParse['birthday'] : null,
                    'website'=>$peopleParse['website'] ? $peopleParse['website'] : null
                ]);
                sleep(rand(120,340));
                $this->alert("sleeping");
            }
        }
        catch (\Exception $exception){

        }
        return "Good";
    }
}
