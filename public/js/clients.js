"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["clients"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Clients/index.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Clients/index.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_demi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-demi */ "./node_modules/vue-demi/lib/index.mjs");
/* harmony import */ var _store_clients__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/clients */ "./resources/js/store/clients.js");
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pinia */ "./node_modules/pinia/dist/pinia.esm-browser.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Clients',
  setup: function setup() {
    // Data
    var headerTitles = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.ref)(['id', 'Client', 'Cash balance', 'Gain/Loss']);
    var clientByPages = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
    var clientStore = (0,_store_clients__WEBPACK_IMPORTED_MODULE_1__.useClientStore)();

    var _storeToRefs = (0,pinia__WEBPACK_IMPORTED_MODULE_2__.storeToRefs)(clientStore),
        clients = _storeToRefs.clients,
        clientPaginationData = _storeToRefs.clientPaginationData;

    clientStore.getAllClients({
      current_page: 1
    }).then(function (result) {
      modifyClientList(result);
    });

    var clientPaginationAction = function clientPaginationAction(payload) {
      clientStore.getAllClients({
        current_page: payload
      }).then(function (result) {
        modifyClientList(result);
      });
    };

    var modifyClientList = function modifyClientList(payload) {
      clientByPages.value = payload.map(function (el) {
        return {
          id: el.id,
          name: el.name,
          cash_balance: el.balance,
          gain_loss: profitCalculation(el)
        };
      });
    };

    (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.watch)(function () {
      return clients.value;
    }, function () {
      modifyClientList(clients.value);
    });

    var profitCalculation = function profitCalculation(payload) {
      var _payload$stocks;

      var currentPrice = [];
      var volumeOnCurPrice = 0;
      var volumeOnPurPrice = 0;

      if (!!((_payload$stocks = payload.stocks) !== null && _payload$stocks !== void 0 && _payload$stocks.length)) {
        payload.stocks.map(function (el) {
          var findCurrentPrice = currentPrice.find(function (elem) {
            return el.id === elem.id && el.pivot.purchase_price == elem.purchasePrice;
          });

          if (!!!findCurrentPrice) {
            currentPrice.push({
              id: el.id,
              price: parseInt(el.price),
              purchasePrice: parseInt(el.pivot.purchase_price),
              count: 1
            });
          } else findCurrentPrice.count += 1;
        });
        currentPrice.map(function (item) {
          volumeOnCurPrice += item.count * item.price;
          volumeOnPurPrice += item.count * item.purchasePrice;
        });
        return volumeOnCurPrice - volumeOnPurPrice;
      }

      return 0;
    };

    return {
      headerTitles: headerTitles,
      clientByPages: clientByPages,
      profitCalculation: profitCalculation,
      clientPaginationAction: clientPaginationAction,
      clientPaginationData: clientPaginationData
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Clients/index.vue?vue&type=template&id=1b6379d2":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Clients/index.vue?vue&type=template&id=1b6379d2 ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "client wrapper container mx-auto"
};
var _hoisted_2 = {
  "class": "client__header"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
  "class": "head__title"
}, "Client List", -1
/* HOISTED */
);

var _hoisted_4 = {
  "class": "client__create-btn"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Create client");

var _hoisted_6 = {
  "class": "client__list wrapper"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

  var _component_app_table = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("app-table");

  var _component_pagination = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("pagination");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: "/client/create"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_5];
    }),
    _: 1
    /* STABLE */

  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_app_table, {
    params: {
      headers: $setup.headerTitles,
      isAction: true,
      type: 'client',
      cellData: $setup.clientByPages
    }
  }, null, 8
  /* PROPS */
  , ["params"]), !!$setup.clientPaginationData && $setup.clientPaginationData.total > $setup.clientPaginationData.per_page ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_pagination, {
    key: 0,
    params: {
      action: $setup.clientPaginationAction,
      currentPage: $setup.clientPaginationData.current_page,
      total: $setup.clientPaginationData.total,
      perPage: $setup.clientPaginationData.per_page
    }
  }, null, 8
  /* PROPS */
  , ["params"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]);
}

/***/ }),

/***/ "./resources/js/store/clients.js":
/*!***************************************!*\
  !*** ./resources/js/store/clients.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useClientStore": () => (/* binding */ useClientStore)
/* harmony export */ });
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pinia */ "./node_modules/pinia/dist/pinia.esm-browser.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api */ "./resources/js/api/index.js");


