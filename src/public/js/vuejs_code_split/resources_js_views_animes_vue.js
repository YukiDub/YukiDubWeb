"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_animes_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/animes.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/animes.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_AnimeFilterComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/AnimeFilterComponent */ "./resources/js/components/AnimeFilterComponent.vue");
/* harmony import */ var _components_PaginationComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/PaginationComponent */ "./resources/js/components/PaginationComponent.vue");
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



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "index",
  components: {
    animeFilter: _components_AnimeFilterComponent__WEBPACK_IMPORTED_MODULE_0__["default"],
    pagination: _components_PaginationComponent__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  computed: (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapGetters)(['animeList', 'animePagination', 'getLocale']),
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
  methods: _objectSpread({
    loadComponent: function loadComponent() {
      if (this.animePagination && Number(this.animePagination.current_page) === this.page) {
        this.loading = true;
      } else {
        this.loadAnimesList(this.page, 30);
      }
    }
  }, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapActions)(["loadAnimesList"])) // methods: {
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
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
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
  return _c(
    "div",
    { staticClass: "row anime-list" },
    [
      _c(
        "div",
        { staticClass: "col order-1" },
        [
          _c("p", { staticClass: "p-title" }, [_vm._v("Аниме")]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "entry-list mb-2" },
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
                          score: anime.shiki_score,
                        },
                      })
                    }),
                    1
                  )
                : _c("loading"),
            ],
            1
          ),
          _vm._v(" "),
          _c("pagination", {
            attrs: { "last-page": _vm.animePagination.last_page },
            model: {
              value: _vm.page,
              callback: function ($$v) {
                _vm.page = $$v
              },
              expression: "page",
            },
          }),
        ],
        1
      ),
      _vm._v(" "),
      _c("animeFilter", { staticClass: "col-0 col-lg-3 order-2" }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);