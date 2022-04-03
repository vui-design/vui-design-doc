<template>
  <div>
    <document>
      <h1>Modal 对话框</h1>
      <p>模态对话框。</p>
      <h2>何时使用</h2>
      <p>需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 <code>Modal</code> 在当前页面正中打开一个对话框，承载相应的操作。另外当需要一个简洁的确认框询问用户时，可以使用精心封装好的 <code>this.$modal.confirm()</code> 等方法。</p>
      <h2>代码演示</h2>
    </document>
    <vui-row v-bind:gutter="16">
      <vui-col v-bind:span="12">
        <example-basic-usage />
        <example-headless-and-footless />
        <example-hide-close-button />
        <example-button-props />
        <example-position />
        <example-width />
      </vui-col>
      <vui-col v-bind:span="12">
        <example-asynchronously-close />
        <example-customized-footer />
        <example-confirm />
        <example-infomation />
        <example-update-and-close />
      </vui-col>
    </vui-row>
    <document>
      <p>除了上述通过标准组件的使用方式，<code>Vui</code> 还精心封装了一些实例方法，用来创建一次性的轻量级对话框。实例以隐式创建 <code>Modal</code> 组件的方式在全局创建一个对话框，并在关闭时移除。</p>
    </document>
    <document>
      <h2 id="example-api">API</h2>
      <h3>Modal 属性</h3>
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
            <td>对话框是否可见，可以使用 <code>v-model</code> 双向绑定</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>title</td>
            <td>对话框标题</td>
            <td>String | Slot</td>
            <td>--</td>
          </tr>
          <tr>
            <td>showFooter</td>
            <td>是否显示对话框底部内容</td>
            <td>Boolean</td>
            <td>true</td>
          </tr>
          <tr>
            <td>footer</td>
            <td>自定义对话框底部内容</td>
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
            <td>top</td>
            <td>对话框距离页面顶部的距离，垂直居中显示对话框时该属性无效</td>
            <td>String | Number</td>
            <td>100</td>
          </tr>
          <tr>
            <td>centered</td>
            <td>是否垂直居中显示对话框</td>
            <td>Boolean</td>
            <td>true</td>
          </tr>
          <tr>
            <td>width</td>
            <td>对话框宽度。对话框的宽度是响应式的。当屏幕宽度小于 <code>768px</code> 时，宽度会被强制设为 <code>auto</code>。</td>
            <td>String | Number</td>
            <td>480</td>
          </tr>
          <tr>
            <td>className</td>
            <td>用于设置对话框的样式类名</td>
            <td>String</td>
            <td>--</td>
          </tr>
          <tr>
            <td>headerStyle</td>
            <td>用于设置对话框头部的样式</td>
            <td>String | Object</td>
            <td>--</td>
          </tr>
          <tr>
            <td>bodyStyle</td>
            <td>用于设置对话框内容部分的样式</td>
            <td>String | Object</td>
            <td>--</td>
          </tr>
          <tr>
            <td>footerStyle</td>
            <td>用于设置对话框底部的样式</td>
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
            <td>点击背景遮罩是否关闭对话框</td>
            <td>Boolean</td>
            <td>true</td>
          </tr>
          <tr>
            <td>destroyOnClose</td>
            <td>关闭时销毁对话框内容（对话框里的子元素）</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>getPopupContainer</td>
            <td>指定对话框挂载的 HTML 节点</td>
            <td>Function</td>
            <td>() => document.body</td>
          </tr>
        </tbody>
      </table>
      <h3>Modal 事件</h3>
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
            <td>对话框打开前触发的事件回调函数</td>
            <td>Function</td>
            <td>--</td>
          </tr>
          <tr>
            <td>open</td>
            <td>对话框打开时触发的事件回调函数</td>
            <td>Function</td>
            <td>--</td>
          </tr>
          <tr>
            <td>afterOpen</td>
            <td>对话框完全打开时（打开动画完成后）触发的事件回调函数</td>
            <td>Function</td>
            <td>--</td>
          </tr>
          <tr>
            <td>beforeClose</td>
            <td>对话框关闭前触发的事件回调函数</td>
            <td>Function</td>
            <td>--</td>
          </tr>
          <tr>
            <td>close</td>
            <td>对话框关闭时触发的事件回调函数</td>
            <td>Function</td>
            <td>--</td>
          </tr>
          <tr>
            <td>afterClose</td>
            <td>对话框完全关闭时（关闭动画完成后）触发的事件回调函数</td>
            <td>Function</td>
            <td>--</td>
          </tr>
        </tbody>
      </table>
      <h3>全局方法</h3>
      <p>除了标准组件的使用方式，Vui Design 还精心封装了一些实例方法，用来创建一次性的轻量级对话框。实例以隐式创建 <code>Modal</code> 组件的方式在全局创建一个对话框，并在关闭时移除。您可以直接通过调用以下方式来使用：</p>
      <ul>
        <li><code>this.$modal.info(options)</code></li>
        <li><code>this.$modal.warning(options)</code></li>
        <li><code>this.$modal.success(options)</code></li>
        <li><code>this.$modal.error(options)</code></li>
        <li><code>this.$modal.confirm(options)</code></li>
      </ul>
      <p>以上方式隐式的创建及维护 <code>Modal</code> 组件，参数 <code>options</code> 是一个对象。具体说明如下：</p>
      <table class="example-api-props">
        <thead>
          <tr>
            <th width="200">选项</th>
            <th>说明</th>
            <th width="180">类型</th>
            <th width="200">默认值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>title</td>
            <td>对话框标题</td>
            <td>String | Function</td>
            <td>--</td>
          </tr>
          <tr>
            <td>description</td>
            <td>对话框描述内容</td>
            <td>String | Function</td>
            <td>--</td>
          </tr>
          <tr>
            <td>icon</td>
            <td>对话框图标类型</td>
            <td>String</td>
            <td>自动</td>
          </tr>
          <tr>
            <td>cancelButtonProps</td>
            <td>取消按钮的属性，遵循<a href="https://github.com/vuejs/babel-plugin-transform-vue-jsx#difference-from-react-jsx" target="_blank">jsx规范</a>，该选项仅在 <code>confirm</code> 对话框中有效</td>
            <td>Object</td>
            <td>--</td>
          </tr>
          <tr>
            <td>cancelText</td>
            <td>取消按钮文字，该选项仅在 <code>confirm</code> 对话框中有效</td>
            <td>String</td>
            <td>取消</td>
          </tr>
          <tr>
            <td>cancelAsync</td>
            <td>标记取消按钮的点击事件回调函数是否执行异步任务，该选项仅在 <code>confirm</code> 对话框中有效</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>okButtonProps</td>
            <td>确定按钮的属性，遵循<a href="https://github.com/vuejs/babel-plugin-transform-vue-jsx#difference-from-react-jsx" target="_blank">jsx规范</a></td>
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
            <td>ok</td>
          </tr>
          <tr>
            <td>top</td>
            <td>对话框距离页面顶部的距离，垂直居中显示对话框时该属性无效</td>
            <td>String | Number</td>
            <td>100</td>
          </tr>
          <tr>
            <td>centered</td>
            <td>是否垂直居中显示对话框</td>
            <td>Boolean</td>
            <td>true</td>
          </tr>
          <tr>
            <td>width</td>
            <td>对话框宽度。对话框的宽度是响应式的。当屏幕宽度小于 <code>768px</code> 时，宽度会被强制设为 <code>auto</code>。</td>
            <td>String | Number</td>
            <td>360</td>
          </tr>
          <tr>
            <td>className</td>
            <td>对话框样式类名</td>
            <td>String</td>
            <td>--</td>
          </tr>
          <tr>
            <td>headerStyle</td>
            <td>用于设置对话框头部的样式</td>
            <td>String | Object</td>
            <td>--</td>
          </tr>
          <tr>
            <td>bodyStyle</td>
            <td>用于设置对话框内容部分的样式</td>
            <td>String | Object</td>
            <td>--</td>
          </tr>
          <tr>
            <td>footerStyle</td>
            <td>用于设置对话框底部的样式</td>
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
            <td>背景遮罩样式类名</td>
            <td>String</td>
            <td>--</td>
          </tr>
          <tr>
            <td>getPopupContainer</td>
            <td>指定对话框挂载的 HTML 节点</td>
            <td>Function</td>
            <td>() => document.body</td>
          </tr>
          <tr>
            <td>cancel</td>
            <td>点击取消按钮的事件回调函数，<code>cancelAsync</code> 启用模式下回调参数为 <code>done</code> 函数，该选项仅在 <code>confirm</code> 对话框中有效</td>
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
            <td>对话框打开前触发的事件回调函数</td>
            <td>Function</td>
            <td>--</td>
          </tr>
          <tr>
            <td>open</td>
            <td>对话框打开时触发的事件回调函数</td>
            <td>Function</td>
            <td>--</td>
          </tr>
          <tr>
            <td>afterOpen</td>
            <td>对话框完全打开时（打开动画完成后）触发的事件回调函数</td>
            <td>Function</td>
            <td>--</td>
          </tr>
          <tr>
            <td>beforeClose</td>
            <td>对话框关闭前触发的事件回调函数</td>
            <td>Function</td>
            <td>--</td>
          </tr>
          <tr>
            <td>close</td>
            <td>对话框关闭时触发的事件回调函数</td>
            <td>Function</td>
            <td>--</td>
          </tr>
          <tr>
            <td>afterClose</td>
            <td>对话框完全关闭时（关闭动画完成后）触发的事件回调函数</td>
            <td>Function</td>
            <td>--</td>
          </tr>
        </tbody>
      </table>
      <p>以上函数调用后，均会返回一个引用，可以通过该引用更新和关闭对话框。</p>
      <ul>
        <li><code>modal.update(options)</code></li>
        <li><code>modal.close()</code></li>
      </ul>
      <p>其中 <code>modal.upadte</code> 方法的参数 <code>options</code> 同 <code>this.$modal[type]</code> 方法一致。</p>
    </document>
  </div>
</template>

<script>
  import MixinAnchors from "src/mixins/anchors";
  import Document from "src/components/document";
  import ExampleBasicUsage from "./examples/basic-usage";
  import ExampleHeadlessAndFootless from "./examples/headless-and-footless";
  import ExampleHideCloseButton from "./examples/hide-close-button";
  import ExampleButtonProps from "./examples/button-props";
  import ExamplePosition from "./examples/position";
  import ExampleWidth from "./examples/width";
  import ExampleAsynchronouslyClose from "./examples/asynchronously-close";
  import ExampleCustomizedFooter from "./examples/customized-footer";
  import ExampleConfirm from "./examples/confirm";
  import ExampleInfomation from "./examples/infomation";
  import ExampleUpdateAndClose from "./examples/update-and-close";

  export default {
    mixins: [
      MixinAnchors
    ],
    components: {
      Document,
      ExampleBasicUsage,
      ExampleHeadlessAndFootless,
      ExampleHideCloseButton,
      ExampleButtonProps,
      ExamplePosition,
      ExampleWidth,
      ExampleAsynchronouslyClose,
      ExampleCustomizedFooter,
      ExampleConfirm,
      ExampleInfomation,
      ExampleUpdateAndClose
    }
  };
</script>
