<?php

namespace App\Providers;

use App\Models\Staff;
use App\Policies\StaffPolicy;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;
use Laravel\Passport\Passport;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        // 'App\Models\Model' => 'App\Policies\ModelPolicy',
        Staff::class => StaffPolicy::class
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        Passport::routes();

        Passport::enableImplicitGrant();
        Passport::tokensExpireIn(now()->addMinute(30));
        Passport::refreshTokensExpireIn(now()->addMonth(2));
        Passport::personalAccessTokensExpireIn(now()->addMonth(2));

        Passport::tokensCan([
            'profile-management'=>'profile management'
        ]);
    }
}
