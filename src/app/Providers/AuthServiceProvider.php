<?php

namespace App\Providers;

use App\Auth\Grants\GoogleGrant;
use App\Auth\Grants\VkontakteGrant;
use App\Models\Anime;
use App\Models\Staff;
use App\Policies\AnimePolicy;
use App\Policies\StaffPolicy;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
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
        Anime::class => AnimePolicy::class,
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @throws \Illuminate\Contracts\Container\BindingResolutionException
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        app(AuthorizationServer::class)->enableGrantType(
<<<<<<< HEAD
            $this->makeGoogleGrant(), Passport::tokensExpireIn(),
        );

        app(AuthorizationServer::class)->enableGrantType(
            $this->makeVkontakteGrant(), Passport::tokensExpireIn()
=======
            $this->makeGoogleGrant(),
            Passport::tokensExpireIn()
>>>>>>> b5ff7be4efed93c02586ea0bcf1623f32daae17e
        );

        Passport::routes();

        Passport::enableImplicitGrant();
        Passport::tokensExpireIn(now()->addDay(7));
        Passport::refreshTokensExpireIn(now()->addMonth(2));
        Passport::personalAccessTokensExpireIn(now()->addMonth(2));

        Passport::tokensCan([
            'profile-management'=> 'profile management',
        ]);
    }

    /**
     * Create and configure a Google grant instance.
     *
     * @throws \Illuminate\Contracts\Container\BindingResolutionException
     *
     * @return GoogleGrant
     */
    protected function makeGoogleGrant()
    {
        $grant = new GoogleGrant(
            $this->app->make(RefreshTokenRepository::class)
        );

        $grant->setRefreshTokenTTL(Passport::refreshTokensExpireIn());

        return $grant;
    }

    /**
     * Create and configure a Vkontakte grant instance.
     *
     * @return VkontakteGrant
     * @throws \Illuminate\Contracts\Container\BindingResolutionException
     */
    protected function makeVkontakteGrant()
    {
        $grant = new VkontakteGrant(
            $this->app->make(RefreshTokenRepository::class)
        );

        $grant->setRefreshTokenTTL(Passport::refreshTokensExpireIn());

        return $grant;
    }
}
