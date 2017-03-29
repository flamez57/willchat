webpackJsonp([14],{

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(290)

var Component = __webpack_require__(46)(
  /* script */
  __webpack_require__(222),
  /* template */
  __webpack_require__(272),
  /* scopeId */
  "data-v-bca05e18",
  /* cssModules */
  null
)
Component.options.__file = "D:\\UPUPW_NG7.0\\vhosts\\willchat\\resources\\assets\\js\\user\\components\\errors\\404.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] 404.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-bca05e18", Component.options)
  } else {
    hotAPI.reload("data-v-bca05e18", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 222:
/***/ (function(module, exports) {



/***/ }),

/***/ 251:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)();
exports.push([module.i, "\n.main[data-v-bca05e18] {\n  display: block;\n}\n.main .welcome[data-v-bca05e18] {\n    display: block;\n    font-size: 3rem;\n    text-align: center;\n    margin-top: 3rem;\n}\n.main .welcome[data-v-bca05e18]:hover {\n      color: red;\n}\n.main .btn-back[data-v-bca05e18] {\n    display: block;\n    margin: 20px auto;\n}\n", ""]);

/***/ }),

/***/ 272:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "main"
  }, [_c('div', {
    staticClass: "welcome"
  }, [_vm._v("Not found")]), _vm._v(" "), _c('el-button', {
    staticClass: "btn-back",
    attrs: {
      "type": "primary",
      "size": "large"
    },
    on: {
      "click": function($event) {
        _vm.$router.back()
      }
    }
  }, [_vm._v("返回")])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-bca05e18", module.exports)
  }
}

/***/ }),

/***/ 290:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(251);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(47)("5160d758", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-bca05e18&scoped=true!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./404.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-bca05e18&scoped=true!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./404.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});