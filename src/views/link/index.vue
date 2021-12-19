<template>
  <div>
    <document>
      <h1>Link  文字链接</h1>
      <p>文字超链接。</p>
      <h2>何时使用</h2>
      <ul>
        <li>用作操作按钮。</li>
        <li>用于从一张页面链接到另一张页面。</li>
      </ul>
      <h2>代码演示</h2>
    </document>
    <vui-row v-bind:gutter="16">
      <vui-col v-bind:span="12">
        <example-type />
        <example-icon />
        <example-size />
        <example-underline />
      </vui-col>
      <vui-col v-bind:span="12">
        <example-loading />
        <example-disabled />
        <example-link />
      </vui-col>
    </vui-row>
    <document>
      <h2 id="example-api">API</h2>
      <h3>Link 属性</h3>
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
            <td>设置文字链接类型，可选值为 <code>default</code>、<code>primary</code>、<code>info</code>、<code>warning</code>、<code>success</code>、<code>danger</code> 或者不设</td>
            <td>String</td>
            <td>default</td>
          </tr>
          <tr>
            <td>icon</td>
            <td>设置文字链接图标类型/图标</td>
            <td>String | Slot</td>
            <td>--</td>
          </tr>
          <tr>
            <td>size</td>
            <td>设置文字链接尺寸，可选值为 <code>small</code>、<code>medium</code>、<code>large</code> 或者不设</td>
            <td>String</td>
            <td>medium</td>
          </tr>
          <tr>
            <td>block</td>
            <td>设置文字链接为块级元素，宽度撑满父元素</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>underline</td>
            <td>鼠标移入时是否显示下划线</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>loading</td>
            <td>设置文字链接为加载状态</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>设置文字链接为禁用状态</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>href</td>
            <td>设置文字链接点击后的跳转地址</td>
            <td>String</td>
            <td>--</td>
          </tr>
          <tr>
            <td>to</td>
            <td>设置文字链接点击后的跳转地址，指定此属性后文字链接的行为和 <code>&lt;router-link /&gt;</code> 组件一致</td>
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
            <td>设置文字链接的 <code>target</code> 属性，可选值请参考 <a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a#attr-target" target="_blank">HTML 标准</a></td>
            <td>String</td>
            <td>--</td>
          </tr>
        </tbody>
      </table>
      <h3>Link 事件</h3>
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
            <td>点击文字链接时触发的事件回调函数</td>
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
  import ExampleType from "./examples/type";
  import ExampleIcon from "./examples/icon";
  import ExampleSize from "./examples/size";
  import ExampleUnderline from "./examples/underline";
  import ExampleLoading from "./examples/loading";
  import ExampleDisabled from "./examples/disabled";
  import ExampleLink from "./examples/link";

  export default {
    mixins: [
      MixinAnchors
    ],
    components: {
      Document,
      ExampleType,
      ExampleIcon,
      ExampleSize,
      ExampleUnderline,
      ExampleLoading,
      ExampleDisabled,
      ExampleLink
    }
  };
</script>