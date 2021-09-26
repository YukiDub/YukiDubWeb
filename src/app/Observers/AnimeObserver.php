<?php

namespace App\Observers;

use App\Models\Anime;
use App\Services\HistoryService;

class AnimeObserver
{
    private $historyService;

    public function __construct()
    {
        $this->historyService = new HistoryService();
    }

    /**
     * Handle the Anime "created" event.
     *
     * @param \App\Models\Anime $anime
     *
     * @return void
     */
    public function created(Anime $anime)
    {
        if (\Auth::check()) {
            $user = \Auth::user();
            $this->historyService
                ->createAction('anime created', 'accepted', $user->id, $anime);
        }
    }

    /**
     * Handle the Anime "updated" event.
     *
     * @param \App\Models\Anime $anime
     *
     * @return void
     */
    public function updated(Anime $anime)
    {
        if (\Auth::check()) {
            $user = \Auth::user();
            $this->historyService
                ->updateAction('anime updated', 'accepted', $user->id, $anime);
        }
    }

    /**
     * Handle the Anime "deleted" event.
     *
     * @param \App\Models\Anime $anime
     *
     * @return void
     */
    public function deleted(Anime $anime)
    {
        if (\Auth::check()) {
            $user = \Auth::user();
            $this->historyService
                ->removeAction('anime removed', $anime, $user->id);
        }
    }
}
