"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/index.vue?vue&type=script&lang=js& ***!
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "index",
  mounted: function mounted() {
    this.loadAnimesList(1, 12);
  },
  data: function data() {
    return {
      loading: true,
      "activity": [{
        "title": "wrote comments",
        "text": "Re:Zero. Жизнь с нуля в альтернативном мире",
        "users": [{
          "id": 1,
          "name": "Admin",
          "avatar_ul": "/assets/images/avatars/default.png"
        }, {
          "id": 2,
          "name": "Test",
          "avatar_ul": "/assets/images/avatars/default.png"
        }]
      }, {
        "title": "watched anime",
        "text": "ToraDora!",
        "users": [{
          "id": 1,
          "name": "Admin",
          "avatar_ul": "/assets/images/avatars/default.png"
        }]
      }]
    };
  },
  watch: {
    animeList: {
      handler: function handler(animes) {
        if (animes) {
          this.loading = false;
        }
      }
    }
  },
  methods: (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)(['loadAnimesList']),
  computed: (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)(['animeList'])
});

/***/ }),

/***/ "./resources/js/views/index.vue":
/*!**************************************!*\
  !*** ./resources/js/views/index.vue ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_5c49133a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=5c49133a&scoped=true& */ "./resources/js/views/index.vue?vue&type=template&id=5c49133a&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/views/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_5c49133a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_5c49133a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "5c49133a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/index.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./resources/js/views/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/index.vue?vue&type=template&id=5c49133a&scoped=true&":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/index.vue?vue&type=template&id=5c49133a&scoped=true& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5c49133a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5c49133a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5c49133a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=5c49133a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/index.vue?vue&type=template&id=5c49133a&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/index.vue?vue&type=template&id=5c49133a&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/index.vue?vue&type=template&id=5c49133a&scoped=true& ***!
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
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "col-xs-12 col-md-4 order-2 order-md-1" }, [
      _c("h6", { staticClass: "p-title mb-4" }, [
        _vm._v(_vm._s(_vm.$tc("recent actions", _vm.activity.length))),
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-12" },
        [
          _vm._l(_vm.activity, function (activityItem) {
            return _c("card-item", {
              key: activityItem.id,
              attrs: {
                title: _vm.$t(activityItem.title),
                text: activityItem.text,
                users: activityItem.users,
              },
            })
          }),
          _vm._v(" "),
          _c("div", { staticClass: "card " }, [
            _c("a", { attrs: { href: "#" } }, [
              _vm._v(_vm._s(_vm.$t("all activity"))),
            ]),
          ]),
        ],
        2
      ),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col order-1" }, [
      _c("div", { staticClass: "row mb-2 mt-sm-4 mt-md-0" }, [
        _c("div", { staticClass: "col-auto me-auto" }, [
          _c("h6", { staticClass: "p-title" }, [
            _vm._v(_vm._s(_vm.$t("anime") + " " + _vm.$t("with high rating"))),
          ]),
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-auto" },
          [
            _c(
              "router-link",
              {
                staticClass: "btn",
                attrs: { to: "/animes?=что-то_там", type: "button" },
              },
              [_vm._v(_vm._s(_vm.$t("view more")))]
            ),
          ],
          1
        ),
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "entry-list ps-4 pe-4 pb-2" },
        [
          !_vm.loading
            ? _c(
                "div",
                {
                  staticClass:
                    "row row-cols-2 row-cols-sm-2 row-cols-md-2 row-cols-lg-4 g-3 mt-0",
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
      _vm._m(0),
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
    return _c("div", { staticClass: "row mb-2 mt-4" }, [
      _c("div", { staticClass: "col-auto me-auto" }, [
        _c("h6", { staticClass: "p-title" }, [
          _vm._v(" Манга с самыми высокими оценками"),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-auto" }, [
        _c("button", { staticClass: "btn", attrs: { type: "button" } }, [
          _vm._v("Подробнее"),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "entry-list mb-2", staticStyle: { height: "494px" } },
      [
        _c("p", { staticClass: "text-center" }, [
          _vm._v("РАЗДЕЛ НАХОДИТСЯ В РАЗРАБОТКЕ"),
        ]),
      ]
    )
  },
]
render._withStripped = true



/***/ })

}]);