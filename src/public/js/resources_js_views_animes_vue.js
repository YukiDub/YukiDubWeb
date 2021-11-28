"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_animes_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AnimeFilterComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AnimeFilterComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "AnimeFilterComponent",
  computed: (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)(['getLocale']),
  data: function data() {
    return {
      status: [{
        "status_id": 1,
        "selected": false,
        "name_jp": "",
        "name_en": "Announced",
        "name_ru": "Анонсировано"
      }, {
        "status_id": 2,
        "selected": false,
        "name_jp": "",
        "name_en": "Ongoing",
        "name_ru": "Выходит"
      }, {
        "status_id": 3,
        "selected": false,
        "name_jp": "",
        "name_en": "Released",
        "name_ru": "Вышло"
      }],
      types: [{
        "type_id": 1,
        "selected": false,
        "name_jp": "",
        "name_en": "Tv serial",
        "name_ru": "Tv сериал"
      }, {
        "type_id": 2,
        "selected": false,
        "name_jp": "",
        "name_en": "Film",
        "name_ru": "Фильм"
      }, {
        "type_id": 3,
        "selected": false,
        "name_jp": "",
        "name_en": "OVA",
        "name_ru": "OVA"
      }, {
        "type_id": 4,
        "selected": false,
        "name_jp": "",
        "name_en": "ONA",
        "name_ru": "ONA"
      }, {
        "type_id": 5,
        "selected": false,
        "name_jp": "",
        "name_en": "Special",
        "name_ru": "Спешл"
      }, {
        "type_id": 6,
        "selected": false,
        "name_jp": "",
        "name_en": "Clip",
        "name_ru": "Клип"
      }],
      genres: [{
        "genre_id": 1,
        "selected": false,
        "name_jp": "少年",
        "name_en": "Shounen",
        "name_ru": "Сёнен",
        "title": "Аниме, манга и ранобэ, рассчитанные на особую целевую аудиторию — мальчиков и юношей в возрасте от 12 до 18 лет. Манга этого типа публикуется в специализированных журналах (аудиторию определяют сами издатели), занимающих 38,4% рынка"
      }, {
        "genre_id": 2,
        "selected": false,
        "name_jp": "少年愛",
        "name_en": "Shounen Ai",
        "name_ru": "Сёнен-ай",
        "title": "Разновидность аниме и манги, поджанр сёдзё, посвящённый идеализированной любви между юношами или мужчинами, для которого целевой аудиторией являются женщины. Фокусируется на романтических отношениях, а не сексуальных."
      }, {
        "genre_id": 3,
        "selected": false,
        "name_jp": "青年",
        "name_en": "Seinen",
        "name_ru": "Сейнен",
        "title": "Аниме и манга, рассчитанные на особую целевую аудиторию — молодых мужчин от 18 лет и старше. Манга этого типа публикуется в специализированных сэйнэн-журналах (аудиторию определяют сами издатели). В редких случаях произведение в жанре сэйнэн нацелено на категорию бизнесменов в возрасте до 40 лет."
      }, {
        "genre_id": 4,
        "selected": false,
        "name_jp": "少女",
        "name_en": "Shoujo",
        "name_ru": "Сёдзё",
        "title": ""
      }, {
        "genre_id": 5,
        "selected": false,
        "name_jp": "少女愛",
        "name_en": "Shoujo Ai",
        "name_ru": "Сёдзё-ай",
        "title": ""
      }, {
        "genre_id": 6,
        "selected": false,
        "name_jp": "女性",
        "name_en": "Josei",
        "name_ru": "Дзёсей",
        "title": ""
      }, {
        "genre_id": 7,
        "selected": false,
        "name_jp": "ジェンダーベンダー",
        "name_en": "Gender Bender",
        "name_ru": "Смена пола",
        "title": ""
      }, {
        "genre_id": 8,
        "selected": false,
        "name_jp": "コメディ",
        "name_en": "Comedy",
        "name_ru": "Комедия",
        "title": ""
      }, {
        "genre_id": 9,
        "selected": false,
        "name_jp": "ロマンス",
        "name_en": "Romance",
        "name_ru": "Романтика",
        "title": ""
      }, {
        "genre_id": 10,
        "selected": false,
        "name_jp": "学校",
        "name_en": "School",
        "name_ru": "Школа",
        "title": ""
      }, {
        "genre_id": 11,
        "selected": false,
        "name_jp": "アクション",
        "name_en": "Action",
        "name_ru": "Экшен",
        "title": ""
      }, {
        "genre_id": 12,
        "selected": false,
        "name_jp": "冒険",
        "name_en": "Adventure",
        "name_ru": "Приключения",
        "title": ""
      }, {
        "genre_id": 13,
        "selected": false,
        "name_jp": "車",
        "name_en": "Cars",
        "name_ru": "Машины",
        "title": ""
      }, {
        "genre_id": 14,
        "selected": false,
        "name_jp": "狂気",
        "name_en": "Dementia",
        "name_ru": "Безумие",
        "title": ""
      }, {
        "genre_id": 15,
        "selected": false,
        "name_jp": "悪魔",
        "name_en": "Demons",
        "name_ru": "Демоны",
        "title": ""
      }, {
        "genre_id": 16,
        "selected": false,
        "name_jp": "ドラマ",
        "name_en": "Drama",
        "name_ru": "Драма",
        "title": ""
      }, {
        "genre_id": 17,
        "selected": false,
        "name_jp": "エッチ",
        "name_en": "Ecchi",
        "name_ru": "Эччи",
        "title": ""
      }, {
        "genre_id": 18,
        "selected": false,
        "name_jp": "素晴らしい",
        "name_en": "Fantasy",
        "name_ru": "Фантастика",
        "title": ""
      }, {
        "genre_id": 19,
        "selected": false,
        "name_jp": "ゲーム",
        "name_en": "Game",
        "name_ru": "Игры",
        "title": ""
      }, {
        "genre_id": 20,
        "selected": false,
        "name_jp": "ハーレム",
        "name_en": "Harem",
        "name_ru": "Гарем",
        "title": ""
      }, {
        "genre_id": 21,
        "selected": false,
        "name_jp": "歴史的",
        "name_en": "Historical",
        "name_ru": "Историческое",
        "title": ""
      }, {
        "genre_id": 22,
        "selected": false,
        "name_jp": "ホラー",
        "name_en": "Horror",
        "name_ru": "Ужасы",
        "title": ""
      }, {
        "genre_id": 23,
        "selected": false,
        "name_jp": "赤ちゃん",
        "name_en": "Kids",
        "name_ru": "Детское",
        "title": ""
      }, {
        "genre_id": 24,
        "selected": false,
        "name_jp": "魔法",
        "name_en": "Magic",
        "name_ru": "Магия",
        "title": ""
      }, {
        "genre_id": 25,
        "selected": false,
        "name_jp": "武道",
        "name_en": "Martial Arts",
        "name_ru": "Боевые искусства",
        "title": ""
      }, {
        "genre_id": 26,
        "selected": false,
        "name_jp": "毛皮",
        "name_en": "Mecha",
        "name_ru": "Меха",
        "title": ""
      }, {
        "genre_id": 27,
        "selected": false,
        "name_jp": "軍隊",
        "name_en": "Military",
        "name_ru": "Военное",
        "title": ""
      }, {
        "genre_id": 28,
        "selected": false,
        "name_jp": "音楽",
        "name_en": "Music",
        "name_ru": "Музыка",
        "title": ""
      }, {
        "genre_id": 29,
        "selected": false,
        "name_jp": "探偵",
        "name_en": "Mystery",
        "name_ru": "Детектив",
        "title": ""
      }, {
        "genre_id": 30,
        "selected": false,
        "name_jp": "パロディー",
        "name_en": "Parody",
        "name_ru": "Пародия",
        "title": ""
      }, {
        "genre_id": 31,
        "selected": false,
        "name_jp": "警察",
        "name_en": "Police",
        "name_ru": "Полиция",
        "title": ""
      }, {
        "genre_id": 32,
        "selected": false,
        "name_jp": "心理学",
        "name_en": "Psychological",
        "name_ru": "Психологическое",
        "title": ""
      }, {
        "genre_id": 33,
        "selected": false,
        "name_jp": "武士",
        "name_en": "Samurai",
        "name_ru": "Самураи",
        "title": ""
      }, {
        "genre_id": 34,
        "selected": false,
        "name_jp": "素晴らしい",
        "name_en": "Sci-Fi",
        "name_ru": "Фантастика",
        "title": ""
      }, {
        "genre_id": 35,
        "selected": false,
        "name_jp": "日常生活",
        "name_en": "Slice of Life",
        "name_ru": "Повседневность",
        "title": ""
      }, {
        "genre_id": 36,
        "selected": false,
        "name_jp": "スペース",
        "name_en": "Space",
        "name_ru": "Космос",
        "title": ""
      }, {
        "genre_id": 37,
        "selected": false,
        "name_jp": "スポーツ",
        "name_en": "Sports",
        "name_ru": "Спорт",
        "title": ""
      }, {
        "genre_id": 38,
        "selected": false,
        "name_jp": "スーパーパワー",
        "name_en": "Super Power",
        "name_ru": "Супер силы",
        "title": ""
      }, {
        "genre_id": 39,
        "selected": false,
        "name_jp": "超自然的",
        "name_en": "Supernatural",
        "name_ru": "Сверхъестественное",
        "title": ""
      }, {
        "genre_id": 40,
        "selected": false,
        "name_jp": "吸血鬼",
        "name_en": "Vampire",
        "name_ru": "Вампиры",
        "title": ""
      }, {
        "genre_id": 41,
        "selected": false,
        "name_jp": "スリラー",
        "name_en": "Thriller",
        "name_ru": "Триллер",
        "title": ""
      }, {
        "genre_id": 42,
        "selected": false,
        "name_jp": "変態",
        "name_en": "Hentai",
        "name_ru": "Хентай",
        "title": ""
      }, {
        "genre_id": 43,
        "selected": false,
        "name_jp": "やおい",
        "name_en": "Yaoi",
        "name_ru": "Яой",
        "title": ""
      }, {
        "genre_id": 44,
        "selected": false,
        "name_jp": "百合",
        "name_en": "Yuri",
        "name_ru": "Юри",
        "title": ""
      }, {
        "genre_id": 45,
        "selected": false,
        "name_jp": "ショタコン",
        "name_en": "Shotacon",
        "name_ru": "Сётакон",
        "title": ""
      }, {
        "genre_id": 46,
        "selected": false,
        "name_jp": "特撮",
        "name_en": "Tokusatsu",
        "name_ru": "Токусацу",
        "title": ""
      }, {
        "genre_id": 47,
        "selected": false,
        "name_jp": "黙示録を投稿する",
        "name_en": "Post apocalyptic",
        "name_ru": "Пост апокалипсис",
        "title": ""
      }, {
        "genre_id": 48,
        "selected": false,
        "name_jp": "スチームパンク",
        "name_en": "Steampunk",
        "name_ru": "Стимпанк",
        "title": ""
      }, {
        "genre_id": 49,
        "selected": false,
        "name_jp": "オタク",
        "name_en": "Otaku",
        "name_ru": "Откаку",
        "title": ""
      }, {
        "genre_id": 50,
        "selected": false,
        "name_jp": "魔法少女",
        "name_en": "Makho-shodze",
        "name_ru": "Махо-сёдзе",
        "title": ""
      }, {
        "genre_id": 51,
        "selected": false,
        "name_jp": "サイバーパンク",
        "name_en": "Cyberpunk",
        "name_ru": "Кибербанк",
        "title": ""
      }, {
        "genre_id": 52,
        "selected": false,
        "name_jp": "幻の泥棒",
        "name_en": "Phantom thieves",
        "name_ru": "Кайто",
        "title": ""
      }, {
        "genre_id": 53,
        "selected": false,
        "name_jp": "郁二",
        "name_en": "Ikuji",
        "name_ru": "Икудзи",
        "title": ""
      }, {
        "genre_id": 54,
        "selected": false,
        "name_jp": "アイドル",
        "name_en": "idol",
        "name_ru": "Айдолы",
        "title": ""
      }, {
        "genre_id": 55,
        "selected": false,
        "name_jp": "女性 ",
        "name_en": "Josei",
        "name_ru": "Дзёсэй",
        "title": ""
      }],
      ratings: [{
        "rating_id": 1,
        "selected": false,
        "name": "G",
        "title_jp": "年齢制限なし",
        "title_en": "No age restrictions",
        "title_ru": "Нет возрастных ограничений"
      }, {
        "rating_id": 2,
        "selected": false,
        "name": "PG",
        "title_jp": "年齢制限はありませんが、両親の立ち会いをお勧めします",
        "title_en": "There is no age limit, but the presence of parents is recommended",
        "title_ru": "Нет возрастных ограничений, но рекомендуется присутствие родителей"
      }, {
        "rating_id": 3,
        "selected": false,
        "name": "PG-13",
        "title_jp": "13 歳未満の子供には視聴は望ましくありません",
        "title_en": "Viewing is not desirable for children under 13",
        "title_ru": "Детям до 13 лет просмотр не желателен"
      }, {
        "rating_id": 5,
        "selected": false,
        "name": "R-17",
        "title_jp": "17 歳未満の方はご両親とのみ視聴できます",
        "title_en": "Persons under the age of 17 are allowed to watch only with their parents",
        "title_ru": "Лицам не достигшим 17 летия разрешен просмотр только с родителями"
      }, {
        "rating_id": 6,
        "selected": false,
        "name": "R+",
        "title_jp": "17 歳未満の方は閲覧を禁止されています",
        "title_en": "Persons under the age of 17 are prohibited from viewing",
        "title_ru": "Лицам не достигшим 17 летия просмотр запрещен"
      }, {
        "rating_id": 7,
        "selected": false,
        "name": "RX",
        "title_jp": "",
        "title_en": "18+ content",
        "title_ru": "18+ контент"
      }],
      durations: [{
        "duration_id": 1,
        "selected": false,
        "name_jp": "最大6分",
        "name_en": "Up to 6 minutes",
        "name_ru": "До 6 минут"
      }, {
        "duration_id": 2,
        "selected": false,
        "name_jp": "最大14分",
        "name_en": "Up to 14 minutes",
        "name_ru": "До 14 минут"
      }, {
        "duration_id": 3,
        "selected": false,
        "name_jp": "最大30分",
        "name_en": "Up to 30 minutes",
        "name_ru": "До 30 минут"
      }, {
        "duration_id": 4,
        "selected": false,
        "name_jp": "30分以上\n",
        "name_en": "More than 30 minutes",
        "name_ru": "Более 30 минут"
      }],
      seasons: [{
        "season_id": 1,
        "selected": false,
        "name_jp": "冬",
        "name_en": "Winter",
        "name_ru": "Зима"
      }, {
        "season_id": 2,
        "selected": false,
        "name_jp": "バネ",
        "name_en": "Spring",
        "name_ru": "Весна"
      }, {
        "season_id": 3,
        "selected": false,
        "name_jp": "夏",
        "name_en": "Summer",
        "name_ru": "Лето"
      }, {
        "season_id": 4,
        "selected": false,
        "name_jp": "秋",
        "name_en": "Autumn",
        "name_ru": "Осень"
      }],
      selectedStatus: "",
      selectedGenres: "",
      selectedTypes: "",
      selectedRatings: "",
      selectedDurations: ""
    };
  },
  watch: {
    genres: {
      handler: function handler() {
        var _this = this;

        this.selectedGenres = "";
        this.genres.forEach(function (genreItem) {
          if (genreItem.selected) {
            _this.selectedGenres += genreItem.nameEn + ",";
          }
        });
        this.selectedGenres = this.selectedGenres.slice(0, -1);
        this.updateFiler();
      },
      deep: true
    },
    status: {
      handler: function handler() {
        var _this2 = this;

        this.selectedStatus = "";
        this.status.forEach(function (statusItem) {
          if (statusItem.selected) {
            _this2.selectedStatus += statusItem.nameEn + ",";
          }
        });
        this.selectedStatus = this.selectedStatus.slice(0, -1);
        this.updateFiler();
      },
      deep: true
    },
    types: {
      handler: function handler() {
        var _this3 = this;

        this.selectedTypes = "";
        this.types.forEach(function (typesItem) {
          if (typesItem.selected) {
            _this3.selectedTypes += typesItem.nameEn + ",";
          }
        });
        this.selectedTypes = this.selectedTypes.slice(0, -1);
        this.updateFiler();
      },
      deep: true
    },
    ratings: {
      handler: function handler() {
        var _this4 = this;

        this.selectedRatings = "";
        this.ratings.forEach(function (ratingsItem) {
          if (ratingsItem.selected) {
            _this4.selectedRatings += ratingsItem.name + ",";
          }
        });
        this.selectedRatings = this.selectedRatings.slice(0, -1);
        this.updateFiler();
      },
      deep: true
    },
    durations: {
      handler: function handler() {
        var _this5 = this;

        this.selectedDurations = "";
        this.durations.forEach(function (durationItem) {
          if (durationItem.selected) {
            _this5.selectedDurations += durationItem.nameEn + ",";
          }
        });
        this.selectedDurations = this.selectedDurations.slice(0, -1);
        this.updateFiler();
      },
      deep: true
    },
    seasons: {
      handler: function handler() {
        this.updateFiler();
      },
      deep: true
    }
  },
  methods: {
    close: function close() {
      this.$emit('close');
    },
    updateFiler: function updateFiler() {
      this.$router.replace({
        query: {
          status: this.selectedStatus,
          ratings: this.selectedRatings,
          types: this.selectedTypes,
          genres: this.selectedGenres,
          durations: this.selectedDurations
        }
      })["catch"](function (e) {});
    },
    openSort: function openSort() {
      var selectorSort = document.getElementsByClassName('selector sort')[0];

      if (!selectorSort.classList.contains('open')) {
        selectorSort.classList.add('open');
      } else {
        selectorSort.classList.remove('open');
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/animes.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/animes.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_AnimeFilterComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/AnimeFilterComponent */ "./resources/js/components/AnimeFilterComponent.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "index",
  components: {
    animeFilter: _components_AnimeFilterComponent__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  computed: (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)(['animeList', 'animePagination', 'getLocale']),
  mounted: function mounted() {
    this.loadComponent(); // this.bodyParams.genres = [];
    // console.log(this.bodyParams)
    // Array.observe(this.genresFilter, function(changes) {
    //   console.log(changes);
    // });
  },
  data: function data() {
    return {
      openFilter: false,
      loading: false,
      page: this.$route.query.page ? Number(this.$route.query.page) : 1,
      genresFilter: [],
      statusFilter: [],
      bodyParams: {
        'genres': ['josei']
      }
    };
  },
  watch: {
    page: {
      handler: function handler() {
        this.loading = false;
        this.loadAnimesList(this.page, 30);
        this.$router.replace({
          query: {
            page: String(this.page)
          }
        })["catch"](function (ex) {});
      },
      deep: true
    },
    animeList: {
      handler: function handler() {
        this.loading = true;
      },
      deep: true
    }
  },
  methods: _objectSpread(_objectSpread({
    loadComponent: function loadComponent() {
      if (this.animePagination && Number(this.animePagination.current_page) === this.page) {
        this.loading = true;
      } else {
        this.loadAnimesList(this.page, 30);
      }
    }
  }, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)(["loadAnimesList"])), {}, {
    filterOnClick: function filterOnClick() {
      var filter = document.getElementById("filter-block");

      if (this.openFilter) {
        this.openFilter = false;
        filter.classList.add('d-none');
      } else {
        this.openFilter = true;
        filter.classList.remove('d-none');
      }
    }
  }) // methods: {
  //   loadPage(){
  //     let params = this.$route.query;
  //
  //     if(params.genres) this.genresFilter = params.genres.split(',');
  //     if(params.status) this.statusFilter = params.status.split(',');
  //
  //     console.log(this.genresFilter);
  //   },
  // },

});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AnimeFilterComponent.vue?vue&type=style&index=0&id=7b3df9bc&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AnimeFilterComponent.vue?vue&type=style&index=0&id=7b3df9bc&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.filter[data-v-7b3df9bc]{\n    background: #424755;\n    border-radius: 14px;\n    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));\n    padding: .8rem;\n}\n.filter > .selector-block[data-v-7b3df9bc]{\n    box-sizing: border-box;\n    margin-bottom: 20px;\n}\n.selector > .chek-box-list > ul > li.selected[data-v-7b3df9bc] {\n    background: #3490dc;\n    border-radius: 0.4rem;\n}\n.selector-block > .selector > .placeholder[data-v-7b3df9bc]{\n    cursor: inherit;\n    box-sizing: border-box;\n    padding: 10px 15px;\n    font-size: 14px;\n    font-weight: 400;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: 1.43;\n    letter-spacing: normal;\n    justify-content: space-between;\n    display: flex;\n    align-items: center;\n    background: #424755;\n}\n.selector-block > .selector.cursor-drop > .placeholder[data-v-7b3df9bc]{\n    cursor: pointer;\n}\n.selector-block > .selector > .placeholder >.selected[data-v-7b3df9bc]{\n    color: #FFFFFF;\n    font-size: 14px;\n    font-weight: 400;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: 1.43;\n    letter-spacing: normal;\n    box-sizing: border-box;\n    display: flex;\n    align-items: center;\n}\n.selector-block > .selector > .placeholder >.icon-inline.dropdown-icon[data-v-7b3df9bc]{\n    font-size: 14px;\n    font-weight: 400;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: 1.43;\n    letter-spacing: normal;\n    box-sizing: border-box;\n    flex: 0 0 6px;\n    margin-right: 6.5px;\n    transition: transform .2s;\n    transform: rotate(270deg);\n}\n.selector-block > .selector.open > .placeholder >.icon-inline.dropdown-icon[data-v-7b3df9bc]{\n    transform: rotate(179deg);\n}\n.selector-block > .selector > .placeholder >.icon-inline.dropdown-icon > svg[data-v-7b3df9bc]{\n    color: black;\n}\n.selector-block > .selector > .drop-options[data-v-7b3df9bc]{\n    display: none;\n    font-size: 14px;\n    box-sizing: border-box;\n    left: 0;\n    position: inherit;\n    background-color: #424755;\n    width: 100%;\n    z-index: 20;\n    overflow-y: auto;\n    max-height: 200px;\n    border-radius: 0 0 14px 14px;\n    transform: scale(1);\n}\n.selector-block > .selector.open > .drop-options[data-v-7b3df9bc]{\n    display: block;\n}\n.selector-block > .selector > .drop-options > .item[data-v-7b3df9bc]{\n    font-size: 14px;\n    box-sizing: border-box;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    border-bottom: 1px solid rgba(61,64,74,.4);\n    padding: 12px 15px;\n    color: #fff;\n}\n.selector-block .selector .chek-box-list ul li[data-v-7b3df9bc]{\n  -moz-user-select: none;\n  -webkit-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  color: #FFFFFF;\n  font-size: 12px;\n  line-height: 20.34px;\n  margin: 1px 0 2px;\n  padding: 1px 3px 0;\n}\n.selector-block .selector .chek-box-list ul li label[data-v-7b3df9bc]{\n  width: 100%;\n}\n.selector-block .selector .chek-box-list ul[data-v-7b3df9bc]{\n  margin-left: 2px;\n  padding-left: 2px;\n}\n.filter-block > .body[data-v-7b3df9bc]{\n  background: #009BEB;\n  height: 7vh;\n  display: none;\n}\n.filter-block > .filter > .footer[data-v-7b3df9bc]{\n  display: none;\n}\n.filter-block > .body[data-v-7b3df9bc]{\n  padding-left: 1rem;\n  padding-right: 1rem;\n  padding-top: 2.2vh;\n}\n.filter-block > .body > .row > .col-auto > .button[data-v-7b3df9bc]{\n  height: 100%;\n  background: #dfdfe0;\n  border-radius: 7px;\n  padding: 0.2rem;\n}\n/* Small devices (landscape phones, 991px and up) */\n@media (max-width: 991px) {\n.filter-block .filter[data-v-7b3df9bc] {\n    border-radius: 0;\n    height: 100vh;\n    height: 95%;\n    padding-bottom: 2rem;\n    overflow-y: auto;\n    overflow-x: hidden;\n}\n.filter-block > .body[data-v-7b3df9bc]{\n    display: block;\n}\n.filter-block > .filter > .footer[data-v-7b3df9bc]{\n    display: block;\n}\n.selector-block .selector .chek-box-list[data-v-7b3df9bc]{\n    overflow-x: auto;\n    overflow-y: hidden;\n}\n.selector-block .selector .chek-box-list ul li[data-v-7b3df9bc]{\n    font-size: 17px;\n    white-space: pre;\n    overflow: inherit;\n    display: inline;\n    padding-top: 19px;\n    margin: 8px;\n    text-align:center;\n}\n.selector > .chek-box-list > ul > li > label > input[data-v-7b3df9bc] {\n    display: none;\n}\n.selector > .chek-box-list > ul[data-v-7b3df9bc]{\n    display:flex;\n    list-style:none;\n}\n.filter-block[data-v-7b3df9bc]{\n    position: fixed;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 1000;\n}\n}\n\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/animes.vue?vue&type=style&index=0&id=591f14be&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/animes.vue?vue&type=style&index=0&id=591f14be&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.btn-filter[data-v-591f14be]{\r\n  position: fixed;\r\n  width: 7rem;\r\n  bottom: 3.5rem;\r\n  right: -0.2rem;\r\n  z-index: 4;\r\n  filter: drop-shadow(2px 3px 8px rgba(0, 0, 0, 2.25));\n}\n.btn-filter > i[data-v-591f14be]{\r\n  font-size: 4.5rem;\r\n  color: aliceblue;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AnimeFilterComponent.vue?vue&type=style&index=0&id=7b3df9bc&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AnimeFilterComponent.vue?vue&type=style&index=0&id=7b3df9bc&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AnimeFilterComponent_vue_vue_type_style_index_0_id_7b3df9bc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AnimeFilterComponent.vue?vue&type=style&index=0&id=7b3df9bc&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AnimeFilterComponent.vue?vue&type=style&index=0&id=7b3df9bc&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AnimeFilterComponent_vue_vue_type_style_index_0_id_7b3df9bc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AnimeFilterComponent_vue_vue_type_style_index_0_id_7b3df9bc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/animes.vue?vue&type=style&index=0&id=591f14be&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/animes.vue?vue&type=style&index=0&id=591f14be&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_animes_vue_vue_type_style_index_0_id_591f14be_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./animes.vue?vue&type=style&index=0&id=591f14be&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/animes.vue?vue&type=style&index=0&id=591f14be&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_animes_vue_vue_type_style_index_0_id_591f14be_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_animes_vue_vue_type_style_index_0_id_591f14be_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/AnimeFilterComponent.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/AnimeFilterComponent.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AnimeFilterComponent_vue_vue_type_template_id_7b3df9bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AnimeFilterComponent.vue?vue&type=template&id=7b3df9bc&scoped=true& */ "./resources/js/components/AnimeFilterComponent.vue?vue&type=template&id=7b3df9bc&scoped=true&");
/* harmony import */ var _AnimeFilterComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AnimeFilterComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/AnimeFilterComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _AnimeFilterComponent_vue_vue_type_style_index_0_id_7b3df9bc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AnimeFilterComponent.vue?vue&type=style&index=0&id=7b3df9bc&scoped=true&lang=css& */ "./resources/js/components/AnimeFilterComponent.vue?vue&type=style&index=0&id=7b3df9bc&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AnimeFilterComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AnimeFilterComponent_vue_vue_type_template_id_7b3df9bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _AnimeFilterComponent_vue_vue_type_template_id_7b3df9bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "7b3df9bc",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/AnimeFilterComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/animes.vue":
/*!***************************************!*\
  !*** ./resources/js/views/animes.vue ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _animes_vue_vue_type_template_id_591f14be_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animes.vue?vue&type=template&id=591f14be&scoped=true& */ "./resources/js/views/animes.vue?vue&type=template&id=591f14be&scoped=true&");
/* harmony import */ var _animes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animes.vue?vue&type=script&lang=js& */ "./resources/js/views/animes.vue?vue&type=script&lang=js&");
/* harmony import */ var _animes_vue_vue_type_style_index_0_id_591f14be_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animes.vue?vue&type=style&index=0&id=591f14be&scoped=true&lang=css& */ "./resources/js/views/animes.vue?vue&type=style&index=0&id=591f14be&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _animes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _animes_vue_vue_type_template_id_591f14be_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _animes_vue_vue_type_template_id_591f14be_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "591f14be",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/animes.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/AnimeFilterComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/AnimeFilterComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AnimeFilterComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AnimeFilterComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AnimeFilterComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AnimeFilterComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/animes.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./resources/js/views/animes.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_animes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./animes.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/animes.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_animes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/AnimeFilterComponent.vue?vue&type=style&index=0&id=7b3df9bc&scoped=true&lang=css&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/AnimeFilterComponent.vue?vue&type=style&index=0&id=7b3df9bc&scoped=true&lang=css& ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AnimeFilterComponent_vue_vue_type_style_index_0_id_7b3df9bc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AnimeFilterComponent.vue?vue&type=style&index=0&id=7b3df9bc&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AnimeFilterComponent.vue?vue&type=style&index=0&id=7b3df9bc&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/views/animes.vue?vue&type=style&index=0&id=591f14be&scoped=true&lang=css&":
/*!************************************************************************************************!*\
  !*** ./resources/js/views/animes.vue?vue&type=style&index=0&id=591f14be&scoped=true&lang=css& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_animes_vue_vue_type_style_index_0_id_591f14be_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./animes.vue?vue&type=style&index=0&id=591f14be&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/animes.vue?vue&type=style&index=0&id=591f14be&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/AnimeFilterComponent.vue?vue&type=template&id=7b3df9bc&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/AnimeFilterComponent.vue?vue&type=template&id=7b3df9bc&scoped=true& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AnimeFilterComponent_vue_vue_type_template_id_7b3df9bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AnimeFilterComponent_vue_vue_type_template_id_7b3df9bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AnimeFilterComponent_vue_vue_type_template_id_7b3df9bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AnimeFilterComponent.vue?vue&type=template&id=7b3df9bc&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AnimeFilterComponent.vue?vue&type=template&id=7b3df9bc&scoped=true&");


/***/ }),

