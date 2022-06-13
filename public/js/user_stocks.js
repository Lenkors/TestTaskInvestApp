"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["user_stocks"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/userStocks/index.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/userStocks/index.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _store_clients__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/clients */ "./resources/js/store/clients.js");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm-bundler.js");
/* harmony import */ var vue_demi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-demi */ "./node_modules/vue-demi/lib/index.mjs");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'userStocks',
  setup: function setup() {
    var headerTitles = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(['#', 'Company', 'Volume', 'Purchase price', 'Current price', 'Gain/Loss']);
    var clientStore = (0,_store_clients__WEBPACK_IMPORTED_MODULE_0__.useClientStore)();
    var userStocksList = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)([]);
    var clientData = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)();
    var route = (0,vue_router__WEBPACK_IMPORTED_MODULE_2__.useRoute)();
    var stockList = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)([]);

    var requestClientData = function requestClientData() {
      return new Promise(function (resolve) {
        clientStore.getStockByClient({
          client_id: route.params.id
        }).then(function (result) {
          clientData.value = result;
          resolve(true);
        });
      });
    };

    (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)(function () {
      return clientData.value;
    }, function () {
      if (!!!clientData.value) {
        requestClientData().then(function () {
          clientData.value.stocks.map(function (el) {
            var findCurrentPrice = stockList.value.length ? stockList.value.find(function (elem) {
              return el.id === elem.id && el.pivot.purchase_price == elem.purchasePrice;
            }) : undefined;

            if (!!!findCurrentPrice) {
              stockList.value.push({
                id: el.id,
                price: parseInt(el.price),
                name: el.name,
                purchasePrice: parseInt(el.pivot.purchase_price),
                count: 1
              });
            } else findCurrentPrice.count += 1;
          });
          modifyUserStockList();
        });
      }
    }, {
      immediate: true
    });

    var modifyUserStockList = function modifyUserStockList() {
      userStocksList.value = stockList.value.map(function (el, index) {
        return {
          id: index + 1,
          company: el.name,
          volume: el.count,
          purchase_price: el.purchasePrice,
          current_price: el.price,
          gain_loss: el.count * el.price - el.count * el.purchasePrice
        };
      });
    };

    var totalProfitCalculation = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(function () {
      var _stockList$value;

      var volumeOnCurPrice = 0;
      var volumeOnPurPrice = 0;

      if ((_stockList$value = stockList.value) !== null && _stockList$value !== void 0 && _stockList$value.length) {
        stockList.value.map(function (item) {
          volumeOnCurPrice += item.count * item.price;
          volumeOnPurPrice += item.count * item.purchasePrice;
        });
        return volumeOnCurPrice - volumeOnPurPrice;
      }

      return 0;
    });
    var investedCalculation = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(function () {
      var _stockList$value2;

      var volumeOnPurPrice = 0;

      if ((_stockList$value2 = stockList.value) !== null && _stockList$value2 !== void 0 && _stockList$value2.length) {
        stockList.value.map(function (item) {
          volumeOnPurPrice += item.count * item.purchasePrice;
        });
      }

      return volumeOnPurPrice;
    });
    var performanceCalculation = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(function () {
      var _stockList$value3;

      if ((_stockList$value3 = stockList.value) !== null && _stockList$value3 !== void 0 && _stockList$value3.length) {
        var findPercent = investedCalculation.value / 100;
        return (totalProfitCalculation.value / findPercent).toFixed(2);
      }

      return 0;
    });
    var checkNumSign = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(function () {
      return function (payload) {
        var checkNumber = Math.sign(payload);
        if (checkNumber == -1) return 'negative';else if (checkNumber == 0 || checkNumber == -0 || checkNumber == NaN) return 'neutral';else return 'positive';
      };
    });
    return {
      headerTitles: headerTitles,
      totalProfitCalculation: totalProfitCalculation,
      userStocksList: userStocksList,
      requestClientData: requestClientData,
      clientData: clientData,
      investedCalculation: investedCalculation,
      performanceCalculation: performanceCalculation,
      stockList: stockList,
      checkNumSign: checkNumSign
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/userStocks/index.vue?vue&type=template&id=17e82098":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/userStocks/index.vue?vue&type=template&id=17e82098 ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "user_stock wrapper container mx-auto"
};
var _hoisted_2 = {
  "class": "user_stock__header"
};
var _hoisted_3 = {
  "class": "head__title"
};
var _hoisted_4 = {
  "class": "user_stock__list wrapper"
};
var _hoisted_5 = {
  "class": "user_stock__total"
};
var _hoisted_6 = {
  "class": "user_stock__total-elem"
};

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "title"
}, "Total: ", -1
/* HOISTED */
);

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)();

var _hoisted_9 = {
  "class": "user_stock__total-elem"
};

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "title"
}, "Invested: ", -1
/* HOISTED */
);

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)();

var _hoisted_12 = {
  "class": "user_stock__total-elem"
};

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "title"
}, "Performance: ", -1
/* HOISTED */
);

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)();

