<template>
  <div>
    <document>
      <h1>Drawer 抽屉</h1>
      <p>屏幕边缘滑出的浮层面板。</p>
      <h2>何时使用</h2>
      <p>抽屉从父窗体边缘滑入，覆盖住部分父窗体内容。用户在抽屉内操作时不必离开当前任务，操作完成后，可以平滑地回到到原任务。</p>
      <ul>
        <li>当需要一个附加的面板来控制父窗体内容，这个面板在需要时呼出。比如，控制界面展示样式，往界面中添加内容。</li>
        <li>当需要在当前任务流中插入临时任务，创建或预览附加内容。比如展示协议条款，创建子对象。</li>
      </ul>
      <h2>代码演示</h2>
    </document>
    <vui-row v-bind:gutter="16">
      <vui-col v-bind:span="12">
        <example-basic-usage />
        <example-placement />
        <example-headless-and-footless />
        <example-hide-close-button />
        <example-button-props />
      </vui-col>
      <vui-col v-bind:span="12">
        <example-asynchronously-close />
        <example-customized-footer />
        <example-multi-level />
        <!--
        <example-get-popup-container />
        -->
      </vui-col>
    </vui-row>
    <document>
      <h2 id="example-api">API</h2>
      <h3>Drawer 属性</h3>
      <table class="example-api-props">
        <thead>
          <tr>
            <th width="200">属性</th>
            <th>说明</th>
            <th width="180">类型</th>
            <th width="200">默认值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>visible</td>
            <td>抽屉是否可见，可以使用 <code>v-model</code> 双向绑定</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>title</td>
            <td>抽屉标题</td>
            <td>String | Slot</td>
            <td>--</td>
          </tr>
          <tr>
            <td>showFooter</td>
            <td>是否显示抽屉底部内容</td>
            <td>Boolean</td>
            <td>true</td>
          </tr>
          <tr>
            <td>footer</td>
            <td>自定义抽屉底部内容</td>
            <td>Slot</td>
            <td>--</td>
          </tr>
          <tr>
            <td>showCancelButton</td>
            <td>是否显示取消按钮</td>
            <td>Boolean</td>
            <td>true</td>
          </tr>
          <tr>
            <td>cancelButtonProps</td>
            <td>取消按钮的属性，遵循 <a href="https://github.com/vuejs/babel-plugin-transform-vue-jsx#difference-from-react-jsx" target="_blank">jsx 规范</a></td>
            <td>Object</td>
            <td>--</td>
          </tr>
          <tr>
            <td>cancelText</td>
            <td>取消按钮文字</td>
            <td>String</td>
            <td>取消</td>
          </tr>
          <tr>
            <td>cancelAsync</td>
            <td>标记取消按钮的点击事件回调函数是否执行异步任务</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>showOkButton</td>
            <td>是否显示确定按钮</td>
            <td>Boolean</td>
            <td>true</td>
          </tr>
          <tr>
            <td>okButtonProps</td>
            <td>确定按钮的属性，遵循 <a href="https://github.com/vuejs/babel-plugin-transform-vue-jsx#difference-from-react-jsx" target="_blank">jsx 规范</a></td>
            <td>Object</td>
            <td>--</td>
          </tr>
          <tr>
            <td>okText</td>
            <td>确定按钮文字</td>
            <td>String</td>
            <td>确定</td>
          </tr>
          <tr>
            <td>okAsync</td>
            <td>标记确定按钮的点击事件回调函数是否执行异步任务</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>autofocusButton</td>
            <td>指定自动获得焦点的按钮，可选值为 <code>cancel</code>、<code>ok</code> 或者不设</td>
            <td>String</td>
            <td>--</td>
          </tr>
          <tr>
            <td>closable</td>
            <td>是否显示右上角的关闭按钮</td>
            <td>Boolean</td>
            <td>true</td>
          </tr>
          <tr>
            <td>placement</td>
            <td>抽屉打开位置，可选值为 <code>top</code>、<code>bottom</code>、<code>left</code>、<code>right</code> 或者不设</td>
            <td>String</td>
            <td>right</td>
          </tr>
          <tr>
            <td>width</td>
            <td>抽屉宽度，在 <code>placement</code> 为 <code>left</code> 或 <code>right</code> 时使用</td>
            <td>String | Number</td>
            <td>480</td>
          </tr>
          <tr>
            <td>height</td>
            <td>抽屉高度，在 <code>placement</code> 为 <code>top</code> 或 <code>bottom</code> 时使用</td>
            <td>String | Number</td>
            <td>480</td>
          </tr>
          <tr>
            <td>className</td>
            <td>用于设置抽屉的样式类名</td>
            <td>String</td>
            <td>--</td>
          </tr>
          <tr>
            <td>headerStyle</td>
            <td>用于设置抽屉头部的样式</td>
            <td>String | Object</td>
            <td>--</td>
          </tr>
          <tr>
            <td>bodyStyle</td>
            <td>用于设置抽屉内容部分的样式</td>
            <td>String | Object</td>
            <td>--</td>
          </tr>
          <tr>
            <td>footerStyle</td>
            <td>用于设置抽屉底部的样式</td>
            <td>String | Object</td>
            <td>--</td>
          </tr>
          <tr>
            <td>backdrop</td>
            <td>是否显示背景遮罩</td>
            <td>Boolean</td>
            <td>true</td>
          </tr>
          <tr>
            <td>backdropClassName</td>
            <td>用于设置背景遮罩的样式类名</td>
            <td>String</td>
            <td>--</td>
          </tr>
          <tr>
            <td>backdropStyle</td>
            <td>用于设置背景遮罩的样式</td>
            <td>String | Object</td>
            <td>--</td>
          </tr>
          <tr>
            <td>clickBackdropToClose</td>
            <td>点击背景遮罩是否关闭抽屉</td>
            <td>Boolean</td>
            <td>true</td>
          </tr>
          <tr>
            <td>destroyOnClose</td>
            <td>关闭时销毁抽屉内容（抽屉里的子元素）</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>getPopupContainer</td>
            <td>指定抽屉挂载的 HTML 节点</td>
            <td>Function</td>
            <td>() => document.body</td>
          </tr>
        </tbody>
      </table>
      <h3>Drawer 事件</h3>
      <table class="example-api-events">
        <thead>
          <tr>
            <th width="200">事件名</th>
            <th>说明</th>
            <th width="180">类型</th>
            <th width="200">回调参数</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>input</td>
            <td>可见状态发生变化时触发的事件回调函数，可以使用 <code>v-model</code> 双向绑定</td>
            <td>Function</td>
            <td>visible</td>
          </tr>
          <tr>
            <td>change</td>
            <td>可见状态发生变化时触发的事件回调函数</td>
            <td>Function</td>
            <td>visible</td>
          </tr>
          <tr>
            <td>cancel</td>
            <td>点击取消按钮（或右上角关闭按钮、背景遮罩）的事件回调函数，<code>cancelAsync</code> 启用模式下回调参数为 <code>done</code> 函数</td>
            <td>Function</td>
            <td>--</td>
          </tr>
          <tr>
            <td>ok</td>
            <td>点击确定按钮的事件回调函数，<code>okAsync</code> 启用模式下回调参数为 <code>done</code> 函数</td>
            <td>Function</td>
            <td>--</td>
          </tr>
          <tr>
            <td>beforeOpen</td>
            <td>抽屉打开前触发的事件回调函数</td>
            <td>Function</td>
            <td>--</td>
          </tr>
          <tr>
            <td>open</td>
            <td>抽屉打开时触发的事件回调函数</td>
            <td>Function</td>
            <td>--</td>
          </tr>
          <tr>
            <td>afterOpen</td>
            <td>抽屉完全打开时（打开动画完成后）触发的事件回调函数</td>
            <td>Function</td>
            <td>--</td>
          </tr>
          <tr>
            <td>beforeClose</td>
            <td>抽屉关闭前触发的事件回调函数</td>
            <td>Function</td>
            <td>--</td>
          </tr>
          <tr>
            <td>close</td>
            <td>抽屉关闭时触发的事件回调函数</td>
            <td>Function</td>
            <td>--</td>
          </tr>
          <tr>
            <td>afterClose</td>
            <td>抽屉完全关闭时（关闭动画完成后）触发的事件回调函数</td>
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
  import ExamplePlacement from "./examples/placement";
  import ExampleHeadlessAndFootless from "./examples/headless-and-footless";
  import ExampleHideCloseButton from "./examples/hide-close-button";
  import ExampleButtonProps from "./examples/button-props";
  import ExampleAsynchronouslyClose from "./examples/asynchronously-close";
  import ExampleCustomizedFooter from "./examples/customized-footer";
  import ExampleMultiLevel from "./examples/multi-level";
  import ExampleGetPopupContainer from "./examples/get-popup-container";

  export default {
    mixins: [
      MixinAnchors
    ],
    components: {
      Document,
      ExampleBasicUsage,
      ExamplePlacement,
      ExampleHeadlessAndFootless,
      ExampleHideCloseButton,
      ExampleButtonProps,
      ExampleAsynchronouslyClose,
      ExampleCustomizedFooter,
      ExampleMultiLevel,
      ExampleGetPopupContainer
    }
  };
</script>