<template>
  <div>
    <document>
      <h1>Tag 标签</h1>
      <p>进行标记和分类的小标签。</p>
      <h2>何时使用</h2>
      <ul>
        <li>用于标记事物的属性和维度。</li>
        <li>进行分类。</li>
      </ul>
      <h2>代码演示</h2>
    </document>
    <vui-row v-bind:gutter="16">
      <vui-col v-bind:span="12">
        <example-basic-usage />
        <example-size />
        <example-color />
        <example-icon />
      </vui-col>
      <vui-col v-bind:span="12">
        <example-closable />
        <example-control />
        <example-checkable />
        <example-hot-tags />
      </vui-col>
    </vui-row>
    <document>
      <h2 id="example-api">API</h2>
      <h3>Tag 属性</h3>
      <table class="example-api-props">
        <thead>
          <tr>
            <th width="140">属性</th>
            <th>说明</th>
            <th width="160">类型</th>
            <th width="140">默认值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>size</td>
            <td>标签尺寸，可选值为 <code>small</code>、<code>medium</code>、<code>large</code> 或者不设</td>
            <td>String</td>
            <td>medium</td>
          </tr>
          <tr>
            <td>color</td>
            <td>标签颜色，预设颜色详见示例〔多彩标签〕，支持自定义颜色值</td>
            <td>String</td>
            <td>default</td>
          </tr>
          <tr>
            <td>icon</td>
            <td>设置标签图标类型/图标</td>
            <td>String | Slot</td>
            <td>--</td>
          </tr>
          <tr>
            <td>closable</td>
            <td>标签是否可以关闭</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>checkable</td>
            <td>标签是否可以选择</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>checked</td>
            <td>标签选中状态，仅在 <code>checkable</code> 为 <code>true</code> 时有效，可以使用 <code>v-model</code> 双向绑定数据</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
        </tbody>
      </table>
      <h3>Tag 事件</h3>
      <table class="example-api-events">
        <thead>
          <tr>
            <th width="140">事件名</th>
            <th>说明</th>
            <th width="160">类型</th>
            <th width="140">回调参数</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>click</td>
            <td>点击标签时的事件回调函数</td>
            <td>Function</td>
            <td>event</td>
          </tr>
          <tr>
            <td>close</td>
            <td>点击关闭按钮时的事件回调函数</td>
            <td>Function</td>
            <td>event</td>
          </tr>
          <tr>
            <td>input</td>
            <td>切换选中状态时的事件回调函数，可以使用 <code>v-model</code> 双向绑定数据</td>
            <td>Function</td>
            <td>checked</td>
          </tr>
          <tr>
            <td>change</td>
            <td>切换选中状态时的事件回调函数</td>
            <td>Function</td>
            <td>checked</td>
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
  import ExampleSize from "./examples/size";
  import ExampleIcon from "./examples/icon";
  import ExampleClosable from "./examples/closable";
  import ExampleControl from "./examples/control";
  import ExampleCheckable from "./examples/checkable";
  import ExampleHotTags from "./examples/hot-tags";
  import ExampleColor from "./examples/color";

  export default {
    mixins: [
      MixinAnchors
    ],
    components: {
      Document,
      ExampleBasicUsage,
      ExampleSize,
      ExampleIcon,
      ExampleClosable,
      ExampleControl,
      ExampleCheckable,
      ExampleHotTags,
      ExampleColor
    }
  };
</script>