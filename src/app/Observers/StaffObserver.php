<?php

namespace App\Observers;

use App\Models\Staff;
use App\Services\HistoryService;

class StaffObserver
{
    private $historyService;

    public function __construct()
    {
        $this->historyService = new HistoryService();
    }

    /**
     * Handle the Staff "created" event.
     *
     * @param  \App\Models\Staff  $staff
     * @return void
     */
    public function created(Staff $staff)
    {
        if (\Auth::check()){
            $user = \Auth::user();
            $this->historyService
                ->createAction('staff created', 'accepted', $user->id, $staff);
        }
    }

    /**
     * Handle the Staff "updated" event.
     *
     * @param  \App\Models\Staff  $staff
     * @return void
     */
    public function updated(Staff $staff)
    {
        if (\Auth::check()){
            $user = \Auth::user();
            $this->historyService
                ->updateAction('staff updated', 'accepted', $user->id, $staff);
        }
    }

    /**
     * Handle the Staff "deleted" event.
     *
     * @param  \App\Models\Staff  $staff
     * @return void
     */
    public function deleted(Staff $staff)
    {
        if (\Auth::check()){
            $user = \Auth::user();
            $this->historyService
                ->removeAction('staff removed', $staff, $user->id);
        }
    }
}
