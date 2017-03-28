webpackJsonp([0],{

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      account: {
        id: '',
        name: '',
        type: '订阅号',
        app_id: '',
        app_secret: '',
        aes_key: '',
        merchant_id: '',
        merchant_key: '',
        cert_path: '',
        key_path: '',
        remark: ''
      }
    };
  },

  mounted() {
    const accountId = this.$route.params.id;

    if (accountId) {
      this.axios.get(`account/show/${accountId}`).then(response => {
        this.account = response.data.account;
      });
    }
  },

  computed: {},

  methods: {
    store() {
      this.axios.post('account/store', this.account).then(response => {
        this.$message({
          message: '添加成功',
          type: 'success'
        });

        setTimeout(() => {
          this.$router.push('/');
        }, 1000);
      });
    }
  },

  watch: {
    'formData.province': function (val, oldVal) {
      this.formData.city = this.cityList[0];
    },

    'formData.city': function (val, oldVal) {
      this.formData.area = this.areaList[0];
    }
  }
});

/***/ }),

/***/ 253:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
exports.push([module.i, "", ""]);

/***/ }),

/***/ 274:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "main main-with-padding"
  }, [_c('el-form', {
    ref: "form",
    attrs: {
      "model": _vm.account,
      "label-width": "150px"
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "公众号名称"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.account.name),
      callback: function($$v) {
        _vm.account.name = $$v
      },
      expression: "account.name"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "类型"
    }
  }, [_c('el-select', {
    attrs: {
      "placeholder": ""
    },
    model: {
      value: (_vm.account.type),
      callback: function($$v) {
        _vm.account.type = $$v
      },
      expression: "account.type"
    }
  }, [_c('el-option', {
    attrs: {
      "label": "订阅号",
      "value": "1"
    }
  }), _vm._v(" "), _c('el-option', {
    attrs: {
      "label": "认证订阅号",
      "value": "2"
    }
  }), _vm._v(" "), _c('el-option', {
    attrs: {
      "label": "服务号",
      "value": "3"
    }
  }), _vm._v(" "), _c('el-option', {
    attrs: {
      "label": "认证服务号",
      "value": "4"
    }
  })], 1)], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "AppId"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.account.app_id),
      callback: function($$v) {
        _vm.account.app_id = $$v
      },
      expression: "account.app_id"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "AppSecret"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.account.app_secret),
      callback: function($$v) {
        _vm.account.app_secret = $$v
      },
      expression: "account.app_secret"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "AesKey"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.account.aes_key),
      callback: function($$v) {
        _vm.account.aes_key = $$v
      },
      expression: "account.aes_key"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "备注"
    }
  }, [_c('el-input', {
    attrs: {
      "type": "textarea"
    },
    model: {
      value: (_vm.account.remark),
      callback: function($$v) {
        _vm.account.remark = $$v
      },
      expression: "account.remark"
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
     require("vue-hot-reload-api").rerender("data-v-c42af674", module.exports)
  }
}

/***/ }),

/***/ 292:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(253);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(48)("c2e3ca44", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-c42af674&scoped=true!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./form.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-c42af674&scoped=true!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./form.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(292)

var Component = __webpack_require__(47)(
  /* script */
  __webpack_require__(218),
  /* template */
  __webpack_require__(274),
  /* scopeId */
  "data-v-c42af674",
  /* cssModules */
  null
)
Component.options.__file = "D:\\UPUPW_NG7.0\\vhosts\\willchat\\resources\\assets\\js\\user\\components\\account\\form.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] form.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c42af674", Component.options)
  } else {
    hotAPI.reload("data-v-c42af674", Component.options)
  }
})()}

module.exports = Component.exports


/***/ })

});