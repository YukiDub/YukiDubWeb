<?php

namespace App\Policies;

use App\Models\Policy;
use App\Models\Staff;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class StaffPolicy extends PolicyBase
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view any models.
     *
     * @param \App\Models\User $user
     *
     * @return mixed
     */
    public function viewAny(User $user)
    {
        return true;
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param \App\Models\User   $user
     * @param \App\Models\Policy $policy
     *
     * @return mixed
     */
    public function view(User $user, Policy $policy)
    {
        return true;
    }

    /**
     * Determine whether the user can create models.
     *
     * @param \App\Models\User $user
     *
     * @return mixed
     */
    public function create(User $user)
    {
        return $this->checkPermission($user, 'staff.create');
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param \App\Models\User   $user
     * @param \App\Models\Policy $policy
     *
     * @return mixed
     */
    public function update(User $user, Staff $staff)
    {
        return $this->checkPermission($user, 'staff.update');
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param \App\Models\User   $user
     * @param \App\Models\Policy $policy
     *
     * @return mixed
     */
    public function delete(User $user, Policy $policy)
    {
        return $this->checkPermission($user, 'staff.delete');
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param \App\Models\User   $user
     * @param \App\Models\Policy $policy
     *
     * @return mixed
     */
    public function restore(User $user, Policy $policy)
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param \App\Models\User   $user
     * @param \App\Models\Policy $policy
     *
     * @return mixed
     */
    public function forceDelete(User $user, Policy $policy)
    {
        //
    }
}
