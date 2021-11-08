<template>
  <div class="filter">
    <div class="selector-block">
      <div class="selector">
        <div class="placeholder">
          <div class="selected">
            <span>Статус</span>
          </div>
        </div>
        <div class="chek-box-list">
          <ul>
            <li v-for="statusItem in status" :key="statusItem.status_id" :title="statusItem.nameRu">
              <label>
                <input type="checkbox" v-model="statusItem.selected">  {{statusItem.nameRu}}
              </label>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="selector-block">
      <div class="selector">
        <div class="placeholder">
          <div class="selected">
            <span>Тип</span>
          </div>
        </div>
        <div class="chek-box-list">
          <ul>
            <li v-for="type in types" :key="type.id" :title="type.nameEn">
              <label>
                <input type="checkbox" v-model="type.selected">  {{type.nameRu}}
              </label>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="selector-block">
      <div class="selector">
        <div class="placeholder">
          <div class="selected">
            <span>Жанры</span>
          </div>
        </div>
        <div class="chek-box-list">
          <ul>
            <li data-field="status" data-value="#" v-for="genre in genres" :key="genre.genre_id" :title="genre.title">
              <label>
                <input type="checkbox" v-model="genre.selected">
                <span class="name_en">
                {{genre.nameEn}}
                </span>
                  <span class="name_ru">
                  {{genre.nameRu}}
                </span>
                  <span class="name_jp">
                  {{genre.nameJp}}
                </span>
              </label>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="selector-block">
      <div class="selector">
        <div class="placeholder">
          <div class="selected">
            <span>Рейтинг</span>
          </div>
        </div>
        <div class="chek-box-list">
          <ul>
            <li v-for="rating in ratings" :key="rating.rating_id" :title="rating.title">
              <label>
                <input type="checkbox" v-model="rating.selected">  {{rating.name}}
              </label>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="selector-block">
      <div class="selector">
        <div class="placeholder">
          <div class="selected">
            <span>Продолжительность эпизода</span>
          </div>
        </div>
        <div class="chek-box-list">
          <ul>
            <li v-for="duration in durations" :key="duration.duration_id" :title="duration.title">
              <label>
                <input type="checkbox" v-model="duration.selected">  {{duration.nameRu}}
              </label>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="selector-block">
      <div class="selector">
        <div class="placeholder">
          <div class="selected">
            <span>Сезон</span>
          </div>
        </div>
        <div class="chek-box-list">
          <ul>
            <li v-for="season in seasons" :key="season.season_id" :title="season.nameRu">
              <label>
                <input type="checkbox" v-model="season.selected">  {{season.nameRu}}
              </label>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="selector-block">
      <div class="selector">
        <div class="placeholder">
          <div class="selected">
            <span>Оценка</span>
          </div>
        </div>
        <div class="chek-box-list">
          <ul>
            <li data-field="status" data-value="anons">
              <input autocomplete="off" type="checkbox"> 8+
            </li>
            <li data-field="status" data-value="anons">
              <input autocomplete="off" type="checkbox">  7+
            </li>
            <li data-field="status" data-value="anons">
              <input autocomplete="off" type="checkbox">  6+
            </li>
            <li data-field="status" data-value="anons">
              <input autocomplete="off" type="checkbox">  5+
            </li>
            <li data-field="status" data-value="anons">
              <input autocomplete="off" type="checkbox">  <5
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="selector-block">
      <div class="selector">
        <div class="placeholder">
          <div class="selected">
            <span>Мой список</span>
          </div>
        </div>
        <div class="chek-box-list">
          <ul>
            <li data-field="status" data-value="anons">
              <input autocomplete="off" type="checkbox"> Просмотрено
            </li>
            <li data-field="status" data-value="anons">
              <input autocomplete="off" type="checkbox">  В планах
            </li>
            <li data-field="status" data-value="anons">
              <input autocomplete="off" type="checkbox">  Брошено
            </li>
            <li data-field="status" data-value="anons">
              <input autocomplete="off" type="checkbox">  Отложено
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="selector-block">
      <div class="selector sort cursor-drop" v-on:click="openSort()">
        <div class="placeholder">
          <div class="selected">
            <span>Сортировка</span>
          </div>
          <div class="icon-inline dropdown-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6">
              <path fill="#FFF" fill-rule="nonzero" d="M8.618 5.772l.003.003c.35.336.873.29 1.174-.102a1.04 1.04 0 0 0-.078-1.334L5.55.233a.765.765 0 0 0-1.1 0L.28 4.342c-.342.345-.375.94-.075 1.331.301.393.825.438 1.177.099L5 2.207l3.618 3.565z"></path>
            </svg>
          </div>
        </div>
        <div class="drop-options">
          <div class="item">
            По алфавиту
          </div>
          <div class="item">
            По рейтингу
          </div>
          <div class="item">
            По дате премьеры
          </div>
          <div class="item">
            По дате выхода
          </div>
        </div>
      </div>
    </div>
    <div class="d-grid gap-2 button-block mx-0">
      <div class="btn" type="button">Сбросить фильтр</div>
    </div>
  </div>
