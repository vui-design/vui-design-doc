<template>
  <div>
    <document>
      <h1>Alert 警告提示</h1>
      <p>警告提示，展现需要关注的信息。</p>
      <h2>何时使用</h2>
      <ul>
        <li>当某个页面需要向用户显示警告的信息时；</li>
        <li>非浮层的静态展现形式，始终展现，不会自动消失，用户可以点击关闭。</li>
      </ul>
      <h2>代码演示</h2>
    </document>
    <vui-row v-bind:gutter="16">
      <vui-col v-bind:span="12">
        <example-basic-usage />
        <example-type />
        <example-description />
        <example-closable />
      </vui-col>
      <vui-col v-bind:span="12">
        <example-close-text />
        <example-icon />
        <example-banner />
      </vui-col>
    </vui-row>
    <document>
      <h2 id="example-api">API</h2>
      <h3>Alert 属性</h3>
      <table class="example-api-props">
        <thead>
          <tr>
            <th width="140">属性</th>
            <th>说明</th>
            <th width="180">类型</th>
            <th width="140">默认值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>type</td>
            <td>警告提示类型，可选值为 <code>info</code>、<code>warning</code>、<code>success</code>、<code>error</code> 或者不设</td>
            <td>String</td>
            <td>info</td>
          </tr>
          <tr>
            <td>showIcon</td>
            <td>是否显示图标</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>icon</td>
            <td>自定义图标类型/图标，默认根据 <code>type</code> 属性自动设置，仅在 <code>showIcon</code> 为 <code>true</code> 时有效</td>
            <td>String | Slot</td>
            <td>--</td>
          </tr>
          <tr>
            <td>banner</td>
            <td>是否应用顶部公告样式</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>closable</td>
            <td>是否可以关闭</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>closeText</td>
            <td>自定义关闭按钮文本，仅在 <code>closable</code> 为 <code>true</code> 时有效</td>
            <td>String | Slot</td>
            <td>--</td>
          </tr>
          <tr>
            <td>message</td>
            <td>警告提示内容</td>
            <td>String | Slot</td>
            <td>--</td>
          </tr>
          <tr>
            <td>description</td>
            <td>警告提示的辅助性描述信息</td>
            <td>String | Slot</td>
            <td>--</td>
          </tr>
        </tbody>
      </table>
      <h3>Alert 事件</h3>
      <table class="example-api-props">
        <thead>
          <tr>
            <th width="140">事件名</th>
            <th>说明</th>
            <th width="180">类型</th>
            <th width="140">回调参数</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>close</td>
            <td>关闭警告提示时的事件回调函数，仅在 <code>closable</code> 为 <code>true</code> 时有效</td>
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
  import ExampleType from "./examples/type";
  import ExampleDescription from "./examples/description";
  import ExampleClosable from "./examples/closable";
  import ExampleCloseText from "./examples/close-text";
  import ExampleIcon from "./examples/icon";
  import ExampleBanner from "./examples/banner";

  export default {
    mixins: [
      MixinAnchors
    ],
    components: {
      Document,
      ExampleBasicUsage,
      ExampleType,
      ExampleDescription,
      ExampleClosable,
      ExampleCloseText,
      ExampleIcon,
      ExampleBanner
    }
  };
</script>