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
        Post::create([
            'title' => 'Post 3',
            'body' => 'Body 3',
            'user_id' => 1,
            'image' => 'https://picsum.photos/800/450?random=3',
            'slug' => 'post-3'
        ]);
        Post::create([
            'title' => 'Post 4',
            'body' => 'Body 4',
            'user_id' => 1,
            'image' => 'https://picsum.photos/800/450?random=4',
            'slug' => 'post-4'
        ]);
        Post::create([
            'title' => 'Post 5',
            'body' => 'Body 5',
            'user_id' => 1,
            'image' => 'https://picsum.photos/800/450?random=5',
            'slug' => 'post-5'
        ]);
        Post::create([
            'title' => 'Post 6',
            'body' => 'Body 6',
            'user_id' => 1,
            'image' => 'https://picsum.photos/800/450?random=6',
            'slug' => 'post-6'
        ]);
        Post::create([
            'title' => 'Post 7',
            'body' => 'Body 7',
            'user_id' => 1,
            'image' => 'https://picsum.photos/800/450?random=7',
            'slug' => 'post-7'
        ]);
        Post::create([
            'title' => 'Post 8',
            'body' => 'Body 8',
            'user_id' => 1,
            'image' => 'https://picsum.photos/800/450?random=8',
            'slug' => 'post-8'
        ]);
        Post::create([
            'title' => 'Post 9',
            'body' => 'Body 9',
            'user_id' => 1,
            'image' => 'https://picsum.photos/800/450?random=9',
            'slug' => 'post-9'
        ]);
        Post::create([
            'title' => 'Post 10',
            'body' => 'Body 10',
            'user_id' => 1,
            'image' => 'https://picsum.photos/800/450?random=10',
            'slug' => 'post-10'
        ]);
    }
}
