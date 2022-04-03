<template>
  <div>
    <document>
      <h1>Notice 通知提醒</h1>
      <p>全局展示通知提醒信息。</p>
      <h2>何时使用</h2>
      <p>在系统四个角显示通知提醒信息。经常用于以下情况：</p>
      <ul>
        <li>较为复杂的通知内容。</li>
        <li>带有交互的通知，给出用户下一步的行动点。</li>
        <li>系统主动推送。</li>
      </ul>
      <h2>代码演示</h2>
    </document>
    <vui-row v-bind:gutter="16">
      <vui-col v-bind:span="12">
        <example-basic-usage />
        <example-type />
      </vui-col>
      <vui-col v-bind:span="12">
        <example-duration />
        <example-placement />
        <example-more-content />
      </vui-col>
    </vui-row>
    <document>
      <h2 id="example-api">API</h2>
      <p>Vui Design 为 <code>Vue.prototype</code> 添加了全局方法 <code>$notice</code>，可以直接通过以下方式来使用：</p>
      <ul>
        <li><code>this.$notice.open(options)</code></li>
        <li><code>this.$notice.info(options)</code></li>
        <li><code>this.$notice.warning(options)</code></li>
        <li><code>this.$notice.success(options)</code></li>
        <li><code>this.$notice.error(options)</code></li>
      </ul>
      <p>以上方式隐式的创建及维护 <code>Notice</code> 组件，参数 <code>options</code> 可以是字符串、函数或对象。当为字符串或函数时，仅仅表示提醒标题或返回标题的函数；当为对象时，具体说明如下：</p>
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
            <td>提醒类型，可选值为 <code>info</code>、<code>warning</code>、<code>success</code>、<code>error</code> 或者不设</td>
            <td>String</td>
            <td>info</td>
          </tr>
          <tr>
            <td>title</td>
            <td>提醒标题</td>
            <td>String | VNode | Function</td>
            <td>--</td>
          </tr>
          <tr>
            <td>description</td>
            <td>提醒内容</td>
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
            <td>closable</td>
            <td>是否显示关闭按钮</td>
            <td>Boolean</td>
            <td>true</td>
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
            <td>5</td>
          </tr>
          <tr>
            <td>placement</td>
            <td>弹出位置，可选值为 <code>top-left</code>、<code>top-right</code>、<code>bottom-left</code>、<code>bottom-right</code> 或者不设</td>
            <td>String</td>
            <td>top-right</td>
          </tr>
          <tr>
            <td>beforeOpen</td>
            <td>提醒即将打开时触发的回调函数</td>
            <td>Function</td>
            <td>--</td>
          </tr>
          <tr>
            <td>open</td>
            <td>提醒打开时触发的回调函数</td>
            <td>Function</td>
            <td>--</td>
          </tr>
          <tr>
            <td>afterOpen</td>
            <td>提醒完全打开时（打开动画完成后）触发的事件回调</td>
            <td>Function</td>
            <td>--</td>
          </tr>
          <tr>
            <td>beforeClose</td>
            <td>提醒即将关闭时触发的回调函数</td>
            <td>Function</td>
            <td>--</td>
          </tr>
          <tr>
            <td>close</td>
            <td>提醒关闭时触发的事件回调</td>
            <td>Function</td>
            <td>--</td>
          </tr>
          <tr>
            <td>afterClose</td>
            <td>提醒完全关闭时（关闭动画完成后）触发的事件回调</td>
            <td>Function</td>
            <td>--</td>
          </tr>
        </tbody>
      </table>
      <p>以上方法调用后，均会返回一个引用，可以通过该引用更新和关闭通知提醒。</p>
      <ul>
        <li><code>notice.update(options)</code></li>
        <li><code>notice.close()</code></li>
      </ul>
      <p>其中 <code>notice.upadte</code> 方法的参数 <code>options</code> 同 <code>this.$notice[type]</code> 方法一致。</p>
    </document>
  </div>
</template>

<script>
  import MixinAnchors from "src/mixins/anchors";
  import Document from "src/components/document";
  import ExampleBasicUsage from "./examples/basic-usage";
  import ExampleType from "./examples/type";
  import ExampleDuration from "./examples/duration";
  import ExamplePlacement from "./examples/placement";
  import ExampleMoreContent from "./examples/more-content";

  export default {
    mixins: [
      MixinAnchors
    ],
    components: {
      Document,
      ExampleBasicUsage,
      ExampleType,
      ExampleDuration,
      ExamplePlacement,
      ExampleMoreContent
    }
  };
</script>