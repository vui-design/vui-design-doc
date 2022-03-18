<template>
  <div>
    <document>
      <h1>Button 按钮</h1>
      <p>按钮用于开始一个即时操作。</p>
      <h2>何时使用</h2>
      <p>标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。</p>
      <h2>代码演示</h2>
    </document>
    <vui-row v-bind:gutter="16">
      <vui-col v-bind:span="12">
        <example-type />
        <example-ghost />
        <example-block />
        <example-icon-and-shape />
        <example-size />
      </vui-col>
      <vui-col v-bind:span="12">
        <example-loading />
        <example-disabled />
        <example-link />
        <example-group />
      </vui-col>
    </vui-row>
    <document>
      <h2 id="example-api">API</h2>
      <h3>Button 属性</h3>
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
            <td>htmlType</td>
            <td>设置按钮的原生 <code>type</code> 属性，可选值请参考 <a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/button#attr-type" target="_blank">HTML 标准</a></td>
            <td>String</td>
            <td>button</td>
          </tr>
          <tr>
            <td>type</td>
            <td>设置按钮类型，可选值为 <code>default</code>、<code>primary</code>、<code>info</code>、<code>warning</code>、<code>success</code>、<code>danger</code>、<code>dashed</code>、<code>text</code> 或者不设</td>
            <td>String</td>
            <td>default</td>
          </tr>
          <tr>
            <td>block</td>
            <td>设置按钮为块级元素，宽度撑满父元素</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>ghost</td>
            <td>幽灵属性，使按钮背景透明</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>shape</td>
            <td>设置按钮形状，可选值为 <code>round</code>、<code>circle</code> 或者不设</td>
            <td>String</td>
            <td>--</td>
          </tr>
          <tr>
            <td>size</td>
            <td>设置按钮尺寸，可选值为 <code>small</code>、<code>medium</code>、<code>large</code> 或者不设</td>
            <td>String</td>
            <td>medium</td>
          </tr>
          <tr>
            <td>autofocus</td>
            <td>是否自动获得焦点</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>loading</td>
            <td>设置按钮为加载状态</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>设置按钮为禁用状态</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>icon</td>
            <td>设置按钮图标类型</td>
            <td>String</td>
            <td>--</td>
          </tr>
          <tr>
            <td>href</td>
            <td>设置按钮点击后的跳转地址，指定此属性后按钮的行为和 <code>a</code> 链接一致</td>
            <td>String</td>
            <td>--</td>
          </tr>
          <tr>
            <td>to</td>
            <td>设置按钮点击后的跳转地址，指定此属性后按钮的行为和 <code>&lt;router-link /&gt;</code> 组件一致</td>
            <td>String | Object</td>
            <td>--</td>
          </tr>
          <tr>
            <td>replace</td>
            <td>同 <code>&lt;router-link /&gt;</code> 组件的 <code>replace</code> 属性，详细说明请参考 <a href="https://router.vuejs.org/zh/api/#replace" target="_blank">Vue Router API</a></td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>append</td>
            <td>同 <code>&lt;router-link /&gt;</code> 组件的 <code>append</code> 属性，详细说明请参考 <a href="https://router.vuejs.org/zh/api/#append" target="_blank">Vue Router API</a></td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>target</td>
            <td>相当于 <code>a</code> 链接的 <code>target</code> 属性，可选值请参考 <a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a#attr-target" target="_blank">HTML 标准</a></td>
            <td>String</td>
            <td>--</td>
          </tr>
        </tbody>
      </table>
      <h3>Button 事件</h3>
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
            <td>点击按钮时触发的事件回调函数</td>
            <td>Function</td>
            <td>event</td>
          </tr>
        </tbody>
      </table>
      <h3>ButtonGroup 属性</h3>
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
            <td>type</td>
            <td>设置按钮组合类型，可选值为 <code>default</code>、<code>primary</code>、<code>info</code>、<code>warning</code>、<code>success</code>、<code>danger</code>、<code>dashed</code> 或者不设</td>
            <td>String</td>
            <td>default</td>
          </tr>
          <tr>
            <td>ghost</td>
            <td>设置按钮组合为幽灵状态，使按钮背景透明</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>shape</td>
            <td>设置按钮组合形状，可选值为 <code>round</code> 或者不设</td>
            <td>String</td>
            <td>--</td>
          </tr>
          <tr>
            <td>size</td>
            <td>设置按钮组合尺寸，可选值为 <code>small</code>、<code>medium</code>、<code>large</code> 或者不设</td>
            <td>String</td>
            <td>--</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>设置按钮组合为禁用状态</td>
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
  import ExampleType from "./examples/type";
  import ExampleGhost from "./examples/ghost";
  import ExampleBlock from "./examples/block";
  import ExampleIconAndShape from "./examples/icon-and-shape";
  import ExampleSize from "./examples/size";
  import ExampleLoading from "./examples/loading";
  import ExampleDisabled from "./examples/disabled";
  import ExampleLink from "./examples/link";
  import ExampleGroup from "./examples/group";

  export default {
    mixins: [
      MixinAnchors
    ],
    components: {
      Document,
      ExampleType,
      ExampleGhost,
      ExampleBlock,
      ExampleIconAndShape,
      ExampleSize,
      ExampleLoading,
      ExampleDisabled,
      ExampleLink,
      ExampleGroup
    }
  };
</script>