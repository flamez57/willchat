webpackJsonp([4],{

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(290)

var Component = __webpack_require__(47)(
  /* script */
  __webpack_require__(234),
  /* template */
  __webpack_require__(272),
  /* scopeId */
  "data-v-af32bd26",
  /* cssModules */
  null
)
Component.options.__file = "D:\\UPUPW_NG7.0\\vhosts\\willchat\\resources\\assets\\js\\user\\components\\user\\avatar.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] avatar.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-af32bd26", Component.options)
  } else {
    hotAPI.reload("data-v-af32bd26", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__(9);






/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      imageUrl: '',
      headers: {}
    };
  },

  mounted() {
    this.headers = {
      Authorization: 'bearer ' + window.localStorage.getItem(__WEBPACK_IMPORTED_MODULE_1__config__["a" /* default */].jwtTokenKey)
    };
  },

  methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_vuex__["mapActions"])(['storeUserToLocal']), {

    handleAvatarScucess(res, file) {
      localStorage.setItem(__WEBPACK_IMPORTED_MODULE_1__config__["a" /* default */].jwtTokenKey, res.token);

      if (res.user) {
        this.storeUserToLocal(res.user);
      }

      this.headers = {
        Authorization: 'bearer ' + res.token
      };

      this.imageUrl = URL.createObjectURL(file.raw);
    },

    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    }
  })
});

/***/ }),

/***/ 251:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
exports.push([module.i, "\n.avatar-uploader[data-v-af32bd26] {\n  border: 1px dashed #d9d9d9;\n  border-radius: 6px;\n  cursor: pointer;\n  position: relative;\n  overflow: hidden;\n  background-color: #fff;\n  text-align: center;\n}\n.avatar-uploader .el-upload[data-v-af32bd26] {\n    background-color: grey;\n}\n.avatar-uploader .el-upload[data-v-af32bd26]:hover {\n      border-color: #20a0ff;\n}\n.avatar-uploader-icon[data-v-af32bd26] {\n  font-size: 28px;\n  color: #8c939d;\n  width: 178px;\n  height: 178px;\n  line-height: 178px;\n  text-align: center;\n}\n.avatar[data-v-af32bd26] {\n  width: 230px;\n  height: 230px;\n  display: block;\n}\n", ""]);

/***/ }),

/***/ 272:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "main main-with-padding"
  }, [_c('el-row', {
    attrs: {
      "gutter": 20,
      "type": "flex",
      "justify": "center"
    }
  }, [_c('el-col', {
    attrs: {
      "span": 8
    }
  }, [_c('el-upload', {
    staticClass: "avatar-uploader",
    attrs: {
      "multiple": false,
      "action": "/api/user/avatar-upload",
      "headers": _vm.headers,
      "name": "avatar",
      "show-file-list": false,
      "auto-upload": true,
      "on-success": _vm.handleAvatarScucess,
      "before-upload": _vm.beforeAvatarUpload
    }
  }, [(_vm.imageUrl) ? _c('img', {
    staticClass: "avatar",
    attrs: {
      "src": _vm.imageUrl
    }
  }) : _c('i', {
    staticClass: "el-icon-plus avatar-uploader-icon"
  })])], 1)], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-af32bd26", module.exports)
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
var update = __webpack_require__(48)("08e0e4e8", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-af32bd26&scoped=true!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./avatar.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-af32bd26&scoped=true!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./avatar.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});