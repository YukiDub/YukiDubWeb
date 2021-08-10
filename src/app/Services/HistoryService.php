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
    /** History model
     * @var ChangesHistory
     */
    protected $model;

    public function __construct()
    {
        $this->model = new ChangesHistory();
    }

    /** Create adding history
     * @param string $type
     * @param string $status
     * @param int $userId
     * @param Model|null $model
     */
    public function createAction(string $type, string $status, int $userId, Model $model)
    {
        $history = $this->model::firstOrCreate([
            'action'=>$type,
            'status'=>$status,
            'changes'=>null,
            'user_id'=>$userId
        ]);
        $model->changes()->attach($history);
    }

    /** Create updating history
     * @param string $type
     * @param string $status
     * @param int $userId
     * @param Model $model
     * @param $after
     * @param $newData
     */
    public function updateAction(string $type, string $status, int $userId, Model $model, $after , $newData)
    {
        $before = new Staff();
        $before->fill($model->getAttributes());
        $before->fill($newData);

        $changes = array([
            'after'=> $after,
            'before'=> $before->getAttributes()
        ]);

        $history = $this->model::firstOrCreate([
            'action'=>$type,
            'status'=>$status,
            'changes'=>$newData ? $changes : null,
            'user_id'=>$userId
        ]);

        $history->save();
        $model->changes()->attach($history);
    }

    /** Create removing history
     * @param array $after
     * @param int $userId
     * @param string $action
     */
    public function removeAction(array $after, int $userId, string $action)
    {
        $changes = array([
            'after'=> $after,
            'before'=> []
        ]);

        $history = $this->model::firstOrCreate([
            'action'=>$action,
            'status'=>'accepted',
            'changes'=>$changes,
            'user_id'=>$userId
        ]);
    }
}