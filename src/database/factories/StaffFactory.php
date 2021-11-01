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
            'name_en'=>$this->faker->name,
            'name_jp'=>\Str::random(20),
            'name_ru'=>\Str::random(20),
            'birthday'=>$this->faker->date(),
            'website'=>\Str::random(69)
        ];
    }
}
