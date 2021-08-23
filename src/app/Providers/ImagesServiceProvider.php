<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class ImagesServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        $this->app->bind('images', 'App\Services\ImagesService');
    }
}
