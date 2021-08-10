<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class GenresSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\Genre::factory(['nameJp'=>'少年', 'nameEn'=>'Shounen', 'nameRu'=>'Сёнен'])
            ->create();

        \App\Models\Genre::factory(['nameJp'=>'少年愛', 'nameEn'=>'Shounen Ai', 'nameRu'=>'Сёнен-ай'])
            ->create();

        \App\Models\Genre::factory(['nameJp'=>'青年', 'nameEn'=>'Seinen', 'nameRu'=>'Сейнен'])
            ->create();

        \App\Models\Genre::factory(['nameJp'=>'少女', 'nameEn'=>'Shoujo', 'nameRu'=>'Сёдзё'])
            ->create();

        \App\Models\Genre::factory(['nameJp'=>'少女愛', 'nameEn'=>'Shoujo Ai', 'nameRu'=>'Сёдзё-ай'])
            ->create();

        \App\Models\Genre::factory(['nameJp'=>'女性', 'nameEn'=>'Josei', 'nameRu'=>'Дзёсей'])
            ->create();

        \App\Models\Genre::factory(['nameJp'=>'ジェンダーベンダー', 'nameEn'=>'Gender Bender', 'nameRu'=>'Смена пола'])
            ->create();

        \App\Models\Genre::factory(['nameJp'=>'コメディ', 'nameEn'=>'Comedy', 'nameRu'=>'Комедия'])
            ->create();

        \App\Models\Genre::factory(['nameJp'=>'ロマンス', 'nameEn'=>'Romance', 'nameRu'=>'Романтика'])
            ->create();

        \App\Models\Genre::factory(['nameJp'=>'学校', 'nameEn'=>'School', 'nameRu'=>'Школа'])
            ->create();

        \App\Models\Genre::factory(['nameJp'=>'アクション', 'nameEn'=>'Action', 'nameRu'=>'Экшен'])
            ->create();

        \App\Models\Genre::factory(['nameJp'=>'冒険', 'nameEn'=>'Adventure', 'nameRu'=>'Приключения'])
            ->create();

        \App\Models\Genre::factory(['nameJp'=>'車', 'nameEn'=>'Cars', 'nameRu'=>'Машины'])
            ->create();

        \App\Models\Genre::factory(['nameJp'=>'狂気', 'nameEn'=>'Dementia', 'nameRu'=>'Безумие'])
            ->create();

        \App\Models\Genre::factory(['nameJp'=>'悪魔', 'nameEn'=>'Demons', 'nameRu'=>'Демоны'])
            ->create();

        \App\Models\Genre::factory(['nameJp'=>'ドラマ', 'nameEn'=>'Drama', 'nameRu'=>'Драма'])
            ->create();

        \App\Models\Genre::factory(['nameJp'=>'エッチ', 'nameEn'=>'Ecchi', 'nameRu'=>'Эччи'])
            ->create();

        \App\Models\Genre::factory(['nameJp'=>'素晴らしい', 'nameEn'=>'Fantasy', 'nameRu'=>'Фантастика'])
            ->create();

        \App\Models\Genre::factory(['nameJp'=>'ゲーム', 'nameEn'=>'Game', 'nameRu'=>'Игры'])
            ->create();

        \App\Models\Genre::factory(['nameJp'=>'ハーレム', 'nameEn'=>'Harem', 'nameRu'=>'Гарем'])
            ->create();

        \App\Models\Genre::factory(['nameJp'=>'歴史的', 'nameEn'=>'Historical', 'nameRu'=>'Историческое'])
            ->create();

        \App\Models\Genre::factory(['nameJp'=>'ホラー', 'nameEn'=>'Horror', 'nameRu'=>'Ужасы'])
            ->create();

        \App\Models\Genre::factory(['nameJp'=>'赤ちゃん', 'nameEn'=>'Kids', 'nameRu'=>'Детское'])
            ->create();

        \App\Models\Genre::factory(['nameJp'=>'魔法', 'nameEn'=>'Magic', 'nameRu'=>'Магия'])
            ->create();

        \App\Models\Genre::factory(['nameJp'=>'武道', 'nameEn'=>'Martial Arts', 'nameRu'=>'Боевые искусства'])
            ->create();

        \App\Models\Genre::factory(['nameJp'=>'毛皮', 'nameEn'=>'Mecha', 'nameRu'=>'Меха'])
            ->create();

        \App\Models\Genre::factory(['nameJp'=>'軍隊', 'nameEn'=>'Military', 'nameRu'=>'Военное'])
            ->create();

        \App\Models\Genre::factory(['nameJp'=>'音楽', 'nameEn'=>'Music', 'nameRu'=>'Музыка'])
            ->create();

        \App\Models\Genre::factory(['nameJp'=>'探偵', 'nameEn'=>'Mystery', 'nameRu'=>'Детектив'])
            ->create();

        \App\Models\Genre::factory(['nameJp'=>'パロディー', 'nameEn'=>'Parody', 'nameRu'=>'Пародия'])
            ->create();

        \App\Models\Genre::factory(['nameJp'=>'警察', 'nameEn'=>'Police', 'nameRu'=>'Полиция'])
            ->create();

        \App\Models\Genre::factory(['nameJp'=>'心理学', 'nameEn'=>'Psychological', 'nameRu'=>'Психологическое'])
            ->create();

        \App\Models\Genre::factory(['nameJp'=>'武士', 'nameEn'=>'Samurai', 'nameRu'=>'Самураи'])
            ->create();

        \App\Models\Genre::factory(['nameJp'=>'素晴らしい', 'nameEn'=>'Sci-Fi', 'nameRu'=>'Фантастика'])
            ->create();

        \App\Models\Genre::factory(['nameJp'=>'日常生活', 'nameEn'=>'Slice of Life', 'nameRu'=>'Повседневность'])
            ->create();

        \App\Models\Genre::factory(['nameJp'=>'スペース', 'nameEn'=>'Space', 'nameRu'=>'Космос'])
            ->create();

        \App\Models\Genre::factory(['nameJp'=>'スポーツ', 'nameEn'=>'Sports', 'nameRu'=>'Спорт'])
            ->create();

        \App\Models\Genre::factory(['nameJp'=>'スーパーパワー', 'nameEn'=>'Super Power', 'nameRu'=>'Супер силы'])
            ->create();

        \App\Models\Genre::factory(['nameJp'=>'超自然的', 'nameEn'=>'Supernatural', 'nameRu'=>'Сверхъестественное'])
            ->create();

        \App\Models\Genre::factory(['nameJp'=>'吸血鬼', 'nameEn'=>'Vampire', 'nameRu'=>'Вампиры'])
            ->create();

        \App\Models\Genre::factory(['nameJp'=>'スリラー', 'nameEn'=>'Thriller', 'nameRu'=>'Триллер'])
            ->create();

        \App\Models\Genre::factory(['nameJp'=>'変態', 'nameEn'=>'Hentai', 'nameRu'=>'Хентай'])
            ->create();

        \App\Models\Genre::factory(['nameJp'=>'やおい', 'nameEn'=>'Yaoi', 'nameRu'=>'Яой'])
            ->create();

        \App\Models\Genre::factory(['nameJp'=>'百合', 'nameEn'=>'Yuri', 'nameRu'=>'Юри'])
            ->create();

        \App\Models\Genre::factory(['nameJp'=>'ショタコン', 'nameEn'=>'Shotacon', 'nameRu'=>'Сётакон'])
            ->create();

        \App\Models\Genre::factory(['nameJp'=>'特撮', 'nameEn'=>'Tokusatsu', 'nameRu'=>'Токусацу'])
            ->create();

        \App\Models\Genre::factory(['nameJp'=>'黙示録を投稿する', 'nameEn'=>'Post apocalyptic', 'nameRu'=>'Пост апокалипсис'])
            ->create();

        \App\Models\Genre::factory(['nameJp'=>'スチームパンク', 'nameEn'=>'Steampunk', 'nameRu'=>'Стимпанк'])
            ->create();

        \App\Models\Genre::factory(['nameJp'=>'オタク', 'nameEn'=>'Otaku', 'nameRu'=>'Откаку'])
            ->create();

        \App\Models\Genre::factory(['nameJp'=>'魔法少女', 'nameEn'=>'Makho-shodze', 'nameRu'=>'Махо-сёдзе'])
            ->create();

        \App\Models\Genre::factory(['nameJp'=>'サイバーパンク', 'nameEn'=>'Cyberpunk', 'nameRu'=>'Кибербанк'])
            ->create();

        \App\Models\Genre::factory(['nameJp'=>'幻の泥棒', 'nameEn'=>'Phantom thieves', 'nameRu'=>'Кайто'])
            ->create();

        \App\Models\Genre::factory(['nameJp'=>'郁二', 'nameEn'=>'Ikuji', 'nameRu'=>'Икудзи'])
            ->create();

        \App\Models\Genre::factory(['nameJp'=>'アイドル', 'nameEn'=>'idol', 'nameRu'=>'Айдолы'])
            ->create();

        \App\Models\Genre::factory(['nameJp'=>'女性 ', 'nameEn'=>'Josei', 'nameRu'=>'Дзёсэй'])
            ->create();
    }
}
