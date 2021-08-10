<?php

namespace Database\Factories;

use App\Models\Staff;
use Illuminate\Database\Eloquent\Factories\Factory;

class StaffFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Staff::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'nameEn'=>$this->faker->name,
            'nameJp'=>\Str::random(20),
            'nameRu'=>\Str::random(20),
            'birthday'=>$this->faker->date(),
            'webSite'=>\Str::random(69)
        ];
    }
}
