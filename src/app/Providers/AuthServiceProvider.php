<?php

namespace App\Providers;

use App\Auth\Grants\GoogleGrant;
use App\Models\Anime;
use App\Models\Staff;
use App\Policies\AnimePolicy;
use App\Policies\StaffPolicy;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;
use Laravel\Passport\Bridge\RefreshTokenRepository;
use Laravel\Passport\Passport;
use League\OAuth2\Server\AuthorizationServer;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        Staff::class => StaffPolicy::class,
        Anime::class => AnimePolicy::class
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     * @throws \Illuminate\Contracts\Container\BindingResolutionException
     */
    public function boot()
    {
        $this->registerPolicies();

        app(AuthorizationServer::class)->enableGrantType(
            $this->makeGoogleGrant(), Passport::tokensExpireIn()
        );

        Passport::routes();

        Passport::enableImplicitGrant();
        Passport::tokensExpireIn(now()->addDay(7));
        Passport::refreshTokensExpireIn(now()->addMonth(2));
        Passport::personalAccessTokensExpireIn(now()->addMonth(2));

        Passport::tokensCan([
            'profile-management'=>'profile management'
        ]);
    }

    /**
     * Create and configure a Google grant instance.
     *
     * @return GoogleGrant
     * @throws \Illuminate\Contracts\Container\BindingResolutionException
     */
    protected function makeGoogleGrant()
    {
        $grant = new GoogleGrant(
            $this->app->make(RefreshTokenRepository::class)
        );

        $grant->setRefreshTokenTTL(Passport::refreshTokensExpireIn());

        return $grant;
    }
}
