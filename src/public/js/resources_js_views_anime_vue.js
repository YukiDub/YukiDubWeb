"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_anime_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/anime.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/anime.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "index",
  data: function data() {
    return {
      loading: true
    };
  },
  mounted: function mounted() {
    this.loadAnime(this.$route.params.id);
  },
  watch: {
    animeItem: function animeItem(_animeItem) {
      if (_animeItem) {
        this.loading = false;
      }
    }
  },
  computed: (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)(['animeItem']),
  methods: (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)(['loadAnime'])
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/anime.vue?vue&type=style&index=0&id=44d22d05&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/anime.vue?vue&type=style&index=0&id=44d22d05&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.anime>.content-header>.cover[data-v-44d22d05] {\r\n  position: absolute;\r\n  /*width: 100%;*/\r\n  /*height: 718px;*/\r\n  opacity: 0.1;\r\n  left: 62px;\r\n  top: 72px;\n}\n@media (max-width: 575px) {\n.anime>.content-header>.cover[data-v-44d22d05] {\r\n    left: 0;\n}\n}\n.anime>.content-header>.row-container[data-v-44d22d05] {\r\n  min-height: 598px;\r\n  margin: 0 auto;\r\n  max-width: 1224px;\n}\n.anime>.content-header>.row-container>.row-information[data-v-44d22d05] {\r\n  display: flex;\r\n  position: relative;\r\n  z-index: 1\n}\n@media(max-width:769.98px) {\n.anime>.content-header>.row-container>.row-information[data-v-44d22d05] {\r\n    flex-direction: column;\r\n    align-items: center\n}\n}\n.anime>.content-header>.row-container>.row-information>.warp-poster[data-v-44d22d05] {\r\n  margin-right: 40px;\r\n  flex: 0 0 276px;\n}\n.anime-container-btn[data-v-44d22d05] {\r\n  width: 100%;\r\n  height: 2.4rem;\n}\n@media(max-width:769.98px) {\n.anime>.content-header>.row-container>.row-information>.warp-poster[data-v-44d22d05] {\r\n    margin-right: 0\n}\n}\n.anime>.content-header>.row-container>.row-information>.warp-poster>.poster[data-v-44d22d05] {\r\n  width: 276px;\r\n  height: 398px;\r\n  background-position: 50%;\r\n  background-size: cover;\r\n  border-radius: 4px;\r\n  margin-bottom: 15px;\r\n  cursor: pointer;\n}\n.anime>.content-header.loading > .row-container>.row-information>.warp-poster[data-v-44d22d05] {\r\n  width: 276px;\r\n  height: 398px;\r\n  background: #363944;\r\n  box-shadow: 0 -200px 100px -120px #1f2631 inset;\r\n  border-radius: 4px;\r\n  -webkit-animation: background-data-v-44d22d05 3s infinite alternate;\r\n          animation: background-data-v-44d22d05 3s infinite alternate;\n}\n@-webkit-keyframes background-data-v-44d22d05 {\n50% {\r\n    background: #1f2631;\r\n    box-shadow: 0 -200px 100px -100px #363944 inset;\n}\n100% {\r\n    background: #363944;\r\n    box-shadow: 0 -200px 100px -100px #1f2631 inset;\n}\n}\n@keyframes background-data-v-44d22d05 {\n50% {\r\n    background: #1f2631;\r\n    box-shadow: 0 -200px 100px -100px #363944 inset;\n}\n100% {\r\n    background: #363944;\r\n    box-shadow: 0 -200px 100px -100px #1f2631 inset;\n}\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/anime.vue?vue&type=style&index=0&id=44d22d05&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/anime.vue?vue&type=style&index=0&id=44d22d05&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_anime_vue_vue_type_style_index_0_id_44d22d05_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./anime.vue?vue&type=style&index=0&id=44d22d05&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/anime.vue?vue&type=style&index=0&id=44d22d05&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_anime_vue_vue_type_style_index_0_id_44d22d05_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_anime_vue_vue_type_style_index_0_id_44d22d05_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/views/anime.vue":
/*!**************************************!*\
  !*** ./resources/js/views/anime.vue ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _anime_vue_vue_type_template_id_44d22d05_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anime.vue?vue&type=template&id=44d22d05&scoped=true& */ "./resources/js/views/anime.vue?vue&type=template&id=44d22d05&scoped=true&");
