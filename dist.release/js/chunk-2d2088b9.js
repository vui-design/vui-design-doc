(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2d2088b9"],{a4f6:function(t,e,o){"use strict";o.r(e);var n=o("d58b"),l=o("240e"),s=o("1a42"),i={components:{Example:s.a},data:function(){return{code:'<template>\n  <div class="example-modal-basic-usage">\n    <vui-button type="primary" v-on:click="showModal">Open basic modal</vui-button>\n    <vui-modal\n      v-model="visible"\n      title="Modal Title"\n      v-on:ok="handleOk"\n      v-on:cancel="handleCancel"\n    >\n      <p>Some contents...</p>\n      <p>Some contents...</p>\n      <p>Some contents...</p>\n      <p>Some contents...</p>\n    </vui-modal>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        visible: false\n      };\n    },\n    methods: {\n      showModal() {\n        this.visible = true;\n      },\n      handleOk() {\n        this.$message.info("Clicked ok");\n      },\n      handleCancel() {\n        this.$message.info("Clicked cancel");\n      }\n    }\n  };\n<\/script>\n',visible:!1}},methods:{showModal:function(){this.visible=!0},handleOk:function(){this.$message.info("Clicked ok")},handleCancel:function(){this.$message.info("Clicked cancel")}}},a=o("2877"),d=Object(a.a)(i,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("example",{attrs:{code:t.code,id:"example-modal-basic-usage"}},[o("template",{slot:"demo"},[o("div",{staticClass:"example-modal-basic-usage"},[o("vui-button",{attrs:{type:"primary"},on:{click:t.showModal}},[t._v("Open basic modal")]),o("vui-modal",{attrs:{title:"Modal Title"},on:{ok:t.handleOk,cancel:t.handleCancel},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[o("p",[t._v("Some contents...")]),o("p",[t._v("Some contents...")]),o("p",[t._v("Some contents...")]),o("p",[t._v("Some contents...")])])],1)]),o("template",{slot:"title"},[t._v("基本用法")]),o("template",{slot:"description"},[o("p",[t._v("最简单的使用方法，通过控制 "),o("code",[t._v("visible")]),t._v(" 属性来显示或隐藏对话框。可以使用 "),o("code",[t._v("v-model")]),t._v(" 双向绑定。")])])],2)}),[],!1,null,null,null).exports,c={components:{Example:s.a},data:function(){return{code:'<template>\n  <div class="example-modal-headless-and-footless">\n    <vui-space>\n      <vui-button type="primary" v-on:click="showModal1">No Header</vui-button>\n      <vui-button type="primary" v-on:click="showModal2">No Footer</vui-button>\n    </vui-space>\n    <vui-modal v-model="visible1">\n      <p>Some contents...</p>\n      <p>Some contents...</p>\n      <p>Some contents...</p>\n      <p>Some contents...</p>\n    </vui-modal>\n    <vui-modal v-model="visible2" v-bind:showFooter="false" title="Modal Title">\n      <p>Some contents...</p>\n      <p>Some contents...</p>\n      <p>Some contents...</p>\n      <p>Some contents...</p>\n    </vui-modal>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        visible1: false,\n        visible2: false\n      };\n    },\n    methods: {\n      showModal1() {\n        this.visible1 = true;\n      },\n      showModal2() {\n        this.visible2 = true;\n      }\n    }\n  };\n<\/script>\n',visible1:!1,visible2:!1}},methods:{showModal1:function(){this.visible1=!0},showModal2:function(){this.visible2=!0}}},v=Object(a.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("example",{attrs:{code:t.code,id:"example-modal-headless-and-footless"}},[o("template",{slot:"demo"},[o("div",{staticClass:"example-modal-headless-and-footless"},[o("vui-space",[o("vui-button",{attrs:{type:"primary"},on:{click:t.showModal1}},[t._v("No Header")]),o("vui-button",{attrs:{type:"primary"},on:{click:t.showModal2}},[t._v("No Footer")])],1),o("vui-modal",{model:{value:t.visible1,callback:function(e){t.visible1=e},expression:"visible1"}},[o("p",[t._v("Some contents...")]),o("p",[t._v("Some contents...")]),o("p",[t._v("Some contents...")]),o("p",[t._v("Some contents...")])]),o("vui-modal",{attrs:{showFooter:!1,title:"Modal Title"},model:{value:t.visible2,callback:function(e){t.visible2=e},expression:"visible2"}},[o("p",[t._v("Some contents...")]),o("p",[t._v("Some contents...")]),o("p",[t._v("Some contents...")]),o("p",[t._v("Some contents...")])])],1)]),o("template",{slot:"title"},[t._v("隐藏页头页脚")]),o("template",{slot:"description"},[o("p",[t._v("未设置 "),o("code",[t._v("title")]),t._v(" 标题时，头部将自动隐藏。")]),o("p",[t._v("将 "),o("code",[t._v("showFooter")]),t._v(" 属性设置为 "),o("code",[t._v("false")]),t._v(" 来隐藏对话框的底部内容。")])])],2)}),[],!1,null,null,null).exports,r={components:{Example:s.a},data:function(){return{code:'<template>\n  <div class="example-modal-hide-close-button">\n    <vui-button type="primary" v-on:click="showModal">Hide Close Button</vui-button>\n    <vui-modal v-model="visible" v-bind:closable="false" title="Modal Title">\n      <p>Some contents...</p>\n      <p>Some contents...</p>\n      <p>Some contents...</p>\n      <p>Some contents...</p>\n    </vui-modal>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        visible: false\n      };\n    },\n    methods: {\n      showModal() {\n        this.visible = true;\n      }\n    }\n  };\n<\/script>\n',visible:!1}},methods:{showModal:function(){this.visible=!0}}},p=Object(a.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("example",{attrs:{code:t.code,id:"example-modal-hide-close-button"}},[o("template",{slot:"demo"},[o("div",{staticClass:"example-modal-hide-close-button"},[o("vui-button",{attrs:{type:"primary"},on:{click:t.showModal}},[t._v("Hide Close Button")]),o("vui-modal",{attrs:{closable:!1,title:"Modal Title"},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[o("p",[t._v("Some contents...")]),o("p",[t._v("Some contents...")]),o("p",[t._v("Some contents...")]),o("p",[t._v("Some contents...")])])],1)]),o("template",{slot:"title"},[t._v("隐藏关闭按钮")]),o("template",{slot:"description"},[o("p",[t._v("将 "),o("code",[t._v("closable")]),t._v(" 属性设置为 "),o("code",[t._v("false")]),t._v("，可以隐藏对话框右上角的关闭按钮。")])])],2)}),[],!1,null,null,null).exports,u={components:{Example:s.a},data:function(){return{code:'<template>\n  <div class="example-modal-button-props">\n    <vui-button type="primary" @click="showModal">Open modal with customized button props</vui-button>\n    <vui-modal\n      v-model="visible"\n      title="Modal Title"\n      cancelText="Cancel"\n      okText="OK"\n      :cancelButtonProps="cancelButtonProps"\n      :okButtonProps="okButtonProps"\n    >\n      <p>Some contents...</p>\n      <p>Some contents...</p>\n      <p>Some contents...</p>\n      <p>Some contents...</p>\n    </vui-modal>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        visible: false,\n        cancelButtonProps: {\n          props: {\n            type: "text"\n          }\n        },\n        okButtonProps: {\n          props: {\n            disabled: true\n          }\n        }\n      };\n    },\n    methods: {\n      showModal() {\n        this.visible = true;\n      }\n    }\n  };\n<\/script>\n',visible:!1,cancelButtonProps:{props:{type:"text"}},okButtonProps:{props:{disabled:!0}}}},methods:{showModal:function(){this.visible=!0}}},m=Object(a.a)(u,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("example",{attrs:{code:t.code,id:"example-modal-button-props"}},[o("template",{slot:"demo"},[o("div",{staticClass:"example-modal-button-props"},[o("vui-button",{attrs:{type:"primary"},on:{click:t.showModal}},[t._v("Open modal with customized button props")]),o("vui-modal",{attrs:{title:"Modal Title",cancelText:"Cancel",okText:"OK",cancelButtonProps:t.cancelButtonProps,okButtonProps:t.okButtonProps},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[o("p",[t._v("Some contents...")]),o("p",[t._v("Some contents...")]),o("p",[t._v("Some contents...")]),o("p",[t._v("Some contents...")])])],1)]),o("template",{slot:"title"},[t._v("按钮属性")]),o("template",{slot:"description"},[o("p",[t._v("通过 "),o("code",[t._v("cancelText")]),t._v(" 和 "),o("code",[t._v("okText")]),t._v(" 属性来设置按钮的显示文字。")]),o("p",[t._v("设置 "),o("code",[t._v("cancelButtonProps")]),t._v(" 和 "),o("code",[t._v("okButtonProps")]),t._v(" 分别定义取消按钮和确定按钮的属性，详见 "),o("router-link",{attrs:{to:"/components/button"}},[t._v("Button")]),t._v(" 组件。")],1)])],2)}),[],!1,null,null,null).exports,_={components:{Example:s.a},data:function(){return{code:'<template>\n  <div class="example-modal-position">\n    <vui-space>\n      <vui-button type="primary" v-on:click="showModal1">Open modal at 50px to top</vui-button>\n      <vui-button type="primary" v-on:click="showModal2">Vertically centered modal</vui-button>\n    </vui-space>\n    <vui-modal v-model="visible1" v-bind:top="50" title="Modal Title">\n      <p>Some contents...</p>\n      <p>Some contents...</p>\n      <p>Some contents...</p>\n      <p>Some contents...</p>\n    </vui-modal>\n    <vui-modal v-model="visible2" centered title="Modal Title">\n      <p>Some contents...</p>\n      <p>Some contents...</p>\n      <p>Some contents...</p>\n      <p>Some contents...</p>\n    </vui-modal>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        visible1: false,\n        visible2: false\n      };\n    },\n    methods: {\n      showModal1() {\n        this.visible1 = true;\n      },\n      showModal2() {\n        this.visible2 = true;\n      }\n    }\n  };\n<\/script>\n',visible1:!1,visible2:!1}},methods:{showModal1:function(){this.visible1=!0},showModal2:function(){this.visible2=!0}}},h=Object(a.a)(_,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("example",{attrs:{code:t.code,id:"example-modal-position"}},[o("template",{slot:"demo"},[o("div",{staticClass:"example-modal-position"},[o("vui-space",[o("vui-button",{attrs:{type:"primary"},on:{click:t.showModal1}},[t._v("Open modal at 50px to top")]),o("vui-button",{attrs:{type:"primary"},on:{click:t.showModal2}},[t._v("Vertically centered modal")])],1),o("vui-modal",{attrs:{top:50,title:"Modal Title"},model:{value:t.visible1,callback:function(e){t.visible1=e},expression:"visible1"}},[o("p",[t._v("Some contents...")]),o("p",[t._v("Some contents...")]),o("p",[t._v("Some contents...")]),o("p",[t._v("Some contents...")])]),o("vui-modal",{attrs:{centered:"",title:"Modal Title"},model:{value:t.visible2,callback:function(e){t.visible2=e},expression:"visible2"}},[o("p",[t._v("Some contents...")]),o("p",[t._v("Some contents...")]),o("p",[t._v("Some contents...")]),o("p",[t._v("Some contents...")])])],1)]),o("template",{slot:"title"},[t._v("位置")]),o("template",{slot:"description"},[o("p",[t._v("使用 "),o("code",[t._v("top")]),t._v(" 或 "),o("code",[t._v("centered")]),t._v(" 属性来设置对话框的打开位置。")])])],2)}),[],!1,null,null,null).exports,b={components:{Example:s.a},data:function(){return{code:'<template>\n  <div class="example-modal-width">\n    <vui-button type="primary" v-on:click="showModal">Modal width</vui-button>\n    <vui-modal v-model="visible" v-bind:width="360" title="Modal Title">\n      <p>Some contents...</p>\n      <p>Some contents...</p>\n      <p>Some contents...</p>\n      <p>Some contents...</p>\n    </vui-modal>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        visible: false\n      };\n    },\n    methods: {\n      showModal() {\n        this.visible = true;\n      }\n    }\n  };\n<\/script>\n',visible:!1}},methods:{showModal:function(){this.visible=!0}}},f=Object(a.a)(b,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("example",{attrs:{code:t.code,id:"example-modal-width"}},[o("template",{slot:"demo"},[o("div",{staticClass:"example-modal-width"},[o("vui-button",{attrs:{type:"primary"},on:{click:t.showModal}},[t._v("Modal width")]),o("vui-modal",{attrs:{width:360,title:"Modal Title"},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[o("p",[t._v("Some contents...")]),o("p",[t._v("Some contents...")]),o("p",[t._v("Some contents...")]),o("p",[t._v("Some contents...")])])],1)]),o("template",{slot:"title"},[t._v("宽度")]),o("template",{slot:"description"},[o("p",[t._v("设置对话框的宽度为 "),o("code",[t._v("360px")]),t._v("。")]),o("p",[t._v("对话框的宽度是响应式的。当屏幕宽度小于 "),o("code",[t._v("768px")]),t._v(" 时，宽度会被强制设为 "),o("code",[t._v("auto")]),t._v("。")])])],2)}),[],!1,null,null,null).exports,x={components:{Example:s.a},data:function(){return{code:'<template>\n  <div class="example-modal-customized-footer">\n    <vui-button type="primary" v-on:click="showModal">Open modal with customized footer</vui-button>\n    <vui-modal v-model="visible" title="Modal Title">\n      <p>Some contents...</p>\n      <p>Some contents...</p>\n      <p>Some contents...</p>\n      <p>Some contents...</p>\n      <vui-space slot="footer">\n        <vui-button v-on:click="handleReturn">Return</vui-button>\n        <vui-button type="primary" v-bind:loading="loading" v-on:click="handleSubmit">Submit</vui-button>\n      </vui-space>\n    </vui-modal>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        visible: false,\n        loading: false\n      };\n    },\n    methods: {\n      showModal() {\n        this.visible = true;\n      },\n      handleReturn() {\n        this.visible = false;\n      },\n      handleSubmit() {\n        this.loading = true;\n\n        setTimeout(() => {\n          this.visible = false;\n          this.loading = false;\n        }, 3000);\n      }\n    }\n  };\n<\/script>\n',visible:!1,loading:!1}},methods:{showModal:function(){this.visible=!0},handleReturn:function(){this.visible=!1},handleSubmit:function(){var t=this;this.loading=!0,setTimeout((function(){t.visible=!1,t.loading=!1}),3e3)}}},y=Object(a.a)(x,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("example",{attrs:{code:t.code,id:"example-modal-customized-footer"}},[o("template",{slot:"demo"},[o("div",{staticClass:"example-modal-customized-footer"},[o("vui-button",{attrs:{type:"primary"},on:{click:t.showModal}},[t._v("Open modal with customized footer")]),o("vui-modal",{attrs:{title:"Modal Title"},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[o("p",[t._v("Some contents...")]),o("p",[t._v("Some contents...")]),o("p",[t._v("Some contents...")]),o("p",[t._v("Some contents...")]),o("vui-space",{attrs:{slot:"footer"},slot:"footer"},[o("vui-button",{on:{click:t.handleReturn}},[t._v("Return")]),o("vui-button",{attrs:{type:"primary",loading:t.loading},on:{click:t.handleSubmit}},[t._v("Submit")])],1)],1)],1)]),o("template",{slot:"title"},[t._v("自定义页脚")]),o("template",{slot:"description"},[o("p",[t._v("利用 "),o("code",[t._v("footer")]),t._v(" 插槽自定义对话框底部内容。点击提交后进入 "),o("code",[t._v("loading")]),t._v(" 状态，完成后关闭。")])])],2)}),[],!1,null,null,null).exports,k={components:{Example:s.a},data:function(){return{code:'<template>\n  <div class="example-modal-asynchronously-close">\n    <vui-button type="primary" v-on:click="showModal">Open modal with async logic</vui-button>\n    <vui-modal v-model="visible" v-on:cancel="handleCancel" okAsync v-on:ok="handleOk" title="Modal Title">\n      <p>Some contents...</p>\n      <p>Some contents...</p>\n      <p>Some contents...</p>\n      <p>Some contents...</p>\n    </vui-modal>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        visible: false\n      };\n    },\n    methods: {\n      showModal() {\n        this.visible = true;\n      },\n      handleCancel() {\n        this.$message.info("Cancel task!");\n      },\n      handleOk(done) {\n        // 模拟异步任务的执行\n        const task = () => {\n          // bool 为 true 表示异步任务执行成功\n          // bool 为 false 表示异步任务执行失败\n          const bool = Math.random() > 0.5;\n\n          // 提示执行结果\n          if (bool) {\n            this.$message.success("Task executed successfully!");\n          }\n          else {\n            this.$message.error("Task executed failed!");\n          }\n\n          // 调用 done 函数，告知对话框 ok 事件回调函数内部的异步任务执行完成，取消按钮的 loading 状态\n          // 给 done 函数传入 true，或者不传入参数，对话框均会关闭\n          // 传入 false 阻止对话框关闭\n          done && done(bool);\n        };\n\n        setTimeout(task, 3000);\n      }\n    }\n  };\n<\/script>\n',visible:!1}},methods:{showModal:function(){this.visible=!0},handleCancel:function(){this.$message.info("Cancel task!")},handleOk:function(t){var e=this;setTimeout((function(){var o=Math.random()>.5;o?e.$message.success("Task executed successfully!"):e.$message.error("Task executed failed!"),t&&t(o)}),3e3)}}},S=Object(a.a)(k,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("example",{attrs:{code:t.code,id:"example-modal-asynchronously-close"}},[o("template",{slot:"demo"},[o("div",{staticClass:"example-modal-asynchronously-close"},[o("vui-button",{attrs:{type:"primary"},on:{click:t.showModal}},[t._v("Open modal with async logic")]),o("vui-modal",{attrs:{okAsync:"",title:"Modal Title"},on:{cancel:t.handleCancel,ok:t.handleOk},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[o("p",[t._v("Some contents...")]),o("p",[t._v("Some contents...")]),o("p",[t._v("Some contents...")]),o("p",[t._v("Some contents...")])])],1)]),o("template",{slot:"title"},[t._v("异步关闭")]),o("template",{slot:"description"},[o("p",[t._v("通过设置 "),o("code",[t._v("cancelAsync")]),t._v("、"),o("code",[t._v("okAsync")]),t._v(" 标记取消按钮或确定按钮的点击事件回调函数是否执行异步任务。")]),o("p",[t._v("当该属性为 "),o("code",[t._v("true")]),t._v(" 时，点击按钮后，按钮会进入 "),o("code",[t._v("loading")]),t._v(" 状态，同时事件回调函数会接收一个 "),o("code",[t._v("done")]),t._v(" 函数作为参数，需要在异步任务完成后调用这个 "),o("code",[t._v("done")]),t._v(" 函数，告知对话框异步任务执行完成，此时按钮会移除 "),o("code",[t._v("loading")]),t._v(" 状态。")]),o("p",[t._v("1、"),o("code",[t._v("done()")]),t._v(" 或 "),o("code",[t._v("done(true)")]),t._v(" 表示 "),o("code",[t._v("loading")]),t._v(" 状态结束后自动关闭对话框；")]),o("p",[t._v("2、"),o("code",[t._v("done(false)")]),t._v(" 表示 "),o("code",[t._v("loading")]),t._v(" 状态结束后禁止关闭对话框。")])])],2)}),[],!1,null,null,null).exports,w={components:{Example:s.a},data:function(){return{code:'<template>\n  <vui-space>\n    <vui-button type="primary" v-on:click="showConfirm">Confirm</vui-button>\n    <vui-button v-on:click="showDeleteConfirm">Delete</vui-button>\n    <vui-button v-on:click="showAsynchronouslyCloseConfirm">Asynchronously close</vui-button>\n  </vui-space>\n</template>\n\n<script>\n  export default {\n    methods: {\n      showConfirm() {\n        this.$modal.confirm({\n          title: "Do you want to delete these items?",\n          description: "Some descriptions...",\n          cancel: () => console.log("Cancel"),\n          ok: () => console.log("OK")\n        });\n      },\n      showDeleteConfirm() {\n        this.$modal.confirm({\n          title: "Are you sure delete this task?",\n          description: "Some descriptions...",\n          cancelText: "No",\n          okText: "Yes",\n          okButtonProps: {\n            props: {\n              type: "error"\n            }\n          },\n          cancel: () => console.log("No"),\n          ok: () => console.log("Yes")\n        });\n      },\n      showAsynchronouslyCloseConfirm() {\n        this.$modal.confirm({\n          title: "Friendly Tips",\n          description: "The current operation will permanently delete the task. Do you want to continue?",\n          cancelText: "Cancel",\n          okText: "Continue",\n          okAsync: true,\n          cancel: () => {\n            console.log("Cancel");\n          },\n          ok: done => {\n            // 模拟异步任务的执行\n            const task = () => {\n              // bool 为 true 表示异步任务执行成功\n              // bool 为 false 表示异步任务执行失败\n              const bool = Math.random() > 0.5;\n\n              // 提示执行结果\n              if (bool) {\n                this.$message.success("Delete successfully!");\n              }\n              else {\n                this.$message.error("Delete failed, please try again later!");\n              }\n\n              // 调用 done 函数，告知对话框 ok 事件回调函数内部的异步任务执行完成，取消按钮的 loading 状态\n              // 给 done 函数传入 true，或者不传入参数，对话框均会关闭\n              // 传入 false 阻止对话框关闭\n              done && done(bool);\n            };\n\n            setTimeout(task, 3000);\n          }\n        });\n      }\n    }\n  };\n<\/script>\n'}},methods:{showConfirm:function(){this.$modal.confirm({title:"Do you want to delete these items?",description:"Some descriptions...",cancel:function(){return console.log("Cancel")},ok:function(){return console.log("OK")}})},showDeleteConfirm:function(){this.$modal.confirm({title:"Are you sure delete this task?",description:"Some descriptions...",cancelText:"No",okText:"Yes",okButtonProps:{props:{type:"error"}},cancel:function(){return console.log("No")},ok:function(){return console.log("Yes")}})},showAsynchronouslyCloseConfirm:function(){var t=this;this.$modal.confirm({title:"Friendly Tips",description:"The current operation will permanently delete the task. Do you want to continue?",cancelText:"Cancel",okText:"Continue",okAsync:!0,cancel:function(){console.log("Cancel")},ok:function(e){setTimeout((function(){var o=Math.random()>.5;o?t.$message.success("Delete successfully!"):t.$message.error("Delete failed, please try again later!"),e&&e(o)}),3e3)}})}}},g=Object(a.a)(w,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("example",{attrs:{code:t.code,id:"example-modal-confirm"}},[o("template",{slot:"demo"},[o("vui-space",[o("vui-button",{attrs:{type:"primary"},on:{click:t.showConfirm}},[t._v("Confirm")]),o("vui-button",{on:{click:t.showDeleteConfirm}},[t._v("Delete")]),o("vui-button",{on:{click:t.showAsynchronouslyCloseConfirm}},[t._v("Asynchronously close")])],1)],1),o("template",{slot:"title"},[t._v("确认对话框")]),o("template",{slot:"description"},[o("p",[t._v("使用 "),o("code",[t._v("confirm()")]),t._v(" 可以快捷地弹出确认框。")])])],2)}),[],!1,null,null,null).exports,M={components:{Example:s.a},data:function(){return{code:'<template>\n      <vui-space>\n        <vui-button type="primary" v-on:click="showInfoNotice">消息</vui-button>\n        <vui-button type="warning" v-on:click="showWarningNotice">警告</vui-button>\n        <vui-button type="success" v-on:click="showSuccessNotice">成功</vui-button>\n        <vui-button type="error" v-on:click="showErrorNotice">失败</vui-button>\n      </vui-space>\n</template>\n\n<script>\n  export default {\n    methods: {\n      showInfoNotice() {\n        this.$modal.info({\n          title: "This is a info message",\n          description: "Some descriptions..."\n        });\n      },\n      showWarningNotice() {\n        this.$modal.warning({\n          title: "This is a warning message",\n          description: "Some descriptions..."\n        });\n      },\n      showSuccessNotice() {\n        this.$modal.success({\n          title: "This is a success message",\n          description: "Some descriptions..."\n        });\n      },\n      showErrorNotice() {\n        this.$modal.error({\n          title: "This is a error message",\n          description: "Some descriptions..."\n        });\n      }\n    }\n  };\n<\/script>\n'}},methods:{showInfoNotice:function(){this.$modal.info({title:"This is a info message",description:"Some descriptions..."})},showWarningNotice:function(){this.$modal.warning({title:"This is a warning message",description:"Some descriptions..."})},showSuccessNotice:function(){this.$modal.success({title:"This is a success message",description:"Some descriptions..."})},showErrorNotice:function(){this.$modal.error({title:"This is a error message",description:"Some descriptions..."})}}},C=Object(a.a)(M,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("example",{attrs:{code:t.code,id:"example-modal-information"}},[o("template",{slot:"demo"},[o("vui-space",[o("vui-button",{attrs:{type:"primary"},on:{click:t.showInfoNotice}},[t._v("消息")]),o("vui-button",{attrs:{type:"warning"},on:{click:t.showWarningNotice}},[t._v("警告")]),o("vui-button",{attrs:{type:"success"},on:{click:t.showSuccessNotice}},[t._v("成功")]),o("vui-button",{attrs:{type:"error"},on:{click:t.showErrorNotice}},[t._v("失败")])],1)],1),o("template",{slot:"title"},[t._v("信息提示")]),o("template",{slot:"description"},[o("p",[t._v("四种类型的信息提示，只提供一个确定按钮用于关闭。")])])],2)}),[],!1,null,null,null).exports,T={components:{Example:s.a},data:function(){return{code:'<template>\n  <vui-button type="primary" v-on:click="showSuccessNotice">Close automatically after 5s</vui-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      showSuccessNotice() {\n        let seconds = 5;\n        let modal = this.$modal.success({\n          title: "Friendly Tips",\n          description: "This modal will be closed after " + seconds + " second!"\n        });\n        let interval = setInterval(() => {\n          seconds -= 1;\n          modal.update({\n            description: "This modal will be closed after " + seconds + " second!"\n          });\n        }, 1000);\n\n        setTimeout(() => {\n          clearInterval(interval);\n          interval = null;\n\n          modal.close();\n        }, seconds * 1000);\n      }\n    }\n  };\n<\/script>\n'}},methods:{showSuccessNotice:function(){var t=5,e=this.$modal.success({title:"Friendly Tips",description:"This modal will be closed after "+t+" second!"}),o=setInterval((function(){t-=1,e.update({description:"This modal will be closed after "+t+" second!"})}),1e3);setTimeout((function(){clearInterval(o),o=null,e.close()}),1e3*t)}}},$=Object(a.a)(T,(function(){var t=this.$createElement,e=this._self._c||t;return e("example",{attrs:{code:this.code,id:"example-modal-update-and-close"}},[e("template",{slot:"demo"},[e("vui-button",{attrs:{type:"primary"},on:{click:this.showSuccessNotice}},[this._v("Close automatically after 5s")])],1),e("template",{slot:"title"},[this._v("更新和关闭")]),e("template",{slot:"description"},[e("p",[this._v("手动更新和关闭通过 "),e("code",[this._v("this.$modal[type]")]),this._v(" 方式创建的对话框。")])])],2)}),[],!1,null,null,null).exports,E={mixins:[n.a],components:{Document:l.a,ExampleModalBasicUsage:d,ExampleModalHeadlessAndFootless:v,ExampleModalHideCloseButton:p,ExampleModalButtonProps:m,ExampleModalPosition:h,ExampleModalWidth:f,ExampleModalCustomizedFooter:y,ExampleModalAsynchronouslyClose:S,ExampleModalConfirm:g,ExampleModalInfomation:C,ExampleModalUpdateAndClose:$}},O=Object(a.a)(E,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("document",[o("h1",[t._v("Modal 对话框")]),o("p",[t._v("模态对话框。")]),o("h2",[t._v("何时使用")]),o("p",[t._v("需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 "),o("code",[t._v("Modal")]),t._v(" 在当前页面正中打开一个对话框，承载相应的操作。另外当需要一个简洁的确认框询问用户时，可以使用精心封装好的 "),o("code",[t._v("this.$modal.confirm()")]),t._v(" 等方法。")]),o("h2",[t._v("代码演示")])]),o("vui-row",{attrs:{gutter:20}},[o("vui-col",{attrs:{span:12}},[o("ExampleModalBasicUsage"),o("ExampleModalHeadlessAndFootless"),o("ExampleModalHideCloseButton"),o("ExampleModalButtonProps"),o("ExampleModalPosition"),o("ExampleModalWidth")],1),o("vui-col",{attrs:{span:12}},[o("ExampleModalCustomizedFooter"),o("ExampleModalAsynchronouslyClose"),o("ExampleModalConfirm"),o("ExampleModalInfomation"),o("ExampleModalUpdateAndClose")],1)],1),o("document",[o("p",[t._v("除了上述通过标准组件的使用方式，"),o("code",[t._v("Vui")]),t._v(" 还精心封装了一些实例方法，用来创建一次性的轻量级对话框。实例以隐式创建 "),o("code",[t._v("Modal")]),t._v(" 组件的方式在全局创建一个对话框，并在关闭时移除。")])]),o("document",[o("h2",{attrs:{id:"example-api"}},[t._v("API")]),o("h3",[t._v("Modal 属性")]),o("table",{staticClass:"example-api-props"},[o("thead",[o("tr",[o("th",{attrs:{width:"150"}},[t._v("属性")]),o("th",[t._v("说明")]),o("th",{attrs:{width:"150"}},[t._v("类型")]),o("th",{attrs:{width:"160"}},[t._v("默认值")])])]),o("tbody",[o("tr",[o("td",[t._v("visible")]),o("td",[t._v("对话框是否可见，可以使用 "),o("code",[t._v("v-model")]),t._v(" 双向绑定")]),o("td",[t._v("Boolean")]),o("td",[o("code",[t._v("false")])])]),o("tr",[o("td",[t._v("title")]),o("td",[t._v("对话框标题")]),o("td",[t._v("String | Slot")]),o("td",[t._v("--")])]),o("tr",[o("td",[t._v("showFooter")]),o("td",[t._v("是否显示对话框底部内容")]),o("td",[t._v("Boolean")]),o("td",[o("code",[t._v("true")])])]),o("tr",[o("td",[t._v("footer")]),o("td",[t._v("自定义对话框底部内容")]),o("td",[t._v("Slot")]),o("td",[t._v("--")])]),o("tr",[o("td",[t._v("showCancelButton")]),o("td",[t._v("是否显示取消按钮")]),o("td",[t._v("Boolean")]),o("td",[o("code",[t._v("true")])])]),o("tr",[o("td",[t._v("cancelButtonProps")]),o("td",[t._v("取消按钮的属性，遵循"),o("a",{attrs:{href:"https://github.com/vuejs/babel-plugin-transform-vue-jsx#difference-from-react-jsx",target:"_blank"}},[t._v("jsx规范")])]),o("td",[t._v("Object")]),o("td",[t._v("--")])]),o("tr",[o("td",[t._v("cancelText")]),o("td",[t._v("取消按钮文字")]),o("td",[t._v("String")]),o("td",[o("code",[t._v("取消")])])]),o("tr",[o("td",[t._v("cancelAsync")]),o("td",[t._v("标记取消按钮的点击事件回调函数是否执行异步任务")]),o("td",[t._v("Boolean")]),o("td",[o("code",[t._v("false")])])]),o("tr",[o("td",[t._v("showOkButton")]),o("td",[t._v("是否显示确定按钮")]),o("td",[t._v("Boolean")]),o("td",[o("code",[t._v("true")])])]),o("tr",[o("td",[t._v("okButtonProps")]),o("td",[t._v("确定按钮的属性，遵循"),o("a",{attrs:{href:"https://github.com/vuejs/babel-plugin-transform-vue-jsx#difference-from-react-jsx",target:"_blank"}},[t._v("jsx规范")])]),o("td",[t._v("Object")]),o("td",[t._v("--")])]),o("tr",[o("td",[t._v("okText")]),o("td",[t._v("确定按钮文字")]),o("td",[t._v("String")]),o("td",[o("code",[t._v("确定")])])]),o("tr",[o("td",[t._v("okAsync")]),o("td",[t._v("标记确定按钮的点击事件回调函数是否执行异步任务")]),o("td",[t._v("Boolean")]),o("td",[o("code",[t._v("false")])])]),o("tr",[o("td",[t._v("closable")]),o("td",[t._v("是否显示右上角的关闭按钮")]),o("td",[t._v("Boolean")]),o("td",[o("code",[t._v("true")])])]),o("tr",[o("td",[t._v("top")]),o("td",[t._v("对话框距离页面顶部的距离，垂直居中显示对话框时该属性无效")]),o("td",[t._v("String | Number")]),o("td",[o("code",[t._v("100")])])]),o("tr",[o("td",[t._v("centered")]),o("td",[t._v("是否垂直居中显示对话框")]),o("td",[t._v("Boolean")]),o("td",[o("code",[t._v("false")])])]),o("tr",[o("td",[t._v("width")]),o("td",[t._v("对话框宽度。对话框的宽度是响应式的。当屏幕宽度小于 "),o("code",[t._v("768px")]),t._v(" 时，宽度会被强制设为 "),o("code",[t._v("auto")]),t._v("。")]),o("td",[t._v("String | Number")]),o("td",[o("code",[t._v("500")])])]),o("tr",[o("td",[t._v("className")]),o("td",[t._v("对话框样式类名")]),o("td",[t._v("String")]),o("td",[t._v("--")])]),o("tr",[o("td",[t._v("headerStyle")]),o("td",[t._v("用于设置对话框头部的样式")]),o("td",[t._v("String | Object")]),o("td",[t._v("--")])]),o("tr",[o("td",[t._v("bodyStyle")]),o("td",[t._v("用于设置对话框内容部分的样式")]),o("td",[t._v("String | Object")]),o("td",[t._v("--")])]),o("tr",[o("td",[t._v("footerStyle")]),o("td",[t._v("用于设置对话框底部的样式")]),o("td",[t._v("String | Object")]),o("td",[t._v("--")])]),o("tr",[o("td",[t._v("backdrop")]),o("td",[t._v("是否显示背景遮罩")]),o("td",[t._v("Boolean")]),o("td",[o("code",[t._v("true")])])]),o("tr",[o("td",[t._v("backdropClassName")]),o("td",[t._v("背景遮罩样式类名")]),o("td",[t._v("String")]),o("td",[t._v("--")])]),o("tr",[o("td",[t._v("clickBackdropToClose")]),o("td",[t._v("点击背景遮罩是否关闭对话框")]),o("td",[t._v("Boolean")]),o("td",[o("code",[t._v("true")])])]),o("tr",[o("td",[t._v("getPopupContainer")]),o("td",[t._v("指定对话框挂载的 HTML 节点")]),o("td",[t._v("Function")]),o("td",[t._v("() => document.body")])])])]),o("h3",[t._v("Modal 事件")]),o("table",{staticClass:"example-api-events"},[o("thead",[o("tr",[o("th",{attrs:{width:"150"}},[t._v("事件名")]),o("th",[t._v("说明")]),o("th",{attrs:{width:"150"}},[t._v("类型")]),o("th",{attrs:{width:"160"}},[t._v("回调参数")])])]),o("tbody",[o("tr",[o("td",[t._v("change")]),o("td",[t._v("可见状态发生变化时触发的事件回调函数，可以使用 "),o("code",[t._v("v-model")]),t._v(" 双向绑定")]),o("td",[t._v("Function")]),o("td",[o("code",[t._v("visible")])])]),o("tr",[o("td",[t._v("cancel")]),o("td",[t._v("点击取消按钮（或右上角关闭按钮、背景遮罩）的事件回调函数，"),o("code",[t._v("cancelAsync")]),t._v(" 启用模式下回调参数为 "),o("code",[t._v("done")]),t._v(" 函数")]),o("td",[t._v("Function")]),o("td",[t._v("--")])]),o("tr",[o("td",[t._v("ok")]),o("td",[t._v("点击确定按钮的事件回调函数，"),o("code",[t._v("okAsync")]),t._v(" 启用模式下回调参数为 "),o("code",[t._v("done")]),t._v(" 函数")]),o("td",[t._v("Function")]),o("td",[t._v("--")])]),o("tr",[o("td",[t._v("beforeOpen")]),o("td",[t._v("对话框打开前触发的事件回调函数")]),o("td",[t._v("Function")]),o("td",[t._v("--")])]),o("tr",[o("td",[t._v("open")]),o("td",[t._v("对话框打开时触发的事件回调函数")]),o("td",[t._v("Function")]),o("td",[t._v("--")])]),o("tr",[o("td",[t._v("afterOpen")]),o("td",[t._v("对话框完全打开时（打开动画完成后）触发的事件回调函数")]),o("td",[t._v("Function")]),o("td",[t._v("--")])]),o("tr",[o("td",[t._v("beforeClose")]),o("td",[t._v("对话框关闭前触发的事件回调函数")]),o("td",[t._v("Function")]),o("td",[t._v("--")])]),o("tr",[o("td",[t._v("close")]),o("td",[t._v("对话框关闭时触发的事件回调函数")]),o("td",[t._v("Function")]),o("td",[t._v("--")])]),o("tr",[o("td",[t._v("afterClose")]),o("td",[t._v("对话框完全关闭时（关闭动画完成后）触发的事件回调函数")]),o("td",[t._v("Function")]),o("td",[t._v("--")])])])]),o("h3",[t._v("全局方法")]),o("p",[t._v("除了标准组件的使用方式，"),o("code",[t._v("Vui")]),t._v(" 还精心封装了一些实例方法，用来创建一次性的轻量级对话框。实例以隐式创建 "),o("code",[t._v("Modal")]),t._v(" 组件的方式在全局创建一个对话框，并在关闭时移除。您可以直接通过调用以下方法来使用：")]),o("ul",[o("li",[o("code",[t._v("this.$modal.info(options)")])]),o("li",[o("code",[t._v("this.$modal.warning(options)")])]),o("li",[o("code",[t._v("this.$modal.success(options)")])]),o("li",[o("code",[t._v("this.$modal.error(options)")])]),o("li",[o("code",[t._v("this.$modal.confirm(options)")])])]),o("p",[t._v("以上方法隐式的创建及维护 "),o("code",[t._v("Modal")]),t._v(" 组件，参数 "),o("code",[t._v("options")]),t._v(" 是一个对象。具体说明如下：")]),o("table",{staticClass:"example-api-props"},[o("thead",[o("tr",[o("th",{attrs:{width:"150"}},[t._v("选项")]),o("th",[t._v("说明")]),o("th",{attrs:{width:"150"}},[t._v("类型")]),o("th",{attrs:{width:"160"}},[t._v("默认值")])])]),o("tbody",[o("tr",[o("td",[t._v("title")]),o("td",[t._v("对话框标题")]),o("td",[t._v("String | Function")]),o("td",[t._v("--")])]),o("tr",[o("td",[t._v("description")]),o("td",[t._v("对话框描述内容")]),o("td",[t._v("String | Function")]),o("td",[t._v("--")])]),o("tr",[o("td",[t._v("icon")]),o("td",[t._v("对话框图标类型")]),o("td",[t._v("String")]),o("td",[t._v("自动")])]),o("tr",[o("td",[t._v("cancelButtonProps")]),o("td",[t._v("取消按钮的属性，遵循"),o("a",{attrs:{href:"https://github.com/vuejs/babel-plugin-transform-vue-jsx#difference-from-react-jsx",target:"_blank"}},[t._v("jsx规范")]),t._v("，该选项仅在 "),o("code",[t._v("confirm")]),t._v(" 对话框中有效")]),o("td",[t._v("Object")]),o("td",[t._v("--")])]),o("tr",[o("td",[t._v("cancelText")]),o("td",[t._v("取消按钮文字，该选项仅在 "),o("code",[t._v("confirm")]),t._v(" 对话框中有效")]),o("td",[t._v("String")]),o("td",[o("code",[t._v("取消")])])]),o("tr",[o("td",[t._v("cancelAsync")]),o("td",[t._v("标记取消按钮的点击事件回调函数是否执行异步任务，该选项仅在 "),o("code",[t._v("confirm")]),t._v(" 对话框中有效")]),o("td",[t._v("Boolean")]),o("td",[o("code",[t._v("false")])])]),o("tr",[o("td",[t._v("okButtonProps")]),o("td",[t._v("确定按钮的属性，遵循"),o("a",{attrs:{href:"https://github.com/vuejs/babel-plugin-transform-vue-jsx#difference-from-react-jsx",target:"_blank"}},[t._v("jsx规范")])]),o("td",[t._v("Object")]),o("td",[t._v("--")])]),o("tr",[o("td",[t._v("okText")]),o("td",[t._v("确定按钮文字")]),o("td",[t._v("String")]),o("td",[o("code",[t._v("确定")])])]),o("tr",[o("td",[t._v("okAsync")]),o("td",[t._v("标记确定按钮的点击事件回调函数是否执行异步任务")]),o("td",[t._v("Boolean")]),o("td",[o("code",[t._v("false")])])]),o("tr",[o("td",[t._v("top")]),o("td",[t._v("对话框距离页面顶部的距离，垂直居中显示对话框时该属性无效")]),o("td",[t._v("String | Number")]),o("td",[o("code",[t._v("100")])])]),o("tr",[o("td",[t._v("centered")]),o("td",[t._v("是否垂直居中显示对话框")]),o("td",[t._v("Boolean")]),o("td",[o("code",[t._v("false")])])]),o("tr",[o("td",[t._v("width")]),o("td",[t._v("对话框宽度。对话框的宽度是响应式的。当屏幕宽度小于 "),o("code",[t._v("768px")]),t._v(" 时，宽度会被强制设为 "),o("code",[t._v("auto")]),t._v("。")]),o("td",[t._v("String | Number")]),o("td",[o("code",[t._v("360")])])]),o("tr",[o("td",[t._v("className")]),o("td",[t._v("对话框样式类名")]),o("td",[t._v("String")]),o("td",[t._v("--")])]),o("tr",[o("td",[t._v("headerStyle")]),o("td",[t._v("用于设置对话框头部的样式")]),o("td",[t._v("String | Object")]),o("td",[t._v("--")])]),o("tr",[o("td",[t._v("bodyStyle")]),o("td",[t._v("用于设置对话框内容部分的样式")]),o("td",[t._v("String | Object")]),o("td",[t._v("--")])]),o("tr",[o("td",[t._v("footerStyle")]),o("td",[t._v("用于设置对话框底部的样式")]),o("td",[t._v("String | Object")]),o("td",[t._v("--")])]),o("tr",[o("td",[t._v("backdrop")]),o("td",[t._v("是否显示背景遮罩")]),o("td",[t._v("Boolean")]),o("td",[o("code",[t._v("true")])])]),o("tr",[o("td",[t._v("backdropClassName")]),o("td",[t._v("背景遮罩样式类名")]),o("td",[t._v("String")]),o("td",[t._v("--")])]),o("tr",[o("td",[t._v("getPopupContainer")]),o("td",[t._v("指定对话框挂载的 HTML 节点")]),o("td",[t._v("Function")]),o("td",[t._v("() => document.body")])]),o("tr",[o("td",[t._v("cancel")]),o("td",[t._v("点击取消按钮的事件回调函数，"),o("code",[t._v("cancelAsync")]),t._v(" 启用模式下回调参数为 "),o("code",[t._v("done")]),t._v(" 函数，该选项仅在 "),o("code",[t._v("confirm")]),t._v(" 对话框中有效")]),o("td",[t._v("Function")]),o("td",[t._v("--")])]),o("tr",[o("td",[t._v("ok")]),o("td",[t._v("点击确定按钮的事件回调函数，"),o("code",[t._v("okAsync")]),t._v(" 启用模式下回调参数为 "),o("code",[t._v("done")]),t._v(" 函数")]),o("td",[t._v("Function")]),o("td",[t._v("--")])]),o("tr",[o("td",[t._v("beforeOpen")]),o("td",[t._v("对话框打开前触发的事件回调函数")]),o("td",[t._v("Function")]),o("td",[t._v("--")])]),o("tr",[o("td",[t._v("open")]),o("td",[t._v("对话框打开时触发的事件回调函数")]),o("td",[t._v("Function")]),o("td",[t._v("--")])]),o("tr",[o("td",[t._v("afterOpen")]),o("td",[t._v("对话框完全打开时（打开动画完成后）触发的事件回调函数")]),o("td",[t._v("Function")]),o("td",[t._v("--")])]),o("tr",[o("td",[t._v("beforeClose")]),o("td",[t._v("对话框关闭前触发的事件回调函数")]),o("td",[t._v("Function")]),o("td",[t._v("--")])]),o("tr",[o("td",[t._v("close")]),o("td",[t._v("对话框关闭时触发的事件回调函数")]),o("td",[t._v("Function")]),o("td",[t._v("--")])]),o("tr",[o("td",[t._v("afterClose")]),o("td",[t._v("对话框完全关闭时（关闭动画完成后）触发的事件回调函数")]),o("td",[t._v("Function")]),o("td",[t._v("--")])])])]),o("p",[t._v("以上函数调用后，均会返回一个引用，可以通过该引用更新和关闭对话框。")]),o("ul",[o("li",[o("code",[t._v("modal.update(options)")])]),o("li",[o("code",[t._v("modal.close()")])])]),o("p",[t._v("其中 "),o("code",[t._v("modal.upadte")]),t._v(" 方法的参数 "),o("code",[t._v("options")]),t._v(" 同 "),o("code",[t._v("this.$modal[type]")]),t._v(" 方法一致。")])])],1)}),[],!1,null,null,null);e.default=O.exports}}]);