<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    /**
     * The current password being used by the factory.
     */
    protected static ?string $password;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        if (function_exists('fake')) {
            $_user = [
                'name' => fake()->name(),
                'email' => fake()->unique()->safeEmail(),
                'email_verified_at' => now(),
                'password' => static::$password ??= Hash::make('password'),
                'remember_token' => Str::random(10),
            ];
        } else {
            // Fallback for environments where fake() isn't available
            $_random = substr(md5(mt_rand()), 0, 8);

            $_user = [
                'name' => 'User ' . $_random,
                'email' => 'user_' . $_random . '@example.com',
                'email_verified_at' => now(),
                'password' => static::$password ??= Hash::make('password'),
                'remember_token' => Str::random(10),
            ];
        }

        return $_user;
    }

    /**
     * Indicate that the model's email address should be unverified.
     */
    public function unverified(): static
    {
        return $this->state(fn(array $attributes) => [
            'email_verified_at' => null,
        ]);
    }
}
