<template>
  <div>
    <document>
      <h1>Message 消息提示</h1>
      <p>全局展示操作反馈信息。</p>
      <h2>何时使用</h2>
      <ul>
      <li>可提供信息、警告、成功和失败等反馈信息。</li>
      <li>顶部居中显示并自动消失，是一种不打断用户操作的轻量级提示方式。</li>
      </ul>
      <h2>代码演示</h2>
    </document>
    <vui-row v-bind:gutter="16">
      <vui-col v-bind:span="12">
        <example-basic-usage />
        <example-type />
        <example-background />
        <example-loading />
      </vui-col>
      <vui-col v-bind:span="12">
        <example-duration />
        <example-closable />
        <example-more-content />
      </vui-col>
    </vui-row>
    <document>
      <h2 id="example-api">API</h2>
      <p>Vui Design 为 <code>Vue.prototype</code> 添加了全局方法 <code>$message</code>，可以直接通过以下方式来使用：</p>
      <ul>
        <li><code>this.$message.open(options)</code></li>
        <li><code>this.$message.info(options)</code></li>
        <li><code>this.$message.warning(options)</code></li>
        <li><code>this.$message.success(options)</code></li>
        <li><code>this.$message.error(options)</code></li>
        <li><code>this.$message.loading(options)</code></li>
      </ul>
      <p>以上方式隐式的创建及维护 <code>Message</code> 组件，参数 <code>options</code> 可以是字符串、函数或对象。当为字符串或函数时，仅仅表示提示内容或返回内容的函数；当为对象时，具体说明如下：</p>
      <table class="example-api-props">
        <thead>
          <tr>
            <th width="160">选项</th>
            <th>说明</th>
            <th width="240">类型</th>
            <th width="160">默认值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>type</td>
            <td>提示类型，可选值为 <code>info</code>、<code>warning</code>、<code>success</code>、<code>error</code>、<code>loading</code> 或者不设</td>
            <td>String</td>
            <td>info</td>
          </tr>
          <tr>
            <td>content</td>
            <td>提示内容</td>
            <td>String | VNode | Function</td>
            <td>--</td>
          </tr>
          <tr>
            <td>icon</td>
            <td>自定义图标类型</td>
            <td>String</td>
            <td>--</td>
          </tr>
          <tr>
            <td>background</td>
            <td>是否显示背景色</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>closable</td>
            <td>是否显示关闭按钮</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>closeText</td>
            <td>关闭按钮文本，仅在 <code>closable</code> 为 <code>true</code> 时有效</td>
            <td>String</td>
            <td>--</td>
          </tr>
          <tr>
            <td>duration</td>
            <td>停留时长，单位秒。设为 <code>0</code> 时不会自动关闭</td>
            <td>Number</td>
            <td>3</td>
          </tr>
          <tr>
            <td>open</td>
            <td>提示打开时触发的回调函数</td>
            <td>Function</td>
            <td>--</td>
          </tr>
          <tr>
            <td>afterOpen</td>
            <td>提示完全打开时（打开动画完成后）触发的事件回调</td>
            <td>Function</td>
            <td>--</td>
          </tr>
          <tr>
            <td>close</td>
            <td>提示关闭时触发的事件回调</td>
            <td>Function</td>
            <td>--</td>
          </tr>
          <tr>
            <td>afterClose</td>
            <td>提示完全关闭时（关闭动画完成后）触发的事件回调</td>
            <td>Function</td>
            <td>--</td>
          </tr>
        </tbody>
      </table>
      <p>以上方法调用后，均会返回一个引用，可以通过该引用更新和关闭消息提示。</p>
      <ul>
        <li><code>message.update(options)</code></li>
        <li><code>message.close()</code></li>
      </ul>
      <p>其中 <code>message.upadte</code> 方法的参数 <code>options</code> 同 <code>this.$message[type]</code> 方法一致。</p>
    </document>
  </div>
</template>

<script>
  import MixinAnchors from "src/mixins/anchors";
  import Document from "src/components/document";
  import ExampleBasicUsage from "./examples/basic-usage";
  import ExampleType from "./examples/type";
  import ExampleBackground from "./examples/background";
  import ExampleLoading from "./examples/loading";
  import ExampleDuration from "./examples/duration";
  import ExampleClosable from "./examples/closable";
  import ExampleMoreContent from "./examples/more-content";

  export default {
    mixins: [
      MixinAnchors
    ],
    components: {
      Document,
      ExampleBasicUsage,
      ExampleType,
      ExampleBackground,
      ExampleLoading,
      ExampleDuration,
      ExampleClosable,
      ExampleMoreContent
    }
  };
</script>