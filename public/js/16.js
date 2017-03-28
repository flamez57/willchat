webpackJsonp([16],{

/***/ 203:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(287)

var Component = __webpack_require__(47)(
  /* script */
  __webpack_require__(221),
  /* template */
  __webpack_require__(269),
  /* scopeId */
  "data-v-6cf5ce3e",
  /* cssModules */
  null
)
Component.options.__file = "D:\\UPUPW_NG7.0\\vhosts\\willchat\\resources\\assets\\js\\user\\components\\document\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6cf5ce3e", Component.options)
  } else {
    hotAPI.reload("data-v-6cf5ce3e", Component.options)
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
      posts: [],
      searchForm: {
        name: '',
        level: 'all'
      }
    };
  },

  mounted() {
    this.loadData();
  },

  methods: {
    loadData(page = 1) {
      this.axios.get('document/lists', {
        params: {
          name: this.searchForm.name,
          level: this.searchForm.level,
          page: page
        }
      }).then(response => {
        this.posts = response.data.posts;
      }).catch(error => {
        this.$message({
          message: error.response.data,
          type: 'error'
        });
      });
    },

    search() {
      this.loadData(1);
    },

    handleCurrentChange(page) {
      this.loadData(page);
    }
  }
});

/***/ }),

/***/ 248:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
exports.push([module.i, "\n.main .post-list[data-v-6cf5ce3e] {\n  display: block;\n  background-color: #fff;\n  overflow: hidden;\n  padding: 3rem;\n}\n.main .post-list li[data-v-6cf5ce3e] {\n    display: block;\n    padding: .2em 0;\n    font-size: 16px;\n    line-height: 1.5em;\n}\n.main .post-list li[data-v-6cf5ce3e]:hover {\n      background-color: rgba(255, 0, 0, 0.2);\n}\n.main .post-list li a[data-v-6cf5ce3e] {\n      display: block;\n      color: #555;\n}\n.main .post-list li a[data-v-6cf5ce3e]:visited {\n        color: red;\n}\n", ""]);

/***/ }),

/***/ 269:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "main main-with-padding"
  }, [_c('ul', {
    staticClass: "post-list"
  }, _vm._l((_vm.posts.data), function(post) {
    return _c('li', [_c('router-link', {
      attrs: {
        "to": '/document/show/' + post.id
      }
    }, [_vm._v(_vm._s(post.title))])], 1)
  })), _vm._v(" "), _c('div', {
    staticClass: "paginator"
  }, [_c('el-pagination', {
    attrs: {
      "current-page": _vm.posts.current_page,
      "page-size": _vm.posts.per_page,
      "layout": "total, prev, pager, next, jumper",
      "total": _vm.posts.tatal
    },
    on: {
      "current-change": _vm.handleCurrentChange
    }
  })], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6cf5ce3e", module.exports)
  }
}

/***/ }),

/***/ 287:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(248);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(48)("ea05477a", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-6cf5ce3e&scoped=true!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-6cf5ce3e&scoped=true!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});