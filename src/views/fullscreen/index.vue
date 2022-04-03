<template>
  <div>
    <document>
      <h1>Fullscreen 全屏</h1>
      <p>用于对页面或页面局部板块进行全屏缩放。</p>
      <h2>何时使用</h2>
      <ul>
        <li>需要对页面进行全屏显示。</li>
        <li>需要对页面局部板块进行全屏显示。</li>
      </ul>
      <h2>代码演示</h2>
    </document>
    <example-basic-usage />
    <document>
      <h2 id="example-api">API</h2>
      <h3>Fullscreen 属性</h3>
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
            <td>value</td>
            <td>是否全屏，可以使用 <code>v-model</code> 双向绑定数据</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
        </tbody>
      </table>
      <h3>Fullscreen 事件</h3>
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
            <td>input</td>
            <td>全屏状态发生变化时触发的事件回调函数，可以使用 <code>v-model</code> 双向绑定数据</td>
            <td>Function</td>
            <td>value</td>
          </tr>
          <tr>
            <td>change</td>
            <td>全屏状态发生变化时触发的事件回调函数</td>
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

  export default {
    mixins: [
      MixinAnchors
    ],
    components: {
      Document,
      ExampleBasicUsage
    }
  };
</script>