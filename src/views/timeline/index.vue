<template>
  <div>
    <document>
      <h1>Timeline 时间轴</h1>
      <p>垂直展示的时间流信息。</p>
      <h2>何时使用</h2>
      <ul>
        <li>当有一系列信息需按时间排列时，可正序和倒序；</li>
        <li>需要有一条时间轴进行视觉上的串联时。</li>
      </ul>
      <h2>代码演示</h2>
    </document>
    <vui-row v-bind:gutter="16">
      <vui-col v-bind:span="12">
        <example-basic-usage />
        <example-color />
        <example-pending />
      </vui-col>
      <vui-col v-bind:span="12">
        <example-custom />
        <example-alternate />
        <example-right />
      </vui-col>
    </vui-row>
    <document>
      <h2 id="example-api">API</h2>
      <h3>Timeline 属性</h3>
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
            <td>mode</td>
            <td>设置时间轴点和主体内容的相对位置，可选值为 <code>left</code>、<code>alternate</code>、<code>right</code> 或者不设</td>
            <td>String</td>
            <td>left</td>
          </tr>
          <tr>
            <td>pending</td>
            <td>指定最后一个节点是否为幽灵节点</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
        </tbody>
      </table>
      <h3>TimelineItem 属性</h3>
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
            <td>color</td>
            <td>指定轴点颜色，预设 <code>gray</code>、<code>blue</code>、<code>yellow</code>、<code>green</code> 和 <code>red</code> 五种颜色</td>
            <td>String</td>
            <td>blue</td>
          </tr>
        </tbody>
      </table>
      <h3>TimelineItem 插槽</h3>
      <table>
        <thead>
          <tr>
            <th width="140">名称</th>
            <th>说明</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>dot</td>
            <td>自定义时间轴点</td>
          </tr>
          <tr>
            <td>default</td>
            <td>主体内容</td>
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
  import ExampleColor from "./examples/color";
  import ExamplePending from "./examples/pending";
  import ExampleCustom from "./examples/custom";
  import ExampleAlternate from "./examples/alternate";
  import ExampleRight from "./examples/right";

  export default {
    mixins: [
      MixinAnchors
    ],
    components: {
      Document,
      ExampleBasicUsage,
      ExampleColor,
      ExamplePending,
      ExampleCustom,
      ExampleAlternate,
      ExampleRight
    }
  };
</script>