/***/ "./resources/js/views/animes.vue?vue&type=template&id=591f14be&scoped=true&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/animes.vue?vue&type=template&id=591f14be&scoped=true& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_animes_vue_vue_type_template_id_591f14be_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_animes_vue_vue_type_template_id_591f14be_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_animes_vue_vue_type_template_id_591f14be_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./animes.vue?vue&type=template&id=591f14be&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/animes.vue?vue&type=template&id=591f14be&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AnimeFilterComponent.vue?vue&type=template&id=7b3df9bc&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AnimeFilterComponent.vue?vue&type=template&id=7b3df9bc&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "filter-block" }, [
    _c("div", { staticClass: "body" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-auto me-auto" }, [
          _c("h6", { staticClass: "p-title" }, [
            _vm._v(_vm._s(_vm.$tc("filter", 2))),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-auto" }, [
          _c(
            "div",
            {
              staticClass: "button",
              on: {
                click: function ($event) {
                  return _vm.close()
                },
              },
            },
            [_vm._v(" " + _vm._s(_vm.$t("apply")) + " ")]
          ),
        ]),
      ]),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "filter" }, [
      _c("div", { staticClass: "selector-block" }, [
        _c("div", { staticClass: "selector" }, [
          _c("div", { staticClass: "placeholder" }, [
            _c("div", { staticClass: "selected" }, [
              _c("span", [_vm._v(_vm._s(_vm.$t("status")))]),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "chek-box-list" }, [
            _c(
              "ul",
              _vm._l(_vm.status, function (statusItem) {
                return _c(
                  "li",
                  {
                    key: statusItem.status_id,
                    class: { selected: statusItem.selected },
                    attrs: { title: statusItem.nameRu },
                  },
                  [
                    _c("label", [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: statusItem.selected,
                            expression: "statusItem.selected",
                          },
                        ],
                        attrs: { type: "checkbox" },
                        domProps: {
                          checked: Array.isArray(statusItem.selected)
                            ? _vm._i(statusItem.selected, null) > -1
                            : statusItem.selected,
                        },
                        on: {
                          change: function ($event) {
                            var $$a = statusItem.selected,
                              $$el = $event.target,
                              $$c = $$el.checked ? true : false
                            if (Array.isArray($$a)) {
                              var $$v = null,
                                $$i = _vm._i($$a, $$v)
                              if ($$el.checked) {
                                $$i < 0 &&
                                  _vm.$set(
                                    statusItem,
                                    "selected",
                                    $$a.concat([$$v])
                                  )
                              } else {
                                $$i > -1 &&
                                  _vm.$set(
                                    statusItem,
                                    "selected",
                                    $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                                  )
                              }
                            } else {
                              _vm.$set(statusItem, "selected", $$c)
                            }
                          },
                        },
                      }),
                      _vm._v(
                        "  " +
                          _vm._s(statusItem["name_" + _vm.getLocale]) +
                          "\n              "
                      ),
                    ]),
                  ]
                )
              }),
              0
            ),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "selector-block" }, [
        _c("div", { staticClass: "selector" }, [
          _c("div", { staticClass: "placeholder" }, [
            _c("div", { staticClass: "selected" }, [
              _c("span", [_vm._v(_vm._s(_vm.$t("type")))]),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "chek-box-list" }, [
            _c(
              "ul",
              _vm._l(_vm.types, function (type) {
                return _c(
                  "li",
                  {
                    key: type.id,
                    class: { selected: type.selected },
                    attrs: { title: type.nameEn },
                  },
                  [
                    _c("label", [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: type.selected,
                            expression: "type.selected",
                          },
                        ],
                        attrs: { type: "checkbox" },
                        domProps: {
                          checked: Array.isArray(type.selected)
                            ? _vm._i(type.selected, null) > -1
                            : type.selected,
                        },
                        on: {
                          change: function ($event) {
                            var $$a = type.selected,
                              $$el = $event.target,
                              $$c = $$el.checked ? true : false
                            if (Array.isArray($$a)) {
                              var $$v = null,
                                $$i = _vm._i($$a, $$v)
                              if ($$el.checked) {
                                $$i < 0 &&
                                  _vm.$set(type, "selected", $$a.concat([$$v]))
                              } else {
                                $$i > -1 &&
                                  _vm.$set(
                                    type,
                                    "selected",
                                    $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                                  )
                              }
                            } else {
                              _vm.$set(type, "selected", $$c)
                            }
                          },
                        },
                      }),
                      _vm._v(
                        "  " +
                          _vm._s(type["name_" + _vm.getLocale]) +
                          "\n              "
                      ),
                    ]),
                  ]
                )
              }),
              0
            ),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "selector-block" }, [
        _c("div", { staticClass: "selector" }, [
          _c("div", { staticClass: "placeholder" }, [
            _c("div", { staticClass: "selected" }, [
              _c("span", [_vm._v(_vm._s(_vm.$t("genres")))]),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "chek-box-list" }, [
            _c(
              "ul",
              _vm._l(_vm.genres, function (genre) {
                return _c(
                  "li",
                  {
                    key: genre.genre_id,
                    class: { selected: genre.selected },
                    attrs: { "data-value": "#", title: genre.title },
                  },
                  [
                    _c("label", [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: genre.selected,
                            expression: "genre.selected",
                          },
                        ],
                        attrs: { type: "checkbox" },
                        domProps: {
                          checked: Array.isArray(genre.selected)
                            ? _vm._i(genre.selected, null) > -1
                            : genre.selected,
                        },
                        on: {
                          change: function ($event) {
                            var $$a = genre.selected,
                              $$el = $event.target,
                              $$c = $$el.checked ? true : false
                            if (Array.isArray($$a)) {
                              var $$v = null,
                                $$i = _vm._i($$a, $$v)
                              if ($$el.checked) {
                                $$i < 0 &&
                                  _vm.$set(genre, "selected", $$a.concat([$$v]))
                              } else {
                                $$i > -1 &&
                                  _vm.$set(
                                    genre,
                                    "selected",
                                    $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                                  )
                              }
                            } else {
                              _vm.$set(genre, "selected", $$c)
                            }
                          },
                        },
                      }),
                      _vm._v(
                        "\n                " +
                          _vm._s(genre["name_" + _vm.getLocale]) +
                          "\n              "
                      ),
                    ]),
                  ]
                )
              }),
              0
            ),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "selector-block" }, [
        _c("div", { staticClass: "selector" }, [
          _c("div", { staticClass: "placeholder" }, [
            _c("div", { staticClass: "selected" }, [
              _c("span", [_vm._v(_vm._s(_vm.$t("rating")))]),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "chek-box-list" }, [
            _c(
              "ul",
              _vm._l(_vm.ratings, function (rating) {
                return _c(
                  "li",
                  {
                    key: rating.rating_id,
                    class: { selected: rating.selected },
                    attrs: { title: rating["title_" + _vm.getLocale] },
                  },
                  [
                    _c("label", [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: rating.selected,
                            expression: "rating.selected",
                          },
                        ],
                        attrs: { type: "checkbox" },
                        domProps: {
                          checked: Array.isArray(rating.selected)
                            ? _vm._i(rating.selected, null) > -1
                            : rating.selected,
                        },
                        on: {
                          change: function ($event) {
                            var $$a = rating.selected,
                              $$el = $event.target,
                              $$c = $$el.checked ? true : false
                            if (Array.isArray($$a)) {
                              var $$v = null,
                                $$i = _vm._i($$a, $$v)
                              if ($$el.checked) {
                                $$i < 0 &&
                                  _vm.$set(
                                    rating,
                                    "selected",
                                    $$a.concat([$$v])
                                  )
                              } else {
                                $$i > -1 &&
                                  _vm.$set(
                                    rating,
                                    "selected",
                                    $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                                  )
                              }
                            } else {
                              _vm.$set(rating, "selected", $$c)
                            }
                          },
                        },
                      }),
                      _vm._v("  " + _vm._s(rating.name) + "\n              "),
                    ]),
                  ]
                )
              }),
              0
            ),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "selector-block" }, [
        _c("div", { staticClass: "selector" }, [
          _c("div", { staticClass: "placeholder" }, [
            _c("div", { staticClass: "selected" }, [
              _c("span", [_vm._v(_vm._s(_vm.$t("episode duration")))]),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "chek-box-list" }, [
            _c(
              "ul",
              _vm._l(_vm.durations, function (duration) {
                return _c(
                  "li",
                  {
                    key: duration.duration_id,
                    class: { selected: duration.selected },
                    attrs: { title: duration.title },
                  },
                  [
                    _c("label", [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: duration.selected,
                            expression: "duration.selected",
                          },
                        ],
                        attrs: { type: "checkbox" },
                        domProps: {
                          checked: Array.isArray(duration.selected)
                            ? _vm._i(duration.selected, null) > -1
                            : duration.selected,
                        },
                        on: {
                          change: function ($event) {
                            var $$a = duration.selected,
                              $$el = $event.target,
                              $$c = $$el.checked ? true : false
                            if (Array.isArray($$a)) {
                              var $$v = null,
                                $$i = _vm._i($$a, $$v)
                              if ($$el.checked) {
                                $$i < 0 &&
                                  _vm.$set(
                                    duration,
                                    "selected",
                                    $$a.concat([$$v])
                                  )
                              } else {
                                $$i > -1 &&
                                  _vm.$set(
                                    duration,
                                    "selected",
                                    $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                                  )
                              }
                            } else {
                              _vm.$set(duration, "selected", $$c)
                            }
                          },
                        },
                      }),
                      _vm._v(
                        "  " +
                          _vm._s(duration["name_" + _vm.getLocale]) +
                          "\n              "
                      ),
                    ]),
                  ]
                )
              }),
              0
            ),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "selector-block" }, [
        _c("div", { staticClass: "selector" }, [
          _c("div", { staticClass: "placeholder" }, [
            _c("div", { staticClass: "selected" }, [
              _c("span", [_vm._v(_vm._s(_vm.$t("season")))]),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "chek-box-list" }, [
            _c(
              "ul",
              _vm._l(_vm.seasons, function (season) {
                return _c(
                  "li",
                  {
                    key: season.season_id,
                    class: { selected: season.selected },
                    attrs: { title: season.nameRu },
                  },
                  [
                    _c("label", [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: season.selected,
                            expression: "season.selected",
                          },
                        ],
                        attrs: { type: "checkbox" },
                        domProps: {
                          checked: Array.isArray(season.selected)
                            ? _vm._i(season.selected, null) > -1
                            : season.selected,
                        },
                        on: {
                          change: function ($event) {
                            var $$a = season.selected,
                              $$el = $event.target,
                              $$c = $$el.checked ? true : false
                            if (Array.isArray($$a)) {
                              var $$v = null,
                                $$i = _vm._i($$a, $$v)
                              if ($$el.checked) {
                                $$i < 0 &&
                                  _vm.$set(
                                    season,
                                    "selected",
                                    $$a.concat([$$v])
                                  )
                              } else {
                                $$i > -1 &&
                                  _vm.$set(
                                    season,
                                    "selected",
                                    $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                                  )
                              }
                            } else {
                              _vm.$set(season, "selected", $$c)
                            }
                          },
                        },
                      }),
                      _vm._v(
                        "  " +
                          _vm._s(season["name_" + _vm.getLocale]) +
                          "\n              "
                      ),
                    ]),
                  ]
                )
              }),
              0
            ),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "selector-block" }, [
        _c("div", { staticClass: "selector" }, [
          _c("div", { staticClass: "placeholder" }, [
            _c("div", { staticClass: "selected" }, [
              _c("span", [_vm._v(_vm._s(_vm.$t("score")))]),
            ]),
          ]),
          _vm._v(" "),
          _vm._m(0),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "selector-block" }, [
        _c("div", { staticClass: "selector" }, [
          _c("div", { staticClass: "placeholder" }, [
            _c("div", { staticClass: "selected" }, [
              _c("span", [_vm._v(_vm._s(_vm.$t("my list")))]),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "chek-box-list" }, [
            _c("ul", [
              _c("li", { attrs: { "data-field": "status" } }, [
                _c("input", {
                  attrs: { autocomplete: "off", type: "checkbox" },
                }),
                _vm._v(" " + _vm._s(_vm.$t("completed")) + "\n            "),
              ]),
              _vm._v(" "),
              _c("li", { attrs: { "data-field": "status" } }, [
                _c("input", {
                  attrs: { autocomplete: "off", type: "checkbox" },
                }),
                _vm._v(
                  "  " + _vm._s(_vm.$t("plan to watch")) + "\n            "
                ),
              ]),
              _vm._v(" "),
              _c("li", { attrs: { "data-field": "status" } }, [
                _c("input", {
                  attrs: { autocomplete: "off", type: "checkbox" },
                }),
                _vm._v("  " + _vm._s(_vm.$t("dropped")) + "\n            "),
              ]),
              _vm._v(" "),
              _c("li", { attrs: { "data-field": "status" } }, [
                _c("input", {
                  attrs: { autocomplete: "off", type: "checkbox" },
                }),
                _vm._v("  " + _vm._s(_vm.$t("on-hold")) + "\n            "),
              ]),
            ]),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "selector-block" }, [
        _c(
          "div",
          {
            staticClass: "selector sort cursor-drop",
            on: {
              click: function ($event) {
                return _vm.openSort()
              },
            },
          },
          [
            _c("div", { staticClass: "placeholder" }, [
              _c("div", { staticClass: "selected" }, [
                _c("span", [_vm._v(_vm._s(_vm.$t("sorted by")))]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "icon-inline dropdown-icon" }, [
                _c(
                  "svg",
                  {
                    attrs: {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "10",
                      height: "6",
                      viewBox: "0 0 10 6",
                    },
                  },
                  [
                    _c("path", {
                      attrs: {
                        fill: "#FFF",
                        "fill-rule": "nonzero",
                        d: "M8.618 5.772l.003.003c.35.336.873.29 1.174-.102a1.04 1.04 0 0 0-.078-1.334L5.55.233a.765.765 0 0 0-1.1 0L.28 4.342c-.342.345-.375.94-.075 1.331.301.393.825.438 1.177.099L5 2.207l3.618 3.565z",
                      },
                    }),
                  ]
                ),
              ]),
            ]),
            _vm._v(" "),
            _vm._m(1),
          ]
        ),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "d-grid gap-2 button-block mx-0" }, [
        _c("div", { staticClass: "btn", attrs: { type: "button" } }, [
          _vm._v(_vm._s(_vm.$t("reset filter"))),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "footer" }),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "chek-box-list" }, [
      _c("ul", [
        _c("li", { attrs: { "data-field": "status", "data-value": "anons" } }, [
          _c("input", { attrs: { autocomplete: "off", type: "checkbox" } }),
          _vm._v(" 8+\n            "),
        ]),
        _vm._v(" "),
        _c("li", { attrs: { "data-field": "status", "data-value": "anons" } }, [
          _c("input", { attrs: { autocomplete: "off", type: "checkbox" } }),
          _vm._v("  7+\n            "),
        ]),
        _vm._v(" "),
        _c("li", { attrs: { "data-field": "status", "data-value": "anons" } }, [
          _c("input", { attrs: { autocomplete: "off", type: "checkbox" } }),
          _vm._v("  6+\n            "),
        ]),
        _vm._v(" "),
        _c("li", { attrs: { "data-field": "status", "data-value": "anons" } }, [
          _c("input", { attrs: { autocomplete: "off", type: "checkbox" } }),
          _vm._v("  5+\n            "),
        ]),
        _vm._v(" "),
        _c("li", { attrs: { "data-field": "status", "data-value": "anons" } }, [
          _c("input", { attrs: { autocomplete: "off", type: "checkbox" } }),
          _vm._v("  <5\n            "),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "drop-options" }, [
      _c("div", { staticClass: "item" }, [
        _vm._v("\n            По алфавиту\n          "),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "item" }, [
        _vm._v("\n            По рейтингу\n          "),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "item" }, [
        _vm._v("\n            По дате премьеры\n          "),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "item" }, [
        _vm._v("\n            По дате выхода\n          "),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/animes.vue?vue&type=template&id=591f14be&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/animes.vue?vue&type=template&id=591f14be&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "col order-1" }, [
      _c("div", { staticClass: "row mb-2 mt-sm-4 mt-md-0" }, [
        _c("div", { staticClass: "col-auto me-auto" }, [
          _c("h6", { staticClass: "p-title" }, [
            _vm._v(
              _vm._s(_vm.$t("anime")) +
                " - " +
                _vm._s(
                  _vm.$tc("message.page", 1, {
                    page: _vm.page,
                    count: _vm.animePagination.last_page,
                  })
                )
            ),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-auto" }, [
          _c(
            "div",
            {
              staticClass: "btn",
              on: {
                click: function ($event) {
                  _vm.page = _vm.page > 1 ? _vm.page - 1 : 1
                },
              },
            },
            [_vm._v(" < ")]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "btn",
              on: {
                click: function ($event) {
                  _vm.page =
                    _vm.page < _vm.animePagination.last_page
                      ? _vm.page + 1
                      : _vm.page
                },
              },
            },
            [_vm._v(" > ")]
          ),
        ]),
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "entry-list" },
        [
          _vm.loading
            ? _c(
                "div",
                {
                  staticClass:
                    "row row-cols-2 row-cols-sm-3 row-cols-md-3 row-cols-lg-5 mt-0 pt-1 ms-1 me-1 pb-4 g-3",
                },
                _vm._l(_vm.animeList, function (anime) {
                  return _c("catalog-entry", {
                    key: anime.id,
                    attrs: {
                      id: anime.id,
                      name: anime["name_" + _vm.getLocale],
                      type: anime.type,
                      genres: anime.genres,
                      poster_url: anime.poster.preview,
                      status: anime.status,
                      studios: anime.studios,
                      route: { name: "anime", params: { id: anime.id } },
                    },
                  })
                }),
                1
              )
            : _c("loading"),
        ],
        1
      ),
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "col-xs-12 col-md-3 order-2 d-none d-lg-block",
        attrs: { id: "filter-block" },
      },
      [
        _c("h6", { staticClass: "p-title mb-3" }, [
          _vm._v(_vm._s(_vm.$tc("filter", 2))),
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-12" },
          [
            _c("animeFilter", {
              on: {
                close: function ($event) {
                  return _vm.filterOnClick()
                },
              },
            }),
          ],
          1
        ),
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "btn-filter d-block d-lg-none",
        on: {
          click: function ($event) {
            return _vm.filterOnClick()
          },
        },
      },
      [_c("i", { staticClass: "bi bi-filter-circle-fill" })]
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);