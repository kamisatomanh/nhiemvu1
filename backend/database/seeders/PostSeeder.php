<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use App\Models\Post;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Post::create([
            'title' => 'Post 1',
            'body' => 'Body 1',
            'user_id' => 1,
            'image' => 'https://picsum.photos/800/450?random=1',
            'slug' => 'post-1'
        ]);
        Post::create([
            'title' => 'Post 2',
            'body' => 'Body 2',
            'user_id' => 1,
            'image' => 'https://picsum.photos/800/450?random=2',
            'slug' => 'post-2'
        ]);
    }
}
