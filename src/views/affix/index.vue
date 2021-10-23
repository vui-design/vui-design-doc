<template>
  <div>
    <document>
      <h1>Affix 固钉</h1>
      <p>将页面元素钉在可视范围。</p>
      <h2>何时使用</h2>
      <p>当内容区域比较长，需要滚动页面时，这部分内容对应的操作或者导航需要在滚动范围内始终展现。常用于侧边菜单和按钮组合。</p>
      <p>页面可视范围过小时，慎用此功能以免遮挡页面内容。</p>
      <h2>代码演示</h2>
    </document>
    <vui-row v-bind:gutter="16">
      <vui-col v-bind:span="12">
        <example-basic-usage />
        <example-change />
      </vui-col>
      <vui-col v-bind:span="12">
        <example-container />
      </vui-col>
    </vui-row>
    <document>
      <h2 id="example-api">API</h2>
      <h3>Affix 属性</h3>
      <table class="example-api-props">
        <thead>
          <tr>
            <th width="180">属性</th>
            <th>说明</th>
            <th width="140">类型</th>
            <th width="160">默认值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>getScrollContainer</td>
            <td>设置 <code>Affix</code> 需要监听其滚动事件的元素，值为一个返回对应 <code>DOM</code> 元素的函数</td>
            <td>Function</td>
            <td>() => window</td>
          </tr>
          <tr>
            <td>offsetTop</td>
            <td>距离窗口顶部达到指定偏移量后触发</td>
            <td>Number</td>
            <td>--</td>
          </tr>
          <tr>
            <td>offsetBottom</td>
            <td>距离窗口底部达到指定偏移量后触发</td>
            <td>Number</td>
            <td>--</td>
          </tr>
        </tbody>
      </table>
      <h3>Affix 事件</h3>
      <table class="example-api-props">
        <thead>
          <tr>
            <th width="180">事件名</th>
            <th>说明</th>
            <th width="140">类型</th>
            <th width="160">回调参数</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>change</td>
            <td>固定状态改变时触发的事件回调函数</td>
            <td>Function</td>
            <td>affixed</td>
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
  import ExampleChange from "./examples/change";
  import ExampleContainer from "./examples/container";

  export default {
    mixins: [
      MixinAnchors
    ],
    components: {
      Document,
      ExampleBasicUsage,
      ExampleChange,
      ExampleContainer
    }
  };
</script>