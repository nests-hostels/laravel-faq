<?php

namespace Database\Seeders;

use App\Models\Faq;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class FaqSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faqs = json_decode(file_get_contents(__DIR__ . '/jsons/faq.json'));

        foreach ($faqs->faqs as $faq) {
            Faq::create([
                'question' => $faq->question,
                'answer' => $faq->answer
            ]);
        }
    }
}