var _hoisted_15 = {
  "class": "user_stock__total-elem"
};

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "title"
}, "Cash balance: ", -1
/* HOISTED */
);

var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)();

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _$setup$clientData, _$setup$clientData2, _$setup$clientData3;

  var _component_app_table = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("app-table");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(((_$setup$clientData = $setup.clientData) === null || _$setup$clientData === void 0 ? void 0 : _$setup$clientData.name) || 'User') + " stock List", 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_app_table, {
    params: {
      headers: $setup.headerTitles,
      isAction: false,
      type: 'user-stock',
      cellData: $setup.userStocksList
    }
  }, null, 8
  /* PROPS */
  , ["params"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [_hoisted_7, _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)("".concat($setup.checkNumSign($setup.totalProfitCalculation)))
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(" \u20AC ".concat($setup.totalProfitCalculation)), 3
  /* TEXT, CLASS */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [_hoisted_10, _hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)("".concat($setup.checkNumSign($setup.investedCalculation)))
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(" \u20AC ".concat($setup.investedCalculation)), 3
  /* TEXT, CLASS */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [_hoisted_13, _hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)("".concat($setup.checkNumSign($setup.performanceCalculation)))
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.performanceCalculation) + " %", 3
  /* TEXT, CLASS */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [_hoisted_16, _hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)("".concat($setup.checkNumSign(((_$setup$clientData2 = $setup.clientData) === null || _$setup$clientData2 === void 0 ? void 0 : _$setup$clientData2.balance) || 0)))
  }, "€ " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(((_$setup$clientData3 = $setup.clientData) === null || _$setup$clientData3 === void 0 ? void 0 : _$setup$clientData3.balance) || 0), 3
  /* TEXT, CLASS */
  )])])])]);
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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/userStocks/index.vue?vue&type=style&index=0&id=17e82098&lang=scss&scope=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/userStocks/index.vue?vue&type=style&index=0&id=17e82098&lang=scss&scope=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".user_stock__header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.user_stock__total {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n}\n.user_stock__total-elem {\n  padding: 0 1em;\n  display: grid;\n  grid-template-columns: 17fr 1fr;\n  grid-column-gap: 0.3em;\n  text-align: end;\n}\n.user_stock__total-elem .title {\n  font-weight: bold;\n}\n.user_stock__total-elem .negative {\n  color: #df1818;\n}\n.user_stock__total-elem .positive {\n  color: #39c227;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/userStocks/index.vue?vue&type=style&index=0&id=17e82098&lang=scss&scope=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/userStocks/index.vue?vue&type=style&index=0&id=17e82098&lang=scss&scope=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_style_index_0_id_17e82098_lang_scss_scope_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=style&index=0&id=17e82098&lang=scss&scope=true */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/userStocks/index.vue?vue&type=style&index=0&id=17e82098&lang=scss&scope=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_style_index_0_id_17e82098_lang_scss_scope_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_style_index_0_id_17e82098_lang_scss_scope_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/pages/userStocks/index.vue":
/*!*************************************************!*\
  !*** ./resources/js/pages/userStocks/index.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_17e82098__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=17e82098 */ "./resources/js/pages/userStocks/index.vue?vue&type=template&id=17e82098");
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "./resources/js/pages/userStocks/index.vue?vue&type=script&lang=js");
/* harmony import */ var _index_vue_vue_type_style_index_0_id_17e82098_lang_scss_scope_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=17e82098&lang=scss&scope=true */ "./resources/js/pages/userStocks/index.vue?vue&type=style&index=0&id=17e82098&lang=scss&scope=true");
/* harmony import */ var Z_Fcode_domains_test_invst_app_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,Z_Fcode_domains_test_invst_app_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_index_vue_vue_type_template_id_17e82098__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/pages/userStocks/index.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/pages/userStocks/index.vue?vue&type=script&lang=js":
/*!*************************************************************************!*\
  !*** ./resources/js/pages/userStocks/index.vue?vue&type=script&lang=js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/userStocks/index.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/pages/userStocks/index.vue?vue&type=template&id=17e82098":
/*!*******************************************************************************!*\
  !*** ./resources/js/pages/userStocks/index.vue?vue&type=template&id=17e82098 ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_template_id_17e82098__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_template_id_17e82098__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=template&id=17e82098 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/userStocks/index.vue?vue&type=template&id=17e82098");


/***/ }),

/***/ "./resources/js/pages/userStocks/index.vue?vue&type=style&index=0&id=17e82098&lang=scss&scope=true":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/pages/userStocks/index.vue?vue&type=style&index=0&id=17e82098&lang=scss&scope=true ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_style_index_0_id_17e82098_lang_scss_scope_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=style&index=0&id=17e82098&lang=scss&scope=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/userStocks/index.vue?vue&type=style&index=0&id=17e82098&lang=scss&scope=true");


/***/ })

}]);