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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.anime>.content-header>.row-container>.row-information>.row > p[data-v-44d22d05] {\r\n  font-weight: normal;\r\n  color: #ffff;\n}\n.anime>.content-header>.row-container>.row-information>.row > .rating[data-v-44d22d05] {\r\n  margin: -5rem;\n}\n.anime>.content-header>.row-container>.row-information>.row > .rating > p[data-v-44d22d05] {\r\n  margin-left: 10rem;\r\n  font-weight: bold;\r\n  font-size: 1.2rem;\n}\n.anime>.content-header>.cover[data-v-44d22d05]:after {\r\n  content: \" \";\r\n  z-index: 0;\r\n  /*position: absolute;*/\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-image: linear-gradient(180deg,rgba(35, 40, 51, 0) 36%, rgba(35, 40, 51, .9) 58%, #353944 66%);}\n.anime>.content-header>.row-container[data-v-44d22d05] {\r\n  min-height: 598px;\r\n  margin: 0 auto;\r\n  max-width: 1224px;\r\n  position: relative;\r\n  /*padding: 161px 15px 0 30px*/\n}\n@media(max-width:1199.98px) {\n.anime>.content-header>.row-container[data-v-44d22d05] {\r\n    /*padding: 161px 15px 0 15px*/\n}\n}\n.anime>.content-header>.row-container>.row-information[data-v-44d22d05] {\r\n  display: flex;\r\n  position: relative;\r\n  z-index: 1\n}\n@media(max-width:769.98px) {\n.anime>.content-header>.row-container>.row-information[data-v-44d22d05] {\r\n    flex-direction: column;\r\n    align-items: center\n}\n}\n.anime>.content-header>.row-container>.row-information>.warp-poster[data-v-44d22d05] {\r\n  margin-right: 40px;\r\n  flex: 0 0 276px;\r\n  position: relative\n}\n.anime-container-btn[data-v-44d22d05] {\r\n  width: 100%;\r\n  height: 2.4rem;\n}\n@media(max-width:769.98px) {\n.anime>.content-header>.row-container>.row-information>.warp-poster[data-v-44d22d05] {\r\n    margin-right: 0\n}\n}\n.anime>.content-header>.row-container>.row-information>.warp-poster>.poster[data-v-44d22d05] {\r\n  width: 276px;\r\n  height: 398px;\r\n  background-position: 50%;\r\n  background-size: cover;\r\n  border-radius: 4px;\r\n  margin-bottom: 15px;\r\n  cursor: pointer;\r\n  position: relative\n}\n.anime>.content-header.loading > .row-container>.row-information>.warp-poster[data-v-44d22d05] {\r\n  width: 276px;\r\n  height: 398px;\r\n  background: #363944;\r\n  box-shadow: 0 -200px 100px -120px #1f2631 inset;\r\n  border-radius: 4px;\r\n  -webkit-animation: background-data-v-44d22d05 3s infinite alternate;\r\n          animation: background-data-v-44d22d05 3s infinite alternate;\n}\n@-webkit-keyframes background-data-v-44d22d05 {\n50% {\r\n    background: #1f2631;\r\n    box-shadow: 0 -200px 100px -100px #363944 inset;\n}\n100% {\r\n    background: #363944;\r\n    box-shadow: 0 -200px 100px -100px #1f2631 inset;\n}\n}\n@keyframes background-data-v-44d22d05 {\n50% {\r\n    background: #1f2631;\r\n    box-shadow: 0 -200px 100px -100px #363944 inset;\n}\n100% {\r\n    background: #363944;\r\n    box-shadow: 0 -200px 100px -100px #1f2631 inset;\n}\n}\r\n", ""]);
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
              _c("div", { staticClass: "row" }, [
                _c("h1", { staticClass: "pt-3 text-sm-start" }, [
                  _vm._v(
                    _vm._s(_vm.animeItem.name_en) +
                      " / " +
                      _vm._s(_vm.animeItem.name_ru)
                  ),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-12 col-lg-7" }, [
                  _c(
                    "p",
                    [
                      _vm._v("\n              Тип: "),
                      _vm._l(_vm.animeItem.type, function (typeItem) {
                        return _c("a", { attrs: { href: "#" } }, [
                          _vm._v(_vm._s(typeItem.name) + " "),
                        ])
                      }),
                      _c("br"),
                      _vm._v("\n              Статус: "),
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
                                  _vm._v(_vm._s(_vm.animeItem.episodes) + "\\"),
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
                                "\n                Жанры:\n                "
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
                                          query: { genres: genreItem.name_en },
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
                _c("div", { staticClass: "col-12 col-lg-2 rating" }, [
                  _c("p", [_vm._v("Рейтинг")]),
                  _vm._v(" "),
                  _c(
                    "svg",
                    {
                      attrs: {
                        width: "386",
                        height: "68",
                        viewBox: "0 0 386 68",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                      },
                    },
                    [
                      _c("g", { attrs: { "clip-path": "url(#clip0)" } }, [
                        _c("path", {
                          attrs: {
                            d: "M342.085 21.1159L351.094 3.267C351.267 2.90793 351.538 2.60466 351.875 2.39171C352.212 2.17877 352.602 2.0647 353 2.0625C353.755 2.0625 354.51 2.46263 354.918 3.267L363.927 21.1159L384.132 23.9869C384.635 24.066 385.096 24.3165 385.436 24.696C385.777 25.0755 385.976 25.5608 386 26.07C386.028 26.409 385.98 26.7499 385.859 27.0677C385.737 27.3854 385.546 27.6718 385.299 27.9056L370.766 41.7491L374.19 61.2604C374.512 63.0877 372.705 64.5191 371.113 63.7024L353 54.3964L334.895 63.7024C334.706 63.8008 334.503 63.8703 334.293 63.9086C332.887 64.1561 331.538 62.8609 331.818 61.2604L335.242 41.7491L320.714 27.9056C320.489 27.6916 320.31 27.4336 320.189 27.1476C320.067 26.8617 320.006 26.5539 320.008 26.2432C320.009 25.8044 320.129 25.3739 320.355 24.9975C320.517 24.7255 320.739 24.4935 321.003 24.3186C321.267 24.1437 321.567 24.0303 321.881 23.9869L342.085 21.1159ZM353 49.6114C353.33 49.6114 353.66 49.6856 353.957 49.8424L369.162 57.6551L366.299 41.3325C366.232 40.9568 366.258 40.5702 366.375 40.2069C366.492 39.8436 366.697 39.5148 366.971 39.2494L378.959 27.8231L362.244 25.4471C361.898 25.3949 361.57 25.2595 361.288 25.0526C361.005 24.8457 360.777 24.5734 360.623 24.2591L353.008 9.16988L353 9.18225V49.6073V49.6114Z",
                            fill: "white",
                          },
                        }),
                      ]),
                      _vm._v(" "),
                      _c("g", { attrs: { "clip-path": "url(#clip1)" } }, [
                        _c("path", {
                          attrs: {
                            d: "M14.8998 63.7024C13.3076 64.5192 11.5008 63.0878 11.8226 61.2604L15.2463 41.7492L0.71393 27.9057C-0.643195 26.6104 0.0621798 24.2427 1.8813 23.9869L22.0856 21.1159L31.0946 3.26705C31.9072 1.6583 34.1058 1.6583 34.9184 3.26705L43.9274 21.1159L64.1317 23.9869C65.9508 24.2427 66.6562 26.6104 65.2991 27.9057L50.7667 41.7492L54.1904 61.2604C54.5122 63.0878 52.7054 64.5192 51.1132 63.7024L33.0003 54.3964L14.8957 63.7024H14.8998Z",
                            fill: "white",
                          },
                        }),
                      ]),
                      _vm._v(" "),
                      _c("g", { attrs: { "clip-path": "url(#clip2)" } }, [
                        _c("path", {
                          attrs: {
                            d: "M94.8998 63.7024C93.3076 64.5192 91.5008 63.0878 91.8226 61.2604L95.2463 41.7492L80.7139 27.9057C79.3568 26.6104 80.0622 24.2427 81.8813 23.9869L102.086 21.1159L111.095 3.26705C111.907 1.6583 114.106 1.6583 114.918 3.26705L123.927 21.1159L144.132 23.9869C145.951 24.2427 146.656 26.6104 145.299 27.9057L130.767 41.7492L134.19 61.2604C134.512 63.0878 132.705 64.5192 131.113 63.7024L113 54.3964L94.8957 63.7024H94.8998Z",
                            fill: "white",
                          },
                        }),
                      ]),
                      _vm._v(" "),
                      _c("g", { attrs: { "clip-path": "url(#clip3)" } }, [
                        _c("path", {
                          attrs: {
                            d: "M254.9 65.7024C253.308 66.5192 251.501 65.0878 251.823 63.2604L255.246 43.7492L240.714 29.9057C239.357 28.6104 240.062 26.2427 241.881 25.9869L262.086 23.1159L271.095 5.26705C271.907 3.6583 274.106 3.6583 274.918 5.26705L283.927 23.1159L304.132 25.9869C305.951 26.2427 306.656 28.6104 305.299 29.9057L290.767 43.7492L294.19 63.2604C294.512 65.0878 292.705 66.5192 291.113 65.7024L273 56.3964L254.896 65.7024H254.9Z",
                            fill: "white",
                          },
                        }),
                      ]),
                      _vm._v(" "),
                      _c("g", { attrs: { "clip-path": "url(#clip4)" } }, [
                        _c("path", {
                          attrs: {
                            d: "M174.9 65.7024C173.308 66.5192 171.501 65.0878 171.823 63.2604L175.246 43.7492L160.714 29.9057C159.357 28.6104 160.062 26.2427 161.881 25.9869L182.086 23.1159L191.095 5.26705C191.907 3.6583 194.106 3.6583 194.918 5.26705L203.927 23.1159L224.132 25.9869C225.951 26.2427 226.656 28.6104 225.299 29.9057L210.767 43.7492L214.19 63.2604C214.512 65.0878 212.705 66.5192 211.113 65.7024L193 56.3964L174.896 65.7024H174.9Z",
                            fill: "white",
                          },
                        }),
                      ]),
                      _vm._v(" "),
                      _c("defs", [
                        _c("clipPath", { attrs: { id: "clip0" } }, [
                          _c("rect", {
                            attrs: {
                              width: "66",
                              height: "66",
                              fill: "white",
                              transform: "translate(320)",
                            },
                          }),
                        ]),
                        _vm._v(" "),
                        _c("clipPath", { attrs: { id: "clip1" } }, [
                          _c("rect", {
                            attrs: { width: "66", height: "66", fill: "white" },
                          }),
                        ]),
                        _vm._v(" "),
                        _c("clipPath", { attrs: { id: "clip2" } }, [
                          _c("rect", {
                            attrs: {
                              width: "66",
                              height: "66",
                              fill: "white",
                              transform: "translate(80)",
                            },
                          }),
                        ]),
                        _vm._v(" "),
                        _c("clipPath", { attrs: { id: "clip3" } }, [
                          _c("rect", {
                            attrs: {
                              width: "66",
                              height: "66",
                              fill: "white",
                              transform: "translate(240 2)",
                            },
                          }),
                        ]),
                        _vm._v(" "),
                        _c("clipPath", { attrs: { id: "clip4" } }, [
                          _c("rect", {
                            attrs: {
                              width: "66",
                              height: "66",
                              fill: "white",
                              transform: "translate(160 2)",
                            },
                          }),
                        ]),
                      ]),
                    ]
                  ),
                ]),
                _vm._v(" "),
                _c("p", [_vm._v("Описание:")]),
                _vm._v(" "),
                _vm._m(0),
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
          _vm._m(1),
        ]),
  ])
}
var staticRenderFns = [
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