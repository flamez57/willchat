webpackJsonp([1],{

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(276)

var Component = __webpack_require__(47)(
  /* script */
  __webpack_require__(228),
  /* template */
  __webpack_require__(258),
  /* scopeId */
  "data-v-126bb182",
  /* cssModules */
  null
)
Component.options.__file = "D:\\UPUPW_NG7.0\\vhosts\\willchat\\resources\\assets\\js\\user\\components\\menu\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-126bb182", Component.options)
  } else {
    hotAPI.reload("data-v-126bb182", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      menus: [],
      menu: {
        name: '',
        type: 'click',
        key: ''
      }
    };
  },

  mounted() {
    this.getMenus();
  },

  methods: {
    getMenus() {
      this.axios.get('menu/lists').then(response => {
        this.menus = response.data.menus;
      });
    },

    storeAndPublish() {
      this.axios.post('menu/store', this.menu).then(response => {
        console.log(response);
      });
    },

    syncMenu() {
      this.axios.post('menu/sync').then(response => {
        this.menus = response.data.menus;
      });
    }
  }
});

/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
exports.push([module.i, "\n.right-main[data-v-126bb182] {\n  background-color: #fff;\n}\n.menu-preview[data-v-126bb182] {\n  display: block;\n  overflow: hidden;\n  position: relative;\n  width: 320px;\n  height: 500px;\n  background-color: #fff;\n  margin: 0 auto;\n  border: 1px solid #ddd;\n}\n.menu-preview .header[data-v-126bb182] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    position: absolute;\n    width: 100%;\n    height: 65px;\n    background-image: url("+__webpack_require__(255)+");\n    background-size: 100%;\n    background-repeat: no-repeat;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end;\n}\n.menu-preview .header .account-name[data-v-126bb182] {\n      color: #fff;\n      margin-bottom: 10px;\n}\n.menu-preview .footer[data-v-126bb182] {\n    display: block;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 50px;\n    background-image: url("+__webpack_require__(254)+");\n    background-size: 100%;\n    background-repeat: no-repeat;\n}\n.edit-panel[data-v-126bb182] {\n  display: block;\n  overflow: hidden;\n  background-color: #e7e7e7;\n  width: 100%;\n  padding: 1rem;\n  border-radius: 5px;\n  border: 1px solid #eee;\n}\n.edit-panel .header[data-v-126bb182] {\n    padding-bottom: 1rem;\n    border-bottom: 1px solid #d5d5d5;\n}\n.edit-panel .header .btn-delete-menu[data-v-126bb182] {\n      float: right;\n}\n.edit-panel .body[data-v-126bb182] {\n    padding: 1rem;\n}\n.buttons[data-v-126bb182] {\n  margin-top: 30px;\n}\n", ""]);

/***/ }),

/***/ 254:
/***/ (function(module, exports) {

module.exports = "/js/images/bg_mobile_foot.png?544fc30e6b6e9d334d81dac6a47cd65b";

/***/ }),

/***/ 255:
/***/ (function(module, exports) {

module.exports = "/js/images/bg_mobile_head.png?1c93128220dc4933a1698b5101140b07";

/***/ }),

/***/ 258:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "right-main"
  }, [_vm._v("\n\n  " + _vm._s(_vm.menus) + "\n  "), _c('el-row', {
    attrs: {
      "gutter": 30
    }
  }, [_c('el-col', {
    attrs: {
      "span": 8
    }
  }, [_c('div', {
    staticClass: "menu-preview"
  }, [_c('div', {
    staticClass: "header"
  }, [_c('div', {
    staticClass: "account-name"
  }, [_vm._v("公众号名")])]), _vm._v(" "), _c('div', {
    staticClass: "footer"
  }, [_vm._v("1234")])])]), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 16
    }
  }, [_c('div', {
    staticClass: "edit-panel"
  }, [_c('div', {
    staticClass: "header"
  }, [_c('span', {
    staticClass: "menu-name"
  }, [_vm._v("菜单名称")]), _vm._v(" "), _c('el-button', {
    staticClass: "btn-delete-menu"
  }, [_vm._v("删除菜单")])], 1), _vm._v(" "), _c('div', {
    staticClass: "body"
  }, [_c('el-form', {
    ref: "form",
    attrs: {
      "model": _vm.menu,
      "label-width": "90px"
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "菜单名称"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "字数不超过4个汉字或8个字母"
    },
    model: {
      value: (_vm.menu.name),
      callback: function($$v) {
        _vm.menu.name = $$v
      },
      expression: "menu.name"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "菜单内容"
    }
  }, [_c('el-select', {
    attrs: {
      "placeholder": ""
    },
    model: {
      value: (_vm.menu.type),
      callback: function($$v) {
        _vm.menu.type = $$v
      },
      expression: "menu.type"
    }
  }, [_c('el-option', {
    attrs: {
      "label": "点击推事件",
      "value": "click"
    }
  }), _vm._v(" "), _c('el-option', {
    attrs: {
      "label": "跳转链接",
      "value": "view"
    }
  }), _vm._v(" "), _c('el-option', {
    attrs: {
      "label": "扫码推事件",
      "value": "scancode_push"
    }
  }), _vm._v(" "), _c('el-option', {
    attrs: {
      "label": "扫码推事件且提示",
      "value": "scancode_waitmsg"
    }
  }), _vm._v(" "), _c('el-option', {
    attrs: {
      "label": "弹出系统拍照发图",
      "value": "pic_sysphoto"
    }
  }), _vm._v(" "), _c('el-option', {
    attrs: {
      "label": "弹出拍照或相册发图",
      "value": "pic_photo_or_album"
    }
  }), _vm._v(" "), _c('el-option', {
    attrs: {
      "label": "弹出微信相册发图",
      "value": "pic_weixin"
    }
  }), _vm._v(" "), _c('el-option', {
    attrs: {
      "label": "弹出地理位置选择器",
      "value": "location_slect"
    }
  }), _vm._v(" "), _c('el-option', {
    attrs: {
      "label": "发送消息",
      "value": "media_id"
    }
  }), _vm._v(" "), _c('el-option', {
    attrs: {
      "label": "跳转图文消息 URL",
      "value": "view_limited"
    }
  })], 1)], 1), _vm._v(" "), _c('el-form-item', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.menu.type === 'click'),
      expression: "menu.type === 'click'"
    }],
    attrs: {
      "label": "关键词"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": ""
    },
    model: {
      value: (_vm.menu.key),
      callback: function($$v) {
        _vm.menu.key = $$v
      },
      expression: "menu.key"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.menu.type === 'view'),
      expression: "menu.type === 'view'"
    }],
    attrs: {
      "label": "页面地址"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": ""
    },
    model: {
      value: (_vm.menu.url),
      callback: function($$v) {
        _vm.menu.url = $$v
      },
      expression: "menu.url"
    }
  })], 1)], 1)], 1)])])], 1), _vm._v(" "), _c('el-row', {
    staticClass: "buttons",
    attrs: {
      "type": "flex",
      "justify": "center"
    }
  }, [_c('el-col', {
    attrs: {
      "span": 6
    }
  }, [_c('el-button', {
    attrs: {
      "type": "primary"
    },
    nativeOn: {
      "click": function($event) {
        _vm.storeAndPublish($event)
      }
    }
  }, [_vm._v("保存并发布")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "default"
    }
  }, [_vm._v("预览")])], 1)], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-126bb182", module.exports)
  }
}

/***/ }),

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(237);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(48)("3c64f929", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-126bb182&scoped=true!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-126bb182&scoped=true!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});