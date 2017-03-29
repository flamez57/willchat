webpackJsonp([11],{

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(283)

var Component = __webpack_require__(46)(
  /* script */
  __webpack_require__(225),
  /* template */
  __webpack_require__(265),
  /* scopeId */
  "data-v-61a095bb",
  /* cssModules */
  null
)
Component.options.__file = "D:\\UPUPW_NG7.0\\vhosts\\willchat\\resources\\assets\\js\\user\\components\\material\\video-lists.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] video-lists.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-61a095bb", Component.options)
  } else {
    hotAPI.reload("data-v-61a095bb", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      searchForm: {
        keyword: ''
      },
      materials: [],
      dialogFormVisible: false,
      uploadFormData: {
        description: ''
      }
    };
  },

  mounted() {
    this.loadData();
  },

  methods: {
    loadData(page = 1) {
      this.axios.get('material/lists?type=video', {
        params: {
          keyword: this.searchForm.keyword,
          page: page
        }
      }).then(response => {
        this.materials = response.data.materials;
      }).catch(error => {
        this.$message({
          message: error.response.data,
          type: 'error'
        });
      });
    },

    upload() {
      let imageFile = this.$refs.imageFileInput.$el.children[0].files[0];

      if (typeof imageFile === 'undefined') {
        this.$message({
          message: '未选择上传的视频',
          type: 'error'
        });
        return;
      }

      let myForm = new FormData();
      myForm.append('file', imageFile);
      myForm.append('description', this.uploadFormData.description);

      this.axios.post('material/upload?type=video', myForm, { timeout: 20000 }).then(response => {
        this.dialogFormVisible = false;
        this.uploadFormData.description = '';

        this.$message({
          message: '上传成功',
          type: 'success'
        });

        setTimeout(() => {
          this.loadData(this.materials.current_page);
        }, 1000);
      }).catch(error => {
        this.$message({
          message: error.response.data,
          type: 'error'
        });
      });
    },

    sync() {
      this.axios.get('material/sync?type=video', { timeout: 200000 }).then(response => {
        this.loadData(1);
      });
    },

    deleteMaterial(material) {
      this.$confirm('删除素材后将不可恢复, 是否继续?', '操作确认', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'info'
      }).then(() => {
        this.axios.post('material/delete', material, { timeout: 20000 }).then(response => {
          this.$message({
            message: '删除成功',
            type: 'success'
          });

          setTimeout(() => {
            this.loadData(this.materials.current_page);
          }, 1000);
        }).catch(error => {
          this.$message({
            message: error.response.data,
            type: 'error'
          });
        });
      }).catch(() => {
        console.log('canceled');
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

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)();
exports.push([module.i, "\n.main .material-img[data-v-61a095bb] {\n  display: inline-block;\n  width: 200px;\n}\n", ""]);

/***/ }),

/***/ 265:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "right-main"
  }, [_c('div', {
    staticClass: "table-tools"
  }, [_c('el-form', {
    staticClass: "demo-form-inline",
    attrs: {
      "inline": true,
      "model": _vm.searchForm
    }
  }, [_c('el-form-item', [_c('el-input', {
    attrs: {
      "placeholder": "按昵称搜索"
    },
    nativeOn: {
      "keyup": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13)) { return null; }
        _vm.loadData($event)
      }
    },
    model: {
      value: (_vm.searchForm.keyword),
      callback: function($$v) {
        _vm.searchForm.keyword = $$v
      },
      expression: "searchForm.keyword"
    }
  })], 1), _vm._v(" "), _c('el-form-item', [_c('el-button', {
    attrs: {
      "type": "primary",
      "icon": "search"
    },
    on: {
      "click": _vm.search
    }
  }, [_vm._v("搜索")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary",
      "icon": "plus"
    },
    on: {
      "click": function($event) {
        _vm.dialogFormVisible = true
      }
    }
  }, [_vm._v("上传视频素材")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary",
      "icon": "upload"
    },
    on: {
      "click": _vm.sync
    }
  }, [_vm._v("同步视频素材")])], 1)], 1)], 1), _vm._v(" "), _c('el-table', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "data": _vm.materials.data,
      "border": ""
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "media_id",
      "label": "MEDIA_ID",
      "align": "center",
      "width": "400"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "name",
      "label": "标题",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "description",
      "label": "描述",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "created_at",
      "label": "创建时间",
      "align": "center",
      "width": "170"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "updated_at",
      "label": "更新时间",
      "align": "center",
      "width": "170"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "操作",
      "align": "center",
      "width": "120"
    },
    inlineTemplate: {
      render: function() {
        var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
          return _c('div', [_c('el-button', {
            attrs: {
              "size": "small",
              "type": "danger"
            },
            nativeOn: {
              "click": function($event) {
                _vm.deleteMaterial(_vm.row)
              }
            }
          }, [_vm._v("删除")])], 1)
        
      },
      staticRenderFns: []
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "paginator"
  }, [_c('el-pagination', {
    attrs: {
      "current-page": _vm.materials.current_page,
      "page-size": _vm.materials.per_page,
      "layout": "total, prev, pager, next, jumper",
      "total": _vm.materials.tatal
    },
    on: {
      "current-change": _vm.handleCurrentChange
    }
  })], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-61a095bb", module.exports)
  }
}

/***/ }),

/***/ 283:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(244);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(47)("5a5541c8", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-61a095bb&scoped=true!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./video-lists.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-61a095bb&scoped=true!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./video-lists.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});