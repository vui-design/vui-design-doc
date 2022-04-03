(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-684838c7"],{"40dd":function(t,e,n){"use strict";n("70fe")},"70fe":function(t,e,n){},d0d6:function(t,e,n){"use strict";n.r(e);var a=n("d58b"),i=n("240e"),o=n("1a42"),s={components:{Example:o.a},data:function(){return{code:'<template>\n  <vui-fullscreen v-model="fullscreen" class="example-fullscreen-basic-usage">\n    <vui-card v-bind:bordered="false">\n      <vui-form layout="inline">\n        <vui-form-item prop="name">\n          <vui-input placeholder="按规则名称查询" />\n        </vui-form-item>\n        <vui-form-item prop="description">\n          <vui-input placeholder="按描述查询" />\n        </vui-form-item>\n        <vui-form-item>\n          <vui-space>\n            <vui-button>重置</vui-button>\n            <vui-button type="primary">查询</vui-button>\n          </vui-space>\n        </vui-form-item>\n      </vui-form>\n    </vui-card>\n    <vui-card v-bind:bordered="false" style="margin-top: 16px;" headerStyle="padding: 16px;" bodyStyle="padding: 0px; overflow: hidden;" title="查询表格">\n      <vui-space slot="extra" divider v-bind:size="16">\n        <vui-tooltip v-bind:content="fullscreen ? \'退出全屏\' : \'全屏\'">\n          <a href="javascript:;" class="link-default" style="font-size: 16px;" v-on:click="handleFullscreen">\n            <vui-icon v-bind:type="fullscreen ? \'fullscreen-exit\' : \'fullscreen\'" />\n          </a>\n        </vui-tooltip>\n        <vui-space>\n          <vui-button icon="download">导出</vui-button>\n          <vui-button type="primary" icon="plus">新增</vui-button>\n        </vui-space>\n      </vui-space>\n      <vui-table v-bind="list" v-on:rowSelect="handleRowSelect" style="max-width: unset; margin: -1px;">\n        <template slot="count" slot-scope="{ row, rowIndex }">{{row.count}} 万</template>\n        <template slot="state" slot-scope="{ row, rowIndex }">\n          <vui-badge v-if="row.state == 1" status="default" text="未启用" />\n          <vui-badge v-else-if="row.state == 2" status="success" text="已上线" />\n          <vui-badge v-else-if="row.state == 3" status="processing" text="运行中" />\n          <vui-badge v-else-if="row.state == 4" status="error" text="关闭" />\n        </template>\n        <template slot="action" slot-scope="{ row, rowIndex }">\n          <vui-space divider>\n            <a href="javascript:;" style="display: block;">编辑</a>\n            <vui-popconfirm placement="top-end" okButtonType="danger" style="display: block;" title="确定要删除当前记录嘛？">\n              <a href="javascript:;" style="display: block;">删除</a>\n            </vui-popconfirm>\n          </vui-space>\n        </template>\n      </vui-table>\n      <div style="padding: 16px;">\n        <div style="float: left; line-height: 34px;">共 {{pagination.total}} 条</div>\n        <vui-pagination align="right" showPageSizer v-bind="pagination" />\n      </div>\n    </vui-card>\n  </vui-fullscreen>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        fullscreen: false,\n        pagination: {\n          total: 100,\n          page: 1,\n          pageSize: 20\n        },\n        list: {\n          loading: false,\n          bordered: true,\n          rowKey: "id",\n          rowSelection: {\n            width: 60,\n            multiple: true,\n            value: []\n          },\n          columns: [\n            { key: "name", dataIndex: "name", title: "规则名称" },\n            { key: "description", dataIndex: "description", title: "描述" },\n            { key: "count", dataIndex: "count", sorter: true, slot: "count", title: "服务调用次数" },\n            { key: "state", dataIndex: "state", slot: "state", title: "状态" },\n            { key: "datetime", dataIndex: "datetime", width: 160, sorter: true, title: "上次调度时间" },\n            { key: "action", width: 120, slot: "action", title: "操作" }\n          ],\n          data: [\n            { id: 10, name: "TradeCode 10", description: "这是一段描述", count: 73, state: 4, datetime: "2020-01-10 08:00:00" },\n            { id: 9, name: "TradeCode 9", description: "这是一段描述", count: 223, state: 3, datetime: "2020-01-09 08:00:00" },\n            { id: 8, name: "TradeCode 8", description: "这是一段描述", count: 835, state: 4, datetime: "2020-01-08 08:00:00" },\n            { id: 7, name: "TradeCode 7", description: "这是一段描述", count: 996, state: 3, datetime: "2020-01-07 08:00:00" },\n            { id: 5, name: "TradeCode 5", description: "这是一段描述", count: 578, state: 3, datetime: "2020-01-05 08:00:00" },\n            { id: 6, name: "TradeCode 6", description: "这是一段描述", count: 696, state: 4, datetime: "2020-01-06 08:00:00" },\n            { id: 4, name: "TradeCode 4", description: "这是一段描述", count: 110, state: 4, datetime: "2020-01-04 08:00:00" },\n            { id: 3, name: "TradeCode 3", description: "这是一段描述", count: 60, state: 3, datetime: "2020-01-03 08:00:00" },\n            { id: 2, name: "TradeCode 2", description: "这是一段描述", count: 229, state: 2, datetime: "2020-01-02 08:00:00" },\n            { id: 1, name: "TradeCode 1", description: "这是一段描述", count: 660, state: 4, datetime: "2020-01-01 08:00:00" }\n          ]\n        }\n      };\n    },\n    methods: {\n      handleRowSelect(value) {\n        this.list.rowSelection.value = value;\n      },\n      handleFullscreen() {\n        this.fullscreen = !this.fullscreen;\n      }\n    }\n  };\n<\/script>\n\n<style>\n  .example-fullscreen-basic-usage { background-color:#f6f6f6; padding:16px; }\n</style>\n',fullscreen:!1,pagination:{total:100,page:1,pageSize:20},list:{loading:!1,bordered:!0,rowKey:"id",rowSelection:{width:60,multiple:!0,value:[]},columns:[{key:"name",dataIndex:"name",title:"规则名称"},{key:"description",dataIndex:"description",title:"描述"},{key:"count",dataIndex:"count",sorter:!0,slot:"count",title:"服务调用次数"},{key:"state",dataIndex:"state",slot:"state",title:"状态"},{key:"datetime",dataIndex:"datetime",width:160,sorter:!0,title:"上次调度时间"},{key:"action",width:120,slot:"action",title:"操作"}],data:[{id:10,name:"TradeCode 10",description:"这是一段描述",count:73,state:4,datetime:"2020-01-10 08:00:00"},{id:9,name:"TradeCode 9",description:"这是一段描述",count:223,state:3,datetime:"2020-01-09 08:00:00"},{id:8,name:"TradeCode 8",description:"这是一段描述",count:835,state:4,datetime:"2020-01-08 08:00:00"},{id:7,name:"TradeCode 7",description:"这是一段描述",count:996,state:3,datetime:"2020-01-07 08:00:00"},{id:5,name:"TradeCode 5",description:"这是一段描述",count:578,state:3,datetime:"2020-01-05 08:00:00"},{id:6,name:"TradeCode 6",description:"这是一段描述",count:696,state:4,datetime:"2020-01-06 08:00:00"},{id:4,name:"TradeCode 4",description:"这是一段描述",count:110,state:4,datetime:"2020-01-04 08:00:00"},{id:3,name:"TradeCode 3",description:"这是一段描述",count:60,state:3,datetime:"2020-01-03 08:00:00"},{id:2,name:"TradeCode 2",description:"这是一段描述",count:229,state:2,datetime:"2020-01-02 08:00:00"},{id:1,name:"TradeCode 1",description:"这是一段描述",count:660,state:4,datetime:"2020-01-01 08:00:00"}]}}},methods:{handleRowSelect:function(t){this.list.rowSelection.value=t},handleFullscreen:function(){this.fullscreen=!this.fullscreen}}},d=(n("40dd"),n("2877")),l=Object(d.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("example",{attrs:{code:t.code,id:"example-fullscreen-basic-usage"}},[n("template",{slot:"demo"},[n("vui-fullscreen",{staticClass:"example-fullscreen-basic-usage",model:{value:t.fullscreen,callback:function(e){t.fullscreen=e},expression:"fullscreen"}},[n("vui-card",{attrs:{bordered:!1}},[n("vui-form",{attrs:{layout:"inline"}},[n("vui-form-item",{attrs:{prop:"name"}},[n("vui-input",{attrs:{placeholder:"按规则名称查询"}})],1),n("vui-form-item",{attrs:{prop:"description"}},[n("vui-input",{attrs:{placeholder:"按描述查询"}})],1),n("vui-form-item",[n("vui-space",[n("vui-button",[t._v("重置")]),n("vui-button",{attrs:{type:"primary"}},[t._v("查询")])],1)],1)],1)],1),n("vui-card",{staticStyle:{"margin-top":"16px"},attrs:{bordered:!1,headerStyle:"padding: 16px;",bodyStyle:"padding: 0px; overflow: hidden;",title:"查询表格"}},[n("vui-space",{attrs:{slot:"extra",divider:"",size:16},slot:"extra"},[n("vui-tooltip",{attrs:{content:t.fullscreen?"退出全屏":"全屏"}},[n("a",{staticClass:"link-default",staticStyle:{"font-size":"16px"},attrs:{href:"javascript:;"},on:{click:t.handleFullscreen}},[n("vui-icon",{attrs:{type:t.fullscreen?"fullscreen-exit":"fullscreen"}})],1)]),n("vui-space",[n("vui-button",{attrs:{icon:"download"}},[t._v("导出")]),n("vui-button",{attrs:{type:"primary",icon:"plus"}},[t._v("新增")])],1)],1),n("vui-table",t._b({staticStyle:{"max-width":"unset",margin:"-1px"},on:{rowSelect:t.handleRowSelect},scopedSlots:t._u([{key:"count",fn:function(e){var n=e.row;e.rowIndex;return[t._v(t._s(n.count)+" 万")]}},{key:"state",fn:function(e){var a=e.row;e.rowIndex;return[1==a.state?n("vui-badge",{attrs:{status:"default",text:"未启用"}}):2==a.state?n("vui-badge",{attrs:{status:"success",text:"已上线"}}):3==a.state?n("vui-badge",{attrs:{status:"processing",text:"运行中"}}):4==a.state?n("vui-badge",{attrs:{status:"error",text:"关闭"}}):t._e()]}},{key:"action",fn:function(e){e.row,e.rowIndex;return[n("vui-space",{attrs:{divider:""}},[n("a",{staticStyle:{display:"block"},attrs:{href:"javascript:;"}},[t._v("编辑")]),n("vui-popconfirm",{staticStyle:{display:"block"},attrs:{placement:"top-end",okButtonType:"danger",title:"确定要删除当前记录嘛？"}},[n("a",{staticStyle:{display:"block"},attrs:{href:"javascript:;"}},[t._v("删除")])])],1)]}}])},"vui-table",t.list,!1)),n("div",{staticStyle:{padding:"16px"}},[n("div",{staticStyle:{float:"left","line-height":"34px"}},[t._v("共 "+t._s(t.pagination.total)+" 条")]),n("vui-pagination",t._b({attrs:{align:"right",showPageSizer:""}},"vui-pagination",t.pagination,!1))],1)],1)],1)],1),n("template",{slot:"title"},[t._v("基本用法")]),n("template",{slot:"description"},[n("p",[t._v("最简单的用法。")])])],2)}),[],!1,null,null,null).exports,r={mixins:[a.a],components:{Document:i.a,ExampleBasicUsage:l}},u=Object(d.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("document",[n("h1",[t._v("Fullscreen 全屏")]),n("p",[t._v("用于对页面或页面局部板块进行全屏缩放。")]),n("h2",[t._v("何时使用")]),n("ul",[n("li",[t._v("需要对页面进行全屏显示。")]),n("li",[t._v("需要对页面局部板块进行全屏显示。")])]),n("h2",[t._v("代码演示")])]),n("example-basic-usage"),n("document",[n("h2",{attrs:{id:"example-api"}},[t._v("API")]),n("h3",[t._v("Fullscreen 属性")]),n("table",{staticClass:"example-api-props"},[n("thead",[n("tr",[n("th",{attrs:{width:"140"}},[t._v("属性")]),n("th",[t._v("说明")]),n("th",{attrs:{width:"160"}},[t._v("类型")]),n("th",{attrs:{width:"140"}},[t._v("默认值")])])]),n("tbody",[n("tr",[n("td",[t._v("value")]),n("td",[t._v("是否全屏，可以使用 "),n("code",[t._v("v-model")]),t._v(" 双向绑定数据")]),n("td",[t._v("Boolean")]),n("td",[t._v("false")])])])]),n("h3",[t._v("Fullscreen 事件")]),n("table",{staticClass:"example-api-events"},[n("thead",[n("tr",[n("th",{attrs:{width:"140"}},[t._v("事件名")]),n("th",[t._v("说明")]),n("th",{attrs:{width:"160"}},[t._v("类型")]),n("th",{attrs:{width:"140"}},[t._v("回调参数")])])]),n("tbody",[n("tr",[n("td",[t._v("input")]),n("td",[t._v("全屏状态发生变化时触发的事件回调函数，可以使用 "),n("code",[t._v("v-model")]),t._v(" 双向绑定数据")]),n("td",[t._v("Function")]),n("td",[t._v("value")])]),n("tr",[n("td",[t._v("change")]),n("td",[t._v("全屏状态发生变化时触发的事件回调函数")]),n("td",[t._v("Function")]),n("td",[t._v("value")])])])])])],1)}),[],!1,null,null,null);e.default=u.exports}}]);