</template>

<script>
import router from "../vueRouter";

export default {
  name: "AnimeFilterComponent",
  data: function (){
    return {
      status: [
        {
          "status_id": 1,
          "selected":  false,
          "nameJp":    "",
          "nameEn":    "Announced",
          "nameRu":    "Анонсировано"
        },
        {
          "status_id": 2,
          "selected":  false,
          "nameJp":    "",
          "nameEn":    "Ongoing",
          "nameRu":    "Выходит"
        },
        {
          "status_id": 3,
          "selected":  false,
          "nameJp":    "",
          "nameEn":    "Released",
          "nameRu":    "Вышло"
        },
      ],
      types:  [
        {
          "type_id": 1,
          "selected":  false,
          "nameJp":    "",
          "nameEn":    "Tv serial",
          "nameRu":    "Tv сериал"
        },
        {
          "type_id":   2,
          "selected":  false,
          "nameJp":    "",
          "nameEn":    "Film",
          "nameRu":    "Фильм"
        },
        {
          "type_id":   3,
          "selected":  false,
          "nameJp":    "",
          "nameEn":    "OVA",
          "nameRu":    "OVA"
        },
        {
          "type_id":   4,
          "selected":  false,
          "nameJp":    "",
          "nameEn":    "ONA",
          "nameRu":    "ONA"
        },
        {
          "type_id":   5,
          "selected":  false,
          "nameJp":    "",
          "nameEn":    "Special",
          "nameRu":    "Спешл"
        },
        {
          "type_id":   6,
          "selected":  false,
          "nameJp":    "",
          "nameEn":    "Clip",
          "nameRu":    "Клип"
        },
      ],
      genres: [
        {
          "genre_id": 1,
          "selected": false,
          "nameJp":  "少年",
          "nameEn":  "Shounen",
          "nameRu":  "Сёнен",
          "title":   "Аниме, манга и ранобэ, рассчитанные на особую целевую аудиторию — мальчиков и юношей в возрасте от 12 до 18 лет. Манга этого типа публикуется в специализированных журналах (аудиторию определяют сами издатели), занимающих 38,4% рынка"
        },
        {
          "genre_id": 2,
          "selected": false,
          "nameJp": "少年愛",
          "nameEn": "Shounen Ai",
          "nameRu": "Сёнен-ай",
          "title":  "Разновидность аниме и манги, поджанр сёдзё, посвящённый идеализированной любви между юношами или мужчинами, для которого целевой аудиторией являются женщины. Фокусируется на романтических отношениях, а не сексуальных.",
        },
        {
          "genre_id": 3,
          "selected": false,
          "nameJp": "青年",
          "nameEn": "Seinen",
          "nameRu": "Сейнен",
          "title":  "Аниме и манга, рассчитанные на особую целевую аудиторию — молодых мужчин от 18 лет и старше. Манга этого типа публикуется в специализированных сэйнэн-журналах (аудиторию определяют сами издатели). В редких случаях произведение в жанре сэйнэн нацелено на категорию бизнесменов в возрасте до 40 лет."
        },
        {
          "genre_id": 4,
          "selected": false,
          "nameJp": "少女",
          "nameEn": "Shoujo",
          "nameRu": "Сёдзё",
          "title":  "",
        },
        {
          "genre_id": 5,
          "selected": false,
          "nameJp": "少女愛",
          "nameEn": "Shoujo Ai",
          "nameRu": "Сёдзё-ай",
          "title":  "",
        },
        {
          "genre_id": 6,
          "selected": false,
          "nameJp": "女性",
          "nameEn": "Josei",
          "nameRu": "Дзёсей",
          "title":  "",
        },
        {
          "genre_id": 7,
          "selected": false,
          "nameJp": "ジェンダーベンダー",
          "nameEn": "Gender Bender",
          "nameRu": "Смена пола",
          "title":  "",
        },
        {
          "genre_id": 8,
          "selected": false,
          "nameJp": "コメディ",
          "nameEn": "Comedy",
          "nameRu": "Комедия",
          "title":  "",
        },
        {
          "genre_id": 9,
          "selected": false,
          "nameJp": "ロマンス",
          "nameEn": "Romance",
          "nameRu": "Романтика",
          "title":  "",
        },
        {
          "genre_id": 10,
          "selected": false,
          "nameJp": "学校",
          "nameEn": "School",
          "nameRu": "Школа",
          "title":  "",
        },
        {
          "genre_id": 11,
          "selected": false,
          "nameJp": "アクション",
          "nameEn": "Action",
          "nameRu": "Экшен",
          "title":  "",
        },
        {
          "genre_id": 12,
          "selected": false,
          "nameJp": "冒険",
          "nameEn": "Adventure",
          "nameRu": "Приключения",
          "title":  "",
        },
        {
          "genre_id": 13,
          "selected": false,
          "nameJp": "車",
          "nameEn": "Cars",
          "nameRu": "Машины",
          "title":  "",
        },
        {
          "genre_id": 14,
          "selected": false,
          "nameJp": "狂気",
          "nameEn": "Dementia",
          "nameRu": "Безумие",
          "title":  "",
        },
        {
          "genre_id": 15,
          "selected": false,
          "nameJp": "悪魔",
          "nameEn": "Demons",
          "nameRu": "Демоны",
          "title":  "",
        },
        {
          "genre_id": 16,
          "selected": false,
          "nameJp": "ドラマ",
          "nameEn": "Drama",
          "nameRu": "Драма",
          "title":  "",
        },
        {
          "genre_id": 17,
          "selected": false,
          "nameJp": "エッチ",
          "nameEn": "Ecchi",
          "nameRu": "Эччи",
          "title":  "",
        },
        {
          "genre_id": 18,
          "selected": false,
          "nameJp": "素晴らしい",
          "nameEn": "Fantasy",
          "nameRu": "Фантастика",
          "title":  "",
        },
        {
          "genre_id": 19,
          "selected": false,
          "nameJp": "ゲーム",
          "nameEn": "Game",
          "nameRu": "Игры",
          "title":  "",
        },
        {
          "genre_id": 20,
          "selected": false,
          "nameJp": "ハーレム",
          "nameEn": "Harem",
          "nameRu": "Гарем",
          "title":  "",
        },
        {
          "genre_id": 21,
          "selected": false,
          "nameJp": "歴史的",
          "nameEn": "Historical",
          "nameRu": "Историческое",
          "title":  "",
        },
        {
          "genre_id": 22,
          "selected": false,
          "nameJp": "ホラー",
          "nameEn": "Horror",
          "nameRu": "Ужасы",
          "title":  "",
        },
        {
          "genre_id": 23,
          "selected": false,
          "nameJp": "赤ちゃん",
          "nameEn": "Kids",
          "nameRu": "Детское",
          "title":  "",
        },
        {
          "genre_id": 24,
          "selected": false,
          "nameJp": "魔法",
          "nameEn": "Magic",
          "nameRu": "Магия",
          "title":  "",
        },
        {
          "genre_id": 25,
          "selected": false,
          "nameJp": "武道",
          "nameEn": "Martial Arts",
          "nameRu": "Боевые искусства",
          "title":  "",
        },
        {
          "genre_id": 26,
          "selected": false,
          "nameJp": "毛皮",
          "nameEn": "Mecha",
          "nameRu": "Меха",
          "title":  "",
        },
        {
          "genre_id": 27,
          "selected": false,
          "nameJp": "軍隊",
          "nameEn": "Military",
          "nameRu": "Военное",
          "title":  "",
        },
        {
          "genre_id": 28,
          "selected": false,
          "nameJp": "音楽",
          "nameEn": "Music",
          "nameRu": "Музыка",
          "title":  "",
        },
        {
          "genre_id": 29,
          "selected": false,
          "nameJp": "探偵",
          "nameEn": "Mystery",
          "nameRu": "Детектив",
          "title":  "",
        },
        {
          "genre_id": 30,
          "selected": false,
          "nameJp": "パロディー",
          "nameEn": "Parody",
          "nameRu": "Пародия",
          "title":  "",
        },
        {
          "genre_id": 31,
          "selected": false,
          "nameJp": "警察",
          "nameEn": "Police",
          "nameRu": "Полиция",
          "title":  "",
        },
        {
          "genre_id": 32,
          "selected": false,
          "nameJp": "心理学",
          "nameEn": "Psychological",
          "nameRu": "Психологическое",
          "title":  "",
        },
        {
          "genre_id": 33,
          "selected": false,
          "nameJp": "武士",
          "nameEn": "Samurai",
          "nameRu": "Самураи",
          "title":  "",
        },
        {
          "genre_id": 34,
          "selected": false,
          "nameJp": "素晴らしい",
          "nameEn": "Sci-Fi",
          "nameRu": "Фантастика",
          "title":  "",
        },
        {
          "genre_id": 35,
          "selected": false,
          "nameJp": "日常生活",
          "nameEn": "Slice of Life",
          "nameRu": "Повседневность",
          "title":  "",
        },
        {
          "genre_id": 36,
          "selected": false,
          "nameJp": "スペース",
          "nameEn": "Space",
          "nameRu": "Космос",
          "title":  "",
        },
        {
          "genre_id": 37,
          "selected": false,
          "nameJp": "スポーツ",
          "nameEn": "Sports",
          "nameRu": "Спорт",
          "title":  "",
        },
        {
          "genre_id": 38,
          "selected": false,
          "nameJp": "スーパーパワー",
          "nameEn": "Super Power",
          "nameRu": "Супер силы",
          "title":  "",
        },
        {
          "genre_id": 39,
          "selected": false,
          "nameJp": "超自然的",
          "nameEn": "Supernatural",
          "nameRu": "Сверхъестественное",
          "title":  "",
        },
        {
          "genre_id": 40,
          "selected": false,
          "nameJp": "吸血鬼",
          "nameEn": "Vampire",
          "nameRu": "Вампиры",
          "title":  "",
        },
        {
          "genre_id": 41,
          "selected": false,
          "nameJp": "スリラー",
          "nameEn": "Thriller",
          "nameRu": "Триллер",
          "title":  "",
        },
        {
          "genre_id": 42,
          "selected": false,
          "nameJp": "変態",
          "nameEn": "Hentai",
          "nameRu": "Хентай",
          "title":  "",
        },
        {
          "genre_id": 43,
          "selected": false,
          "nameJp": "やおい",
          "nameEn": "Yaoi",
          "nameRu": "Яой",
          "title":  "",
        },
        {
          "genre_id": 44,
          "selected": false,
          "nameJp": "百合",
          "nameEn": "Yuri",
          "nameRu": "Юри",
          "title":  "",
        },
        {
          "genre_id": 45,
          "selected": false,
          "nameJp": "ショタコン",
          "nameEn": "Shotacon",
          "nameRu": "Сётакон",
          "title":  "",
        },
        {
          "genre_id": 46,
          "selected": false,
          "nameJp": "特撮",
          "nameEn": "Tokusatsu",
          "nameRu": "Токусацу",
          "title":  "",
        },
        {
          "genre_id": 47,
          "selected": false,
          "nameJp": "黙示録を投稿する",
          "nameEn": "Post apocalyptic",
          "nameRu": "Пост апокалипсис",
          "title":  "",
        },
        {
          "genre_id": 48,
          "selected": false,
          "nameJp": "スチームパンク",
          "nameEn": "Steampunk",
          "nameRu": "Стимпанк",
          "title":  "",
        },
        {
          "genre_id": 49,
          "selected": false,
          "nameJp": "オタク",
          "nameEn": "Otaku",
          "nameRu": "Откаку",
          "title":  "",
        },
        {
          "genre_id": 50,
          "selected": false,
          "nameJp": "魔法少女",
          "nameEn": "Makho-shodze",
          "nameRu": "Махо-сёдзе",
          "title":  "",
        },
        {
          "genre_id": 51,
          "selected": false,
          "nameJp": "サイバーパンク",
          "nameEn": "Cyberpunk",
          "nameRu": "Кибербанк",
          "title":  "",
        },
        {
          "genre_id": 52,
          "selected": false,
          "nameJp": "幻の泥棒",
          "nameEn": "Phantom thieves",
          "nameRu": "Кайто",
          "title":  "",
        },
        {
          "genre_id": 53,
          "selected": false,
          "nameJp": "郁二",
          "nameEn": "Ikuji",
          "nameRu": "Икудзи",
          "title":  "",
        },
        {
          "genre_id": 54,
          "selected": false,
          "nameJp": "アイドル",
          "nameEn": "idol",
          "nameRu": "Айдолы",
          "title":  "",
        },
        {
          "genre_id": 55,
          "selected": false,
          "nameJp": "女性 ",
          "nameEn": "Josei",
          "nameRu": "Дзёсэй",
          "title":  "",
        }
      ],
      ratings: [
        {
          "rating_id": 1,
          "selected":  false,
          "name":      "G",
          "title":     "Нет возрастных ограничений"
        },
        {
          "rating_id": 2,
          "selected":  false,
          "name":      "PG",
          "title":     ""
        },
        {
          "rating_id": 3,
          "selected":  false,
          "name":      "PG-13",
          "title":     ""
        },
        {
          "rating_id": 4,
          "selected":  false,
          "name":      "PG-13",
          "title":     ""
        },
        {
          "rating_id": 5,
          "selected":  false,
          "name":      "R-17",
          "title":     ""
        },
        {
          "rating_id": 6,
          "selected":  false,
          "name":      "R+",
          "title":     ""
        },
        {
          "rating_id": 7,
          "selected":  false,
          "name":      "RX",
          "title":     ""
        },
      ],
      durations: [
        {
          "duration_id": 1,
          "selected": false,
          "nameJp":  "",
          "nameEn":  "",
          "nameRu":  "до 6 минут",
        },
        {
          "duration_id": 2,
          "selected": false,
          "nameJp":  "",
          "nameEn":  "",
          "nameRu":  "до 14 минут",
        },
        {
          "duration_id": 3,
          "selected": false,
          "nameJp":  "",
          "nameEn":  "",
          "nameRu":  "до 30 минут",
        },
        {
          "duration_id": 4,
          "selected": false,
          "nameJp":  "",
          "nameEn":  "",
          "nameRu":  "более 30 минут",
        },
      ],
      seasons:   [
        {
          "season_id": 1,
          "selected": false,
          "nameJp":  "",
          "nameEn":  "",
          "nameRu":  "Зима",
        },
        {
          "season_id": 2,
          "selected": false,
          "nameJp":  "",
          "nameEn":  "",
          "nameRu":  "Весна",
        },
        {
          "season_id": 3,
          "selected": false,
          "nameJp":  "",
          "nameEn":  "",
          "nameRu":  "Лето",
        },
        {
          "season_id": 4,
          "selected": false,
          "nameJp":  "",
          "nameEn":  "",
          "nameRu":  "Осень",
        },
      ],
      selectedStatus:    "",
      selectedGenres:    "",
      selectedTypes:     "",
      selectedRatings:   "",
      selectedDurations: "",
    }
  },
  watch: {
    genres: {
      handler(){
        this.selectedGenres = "";
        this.genres.forEach((genreItem) => {
          if(genreItem.selected){
            this.selectedGenres += genreItem.nameEn + ",";
          }
        })
        this.selectedGenres = this.selectedGenres.slice(0, -1);
        this.updateFiler();
      },
      deep: true
    },
    status: {
      handler(){
        this.selectedStatus = "";
        this.status.forEach((statusItem) => {
          if(statusItem.selected){
            this.selectedStatus += statusItem.nameEn + ",";
          }
        })
        this.selectedStatus = this.selectedStatus.slice(0, -1);
        this.updateFiler();
      },
      deep: true
    },
    types: {
      handler(){
        this.selectedTypes = "";
        this.types.forEach((typesItem) => {
          if(typesItem.selected){
            this.selectedTypes += typesItem.nameEn + ",";
          }
        })
        this.selectedTypes = this.selectedTypes.slice(0, -1);
        this.updateFiler();
      },
      deep: true
    },
    ratings: {
      handler(){
        this.selectedRatings = "";
        this.ratings.forEach((ratingsItem) => {
          if(ratingsItem.selected){
            this.selectedRatings += ratingsItem.name + ",";
          }
        })
        this.selectedRatings = this.selectedRatings.slice(0, -1);
        this.updateFiler();
      },
      deep: true
    },
    durations: {
      handler(){
        this.selectedDurations = "";
        this.durations.forEach((durationItem) => {
          if(durationItem.selected){
            this.selectedDurations += durationItem.nameEn + ",";
          }
        })
        this.selectedDurations = this.selectedDurations.slice(0, -1);
        this.updateFiler();
      },
      deep: true
    },
    seasons: {
      handler(){
        this.updateFiler();
      },
      deep: true
    },
  },
  methods: {
    updateFiler(){
      this.$router.replace({
        query:{
          status: this.selectedStatus,
          ratings: this.selectedRatings,
          types: this.selectedTypes,
          genres: this.selectedGenres,
          durations: this.selectedDurations
        }
      }).catch(e => {});
    },
    openSort(){
      let selectorSort = document.getElementsByClassName('selector sort')[0];
      if(!selectorSort.classList.contains('open')){
        selectorSort.classList.add('open');
      }
      else{
        selectorSort.classList.remove('open');
      }
    }
  },
}
</script>