/* harmony import */ var _anime_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./anime.vue?vue&type=script&lang=js& */ "./resources/js/views/anime.vue?vue&type=script&lang=js&");
/* harmony import */ var _anime_vue_vue_type_style_index_0_id_44d22d05_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./anime.vue?vue&type=style&index=0&id=44d22d05&scoped=true&lang=css& */ "./resources/js/views/anime.vue?vue&type=style&index=0&id=44d22d05&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _anime_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _anime_vue_vue_type_template_id_44d22d05_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _anime_vue_vue_type_template_id_44d22d05_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "44d22d05",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/anime.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/anime.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./resources/js/views/anime.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_anime_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./anime.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/anime.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_anime_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/anime.vue?vue&type=style&index=0&id=44d22d05&scoped=true&lang=css&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/views/anime.vue?vue&type=style&index=0&id=44d22d05&scoped=true&lang=css& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_anime_vue_vue_type_style_index_0_id_44d22d05_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./anime.vue?vue&type=style&index=0&id=44d22d05&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/anime.vue?vue&type=style&index=0&id=44d22d05&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/views/anime.vue?vue&type=template&id=44d22d05&scoped=true&":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/anime.vue?vue&type=template&id=44d22d05&scoped=true& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_anime_vue_vue_type_template_id_44d22d05_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_anime_vue_vue_type_template_id_44d22d05_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_anime_vue_vue_type_template_id_44d22d05_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./anime.vue?vue&type=template&id=44d22d05&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/anime.vue?vue&type=template&id=44d22d05&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/anime.vue?vue&type=template&id=44d22d05&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/anime.vue?vue&type=template&id=44d22d05&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "anime" }, [
    !_vm.loading
      ? _c("div", { staticClass: "content-header" }, [
          _c("div", {
            staticClass: "cover",
            style: {
              "background-image":
                "url(" + "/storage/images/animes/original/8.jpg" + ")",
            },
          }),
          _vm._v(" "),
          _c("div", { staticClass: "row-container" }, [
            _c("div", { staticClass: "row-information" }, [
              _c("div", { staticClass: "warp-poster" }, [
                _c("div", {
                  staticClass: "poster",
                  style: {
                    "background-image":
                      "url(" + "/storage/images/animes/original/8.jpg" + ")",
                  },
                }),
                _vm._v(" "),
                _c("button", { staticClass: "btn anime-container-btn" }, [
                  _vm._v("Смотреть"),
                ]),
              ]),
              _vm._v(" "),
              _c("div", [
                _c("h1", { staticClass: "text-sm-start" }, [
                  _vm._v(
                    _vm._s(_vm.animeItem.name_en) +
                      " / " +
                      _vm._s(_vm.animeItem.name_ru)
                  ),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row mb-2 mt-sm-4 mt-md-0" }, [
                  _c("div", { staticClass: "col-auto me-auto" }, [
                    _c(
                      "p",
                      [
                        _vm._v("\n                  Тип: "),
                        _vm._l(_vm.animeItem.type, function (typeItem) {
                          return _c("a", { attrs: { href: "#" } }, [
                            _vm._v(_vm._s(typeItem.name) + " "),
                          ])
                        }),
                        _c("br"),
                        _vm._v("\n                  Статус: "),
                        _c("a", { attrs: { href: "#" } }),
                        _vm._v(_vm._s(_vm.animeItem.status)),
                        _c("br"),
                        _vm._v(" "),
                        _vm.animeItem.studios
                          ? _c(
                              "span",
                              [
                                _vm._v("Студия: "),
                                _vm._l(
                                  _vm.animeItem.studios,
                                  function (studioItem) {
                                    return _c("a", { attrs: { href: "#" } }, [
                                      _vm._v(_vm._s(studioItem.name) + " "),
                                    ])
                                  }
                                ),
                                _vm._v(" "),
                                _c("br"),
                              ],
                              2
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.animeItem.episodes_released
                          ? _c("span", [
                              _vm._v("Эпизоды: "),
                              _vm.animeItem.episodes
                                ? _c("span", [
                                    _vm._v(
                                      _vm._s(_vm.animeItem.episodes) + "\\"
                                    ),
                                  ])
                                : _vm._e(),
                              _vm._v(
                                " " +
                                  _vm._s(_vm.animeItem.episodes_released) +
                                  " "
                              ),
                              _c("br"),
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.animeItem.episode_duration
                          ? _c("span", [
                              _vm._v(
                                "Продолжительность эпизода: " +
                                  _vm._s(_vm.animeItem.episode_duration)
                              ),
                              _c("br"),
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.animeItem.genres
                          ? _c(
                              "span",
                              [
                                _vm._v(
                                  "\n                    Жанры:\n                    "
                                ),
                                _vm._l(
                                  _vm.animeItem.genres,
                                  function (genreItem) {
                                    return _c(
                                      "router-link",
                                      {
                                        key: genreItem.id,
                                        attrs: {
                                          to: {
                                            name: "animes",
                                            query: {
                                              genres: genreItem.name_en,
                                            },
                                          },
                                        },
                                      },
                                      [_vm._v(_vm._s(genreItem.name_ru))]
                                    )
                                  }
                                ),
                                _vm._v(" "),
                                _c("br"),
                              ],
                              2
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.animeItem.age_rating
                          ? _c("span", [
                              _vm._v(
                                "Возрастной рейтинг: " +
                                  _vm._s(_vm.animeItem.age_rating) +
                                  " "
                              ),
                              _c("br"),
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.animeItem.aired_on
                          ? _c("span", [
                              _vm._v(
                                "Дата начала премьеры: " +
                                  _vm._s(_vm.animeItem.aired_on)
                              ),
                              _c("br"),
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.animeItem.released_on
                          ? _c("span", [
                              _vm._v(
                                "Дата выхода: " +
                                  _vm._s(_vm.animeItem.released_on)
                              ),
                              _c("br"),
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.animeItem.shiki_score
                          ? _c("span", [
                              _vm._v(
                                "Оценка на MyAnimeList: " +
                                  _vm._s(_vm.animeItem.shiki_score) +
                                  " "
                              ),
                              _c("br"),
                            ])
                          : _vm._e(),
                      ],
                      2
                    ),
                  ]),
                  _vm._v(" "),
                  _vm._m(0),
                ]),
                _vm._v(" "),
                _c("p", [_vm._v("Описание:")]),
                _vm._v(" "),
                _vm._m(1),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "tab-content",
                    attrs: { id: "pills-tabContent" },
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "tab-pane fade show active",
                        attrs: {
                          id: "pills-home",
                          role: "tabpanel",
                          "aria-labelledby": "pills-home-tab",
                        },
                      },
                      [
                        _c("p", [_vm._v(_vm._s(_vm.animeItem.description_ru))]),
                        _vm._v(" "),
                        _c("p", { staticClass: "text-right" }, [
                          _vm._v(
                            "Автор: " +
                              _vm._s(_vm.animeItem.description_ru_source)
                          ),
                        ]),
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "tab-pane fade",
                        attrs: {
                          id: "pills-profile",
                          role: "tabpanel",
                          "aria-labelledby": "pills-profile-tab",
                        },
                      },
                      [
                        _c("p", [_vm._v(_vm._s(_vm.animeItem.description_en))]),
                        _vm._v(" "),
                        _c("p", { staticClass: "text-right" }, [
                          _vm._v(
                            "Автор: " +
                              _vm._s(_vm.animeItem.description_en_source)
                          ),
                        ]),
                      ]
                    ),
                  ]
                ),
              ]),
            ]),
          ]),
        ])
      : _c("div", { staticClass: "content-header loading" }, [
          _c("div", {
            staticClass: "cover",
            style: {
              "background-image":
                "url(" + "/storage/images/animes/original/8.jpg" + ")",
            },
          }),
          _vm._v(" "),
          _vm._m(2),
        ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-auto" }, [_c("p", [_vm._v("asd")])])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "ul",
      {
        staticClass: "nav nav-pills mb-3",
        attrs: { id: "pills-tab", role: "tablist" },
      },
      [
        _c("li", { staticClass: "nav-item", attrs: { role: "presentation" } }, [
          _c(
            "button",
            {
              staticClass: "nav-link active",
              attrs: {
                id: "pills-home-tab",
                "data-bs-toggle": "pill",
                "data-bs-target": "#pills-home",
                type: "button",
                role: "tab",
                "aria-controls": "pills-home",
                "aria-selected": "true",
              },
            },
            [_vm._v("русское")]
          ),
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "nav-item", attrs: { role: "presentation" } }, [
          _c(
            "button",
            {
              staticClass: "nav-link",
              attrs: {
                id: "pills-profile-tab",
                "data-bs-toggle": "pill",
                "data-bs-target": "#pills-profile",
                type: "button",
                role: "tab",
                "aria-controls": "pills-profile",
                "aria-selected": "false",
              },
            },
            [_vm._v("английское")]
          ),
        ]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row-container" }, [
      _c("div", { staticClass: "row-information" }, [
        _c("div", { staticClass: "warp-poster" }, [
          _c("div", { staticClass: "poster" }),
          _vm._v(" "),
          _c("button", { staticClass: "btn anime-container-btn" }, [
            _vm._v("Смотреть"),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("h1", { staticClass: "pt-3 text-sm-start" }, [
            _vm._v("Идет загрузка"),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-12 col-lg-7" }, [_c("p")]),
        ]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);