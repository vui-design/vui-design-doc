webpackJsonp([38],{qFH2:function(e,t){},v6fI:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("xe5J"),l=n("Fy5V"),i=n("RLuK"),o={components:{Example:i.a},data:function(){return{code:'<template>\n  <vui-upload\n    v-bind:action="action"\n    v-on:ready="handleReady"\n    v-on:progress="handleProgress"\n    v-on:success="handleSuccess"\n    v-on:error="handleError"\n    v-on:change="handleChange"\n  >\n    <vui-button icon="upload">Click To Upload</vui-button>\n  </vui-upload>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        action: "//jsonplaceholder.typicode.com/posts/"\n      };\n    },\n    methods: {\n      handleReady(file, fileList) {\n        console.log(file.name + " ready!");\n      },\n      handleProgress(progress, file, fileList) {\n        console.log(file.name + "uploaded " + file.percentage + "%!");\n      },\n      handleSuccess(response, file, fileList) {\n        this.$message.success(file.name + "uploaded successfully!");\n      },\n      handleError(error, file, fileList) {\n        this.$message.error(file.name + "uploaded failed!");\n      },\n      handleChange(file, fileList) {\n        console.log(file.name, fileList.length);\n      }\n    }\n  };\n<\/script>\n',action:"//jsonplaceholder.typicode.com/posts/"}},methods:{handleReady:function(e,t){console.log(e.name+" ready!")},handleProgress:function(e,t,n){console.log(t.name+" uploaded "+t.percentage+"%!")},handleSuccess:function(e,t,n){this.$message.success(t.name+" uploaded successfully!")},handleError:function(e,t,n){this.$message.error(t.name+" upload failed!")},handleChange:function(e,t){console.log(t.length)}}},s={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Example",{attrs:{vertical:"",id:"example-upload-basic-usage"}},[n("template",{slot:"source"},[n("vui-upload",{attrs:{action:e.action},on:{ready:e.handleReady,progress:e.handleProgress,success:e.handleSuccess,error:e.handleError,change:e.handleChange}},[n("vui-button",{attrs:{icon:"upload"}},[e._v("Click To Upload")])],1)],1),n("template",{slot:"title"},[e._v("点击上传")]),n("template",{slot:"describe"},[n("p",[e._v("经典款式，用户点击按钮弹出文件选择框。")])]),n("template",{slot:"code"},[e._v(e._s(e.code))])],2)},staticRenderFns:[]},d=n("VU/8")(o,s,!1,null,null,null).exports,r={components:{Example:i.a},data:function(){return{code:'<template>\n  <div class="example-upload-picture">\n    <vui-upload\n      v-bind:list="list"\n      v-bind:listType="listType"\n      v-bind:action="action"\n      v-on:change="handleChange"\n      v-on:preview="handlePreview"\n      v-on:remove="handleRemove"\n    >\n      <vui-button icon="upload">Click To Upload</vui-button>\n    </vui-upload>\n    <vui-modal v-model="visible" headless footless centered>\n      <img style="width: 100%;" v-bind:src="image" v-bind:alt="image" />\n    </vui-modal>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        list: [],\n        listType: "picture",\n        action: "//jsonplaceholder.typicode.com/posts/",\n        image: "",\n        visible: false\n      };\n    },\n    methods: {\n      handleChange(file, fileList) {\n        this.list = fileList;\n      },\n      handlePreview(file, fileList) {\n        this.image = file.url;\n        this.visible = true;\n      },\n      handleRemove(file, fileList) {\n        console.log(file.name);\n      }\n    }\n  };\n<\/script>\n',list:[],listType:"picture",action:"//jsonplaceholder.typicode.com/posts/",image:"",visible:!1}},methods:{handleChange:function(e,t){this.list=t},handlePreview:function(e,t){this.image=e.url,this.visible=!0},handleRemove:function(e,t){console.log(e.name)}}},c={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Example",{attrs:{vertical:"",id:"example-upload-picture"}},[n("template",{slot:"source"},[n("div",{staticClass:"example-upload-picture"},[n("vui-upload",{attrs:{list:e.list,listType:e.listType,action:e.action},on:{change:e.handleChange,preview:e.handlePreview,remove:e.handleRemove}},[n("vui-button",{attrs:{icon:"upload"}},[e._v("Click To Upload")])],1),n("vui-modal",{attrs:{headless:"",footless:"",centered:""},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[n("img",{staticStyle:{width:"100%"},attrs:{src:e.image,alt:e.image}})])],1)]),n("template",{slot:"title"},[e._v("图片列表样式")]),n("template",{slot:"describe"},[n("p",[e._v("上传文件为图片，可展示本地缩略图。")])]),n("template",{slot:"code"},[e._v(e._s(e.code))])],2)},staticRenderFns:[]},v=n("VU/8")(r,c,!1,null,null,null).exports,p={components:{Example:i.a},data:function(){return{code:'<template>\n  <div class="example-upload-picture-card">\n    <vui-upload\n      v-bind:list="list"\n      v-bind:listType="listType"\n      v-bind:action="action"\n      v-on:change="handleChange"\n      v-on:preview="handlePreview"\n      v-on:remove="handleRemove"\n    >\n      <template v-if="list.length < 4">\n        <vui-icon type="plus" style="font-size: 20px;" />\n        <div style="margin-top: 10px; font-size: 14px;">Upload</div>\n      </template>\n    </vui-upload>\n    <vui-modal v-model="visible" headless footless centered>\n      <img style="width: 100%;" v-bind:src="image" v-bind:alt="image" />\n    </vui-modal>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        list: [],\n        listType: "picture-card",\n        action: "//www.mocky.io/v2/5cc8019d300000980a055e76",\n        image: "",\n        visible: false\n      };\n    },\n    methods: {\n      handleChange(file, fileList) {\n        this.list = fileList;\n      },\n      handlePreview(file, fileList) {\n        this.image = file.url;\n        this.visible = true;\n      },\n      handleRemove(file, fileList) {\n        console.log(file.name);\n      }\n    }\n  };\n<\/script>\n',list:[],listType:"picture-card",action:"//www.mocky.io/v2/5cc8019d300000980a055e76",image:"",visible:!1}},methods:{handleChange:function(e,t){this.list=t},handlePreview:function(e,t){this.image=e.url,this.visible=!0},handleRemove:function(e,t){console.log(e.name)}}},u={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Example",{attrs:{vertical:"",id:"example-upload-picture-card"}},[n("template",{slot:"source"},[n("div",{staticClass:"example-upload-picture-card"},[n("vui-upload",{attrs:{list:e.list,listType:e.listType,action:e.action},on:{change:e.handleChange,preview:e.handlePreview,remove:e.handleRemove}},[e.list.length<4?[n("vui-icon",{staticStyle:{"font-size":"20px"},attrs:{type:"plus"}}),n("div",{staticStyle:{"margin-top":"10px","font-size":"14px"}},[e._v("Upload")])]:e._e()],2),n("vui-modal",{attrs:{headless:"",footless:"",centered:""},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[n("img",{staticStyle:{width:"100%"},attrs:{src:e.image,alt:e.image}})])],1)]),n("template",{slot:"title"},[e._v("照片墙")]),n("template",{slot:"describe"},[n("p",[e._v("用户可以上传图片并在列表中显示缩略图。当上传照片数到达限制后，上传按钮消失。")])]),n("template",{slot:"code"},[e._v(e._s(e.code))])],2)},staticRenderFns:[]},_=n("VU/8")(p,u,!1,null,null,null).exports,m={components:{Example:i.a},data:function(){return{code:'<template>\n  <vui-upload draggable multiple v-bind:action="action">\n    <div class="example-upload-draggable-button">\n      <vui-icon type="upload-cloud-filled" />\n      <h4>Click or drag file to this area to upload</h4>\n      <p>Only JPG / PNG files can be uploaded, and no more than 500kb</p>\n    </div>\n  </vui-upload>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        action: "//jsonplaceholder.typicode.com/posts/"\n      };\n    }\n  };\n<\/script>\n\n<style>\n  .example-upload-draggable-button { line-height:1; }\n  .example-upload-draggable-button i { color:#2d8cf0; font-size:50px; }\n  .example-upload-draggable-button h4 { margin-top:20px; color:#595959; font-size:16px; }\n  .example-upload-draggable-button p { margin-top:10px; color:#8c8c8c; font-size:12px; }\n</style>\n',action:"//jsonplaceholder.typicode.com/posts/"}}},h={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Example",{attrs:{vertical:"",id:"example-upload-draggable"}},[n("template",{slot:"source"},[n("vui-upload",{attrs:{draggable:"",multiple:"",action:e.action}},[n("div",{staticClass:"example-upload-draggable-button"},[n("vui-icon",{attrs:{type:"upload-cloud-filled"}}),n("h4",[e._v("Click or drag file to this area to upload")]),n("p",[e._v("Only JPG / PNG files can be uploaded, and no more than 500kb")])],1)])],1),n("template",{slot:"title"},[e._v("拖拽上传")]),n("template",{slot:"describe"},[n("p",[e._v("把文件拖入指定区域完成上传，同样支持点击上传。设置 "),n("code",[e._v("multiple")]),e._v(" 后，可以一次上传多个文件。")])]),n("template",{slot:"code"},[e._v(e._s(e.code))])],2)},staticRenderFns:[]};var f=n("VU/8")(m,h,!1,function(e){n("qFH2")},null,null).exports,g={components:{Example:i.a},data:function(){return{code:'<template>\n  <vui-upload\n    v-bind:list="list"\n    v-bind:action="action"\n    v-on:change="handleChange"\n  >\n    <vui-button icon="upload">Click To Upload</vui-button>\n  </vui-upload>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        list: [\n          {\n            id: "81797bbf-8de1-514f-bfa2-3541400e8cf8",\n            name: "jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",\n            status: "success",\n            url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",\n          },\n          {\n            id: "3c95c1df-5884-228f-357b-fa4859621228",\n            name: "jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",\n            status: "success",\n            url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",\n          }\n        ],\n        action: "//jsonplaceholder.typicode.com/posts/"\n      };\n    },\n    methods: {\n      handleChange(file, fileList) {\n        this.list = fileList;\n      }\n    }\n  };\n<\/script>\n',list:[{id:"81797bbf-8de1-514f-bfa2-3541400e8cf8",name:"jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",status:"success",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"},{id:"3c95c1df-5884-228f-357b-fa4859621228",name:"jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",status:"success",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"}],action:"//jsonplaceholder.typicode.com/posts/"}},methods:{handleChange:function(e,t){this.list=t}}},b={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Example",{attrs:{vertical:"",id:"example-upload-list"}},[n("template",{slot:"source"},[n("vui-upload",{attrs:{list:e.list,action:e.action},on:{change:e.handleChange}},[n("vui-button",{attrs:{icon:"upload"}},[e._v("Click To Upload")])],1)],1),n("template",{slot:"title"},[e._v("默认上传列表")]),n("template",{slot:"describe"},[n("p",[e._v("使用 "),n("code",[e._v("list")]),e._v(" 设置已上传的列表。")])]),n("template",{slot:"code"},[e._v(e._s(e.code))])],2)},staticRenderFns:[]},y=n("VU/8")(g,b,!1,null,null,null).exports;var x={components:{Example:i.a},data:function(){return{code:'<template>\n  <div class="example-upload-avatar">\n    <vui-upload\n      v-bind:showList="showList"\n      v-bind:listType="listType"\n      v-bind:action="action"\n      v-bind:beforeUpload="beforeUpload"\n      v-on:change="handleChange"\n    >\n      <img v-if="image" v-bind:src="image" alt="avatar" style="width: 90px; height: 90px; object-fit: cover; object-position: center;" />\n      <template v-else>\n        <vui-icon v-bind:type="loading ? \'loading\' : \'plus\'" style="font-size: 20px;" />\n        <div style="margin-top: 10px; font-size: 14px; white-space: nowrap;">Upload</div>\n      </template>\n    </vui-upload>\n  </div>\n</template>\n\n<script>\n  function getBase64(image, callback) {\n    let reader = new FileReader();\n\n    reader.addEventListener("load", () => callback(reader.result));\n    reader.readAsDataURL(image);\n  }\n\n  export default {\n    data() {\n      return {\n        showList: false,\n        listType: "picture-card",\n        action: "//www.mocky.io/v2/5cc8019d300000980a055e76",\n        image: "",\n        loading: false\n      };\n    },\n    methods: {\n      beforeUpload(file) {\n        let isJPG = file.type === "image/jpeg";\n\n        if (!isJPG) {\n          this.$message.error("You can only upload JPG file!");\n        }\n\n        let isLt2M = file.size / 1024 / 1024 < 2;\n\n        if (!isLt2M) {\n          this.$message.error("Image must smaller than 2MB!");\n        }\n\n        return isJPG && isLt2M;\n      },\n      handleChange(file, fileList) {\n        if (file.status === "progress") {\n          this.loading = true;\n        }\n        else if (file.status === "success") {\n          getBase64(file.rawFile, url => {\n            this.image = url;\n            this.loading = false;\n          });\n        }\n      }\n    }\n  };\n<\/script>\n',showList:!1,listType:"picture-card",action:"//www.mocky.io/v2/5cc8019d300000980a055e76",image:"",loading:!1}},methods:{beforeUpload:function(e){var t="image/jpeg"===e.type;t||this.$message.error("You can only upload JPG file!");var n=e.size/1024/1024<2;return n||this.$message.error("Image must smaller than 2MB!"),t&&n},handleChange:function(e,t){var n,a,l,i=this;"progress"===e.status?this.loading=!0:"success"===e.status&&(n=e.rawFile,a=function(e){i.image=e,i.loading=!1},(l=new FileReader).addEventListener("load",function(){return a(l.result)}),l.readAsDataURL(n))}}},U={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Example",{attrs:{vertical:"",id:"example-upload-avatar"}},[n("template",{slot:"source"},[n("div",{staticClass:"example-upload-avatar"},[n("vui-upload",{attrs:{showList:e.showList,listType:e.listType,action:e.action,beforeUpload:e.beforeUpload},on:{change:e.handleChange}},[e.image?n("img",{staticStyle:{width:"90px",height:"90px","object-fit":"cover","object-position":"center"},attrs:{src:e.image,alt:"avatar"}}):[n("vui-icon",{staticStyle:{"font-size":"20px"},attrs:{type:e.loading?"loading":"plus"}}),n("div",{staticStyle:{"margin-top":"10px","font-size":"14px","white-space":"nowrap"}},[e._v("Upload")])]],2)],1)]),n("template",{slot:"title"},[e._v("用户头像")]),n("template",{slot:"describe"},[n("p",[e._v("点击上传用户头像，并使用 "),n("code",[e._v("beforeUpload")]),e._v(" 限制用户上传的图片格式和大小。"),n("code",[e._v("beforeUpload")]),e._v(" 的返回值可以是一个 "),n("code",[e._v("Promise")]),e._v(" 以支持异步处理，如服务端校验等")])]),n("template",{slot:"code"},[e._v(e._s(e.code))])],2)},staticRenderFns:[]},w=n("VU/8")(x,U,!1,null,null,null).exports,E={components:{Example:i.a},data:function(){return{code:'<template>\n  <vui-upload\n    ref="uploader"\n    v-bind:list="list"\n    v-bind:action="action"\n    v-bind:autoUpload="autoUpload"\n    v-on:change="handleChange"\n  >\n    <vui-button icon="image" slot="trigger">Select</vui-button>\n    <vui-button icon="upload" style="margin-left: 10px;" v-bind:disabled="list.length === 0" v-on:click="handleUpload">Upload</vui-button>\n  </vui-upload>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        list: [],\n        action: "//jsonplaceholder.typicode.com/posts/",\n        autoUpload: false\n      };\n    },\n    methods: {\n      handleChange(file, fileList) {\n        this.list = fileList;\n      },\n      handleUpload() {\n        this.$refs.uploader.upload();\n      }\n    }\n  };\n<\/script>\n',list:[],action:"//jsonplaceholder.typicode.com/posts/",autoUpload:!1}},methods:{handleChange:function(e,t){this.list=t},handleUpload:function(){this.$refs.uploader.upload()}}},j={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Example",{attrs:{vertical:"",id:"example-upload-manually"}},[n("template",{slot:"source"},[n("vui-upload",{ref:"uploader",attrs:{list:e.list,action:e.action,autoUpload:e.autoUpload},on:{change:e.handleChange}},[n("vui-button",{attrs:{slot:"trigger",icon:"image"},slot:"trigger"},[e._v("Select")]),n("vui-button",{staticStyle:{"margin-left":"10px"},attrs:{icon:"upload",disabled:0===e.list.length},on:{click:e.handleUpload}},[e._v("Upload")])],1)],1),n("template",{slot:"title"},[e._v("手动上传")]),n("template",{slot:"describe"},[n("p",[e._v("禁用 "),n("code",[e._v("autoUpload")]),e._v(" 属性，通过手动点击按钮上传。")])]),n("template",{slot:"code"},[e._v(e._s(e.code))])],2)},staticRenderFns:[]},P=n("VU/8")(E,j,!1,null,null,null).exports,L={mixins:[a.a],components:{Markdown:l.a,ExampleUploadBasicUsage:d,ExampleUploadPicture:v,ExampleUploadPictureCard:_,ExampleUploadDraggable:f,ExampleUploadList:y,ExampleUploadAvatar:w,ExampleUploadManually:P}},C={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Markdown",[n("h1",[e._v("Upload 上传")]),n("p",[e._v("文件选择上传和拖拽上传控件。")]),n("h2",[e._v("何时使用")]),n("p",[e._v("上传是将信息（网页、文字、图片、视频等）通过网页或者上传工具发布到远程服务器上的过程。")]),n("ul",[n("li",[e._v("当需要上传一个或一些文件时；")]),n("li",[e._v("当需要展现上传的进度时；")]),n("li",[e._v("当需要使用拖拽交互时。")])]),n("h2",[e._v("代码演示")])]),n("vui-row",{attrs:{gutter:20}},[n("vui-col",{attrs:{span:12}},[n("ExampleUploadBasicUsage"),n("ExampleUploadPicture"),n("ExampleUploadPictureCard"),n("ExampleUploadDraggable")],1),n("vui-col",{attrs:{span:12}},[n("ExampleUploadList"),n("ExampleUploadAvatar"),n("ExampleUploadManually")],1)],1),n("Markdown",[n("h2",{attrs:{id:"example-api"}},[e._v("API")]),n("h3",[e._v("Upload 属性")]),n("table",{staticClass:"example-api-props"},[n("thead",[n("tr",[n("th",{attrs:{width:"100"}},[e._v("属性")]),n("th",[e._v("说明")]),n("th",{attrs:{width:"150"}},[e._v("类型")]),n("th",{attrs:{width:"200"}},[e._v("默认值")])])]),n("tbody",[n("tr",[n("td",[e._v("draggable")]),n("td",[e._v("是否启用拖拽上传")]),n("td",[e._v("Boolean")]),n("td",[n("code",[e._v("false")])])]),n("tr",[n("td",[e._v("multiple")]),n("td",[e._v("是否支持多选")]),n("td",[e._v("Boolean")]),n("td",[n("code",[e._v("false")])])]),n("tr",[n("td",[e._v("accept")]),n("td",[e._v("接受上传的"),n("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input/file#accept",target:"_blank"}},[e._v("文件类型")])]),n("td",[e._v("String")]),n("td",[e._v("--")])]),n("tr",[n("td",[e._v("showList")]),n("td",[e._v("是否显示上传列表")]),n("td",[e._v("Boolean")]),n("td",[n("code",[e._v("true")])])]),n("tr",[n("td",[e._v("list")]),n("td",[e._v("已经上传的文件列表")]),n("td",[e._v("Array")]),n("td",[n("code",[e._v("[]")])])]),n("tr",[n("td",[e._v("listType")]),n("td",[e._v("上传列表展示类型，可选值为 "),n("code",[e._v("text")]),e._v("、"),n("code",[e._v("picture")]),e._v("、"),n("code",[e._v("picture-card")]),e._v(" 或者不设")]),n("td",[e._v("String")]),n("td",[n("code",[e._v("text")])])]),n("tr",[n("td",[e._v("request")]),n("td",[e._v("覆盖默认的上传行为，可自定义上传实现")]),n("td",[e._v("Function")]),n("td",[e._v("--")])]),n("tr",[n("td",[e._v("action")]),n("td",[e._v("设置上传请求的地址，必填")]),n("td",[e._v("String")]),n("td",[e._v("--")])]),n("tr",[n("td",[e._v("headers")]),n("td",[e._v("设置上传请求的头部信息")]),n("td",[e._v("Object")]),n("td",[e._v("--")])]),n("tr",[n("td",[e._v("withCredentials")]),n("td",[e._v("上传请求时是否携带 "),n("code",[e._v("cookie")]),e._v(" 信息")]),n("td",[e._v("Boolean")]),n("td",[n("code",[e._v("false")])])]),n("tr",[n("td",[e._v("name")]),n("td",[e._v("设置上传请求的文件参数名称")]),n("td",[e._v("String")]),n("td",[n("code",[e._v("file")])])]),n("tr",[n("td",[e._v("data")]),n("td",[e._v("设置上传请求的额外参数或返回额外参数的函数")]),n("td",[e._v("Object | Function")]),n("td",[e._v("--")])]),n("tr",[n("td",[e._v("autoUpload")]),n("td",[e._v("是否启用自动上传，即选取文件后立即进行上传")]),n("td",[e._v("Boolean")]),n("td",[n("code",[e._v("true")])])]),n("tr",[n("td",[e._v("beforeUpload")]),n("td",[e._v("上传文件之前的钩子函数，接收 "),n("code",[e._v("file")]),e._v("、"),n("code",[e._v("fileList")]),e._v(" 作为参数"),n("br"),e._v("若该钩子函数返回 "),n("code",[e._v("false")]),e._v(" 则禁止上传；支持返回一个 "),n("code",[e._v("Promise")]),e._v(" 对象，"),n("code",[e._v("Promise")]),e._v(" 对象 "),n("code",[e._v("resolve")]),e._v(" 时允许上传，"),n("code",[e._v("reject")]),e._v(" 时禁止上传")]),n("td",[e._v("Function")]),n("td",[e._v("--")])]),n("tr",[n("td",[e._v("beforeRemove")]),n("td",[e._v("删除文件之前的钩子函数，接收 "),n("code",[e._v("file")]),e._v("、"),n("code",[e._v("fileList")]),e._v(" 作为参数"),n("br"),e._v("若该钩子函数返回 "),n("code",[e._v("false")]),e._v(" 则禁止删除；支持返回一个 "),n("code",[e._v("Promise")]),e._v(" 对象，"),n("code",[e._v("Promise")]),e._v(" 对象 "),n("code",[e._v("resolve")]),e._v(" 时允许删除，"),n("code",[e._v("reject")]),e._v(" 时禁止删除")]),n("td",[e._v("Function")]),n("td",[e._v("--")])]),n("tr",[n("td",[e._v("disabled")]),n("td",[e._v("是否禁用")]),n("td",[e._v("Boolean")]),n("td",[n("code",[e._v("false")])])])])]),n("h3",[e._v("Upload 插槽")]),n("table",{staticClass:"example-api-props"},[n("thead",[n("tr",[n("th",{attrs:{width:"100"}},[e._v("名称")]),n("th",[e._v("说明")])])]),n("tbody",[n("tr",[n("td",[e._v("trigger")]),n("td",[e._v("触发文件选择的内容")])])])]),n("h3",[e._v("Upload 方法")]),n("table",{staticClass:"example-api-events"},[n("thead",[n("tr",[n("th",{attrs:{width:"100"}},[e._v("方法名")]),n("th",[e._v("说明")]),n("th",{attrs:{width:"150"}},[e._v("类型")]),n("th",{attrs:{width:"200"}},[e._v("参数")])])]),n("tbody",[n("tr",[n("td",[e._v("upload")]),n("td",[e._v("手动上传")]),n("td",[e._v("Function")]),n("td",[e._v("--")])]),n("tr",[n("td",[e._v("abort")]),n("td",[e._v("取消上传请求")]),n("td",[e._v("Function")]),n("td",[e._v("--")])])])]),n("h3",[e._v("Upload 事件")]),n("table",{staticClass:"example-api-events"},[n("thead",[n("tr",[n("th",{attrs:{width:"100"}},[e._v("事件名")]),n("th",[e._v("说明")]),n("th",{attrs:{width:"150"}},[e._v("类型")]),n("th",{attrs:{width:"200"}},[e._v("回调参数")])])]),n("tbody",[n("tr",[n("td",[e._v("ready")]),n("td",[e._v("文件上传前的事件回调")]),n("td",[e._v("Function")]),n("td",[n("code",[e._v("file, fileList")])])]),n("tr",[n("td",[e._v("progress")]),n("td",[e._v("文件上传时的事件回调")]),n("td",[e._v("Function")]),n("td",[n("code",[e._v("progress, file, fileList")])])]),n("tr",[n("td",[e._v("success")]),n("td",[e._v("文件上传成功的事件回调")]),n("td",[e._v("Function")]),n("td",[n("code",[e._v("response, file, fileList")])])]),n("tr",[n("td",[e._v("error")]),n("td",[e._v("文件上传失败的事件回调")]),n("td",[e._v("Function")]),n("td",[n("code",[e._v("error, file, fileList")])])]),n("tr",[n("td",[e._v("preview")]),n("td",[e._v("点击预览按钮的事件回调")]),n("td",[e._v("Function")]),n("td",[n("code",[e._v("file, fileList")])])]),n("tr",[n("td",[e._v("remove")]),n("td",[e._v("点击删除按钮的事件回调")]),n("td",[e._v("Function")]),n("td",[n("code",[e._v("file, fileList")])])]),n("tr",[n("td",[e._v("change")]),n("td",[e._v("文件状态发生变化时的事件回调，添加文件、上传中/成功/失败、删除文件时都会被调用")]),n("td",[e._v("Function")]),n("td",[n("code",[e._v("file, fileList")])])])])]),n("p",[e._v("以上事件回调中，参数 "),n("code",[e._v("file")]),e._v(" 的元信息如下：")]),n("ul",[n("li",[n("code",[e._v("rawFile")]),e._v(" - 原始文件对象")]),n("li",[n("code",[e._v("id")]),e._v(" - 文件唯一标识")]),n("li",[n("code",[e._v("name")]),e._v(" - 文件名称")]),n("li",[n("code",[e._v("size")]),e._v(" - 文件大小")]),n("li",[n("code",[e._v("url")]),e._v(" - 文件预览地址")]),n("li",[n("code",[e._v("status")]),e._v(" - 文件状态，包括："),n("code",[e._v("ready")]),e._v("、"),n("code",[e._v("progress")]),e._v("、"),n("code",[e._v("success")]),e._v("、"),n("code",[e._v("error")])]),n("li",[n("code",[e._v("percentage")]),e._v(" - 文件上传进度，状态为 "),n("code",[e._v("progress")]),e._v(" 时有效")]),n("li",[n("code",[e._v("progress")]),e._v(" - 文件上传进度信息，状态为 "),n("code",[e._v("progress")]),e._v(" 时有效")]),n("li",[n("code",[e._v("response")]),e._v(" - 文件上传成功后的响应内容，状态为 "),n("code",[e._v("success")]),e._v(" 时有效")]),n("li",[n("code",[e._v("error")]),e._v(" - 文件上传失败后的错误信息，状态为 "),n("code",[e._v("error")]),e._v(" 时有效")])])])],1)},staticRenderFns:[]},k=n("VU/8")(L,C,!1,null,null,null);t.default=k.exports}});
//# sourceMappingURL=38.aefedc9c74c2028055fa.js.map