<style scoped>
  .filter{
    background: #424755;
    border-radius: 14px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    padding: .8rem;
  }
  .filter > .selector-block{
    box-sizing: border-box;
    margin-bottom: 20px;
  }
  .selector > .chek-box-list > ul > li:hover {
    background: #3490dc;
    border-radius: 0.4rem;
  }
  .selector-block > .selector > .placeholder{
    cursor: inherit;
    box-sizing: border-box;
    padding: 10px 15px;
    font-size: 14px;
    font-weight: 400;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.43;
    letter-spacing: normal;
    -webkit-box-pack: justify;
    justify-content: space-between;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    background: #424755;
  }
  .selector-block > .selector.cursor-drop > .placeholder{
    cursor: pointer;
  }
  .selector-block > .selector > .placeholder >.selected{
    color: #FFFFFF;
    font-size: 14px;
    font-weight: 400;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.43;
    letter-spacing: normal;
    box-sizing: border-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
  }
  .selector-block > .selector > .placeholder >.icon-inline.dropdown-icon{
    font-size: 14px;
    font-weight: 400;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.43;
    letter-spacing: normal;
    box-sizing: border-box;
    -webkit-box-flex: 0;
    flex: 0 0 6px;
    margin-right: 6.5px;
    transition: transform .2s,-webkit-transform .2s;
    transform: rotate(270deg);
  }
  .selector-block > .selector.open > .placeholder >.icon-inline.dropdown-icon{
    transform: rotate(179deg);
  }
  .selector-block > .selector > .placeholder >.icon-inline.dropdown-icon > svg{
    color: black;
  }
  .selector-block > .selector > .drop-options{
    display: none;
    font-size: 14px;
    box-sizing: border-box;
    left: 0;
    position: inherit;
    background-color: #424755;
    width: 100%;
    z-index: 20;
    overflow-y: auto;
    max-height: 200px;
    border-radius: 0 0 14px 14px;
    transform: scale(1);
  }
  .selector-block > .selector.open > .drop-options{
    display: block;
  }
  .selector-block > .selector > .drop-options > .item{
    font-size: 14px;
    box-sizing: border-box;
    user-select: none;
    border-bottom: 1px solid rgba(61,64,74,.4);
    padding: 12px 15px;
    color: #fff;
}
.selector-block .selector .chek-box-list ul li{
  -moz-user-select: none;
  -khtml-user-select: none;
  user-select: none;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #FFFFFF;
  font-size: 12px;
  line-height: 20.34px;
  margin: 1px 0 2px;
  padding: 1px 3px 0;
}
.selector-block .selector .chek-box-list ul li label{
  width: 100%;
}
.selector-block .selector .chek-box-list ul{
  margin-left: 2px;
  padding-left: 2px;
}


</style>