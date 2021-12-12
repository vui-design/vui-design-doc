<template>
  <div>
    <document>
      <h1>Cascader 级联选择框</h1>
      <p>级联选择框。</p>
      <h2>何时使用</h2>
      <ul>
        <li>需要从一组相关联的数据集合进行选择，例如省市区，公司层级，事物分类等。</li>
        <li>从一个较大的数据集合中进行选择时，用多级分类进行分隔，方便选择。</li>
        <li>比起 <code>Select</code> 组件，可以在同一个浮层中完成选择，有较好的体验。</li>
      </ul>
      <h2>代码演示</h2>
    </document>
    <vui-row v-bind:gutter="16">
      <vui-col v-bind:span="12">
        <example-basic-usage />
        <example-value />
        <example-size />
        <example-expand-trigger />
        <example-change-on-select />
        <example-disabled-option />
      </vui-col>
      <vui-col v-bind:span="12">
        <example-bordered />
        <example-searchable />
        <example-clearable />
        <example-auto-width />
        <example-formatter />
        <example-option-keys />
      </vui-col>
    </vui-row>
    <document>
      <h2 id="example-api">API</h2>
      <h3>Cascader 属性</h3>
      <table class="example-api-props">
        <thead>
          <tr>
            <th width="180">属性</th>
            <th>说明</th>
            <th width="180">类型</th>
            <th width="260">默认值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>size</td>
            <td>选择框尺寸，可选值为 <code>small</code>、<code>medium</code>、<code>large</code> 或者不设</td>
            <td>String</td>
            <td>medium</td>
          </tr>
          <tr>
            <td>placeholder</td>
            <td>选择框占位文本</td>
            <td>String</td>
            <td>请选择...</td>
          </tr>
          <tr>
            <td>value</td>
            <td>指定选中项目的 <code>value</code> 值，可以使用 <code>v-model</code> 双向绑定数据</td>
            <td>Array</td>
            <td>[]</td>
          </tr>
          <tr>
            <td>options</td>
            <td>可选项数据源</td>
            <td>Array</td>
            <td>[]</td>
          </tr>
          <tr>
            <td>expandTrigger</td>
            <td>次级菜单的展开方式，可选值为 <code>click</code>、<code>hover</code> 或者不设</td>
            <td>String</td>
            <td>click</td>
          </tr>
          <tr>
            <td>optionKeys</td>
            <td>自定义 <code>options</code> 选项中的 <code>label</code>、<code>value</code>、<code>children</code> 或 <code>disabled</code> 等字段</td>
            <td>Object</td>
            <td>
<pre style="margin: 0;">{
  label: "label",
  value: "value",
  children: "children",
  disabled: "disabled"
}
</pre>
            </td>
          </tr>
          <tr>
            <td>formatter</td>
            <td>选择后展示的渲染函数，用于自定义显示格式</td>
            <td>Function</td>
            <td>labels => labels.join(" / ")</td>
          </tr>
          <tr>
            <td>changeOnSelect</td>
            <td>当此项为 <code>true</code> 时，点选每级菜单选项值都会发生变化</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>bordered</td>
            <td>是否有边框</td>
            <td>Boolean</td>
            <td>true</td>
          </tr>
          <tr>
            <td>searchable</td>
            <td>是否支持搜索</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>filter</td>
            <td>是否根据输入关键字进行筛选。当其为一个函数时，会接收 <code>keyword</code>、<code>option</code> 两个参数，当 <code>option</code> 符合条件时，应返回 <code>true</code>，反之返回 <code>false</code></td>
            <td>Boolean | Function</td>
            <td>true</td>
          </tr>
          <tr>
            <td>filterOptionProp</td>
            <td>搜索时根据 <code>option</code> 的指定属性进行过滤，可选值为 <code>label</code>、<code>value</code> 或者不设</td>
            <td>String</td>
            <td>label</td>
          </tr>
          <tr>
            <td>notFoundText</td>
            <td>选项为空时的文字提示</td>
            <td>String</td>
            <td>暂无数据</td>
          </tr>
          <tr>
            <td>clearable</td>
            <td>是否允许清空</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>是否禁用</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>placement</td>
            <td>下拉弹窗的弹出位置，可选值为 <code>top</code>、<code>top-start</code>、<code>top-end</code>、<code>bottom</code>、<code>bottom-start</code>、<code>bottom-end</code> 或者不设</td>
            <td>String</td>
            <td>bottom-start</td>
          </tr>
          <tr>
            <td>dropdownClassName</td>
            <td>下拉弹窗的样式类名</td>
            <td>String</td>
            <td>--</td>
          </tr>
          <tr>
            <td>dropdownAutoWidth</td>
            <td>下拉弹框宽度是否根据选项内容自动设置，该属性仅在搜索状态下有效</td>
            <td>Boolean</td>
            <td>true</td>
          </tr>
          <tr>
            <td>getPopupContainer</td>
            <td>指定下拉弹框挂载的 HTML 节点</td>
            <td>Function</td>
            <td>() => document.body</td>
          </tr>
          <tr>
            <td>beforeSelect</td>
            <td>选择某一选项前触发的回调函数，接受 <code>value</code>、<code>options</code> 作为参数，可用于判断选项是否可选，返回 <code>false</code> 时禁止选择，支持返回 <code>Promise</code> 对象</td>
            <td>Function</td>
            <td>--</td>
          </tr>
        </tbody>
      </table>
      <h3>Cascader 事件</h3>
      <table class="example-api-events">
        <thead>
          <tr>
            <th width="180">事件名</th>
            <th>说明</th>
            <th width="180">类型</th>
            <th width="260">回调参数</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>focus</td>
            <td>选择框获得光标时触发的事件回调</td>
            <td>Function</td>
            <td>--</td>
          </tr>
          <tr>
            <td>blur</td>
            <td>选择框失去光标时触发的事件回调</td>
            <td>Function</td>
            <td>--</td>
          </tr>
          <tr>
            <td>input</td>
            <td>选中项发生变化时触发的事件回调，可以使用 <code>v-model</code> 双向绑定数据</td>
            <td>Function</td>
            <td>value</td>
          </tr>
          <tr>
            <td>change</td>
            <td>选中项发生变化时触发的事件回调</td>
            <td>Function</td>
            <td>value</td>
          </tr>
        </tbody>
      </table>
    </document>
  </div>
</template>

<script>
  import MixinAnchors from "src/mixins/anchors";
  import Document from "src/components/document";
  import ExampleBasicUsage from "./examples/basic-usage";
  import ExampleValue from "./examples/value";
  import ExampleSize from "./examples/size";
  import ExampleExpandTrigger from "./examples/expand-trigger";
  import ExampleChangeOnSelect from "./examples/change-on-select";
  import ExampleDisabledOption from "./examples/disabled-option";
  import ExampleBordered from "./examples/bordered";
  import ExampleSearchable from "./examples/searchable";
  import ExampleClearable from "./examples/clearable";
  import ExampleAutoWidth from "./examples/auto-width";
  import ExampleFormatter from "./examples/formatter";
  import ExampleOptionKeys from "./examples/option-keys";

  export default {
    mixins: [
      MixinAnchors
    ],
    components: {
      Document,
      ExampleBasicUsage,
      ExampleValue,
      ExampleSize,
      ExampleExpandTrigger,
      ExampleChangeOnSelect,
      ExampleDisabledOption,
      ExampleBordered,
      ExampleSearchable,
      ExampleClearable,
      ExampleAutoWidth,
      ExampleFormatter,
      ExampleOptionKeys,
    }
  };
</script>