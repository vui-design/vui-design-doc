<template>
  <div>
    <document>
      <h1>Tabs 标签页</h1>
      <p>选项卡切换组件。</p>
      <h2>何时使用</h2>
      <p>常用于平级区域大块内容的的收纳和展现，保持界面整洁。</p>
      <p>Vui Design 依次提供了三级选项卡，分别用于不同的场景。</p>
      <ul>
        <li>卡片式的页签，提供可关闭的样式，常用于容器顶部；</li>
        <li>标准线条式页签，用于容器内部的主功能切换，这是最常用的 Tabs；</li>
        <li><router-link to="radio">RadioButton</router-link> 可作为更次级的页签来使用。</li>
      </ul>
      <h2>代码演示</h2>
    </document>
    <vui-row v-bind:gutter="16">
      <vui-col v-bind:span="12">
        <example-basic-usage />
        <example-card />
        <example-icon />
        <example-disabled />
        <example-customTitle />
        <example-extra />
      </vui-col>
      <vui-col v-bind:span="12">
        <example-size />
        <example-addable />
        <example-closable />
        <example-editable />
        <example-custom-add-trigger />
      </vui-col>
    </vui-row>
    <document>
      <h2 id="example-api">API</h2>
      <h3>Tabs 属性</h3>
      <table class="example-api-props">
        <thead>
          <tr>
            <th width="140">属性</th>
            <th>说明</th>
            <th width="240">类型</th>
            <th width="140">默认值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>type</td>
            <td>页签基本样式，可选值为 <code>line</code>、<code>card</code> 或者不设</td>
            <td>String</td>
            <td>line</td>
          </tr>
          <tr>
            <td>size</td>
            <td>页签尺寸，可选值为 <code>small</code>、<code>medium</code>、<code>large</code> 或者不设</td>
            <td>String</td>
            <td>medium</td>
          </tr>
          <tr>
            <td>activeKey</td>
            <td>当前激活面板的 <code>key</code> 值属性，可以使用 <code>v-model</code> 双向绑定数据</td>
            <td>String</td>
            <td>--</td>
          </tr>
          <tr>
            <td>extra</td>
            <td>页签右侧附加内容</td>
            <td>String | Number | Slot</td>
            <td>--</td>
          </tr>
          <tr>
            <td>addable</td>
            <td>是否可以添加页签</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>closable</td>
            <td>是否允许关闭页签</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>destroyOnHide</td>
            <td>隐藏时销毁 TabPanel 的子元素</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>headerStyle</td>
            <td>用于设置页签页头部的样式</td>
            <td>String | Object</td>
            <td>--</td>
          </tr>
          <tr>
            <td>bodyStyle</td>
            <td>用于设置页签页内容部分的样式</td>
            <td>String | Object</td>
            <td>--</td>
          </tr>
        </tbody>
      </table>
      <h3>Tabs 事件</h3>
      <table class="example-api-events">
        <thead>
          <tr>
            <th width="140">事件名</th>
            <th>说明</th>
            <th width="240">类型</th>
            <th width="140">回调参数</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>input</td>
            <td>切换页签时触发的事件回调函数，可以使用 <code>v-model</code> 双向绑定数据</td>
            <td>Function</td>
            <td>key</td>
          </tr>
          <tr>
            <td>change</td>
            <td>切换页签时触发的事件回调函数</td>
            <td>Function</td>
            <td>key</td>
          </tr>
          <tr>
            <td>add</td>
            <td>添加页签时触发的事件回调函数，仅在 <code>addable</code> 属性为 <code>true</code> 时有效</td>
            <td>Function</td>
            <td>--</td>
          </tr>
          <tr>
            <td>close</td>
            <td>关闭页签时触发的事件回调函数，仅在 <code>closable</code> 属性为 <code>true</code> 时有效</td>
            <td>Function</td>
            <td>key</td>
          </tr>
        </tbody>
      </table>
      <h3>TabPanel 属性</h3>
      <table class="example-api-props">
        <thead>
          <tr>
            <th width="140">属性</th>
            <th>说明</th>
            <th width="240">类型</th>
            <th width="140">默认值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>key</td>
            <td>当前页签唯一标识，对应父级 <code>Tabs</code> 组件的 <code>activeKey</code> 值</td>
            <td>String | Number</td>
            <td>--</td>
          </tr>
          <tr>
            <td>icon</td>
            <td>当前页签图标类型/图标</td>
            <td>String | Slot</td>
            <td>--</td>
          </tr>
          <tr>
            <td>title</td>
            <td>当前页签标题</td>
            <td>String | Number | Slot</td>
            <td>--</td>
          </tr>
          <tr>
            <td>closable</td>
            <td>是否允许关闭当前页签，默认继承 <code>Tabs</code> 的 <code>closable</code> 属性</td>
            <td>Boolean</td>
            <td>--</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>是否禁用当前页签</td>
            <td>Boolean</td>
            <td>false</td>
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
  import ExampleCard from "./examples/card";
  import ExampleIcon from "./examples/icon";
  import ExampleDisabled from "./examples/disabled";
  import ExampleCustomTitle from "./examples/custom-title";
  import ExampleExtra from "./examples/extra";
  import ExampleSize from "./examples/size";
  import ExampleAddable from "./examples/addable";
  import ExampleClosable from "./examples/closable";
  import ExampleEditable from "./examples/editable";
  import ExampleCustomAddTrigger from "./examples/custom-add-trigger";

  export default {
    mixins: [
      MixinAnchors
    ],
    components: {
      Document,
      ExampleBasicUsage,
      ExampleCard,
      ExampleIcon,
      ExampleDisabled,
      ExampleCustomTitle,
      ExampleExtra,
      ExampleSize,
      ExampleAddable,
      ExampleClosable,
      ExampleEditable,
      ExampleCustomAddTrigger
    }
  };
</script>