<?php
/*
 * Copyright (c) YukiDub. Author: M9snikFeed <m9snikfeed@gmail.com>.
 *
 * 9.8.2021
 */

namespace App\Services;

use App\Models\ChangesHistory;
use App\Models\Staff;
use Illuminate\Database\Eloquent\Model;

class HistoryService
{
    /** History model.
     * @var ChangesHistory
     */
    protected $model;

    public function __construct()
    {
        $this->model = new ChangesHistory();
    }

    /**
     * Create adding history.
     *
     * @param string $action
     * @param string $status
     * @param int    $userId
     * @param Model  $modelObject
     */
    public function createAction(string $action, string $status, int $userId, Model $modelObject)
    {
        $history = $this->model::firstOrCreate([
            'action' => $action,
            'status' => $status,
            'changes'=> null,
            'user_id'=> $userId,
        ]);
        $modelObject->changes()->attach($history);
    }

    /**
     * Create updating history.
     *
     * @param string $action
     * @param string $status
     * @param int    $userId
     * @param Model  $modelObject
     */
    public function updateAction(string $action, string $status, int $userId, Model $modelObject)
    {
        $before = new Staff();
        $before->fill($modelObject->getAttributes());

        $changes = [[
            'after' => $modelObject->getOriginal(),
            'before'=> $before->getAttributes(),
        ]];

        $history = $this->model::firstOrCreate([
            'action' => $action,
            'status' => $status,
            'changes'=> $changes,
            'user_id'=> $userId,
        ]);

        $history->save();
        $modelObject->changes()->attach($history);
    }

    /**
     * Create removing history.
     *
     * @param string $action
     * @param Model  $modelObject
     * @param int    $userId
     */
    public function removeAction(string $action, Model $modelObject, int $userId)
    {
        $changes = [[
            'after' => $modelObject->getOriginal(),
            'before'=> null,
        ]];

        $history = $this->model::firstOrCreate([
            'action' => $action,
            'status' => 'accepted',
            'changes'=> $changes,
            'user_id'=> $userId,
        ]);
    }
}
