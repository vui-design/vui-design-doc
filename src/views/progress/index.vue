<template>
  <div>
    <document>
      <h1>Progress 进度条</h1>
      <p>展示操作的当前进度。</p>
      <h2>何时使用</h2>
      <p>在操作需要较长时间才能完成时，为用户显示该操作的当前进度和状态。</p>
      <ul>
        <li>当一个操作会打断当前界面，或者需要在后台运行，且耗时可能超过 2 秒时；</li>
        <li>当需要显示一个操作完成的百分比时。</li>
      </ul>
      <h2>代码演示</h2>
    </document>
    <vui-row v-bind:gutter="16">
      <vui-col v-bind:span="12">
        <example-line />
        <example-line-small />
        <example-circle />
        <example-circle-small />
        <example-dashboard />
      </vui-col>
      <vui-col v-bind:span="12">
        <example-dynamic />
        <example-formatter />
        <example-stroke-color />
        <example-stroke-linecap />
      </vui-col>
    </vui-row>
    <document>
      <h2 id="example-api">API</h2>
      <h3>Progress 共用属性</h3>
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
            <td>类型，可选值为 <code>line</code>、<code>circle</code>、<code>dashboard</code> 或者不设</td>
            <td>String</td>
            <td>line</td>
          </tr>
          <tr>
            <td>size</td>
            <td>尺寸，可选值为 <code>small</code>、<code>medium</code>、<code>large</code> 或者不设</td>
            <td>String</td>
            <td>medium</td>
          </tr>
          <tr>
            <td>percentage</td>
            <td>百分比，可选值 <code>0</code> 至 <code>100</code></td>
            <td>Number</td>
            <td>0</td>
          </tr>
          <tr>
            <td>status</td>
            <td>状态，可选值 <code>normal</code>、<code>active</code>、<code>exception</code>、<code>success</code> 或者不设，其中 <code>active</code> 状态仅限 <code>line</code> 类型下可用</td>
            <td>String</td>
            <td>normal</td>
          </tr>
          <tr>
            <td>trackColor</td>
            <td>轨道的颜色</td>
            <td>String</td>
            <td>--</td>
          </tr>
          <tr>
            <td>strokeColor</td>
            <td>进度条的颜色，会覆盖 <code>status</code> 状态下的默认颜色</td>
            <td>String</td>
            <td>--</td>
          </tr>
          <tr>
            <td>strokeWidth</td>
            <td>进度条的宽度，单位 <code>px</code>，默认值为 <code>{ small: 6, medium: 8, large: 10 }</code></td>
            <td>Number</td>
            <td>--</td>
          </tr>
          <tr>
            <td>strokeLinecap</td>
            <td>进度条的边缘形状，可选值为 <code>round</code>、<code>square</code> 或者不设</td>
            <td>String</td>
            <td>round</td>
          </tr>
          <tr>
            <td>formatter</td>
            <td>内容的模板函数，接收 <code>percentage</code> 作为参数</td>
            <td>Function</td>
            <td>--</td>
          </tr>
          <tr>
            <td>showInfo</td>
            <td>是否显示进度数值或状态图标</td>
            <td>Boolean</td>
            <td>true</td>
          </tr>
        </tbody>
      </table>
      <h3>Progress Circle 属性</h3>
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
            <td>width</td>
            <td>进度环的画布宽度，单位 <code>px</code>，默认值为 <code>{ small: 80, medium: 120, large: 160 }</code></td>
            <td>Number</td>
            <td>--</td>
          </tr>
        </tbody>
      </table>
      <h3>Progress Dashboard 属性</h3>
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
            <td>width</td>
            <td>仪表盘的画布宽度，单位 <code>px</code>，默认值为 <code>{ small: 80, medium: 120, large: 160 }</code></td>
            <td>Number</td>
            <td>--</td>
          </tr>
          <tr>
            <td>gapDegree</td>
            <td>仪表盘的缺口角度，可选值 <code>0</code> 至 <code>295</code></td>
            <td>Number</td>
            <td>75</td>
          </tr>
        </tbody>
      </table>
    </document>
  </div>
</template>

<script>
  import MixinAnchors from "src/mixins/anchors";
  import Document from "src/components/document";
  import ExampleLine from "./examples/line";
  import ExampleLineSmall from "./examples/line-small";
  import ExampleCircle from "./examples/circle";
  import ExampleCircleSmall from "./examples/circle-small";
  import ExampleDashboard from "./examples/dashboard";
  import ExampleDynamic from "./examples/dynamic";
  import ExampleFormatter from "./examples/formatter";
  import ExampleStrokeColor from "./examples/stroke-color";
  import ExampleStrokeLinecap from "./examples/stroke-linecap";

  export default {
    mixins: [
      MixinAnchors
    ],
    components: {
      Document,
      ExampleLine,
      ExampleLineSmall,
      ExampleCircle,
      ExampleCircleSmall,
      ExampleDashboard,
      ExampleDynamic,
      ExampleFormatter,
      ExampleStrokeColor,
      ExampleStrokeLinecap
    }
  };
</script>