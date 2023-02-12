<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use League\CommonMark\Node\Block\Paragraph;
use Illuminate\Support\Facades\DB;

class newsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for($i = 0; $i <= 20; $i++){
            DB::table('news')->insert([
                'title' => fake()->title(),
                'description' => fake()->paragraph(3, true),
                'category' => fake()->sentence(),
                'author' => fake()->email(),
            ]);
        }
    }
}
