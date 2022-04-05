<template>
  <div>
    <document>
      <h1>Statistic 统计数值</h1>
      <p>展示统计数值。</p>
      <h2>何时使用</h2>
      <ul>
        <li>当需要突出某个或某组数字时；</li>
        <li>当需要展示带描述的统计类数据时使用。</li>
      </ul>
      <h2>代码演示</h2>
    </document>
    <vui-row v-bind:gutter="16">
      <vui-col v-bind:span="12">
        <example-basic-usage />
        <example-icon-and-unit />
      </vui-col>
      <vui-col v-bind:span="12">
        <example-card />
        <example-countdown />
      </vui-col>
    </vui-row>
    <document>
      <h2 id="example-api">API</h2>
      <h3>Statistic 属性</h3>
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
            <td>title</td>
            <td>统计数值的标题说明</td>
            <td>String | Slot</td>
            <td>--</td>
          </tr>
          <tr>
            <td>extra</td>
            <td>附加内容，位于标题右侧</td>
            <td>String | Slot</td>
            <td>--</td>
          </tr>
          <tr>
            <td>value</td>
            <td>数值</td>
            <td>String | Number</td>
            <td>--</td>
          </tr>
          <tr>
            <td>precision</td>
            <td>数值精度，即小数点后保留多少位</td>
            <td>Number</td>
            <td>--</td>
          </tr>
          <tr>
            <td>prefix</td>
            <td>数值前缀，可通过此属性设置前置图标</td>
            <td>String | Slot</td>
            <td>--</td>
          </tr>
          <tr>
            <td>suffix</td>
            <td>数值后缀，可通过此属性设置后置单位</td>
            <td>String | Slot</td>
            <td>--</td>
          </tr>
          <tr>
            <td>footer</td>
            <td>底部内容</td>
            <td>Slot</td>
            <td>--</td>
          </tr>
          <tr>
            <td>formatter</td>
            <td>自定义数值展示，如 <code>(h, value) => VNode</code></td>
            <td>Function</td>
            <td>--</td>
          </tr>
          <tr>
            <td>decimalSeparator</td>
            <td>设置小数点</td>
            <td>String</td>
            <td>.</td>
          </tr>
          <tr>
            <td>groupSeparator</td>
            <td>设置千分位标识符</td>
            <td>String</td>
            <td>,</td>
          </tr>
          <tr>
            <td>headerStyle</td>
            <td>设置头部样式</td>
            <td>String | Object</td>
            <td>--</td>
          </tr>
          <tr>
            <td>bodyStyle</td>
            <td>设置主体样式</td>
            <td>String | Object</td>
            <td>--</td>
          </tr>
          <tr>
            <td>footerStyle</td>
            <td>设置底部样式</td>
            <td>String | Object</td>
            <td>--</td>
          </tr>
        </tbody>
      </table>
      <h3>Countdown 属性</h3>
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
            <td>title</td>
            <td>标题说明</td>
            <td>String | Slot</td>
            <td>--</td>
          </tr>
          <tr>
            <td>extra</td>
            <td>附加内容，位于标题右侧</td>
            <td>String | Slot</td>
            <td>--</td>
          </tr>
          <tr>
            <td>value</td>
            <td>到期时间，可以是日期字符串、时间戳，或日期对象</td>
            <td>String | Number | Date</td>
            <td>--</td>
          </tr>
          <tr>
            <td>prefix</td>
            <td>前缀，可通过此属性设置前置图标</td>
            <td>String | Slot</td>
            <td>--</td>
          </tr>
          <tr>
            <td>suffix</td>
            <td>后缀，可通过此属性设置后置单位</td>
            <td>String | Slot</td>
            <td>--</td>
          </tr>
          <tr>
            <td>footer</td>
            <td>底部内容</td>
            <td>Slot</td>
            <td>--</td>
          </tr>
          <tr>
            <td>formatter</td>
            <td>自定义显示格式，为函数类型时接收当前时间戳和到期时间戳作为参数</td>
            <td>String | Function</td>
            <td>HH:mm:ss</td>
          </tr>
          <tr>
            <td>headerStyle</td>
            <td>设置头部样式</td>
            <td>String | Object</td>
            <td>--</td>
          </tr>
          <tr>
            <td>bodyStyle</td>
            <td>设置主体样式</td>
            <td>String | Object</td>
            <td>--</td>
          </tr>
          <tr>
            <td>footerStyle</td>
            <td>设置底部样式</td>
            <td>String | Object</td>
            <td>--</td>
          </tr>
        </tbody>
      </table>
      <h3>Countdown 事件</h3>
      <table class="example-api-events">
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
            <td>finish</td>
            <td>倒计时结束时触发的事件回调函数</td>
            <td>Function</td>
            <td>--</td>
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
  import ExampleIconAndUnit from "./examples/icon-and-unit";
  import ExampleCard from "./examples/card";
  import ExampleCountdown from "./examples/countdown";

  export default {
    mixins: [
      MixinAnchors
    ],
    components: {
      Document,
      ExampleBasicUsage,
      ExampleIconAndUnit,
      ExampleCard,
      ExampleCountdown
    }
  };
</script>