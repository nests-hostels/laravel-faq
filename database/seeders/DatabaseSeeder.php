<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Create the admin user directly (without factory needed)
        User::firstOrCreate(
            ['email' => env('APP_ADMIN_EMAIL', 'admin@nestshostels.com')],
            [
                'name' => 'Artur',
                'email_verified_at' => now(),
                'password' => Hash::make(env('APP_KEY')),
                'remember_token' => Str::random(10),
            ]
        );


        // Only create test users in non-production environments
        if (app()->environment('local', 'development', 'testing')) {
            // Change the generated password
            // \Database\Factories\UserFactory::$password = Hash::make('test');
            // Create 10 Test Users
            // User::factory(10)->create();

            // Just one test user
            User::factory()->create([
                'name' => 'Test User',
                'email' => 'test@nestshostels.com',
                'password' => Hash::make('test')
            ]);
        }
    }
}