var useClientStore = (0,pinia__WEBPACK_IMPORTED_MODULE_1__.defineStore)({
  id: 'client',
  state: function state() {
    return {
      clients: [],
      currentPage: 1,
      clientPaginationData: false
    };
  },
  actions: {
    getAllClients: function getAllClients(payload) {
      var _this = this;

      this.currentPage = payload.current_page;
      return new Promise(function (resolve, reject) {
        (0,_api__WEBPACK_IMPORTED_MODULE_0__.$axios)({
          method: _api__WEBPACK_IMPORTED_MODULE_0__.apiList.getClients.method,
          url: _api__WEBPACK_IMPORTED_MODULE_0__.apiList.getClients.url,
          params: payload
        }).then(function (resp) {
          var _resp$data;

          if (!!((_resp$data = resp.data) !== null && _resp$data !== void 0 && _resp$data.data)) {
            resolve(resp.data.data);
            _this.clients = resp.data.data;
            _this.clientPaginationData = resp.data;
          } else if (!!resp.data.length) resolve(resp.data), _this.clients = resp.data, _this.clientPaginationData = false;else resolve([]);
        })["catch"](function (err) {
          return reject(err);
        });
      });
    },
    createClient: function createClient(payload) {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        (0,_api__WEBPACK_IMPORTED_MODULE_0__.$axios)({
          method: _api__WEBPACK_IMPORTED_MODULE_0__.apiList.createClient.method,
          url: _api__WEBPACK_IMPORTED_MODULE_0__.apiList.createClient.url,
          data: payload
        }).then(function (resp) {
          _this2.getAllClients({
            current_page: _this2.currentPage
          }).then(function () {
            resolve(resp);
          });
        })["catch"](function (err) {
          return reject(err);
        });
      });
    },
    buyStock: function buyStock(payload) {
      return new Promise(function (resolve, reject) {
        (0,_api__WEBPACK_IMPORTED_MODULE_0__.$axios)({
          method: _api__WEBPACK_IMPORTED_MODULE_0__.apiList.buyStock.method,
          url: _api__WEBPACK_IMPORTED_MODULE_0__.apiList.buyStock.url,
          data: payload
        }).then(function (resp) {
          resolve(resp);
        })["catch"](function (err) {
          return reject(err);
        });
      });
    },
    getStockByClient: function getStockByClient(payload) {
      return new Promise(function (resolve, reject) {
        (0,_api__WEBPACK_IMPORTED_MODULE_0__.$axios)({
          method: _api__WEBPACK_IMPORTED_MODULE_0__.apiList.getClientDataById.method,
          url: _api__WEBPACK_IMPORTED_MODULE_0__.apiList.getClientDataById.url,
          params: payload
        }).then(function (resp) {
          resolve(resp.data);
        })["catch"](function (err) {
          return reject(err);
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Clients/index.vue?vue&type=style&index=0&id=1b6379d2&lang=scss&scope=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Clients/index.vue?vue&type=style&index=0&id=1b6379d2&lang=scss&scope=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".client__header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Clients/index.vue?vue&type=style&index=0&id=1b6379d2&lang=scss&scope=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Clients/index.vue?vue&type=style&index=0&id=1b6379d2&lang=scss&scope=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_style_index_0_id_1b6379d2_lang_scss_scope_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=style&index=0&id=1b6379d2&lang=scss&scope=true */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Clients/index.vue?vue&type=style&index=0&id=1b6379d2&lang=scss&scope=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_style_index_0_id_1b6379d2_lang_scss_scope_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_style_index_0_id_1b6379d2_lang_scss_scope_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/pages/Clients/index.vue":
/*!**********************************************!*\
  !*** ./resources/js/pages/Clients/index.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_1b6379d2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=1b6379d2 */ "./resources/js/pages/Clients/index.vue?vue&type=template&id=1b6379d2");
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "./resources/js/pages/Clients/index.vue?vue&type=script&lang=js");
/* harmony import */ var _index_vue_vue_type_style_index_0_id_1b6379d2_lang_scss_scope_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=1b6379d2&lang=scss&scope=true */ "./resources/js/pages/Clients/index.vue?vue&type=style&index=0&id=1b6379d2&lang=scss&scope=true");
/* harmony import */ var Z_Fcode_domains_test_invst_app_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,Z_Fcode_domains_test_invst_app_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_index_vue_vue_type_template_id_1b6379d2__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/pages/Clients/index.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/pages/Clients/index.vue?vue&type=script&lang=js":
/*!**********************************************************************!*\
  !*** ./resources/js/pages/Clients/index.vue?vue&type=script&lang=js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Clients/index.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/pages/Clients/index.vue?vue&type=template&id=1b6379d2":
/*!****************************************************************************!*\
  !*** ./resources/js/pages/Clients/index.vue?vue&type=template&id=1b6379d2 ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_template_id_1b6379d2__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_template_id_1b6379d2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=template&id=1b6379d2 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Clients/index.vue?vue&type=template&id=1b6379d2");


/***/ }),

/***/ "./resources/js/pages/Clients/index.vue?vue&type=style&index=0&id=1b6379d2&lang=scss&scope=true":
/*!******************************************************************************************************!*\
  !*** ./resources/js/pages/Clients/index.vue?vue&type=style&index=0&id=1b6379d2&lang=scss&scope=true ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_style_index_0_id_1b6379d2_lang_scss_scope_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=style&index=0&id=1b6379d2&lang=scss&scope=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Clients/index.vue?vue&type=style&index=0&id=1b6379d2&lang=scss&scope=true");


/***/ })

}]);