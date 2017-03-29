webpackJsonp([15],{

/***/ 203:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(281)

var Component = __webpack_require__(46)(
  /* script */
  __webpack_require__(221),
  /* template */
  __webpack_require__(263),
  /* scopeId */
  "data-v-4ba550c1",
  /* cssModules */
  null
)
Component.options.__file = "D:\\UPUPW_NG7.0\\vhosts\\willchat\\resources\\assets\\js\\user\\components\\document\\show.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] show.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4ba550c1", Component.options)
  } else {
    hotAPI.reload("data-v-4ba550c1", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      post: {}
    };
  },

  mounted() {
    this.axios.get('document/show/' + this.$route.params.id).then(response => {
      this.post = response.data.post;
    });
  }
});

/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)();
exports.push([module.i, "\n.post[data-v-4ba550c1] {\n  display: block;\n  overflow: hidden;\n  padding: 3rem;\n  background-color: #fff;\n}\n.post .title[data-v-4ba550c1] {\n    font-size: 20px;\n    text-align: center;\n}\n.post .content[data-v-4ba550c1] {\n    display: block;\n    font-size: 16px;\n    line-height: 1.5em;\n}\n", ""]);

/***/ }),

/***/ 263:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "main main-with-padding"
  }, [_c('div', {
    staticClass: "post"
  }, [_c('h1', {
    staticClass: "title"
  }, [_vm._v(_vm._s(_vm.post.title))]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_vm._v("\n      " + _vm._s(_vm.post.content) + "\n    ")])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4ba550c1", module.exports)
  }
}

/***/ }),

/***/ 281:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(242);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(47)("917b5fb2", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-4ba550c1&scoped=true!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./show.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-4ba550c1&scoped=true!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./show.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});