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
  data: function data() {
    return {
      status: [{
        "status_id": 1,
        "selected": false,
        "nameJp": "",
        "nameEn": "Announced",
        "nameRu": "Анонсировано"
      }, {
        "status_id": 2,
        "selected": false,
        "nameJp": "",
        "nameEn": "Ongoing",
        "nameRu": "Выходит"
      }, {
        "status_id": 3,
        "selected": false,
        "nameJp": "",
        "nameEn": "Released",
        "nameRu": "Вышло"
      }],
      types: [{
        "type_id": 1,
        "selected": false,
        "nameJp": "",
        "nameEn": "Tv serial",
        "nameRu": "Tv сериал"
      }, {
        "type_id": 2,
        "selected": false,
        "nameJp": "",
        "nameEn": "Film",
        "nameRu": "Фильм"
      }, {
        "type_id": 3,
        "selected": false,
        "nameJp": "",
        "nameEn": "OVA",
        "nameRu": "OVA"
      }, {
        "type_id": 4,
        "selected": false,
        "nameJp": "",
        "nameEn": "ONA",
        "nameRu": "ONA"
      }, {
        "type_id": 5,
        "selected": false,
        "nameJp": "",
        "nameEn": "Special",
        "nameRu": "Спешл"
      }, {
        "type_id": 6,
        "selected": false,
        "nameJp": "",
        "nameEn": "Clip",
        "nameRu": "Клип"
      }],
      genres: [{
        "genre_id": 1,
        "selected": false,
        "nameJp": "少年",
        "nameEn": "Shounen",
        "nameRu": "Сёнен",
        "title": "Аниме, манга и ранобэ, рассчитанные на особую целевую аудиторию — мальчиков и юношей в возрасте от 12 до 18 лет. Манга этого типа публикуется в специализированных журналах (аудиторию определяют сами издатели), занимающих 38,4% рынка"
      }, {
        "genre_id": 2,
        "selected": false,
        "nameJp": "少年愛",
        "nameEn": "Shounen Ai",
        "nameRu": "Сёнен-ай",
        "title": "Разновидность аниме и манги, поджанр сёдзё, посвящённый идеализированной любви между юношами или мужчинами, для которого целевой аудиторией являются женщины. Фокусируется на романтических отношениях, а не сексуальных."
      }, {
        "genre_id": 3,
        "selected": false,
        "nameJp": "青年",
        "nameEn": "Seinen",
        "nameRu": "Сейнен",
        "title": "Аниме и манга, рассчитанные на особую целевую аудиторию — молодых мужчин от 18 лет и старше. Манга этого типа публикуется в специализированных сэйнэн-журналах (аудиторию определяют сами издатели). В редких случаях произведение в жанре сэйнэн нацелено на категорию бизнесменов в возрасте до 40 лет."
      }, {
        "genre_id": 4,
        "selected": false,
        "nameJp": "少女",
        "nameEn": "Shoujo",
        "nameRu": "Сёдзё",
        "title": ""
      }, {
        "genre_id": 5,
        "selected": false,
        "nameJp": "少女愛",
        "nameEn": "Shoujo Ai",
        "nameRu": "Сёдзё-ай",
        "title": ""
      }, {
        "genre_id": 6,
        "selected": false,
        "nameJp": "女性",
        "nameEn": "Josei",
        "nameRu": "Дзёсей",
        "title": ""
      }, {
        "genre_id": 7,
        "selected": false,
        "nameJp": "ジェンダーベンダー",
        "nameEn": "Gender Bender",
        "nameRu": "Смена пола",
        "title": ""
      }, {
        "genre_id": 8,
        "selected": false,
        "nameJp": "コメディ",
        "nameEn": "Comedy",
        "nameRu": "Комедия",
        "title": ""
      }, {
        "genre_id": 9,
        "selected": false,
        "nameJp": "ロマンス",
        "nameEn": "Romance",
        "nameRu": "Романтика",
        "title": ""
      }, {
        "genre_id": 10,
        "selected": false,
        "nameJp": "学校",
        "nameEn": "School",
        "nameRu": "Школа",
        "title": ""
      }, {
        "genre_id": 11,
        "selected": false,
        "nameJp": "アクション",
        "nameEn": "Action",
        "nameRu": "Экшен",
        "title": ""
      }, {
        "genre_id": 12,
        "selected": false,
        "nameJp": "冒険",
        "nameEn": "Adventure",
        "nameRu": "Приключения",
        "title": ""
      }, {
        "genre_id": 13,
        "selected": false,
        "nameJp": "車",
        "nameEn": "Cars",
        "nameRu": "Машины",
        "title": ""
      }, {
        "genre_id": 14,
        "selected": false,
        "nameJp": "狂気",
        "nameEn": "Dementia",
        "nameRu": "Безумие",
        "title": ""
      }, {
        "genre_id": 15,
        "selected": false,
        "nameJp": "悪魔",
        "nameEn": "Demons",
        "nameRu": "Демоны",
        "title": ""
      }, {
        "genre_id": 16,
        "selected": false,
        "nameJp": "ドラマ",
        "nameEn": "Drama",
        "nameRu": "Драма",
        "title": ""
      }, {
        "genre_id": 17,
        "selected": false,
        "nameJp": "エッチ",
        "nameEn": "Ecchi",
        "nameRu": "Эччи",
        "title": ""
      }, {
        "genre_id": 18,
        "selected": false,
        "nameJp": "素晴らしい",
        "nameEn": "Fantasy",
        "nameRu": "Фантастика",
        "title": ""
      }, {
        "genre_id": 19,
        "selected": false,
        "nameJp": "ゲーム",
        "nameEn": "Game",
        "nameRu": "Игры",
        "title": ""
      }, {
        "genre_id": 20,
        "selected": false,
        "nameJp": "ハーレム",
        "nameEn": "Harem",
        "nameRu": "Гарем",
        "title": ""
      }, {
        "genre_id": 21,
        "selected": false,
        "nameJp": "歴史的",
        "nameEn": "Historical",
        "nameRu": "Историческое",
        "title": ""
      }, {
        "genre_id": 22,
        "selected": false,
        "nameJp": "ホラー",
        "nameEn": "Horror",
        "nameRu": "Ужасы",
        "title": ""
      }, {
        "genre_id": 23,
        "selected": false,
        "nameJp": "赤ちゃん",
        "nameEn": "Kids",
        "nameRu": "Детское",
        "title": ""
      }, {
        "genre_id": 24,
        "selected": false,
        "nameJp": "魔法",
        "nameEn": "Magic",
        "nameRu": "Магия",
        "title": ""
      }, {
        "genre_id": 25,
        "selected": false,
        "nameJp": "武道",
        "nameEn": "Martial Arts",
        "nameRu": "Боевые искусства",
        "title": ""
      }, {
        "genre_id": 26,
        "selected": false,
        "nameJp": "毛皮",
        "nameEn": "Mecha",
        "nameRu": "Меха",
        "title": ""
      }, {
        "genre_id": 27,
        "selected": false,
        "nameJp": "軍隊",
        "nameEn": "Military",
        "nameRu": "Военное",
        "title": ""
      }, {
        "genre_id": 28,
        "selected": false,
        "nameJp": "音楽",
        "nameEn": "Music",
        "nameRu": "Музыка",
        "title": ""
      }, {
        "genre_id": 29,
        "selected": false,
        "nameJp": "探偵",
        "nameEn": "Mystery",
        "nameRu": "Детектив",
        "title": ""
      }, {
        "genre_id": 30,
        "selected": false,
        "nameJp": "パロディー",
        "nameEn": "Parody",
        "nameRu": "Пародия",
        "title": ""
      }, {
        "genre_id": 31,
        "selected": false,
        "nameJp": "警察",
        "nameEn": "Police",
        "nameRu": "Полиция",
        "title": ""
      }, {
        "genre_id": 32,
        "selected": false,
        "nameJp": "心理学",
        "nameEn": "Psychological",
        "nameRu": "Психологическое",
        "title": ""
      }, {
        "genre_id": 33,
        "selected": false,
        "nameJp": "武士",
        "nameEn": "Samurai",
        "nameRu": "Самураи",
        "title": ""
      }, {
        "genre_id": 34,
        "selected": false,
        "nameJp": "素晴らしい",
        "nameEn": "Sci-Fi",
        "nameRu": "Фантастика",
        "title": ""
      }, {
        "genre_id": 35,
        "selected": false,
        "nameJp": "日常生活",
        "nameEn": "Slice of Life",
        "nameRu": "Повседневность",
        "title": ""
      }, {
        "genre_id": 36,
        "selected": false,
        "nameJp": "スペース",
        "nameEn": "Space",
        "nameRu": "Космос",
        "title": ""
      }, {
        "genre_id": 37,
        "selected": false,
        "nameJp": "スポーツ",
        "nameEn": "Sports",
        "nameRu": "Спорт",
        "title": ""
      }, {
        "genre_id": 38,
        "selected": false,
        "nameJp": "スーパーパワー",
        "nameEn": "Super Power",
        "nameRu": "Супер силы",
        "title": ""
      }, {
        "genre_id": 39,
        "selected": false,
        "nameJp": "超自然的",
        "nameEn": "Supernatural",
        "nameRu": "Сверхъестественное",
        "title": ""
      }, {
        "genre_id": 40,
        "selected": false,
        "nameJp": "吸血鬼",
        "nameEn": "Vampire",
        "nameRu": "Вампиры",
        "title": ""
      }, {
        "genre_id": 41,
        "selected": false,
        "nameJp": "スリラー",
        "nameEn": "Thriller",
        "nameRu": "Триллер",
        "title": ""
      }, {
        "genre_id": 42,
        "selected": false,
        "nameJp": "変態",
        "nameEn": "Hentai",
        "nameRu": "Хентай",
        "title": ""
      }, {
        "genre_id": 43,
        "selected": false,
        "nameJp": "やおい",
        "nameEn": "Yaoi",
        "nameRu": "Яой",
        "title": ""
      }, {
        "genre_id": 44,
        "selected": false,
        "nameJp": "百合",
        "nameEn": "Yuri",
        "nameRu": "Юри",
        "title": ""
      }, {
        "genre_id": 45,
        "selected": false,
        "nameJp": "ショタコン",
        "nameEn": "Shotacon",
        "nameRu": "Сётакон",
        "title": ""
      }, {
        "genre_id": 46,
        "selected": false,
        "nameJp": "特撮",
        "nameEn": "Tokusatsu",
        "nameRu": "Токусацу",
        "title": ""
      }, {
        "genre_id": 47,
        "selected": false,
        "nameJp": "黙示録を投稿する",
        "nameEn": "Post apocalyptic",
        "nameRu": "Пост апокалипсис",
        "title": ""
      }, {
        "genre_id": 48,
        "selected": false,
        "nameJp": "スチームパンク",
        "nameEn": "Steampunk",
        "nameRu": "Стимпанк",
        "title": ""
      }, {
        "genre_id": 49,
        "selected": false,
        "nameJp": "オタク",
        "nameEn": "Otaku",
        "nameRu": "Откаку",
        "title": ""
      }, {
        "genre_id": 50,
        "selected": false,
        "nameJp": "魔法少女",
        "nameEn": "Makho-shodze",
        "nameRu": "Махо-сёдзе",
        "title": ""
      }, {
        "genre_id": 51,
        "selected": false,
        "nameJp": "サイバーパンク",
        "nameEn": "Cyberpunk",
        "nameRu": "Кибербанк",
        "title": ""
      }, {
        "genre_id": 52,
        "selected": false,
        "nameJp": "幻の泥棒",
        "nameEn": "Phantom thieves",
        "nameRu": "Кайто",
        "title": ""
      }, {
        "genre_id": 53,
        "selected": false,
        "nameJp": "郁二",
        "nameEn": "Ikuji",
        "nameRu": "Икудзи",
        "title": ""
      }, {
        "genre_id": 54,
        "selected": false,
        "nameJp": "アイドル",
        "nameEn": "idol",
        "nameRu": "Айдолы",
        "title": ""
      }, {
        "genre_id": 55,
        "selected": false,
        "nameJp": "女性 ",
        "nameEn": "Josei",
        "nameRu": "Дзёсэй",
        "title": ""
      }],
      ratings: [{
        "rating_id": 1,
        "selected": false,
        "name": "G",
        "title": "Нет возрастных ограничений"
      }, {
        "rating_id": 2,
        "selected": false,
        "name": "PG",
        "title": ""
      }, {
        "rating_id": 3,
        "selected": false,
        "name": "PG-13",
        "title": ""
      }, {
        "rating_id": 4,
        "selected": false,
        "name": "PG-13",
        "title": ""
      }, {
        "rating_id": 5,
        "selected": false,
        "name": "R-17",
        "title": ""
      }, {
        "rating_id": 6,
        "selected": false,
        "name": "R+",
        "title": ""
      }, {
        "rating_id": 7,
        "selected": false,
        "name": "RX",
        "title": ""
      }],
      durations: [{
        "duration_id": 1,
        "selected": false,
        "nameJp": "",
        "nameEn": "",
        "nameRu": "до 6 минут"
      }, {
        "duration_id": 2,
        "selected": false,
        "nameJp": "",
        "nameEn": "",
        "nameRu": "до 14 минут"
      }, {
        "duration_id": 3,
        "selected": false,
        "nameJp": "",
        "nameEn": "",
        "nameRu": "до 30 минут"
      }, {
        "duration_id": 4,
        "selected": false,
        "nameJp": "",
        "nameEn": "",
        "nameRu": "более 30 минут"
      }],
      seasons: [{
        "season_id": 1,
        "selected": false,
        "nameJp": "",
        "nameEn": "",
        "nameRu": "Зима"
      }, {
        "season_id": 2,
        "selected": false,
        "nameJp": "",
        "nameEn": "",
        "nameRu": "Весна"
      }, {
        "season_id": 3,
        "selected": false,
        "nameJp": "",
        "nameEn": "",
        "nameRu": "Лето"
      }, {
        "season_id": 4,
        "selected": false,
        "nameJp": "",
        "nameEn": "",
        "nameRu": "Осень"
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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "index",
  components: {
    animeFilter: _components_AnimeFilterComponent__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  computed: (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)(['animeList', 'animePagination']),
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.filter[data-v-7b3df9bc]{\n    background: #424755;\n    border-radius: 14px;\n    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));\n    padding: .8rem;\n}\n.filter > .selector-block[data-v-7b3df9bc]{\n    box-sizing: border-box;\n    margin-bottom: 20px;\n}\n.selector > .chek-box-list > ul > li.selected[data-v-7b3df9bc] {\n    background: #3490dc;\n    border-radius: 0.4rem;\n}\n.selector-block > .selector > .placeholder[data-v-7b3df9bc]{\n    cursor: inherit;\n    box-sizing: border-box;\n    padding: 10px 15px;\n    font-size: 14px;\n    font-weight: 400;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: 1.43;\n    letter-spacing: normal;\n    justify-content: space-between;\n    display: flex;\n    align-items: center;\n    background: #424755;\n}\n.selector-block > .selector.cursor-drop > .placeholder[data-v-7b3df9bc]{\n    cursor: pointer;\n}\n.selector-block > .selector > .placeholder >.selected[data-v-7b3df9bc]{\n    color: #FFFFFF;\n    font-size: 14px;\n    font-weight: 400;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: 1.43;\n    letter-spacing: normal;\n    box-sizing: border-box;\n    display: flex;\n    align-items: center;\n}\n.selector-block > .selector > .placeholder >.icon-inline.dropdown-icon[data-v-7b3df9bc]{\n    font-size: 14px;\n    font-weight: 400;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: 1.43;\n    letter-spacing: normal;\n    box-sizing: border-box;\n    flex: 0 0 6px;\n    margin-right: 6.5px;\n    transition: transform .2s;\n    transform: rotate(270deg);\n}\n.selector-block > .selector.open > .placeholder >.icon-inline.dropdown-icon[data-v-7b3df9bc]{\n    transform: rotate(179deg);\n}\n.selector-block > .selector > .placeholder >.icon-inline.dropdown-icon > svg[data-v-7b3df9bc]{\n    color: black;\n}\n.selector-block > .selector > .drop-options[data-v-7b3df9bc]{\n    display: none;\n    font-size: 14px;\n    box-sizing: border-box;\n    left: 0;\n    position: inherit;\n    background-color: #424755;\n    width: 100%;\n    z-index: 20;\n    overflow-y: auto;\n    max-height: 200px;\n    border-radius: 0 0 14px 14px;\n    transform: scale(1);\n}\n.selector-block > .selector.open > .drop-options[data-v-7b3df9bc]{\n    display: block;\n}\n.selector-block > .selector > .drop-options > .item[data-v-7b3df9bc]{\n    font-size: 14px;\n    box-sizing: border-box;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    border-bottom: 1px solid rgba(61,64,74,.4);\n    padding: 12px 15px;\n    color: #fff;\n}\n.selector-block .selector .chek-box-list ul li[data-v-7b3df9bc]{\n  -moz-user-select: none;\n  -webkit-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  color: #FFFFFF;\n  font-size: 12px;\n  line-height: 20.34px;\n  margin: 1px 0 2px;\n  padding: 1px 3px 0;\n}\n.selector-block .selector .chek-box-list ul li label[data-v-7b3df9bc]{\n  width: 100%;\n}\n.selector-block .selector .chek-box-list ul[data-v-7b3df9bc]{\n  margin-left: 2px;\n  padding-left: 2px;\n}\n.filter-block > .body[data-v-7b3df9bc]{\n  background: #009BEB;\n  height: 7vh;\n  display: none;\n}\n.filter-block > .filter > .footer[data-v-7b3df9bc]{\n  display: none;\n}\n.filter-block > .body[data-v-7b3df9bc]{\n  padding-left: 1rem;\n  padding-right: 1rem;\n  padding-top: 2.2vh;\n}\n.filter-block > .body > .row > .col-auto > .button[data-v-7b3df9bc]{\n  height: 100%;\n  background: #dfdfe0;\n  border-radius: 7px;\n  padding: 0.2rem;\n}\n/* Small devices (landscape phones, 991px and up) */\n@media (max-width: 991px) {\n.filter-block .filter[data-v-7b3df9bc] {\n    border-radius: 0;\n    height: 100vh;\n    overflow-y: auto;\n    overflow-x: hidden;\n    padding: 0;\n}\n.filter-block > .body[data-v-7b3df9bc]{\n    display: block;\n}\n.filter-block > .filter > .footer[data-v-7b3df9bc]{\n    display: block;\n}\n.selector-block .selector .chek-box-list[data-v-7b3df9bc]{\n    overflow-x: auto;\n    overflow-y: hidden;\n}\n.selector-block .selector .chek-box-list ul li[data-v-7b3df9bc]{\n    font-size: 17px;\n    white-space: pre;\n    overflow: inherit;\n    display: inline;\n    padding-top: 19px;\n    margin: 8px;\n    text-align:center;\n}\n.selector > .chek-box-list > ul > li > label > input[data-v-7b3df9bc] {\n    display: none;\n}\n.selector > .chek-box-list > ul[data-v-7b3df9bc]{\n    display:flex;\n    list-style:none;\n}\n.filter-block[data-v-7b3df9bc]{\n    position: fixed;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 1000;\n}\n}\n\n", ""]);
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.btn-filter[data-v-591f14be]{\r\n  position: fixed;\r\n  width: 7rem;\r\n  bottom: 3.5rem;\r\n  right: -0.2rem;\r\n  filter: drop-shadow(2px 3px 8px rgba(0, 0, 0, 2.25));\n}\n.btn-filter > i[data-v-591f14be]{\r\n  font-size: 4.5rem;\r\n  color: aliceblue;\n}\r\n\r\n/*!* Small devices (landscape phones, 576px and up) *!*/\r\n/*@media (max-width: 991px) {*/\r\n/*  .filter-btn{*/\r\n/*    display: block;*/\r\n/*  }*/\r\n/*}*/\r\n", ""]);
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
        _vm._m(0),
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
            [_vm._v(" Применить ")]
          ),
        ]),
      ]),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "filter" }, [
      _c("div", { staticClass: "selector-block" }, [
        _c("div", { staticClass: "selector" }, [
          _vm._m(1),
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
                        "  " + _vm._s(statusItem.nameRu) + "\n              "
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
          _vm._m(2),
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
                      _vm._v("  " + _vm._s(type.nameRu) + "\n              "),
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
          _vm._m(3),
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
                      _vm._v(" "),
                      _c("span", { staticClass: "name_en" }, [
                        _vm._v(
                          "\n              " +
                            _vm._s(genre.nameEn) +
                            "\n              "
                        ),
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "name_ru" }, [
                        _vm._v(
                          "\n                " +
                            _vm._s(genre.nameRu) +
                            "\n              "
                        ),
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "name_jp" }, [
                        _vm._v(
                          "\n                " +
                            _vm._s(genre.nameJp) +
                            "\n              "
                        ),
                      ]),
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
          _vm._m(4),
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
                    attrs: { title: rating.title },
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
          _vm._m(5),
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
                        "  " + _vm._s(duration.nameRu) + "\n              "
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
          _vm._m(6),
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
                      _vm._v("  " + _vm._s(season.nameRu) + "\n              "),
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
      _vm._m(7),
      _vm._v(" "),
      _vm._m(8),
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
              _vm._m(9),
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
            _vm._m(10),
          ]
        ),
      ]),
      _vm._v(" "),
      _vm._m(11),
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
    return _c("div", { staticClass: "col-auto me-auto" }, [
      _c("h6", { staticClass: "p-title" }, [_vm._v("Фильтры")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "placeholder" }, [
      _c("div", { staticClass: "selected" }, [_c("span", [_vm._v("Статус")])]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "placeholder" }, [
      _c("div", { staticClass: "selected" }, [_c("span", [_vm._v("Тип")])]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "placeholder" }, [
      _c("div", { staticClass: "selected" }, [_c("span", [_vm._v("Жанры")])]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "placeholder" }, [
      _c("div", { staticClass: "selected" }, [_c("span", [_vm._v("Рейтинг")])]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "placeholder" }, [
      _c("div", { staticClass: "selected" }, [
        _c("span", [_vm._v("Продолжительность эпизода")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "placeholder" }, [
      _c("div", { staticClass: "selected" }, [_c("span", [_vm._v("Сезон")])]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "selector-block" }, [
      _c("div", { staticClass: "selector" }, [
        _c("div", { staticClass: "placeholder" }, [
          _c("div", { staticClass: "selected" }, [
            _c("span", [_vm._v("Оценка")]),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "chek-box-list" }, [
          _c("ul", [
            _c(
              "li",
              { attrs: { "data-field": "status", "data-value": "anons" } },
              [
                _c("input", {
                  attrs: { autocomplete: "off", type: "checkbox" },
                }),
                _vm._v(" 8+\n            "),
              ]
            ),
            _vm._v(" "),
            _c(
              "li",
              { attrs: { "data-field": "status", "data-value": "anons" } },
              [
                _c("input", {
                  attrs: { autocomplete: "off", type: "checkbox" },
                }),
                _vm._v("  7+\n            "),
              ]
            ),
            _vm._v(" "),
            _c(
              "li",
              { attrs: { "data-field": "status", "data-value": "anons" } },
              [
                _c("input", {
                  attrs: { autocomplete: "off", type: "checkbox" },
                }),
                _vm._v("  6+\n            "),
              ]
            ),
            _vm._v(" "),
            _c(
              "li",
              { attrs: { "data-field": "status", "data-value": "anons" } },
              [
                _c("input", {
                  attrs: { autocomplete: "off", type: "checkbox" },
                }),
                _vm._v("  5+\n            "),
              ]
            ),
            _vm._v(" "),
            _c(
              "li",
              { attrs: { "data-field": "status", "data-value": "anons" } },
              [
                _c("input", {
                  attrs: { autocomplete: "off", type: "checkbox" },
                }),
                _vm._v("  <5\n            "),
              ]
            ),
          ]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "selector-block" }, [
      _c("div", { staticClass: "selector" }, [
        _c("div", { staticClass: "placeholder" }, [
          _c("div", { staticClass: "selected" }, [
            _c("span", [_vm._v("Мой список")]),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "chek-box-list" }, [
          _c("ul", [
            _c(
              "li",
              { attrs: { "data-field": "status", "data-value": "anons" } },
              [
                _c("input", {
                  attrs: { autocomplete: "off", type: "checkbox" },
                }),
                _vm._v(" Просмотрено\n            "),
              ]
            ),
            _vm._v(" "),
            _c(
              "li",
              { attrs: { "data-field": "status", "data-value": "anons" } },
              [
                _c("input", {
                  attrs: { autocomplete: "off", type: "checkbox" },
                }),
                _vm._v("  В планах\n            "),
              ]
            ),
            _vm._v(" "),
            _c(
              "li",
              { attrs: { "data-field": "status", "data-value": "anons" } },
              [
                _c("input", {
                  attrs: { autocomplete: "off", type: "checkbox" },
                }),
                _vm._v("  Брошено\n            "),
              ]
            ),
            _vm._v(" "),
            _c(
              "li",
              { attrs: { "data-field": "status", "data-value": "anons" } },
              [
                _c("input", {
                  attrs: { autocomplete: "off", type: "checkbox" },
                }),
                _vm._v("  Отложено\n            "),
              ]
            ),
          ]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "selected" }, [
      _c("span", [_vm._v("Сортировка")]),
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
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "d-grid gap-2 button-block mx-0" }, [
      _c("div", { staticClass: "btn", attrs: { type: "button" } }, [
        _vm._v("Сбросить фильтр"),
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
            _vm._v("Аниме - страница " + _vm._s(_vm.page)),
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
                  _vm.page = _vm.page + 1
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
        { staticClass: "entry-list ps-4 pe-4 pb-2" },
        [
          _vm.loading
            ? _c(
                "div",
                {
                  staticClass:
                    "row row-cols-2 row-cols-sm-3 row-cols-md-3 row-cols-lg-5 g-3 mt-0 pt-1",
                },
                _vm._l(_vm.animeList, function (anime) {
                  return _c("catalog-entry", {
                    key: anime.id,
                    attrs: {
                      id: anime.id,
                      name: anime.name_ru,
                      type: anime.type,
                      genres: anime.genres,
                      poster_url: anime.poster.preview,
                      status: anime.status,
                      studios: anime.studios,
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
        _c("h6", { staticClass: "p-title mb-3" }, [_vm._v("Фильтры")]),
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