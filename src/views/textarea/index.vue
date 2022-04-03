<template>
  <div>
    <document>
      <h1>Textarea 文本域</h1>
      <p>通过鼠标或键盘输入内容，是最基础的表单域的包装。</p>
      <h2>何时使用</h2>
      <ul>
        <li>需要用户输入表单域内容时；</li>
        <li>需要输入多行文本内容时。</li>
      </ul>
      <h2>代码演示</h2>
    </document>
    <vui-row v-bind:gutter="16">
      <vui-col v-bind:span="12">
        <example-basic-usage />
        <example-autosize />
        <example-resizable />
      </vui-col>
      <vui-col v-bind:span="12">
        <example-max-length />
        <example-bordered />
        <example-clearable />
        <example-disabled />
      </vui-col>
    </vui-row>
    <document>
      <h2 id="example-api">API</h2>
      <h3>Textarea 属性</h3>
      <table class="example-api-props">
        <thead>
          <tr>
            <th width="140">属性</th>
            <th>说明</th>
            <th width="160">类型</th>
            <th width="120">默认值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>placeholder</td>
            <td>文本域占位文本</td>
            <td>String | Number</td>
            <td>--</td>
          </tr>
          <tr>
            <td>value</td>
            <td>文本域内容，可以使用 <code>v-model</code> 双向绑定数据</td>
            <td>String | Number</td>
            <td>--</td>
          </tr>
          <tr>
            <td>maxLength</td>
            <td>最大输入长度</td>
            <td>String | Number</td>
            <td>--</td>
          </tr>
          <tr>
            <td>rows</td>
            <td>默认可见行数</td>
            <td>String | Number</td>
            <td>4</td>
          </tr>
          <tr>
            <td>autosize</td>
            <td>自适应内容高度，可设置为 <code>true</code>、<code>false</code> 或对象 <code>{ minRows: 4, maxRows: 8 }</code></td>
            <td>Boolean | Object</td>
            <td>false</td>
          </tr>
          <tr>
            <td>resizable</td>
            <td>是否允许手动改变高度</td>
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
            <td>clearable</td>
            <td>是否允许清空</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>readonly</td>
            <td>设置文本域为只读状态</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>设置文本域为禁用状态</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
        </tbody>
      </table>
      <h3>Textarea 事件</h3>
      <table class="example-api-events">
        <thead>
          <tr>
            <th width="140">事件名</th>
            <th>说明</th>
            <th width="160">类型</th>
            <th width="120">回调参数</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>mouseenter</td>
            <td>鼠标移入文本域时触发的事件回调函数</td>
            <td>Function</td>
            <td>event</td>
          </tr>
          <tr>
            <td>mouseleave</td>
            <td>鼠标移出文本域时触发的事件回调函数</td>
            <td>Function</td>
            <td>event</td>
          </tr>
          <tr>
            <td>focus</td>
            <td>文本域获取焦点时触发的事件回调函数</td>
            <td>Function</td>
            <td>event</td>
          </tr>
          <tr>
            <td>blur</td>
            <td>文本域失去焦点时触发的事件回调函数</td>
            <td>Function</td>
            <td>event</td>
          </tr>
          <tr>
            <td>keydown</td>
            <td>键盘按下时触发的事件回调函数</td>
            <td>Function</td>
            <td>event</td>
          </tr>
          <tr>
            <td>keyup</td>
            <td>键盘弹起时触发的事件回调函数</td>
            <td>Function</td>
            <td>event</td>
          </tr>
          <tr>
            <td>clear</td>
            <td>点击清空按钮时触发的事件回调函数</td>
            <td>Function</td>
            <td>event</td>
          </tr>
          <tr>
            <td>input</td>
            <td>文本域内容输入时触发的事件回调函数，可以使用 <code>v-model</code> 双向绑定数据</td>
            <td>Function</td>
            <td>value</td>
          </tr>
          <tr>
            <td>change</td>
            <td>文本域内容变化时触发的事件回调函数</td>
            <td>Function</td>
            <td>event</td>
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
  import ExampleAutosize from "./examples/autosize";
  import ExampleResizable from "./examples/resizable";
  import ExampleMaxLength from "./examples/maxLength";
  import ExampleBordered from "./examples/bordered";
  import ExampleClearable from "./examples/clearable";
  import ExampleDisabled from "./examples/disabled";

  export default {
    mixins: [
      MixinAnchors
    ],
    components: {
      Document,
      ExampleBasicUsage,
      ExampleAutosize,
      ExampleResizable,
      ExampleMaxLength,
      ExampleBordered,
      ExampleClearable,
      ExampleDisabled
    }
  };
</script>