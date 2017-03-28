webpackJsonp([8],{

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(281)

var Component = __webpack_require__(47)(
  /* script */
  __webpack_require__(230),
  /* template */
  __webpack_require__(263),
  /* scopeId */
  "data-v-48064896",
  /* cssModules */
  null
)
Component.options.__file = "D:\\UPUPW_NG7.0\\vhosts\\willchat\\resources\\assets\\js\\user\\components\\reply\\default-form.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] default-form.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-48064896", Component.options)
  } else {
    hotAPI.reload("data-v-48064896", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      reply: {
        id: '',
        content: '',
        type: 'default'
      }
    };
  },

  mounted() {
    this.axios.get(`reply/default`).then(response => {
      if (response.data.reply) {
        this.reply = response.data.reply;
      }
    });
  },

  computed: {},

  methods: {
    store() {
      this.axios.post('reply/store', this.reply).then(response => {
        this.reply = response.data.reply;

        this.$message({
          message: '保存成功',
          type: 'success'
        });
      });
    }
  }
});

/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
exports.push([module.i, "\n.right-main[data-v-48064896] {\n  display: block;\n  overflow: hidden;\n  background-color: #fff;\n}\n", ""]);

/***/ }),

/***/ 263:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "right-main"
  }, [_c('el-form', {
    ref: "form",
    attrs: {
      "model": _vm.reply,
      "label-width": "150px"
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "回复内容"
    }
  }, [_c('el-input', {
    attrs: {
      "type": "textarea",
      "rows": 10
    },
    model: {
      value: (_vm.reply.content),
      callback: function($$v) {
        _vm.reply.content = $$v
      },
      expression: "reply.content"
    }
  })], 1), _vm._v(" "), _c('el-form-item', [_c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.store
    }
  }, [_vm._v("保存")]), _vm._v(" "), _c('el-button', {
    nativeOn: {
      "click": function($event) {
        _vm.$router.back()
      }
    }
  }, [_vm._v("取消")])], 1)], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-48064896", module.exports)
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
var update = __webpack_require__(48)("03f11198", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-48064896&scoped=true!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./default-form.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-48064896&scoped=true!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./default-form.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});