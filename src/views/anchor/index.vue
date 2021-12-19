<template>
  <div>
    <document>
      <h1>Anchor 锚点</h1>
      <p>用于跳转到页面指定位置。</p>
      <h2>何时使用</h2>
      <p>需要展现当前页面上可供跳转的锚点链接，以及快速在锚点之间跳转。</p>
      <h2>代码演示</h2>
    </document>
    <vui-row v-bind:gutter="16">
      <vui-col v-bind:span="12">
        <example-basic-usage />
        <example-open-in-new-window />
        <example-static />
      </vui-col>
      <vui-col v-bind:span="12">
        <example-customize-highlight />
        <example-offset />
        <example-click />
        <example-change />
      </vui-col>
    </vui-row>
    <document>
      <h2 id="example-api">API</h2>
      <h3>Anchor 属性</h3>
      <table id="example-api-anchor-props" class="example-api-props">
        <thead>
          <tr>
            <th width="200">属性</th>
            <th>说明</th>
            <th width="160">类型</th>
            <th width="180">默认值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>affix</td>
            <td>固钉模式</td>
            <td>Boolean</td>
            <td>true</td>
          </tr>
          <tr>
            <td>showInkInStatic</td>
            <td>静态位置下是否显示小圆点</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>bounds</td>
            <td>锚点区域边界</td>
            <td>Number</td>
            <td>5</td>
          </tr>
          <tr>
            <td>offset</td>
            <td>锚点滚动偏移量</td>
            <td>Number</td>
            <td>0</td>
          </tr>
          <tr>
            <td>getScrollContainer</td>
            <td>指定滚动容器</td>
            <td>Function</td>
            <td>() => window</td>
          </tr>
          <tr>
            <td>getCurrentAnchorLink</td>
            <td>自定义高亮的锚点链接</td>
            <td>Function</td>
            <td>--</td>
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
          <tr>
            <td>preventDefault</td>
            <td>阻止锚点链接的默认行为，即点击锚点链接时，不将锚点名添加到地址栏</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
        </tbody>
      </table>
      <h3>Anchor 事件</h3>
      <table id="example-api-anchor-events" class="example-api-events">
        <thead>
          <tr>
            <th width="200">事件名</th>
            <th>说明</th>
            <th width="160">类型</th>
            <th width="180">回调参数</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>click</td>
            <td>点击锚点链接时触发的事件回调，返回事件对象及锚点连接</td>
            <td>Function</td>
            <td>e, link</td>
          </tr>
          <tr>
            <td>change</td>
            <td>锚点链接改变时触发的事件回调，返回当前锚点连接</td>
            <td>Function</td>
            <td>newHref, oldHref</td>
          </tr>
        </tbody>
      </table>
      <h3>AnchorLink 属性</h3>
      <table id="example-api-anchor-link-props" class="example-api-props">
        <thead>
          <tr>
            <th width="200">属性</th>
            <th>说明</th>
            <th width="160">类型</th>
            <th width="180">默认值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>href</td>
            <td>锚点链接</td>
            <td>String</td>
            <td>--</td>
          </tr>
          <tr>
            <td>title</td>
            <td>文字内容</td>
            <td>String | Slot</td>
            <td>--</td>
          </tr>
          <tr>
            <td>target</td>
            <td>指定在何处显示链接的资源</td>
            <td>String</td>
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
  import ExampleOpenInNewWindow from "./examples/open-in-new-window";
  import ExampleStatic from "./examples/static";
  import ExampleCustomizeHighlight from "./examples/customize-highlight";
  import ExampleOffset from "./examples/offset";
  import ExampleClick from "./examples/click";
  import ExampleChange from "./examples/change";

  export default {
    mixins: [
      MixinAnchors
    ],
    components: {
      Document,
      ExampleBasicUsage,
      ExampleOpenInNewWindow,
      ExampleStatic,
      ExampleCustomizeHighlight,
      ExampleOffset,
      ExampleClick,
      ExampleChange
    }
  };
</script>