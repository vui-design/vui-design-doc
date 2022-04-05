<template>
  <div>
    <document>
      <h1>Qrcode 二维码</h1>
      <p>为字符串进行二维码编码。</p>
      <h2>代码演示</h2>
    </document>
    <vui-row v-bind:gutter="16">
      <vui-col v-bind:span="12">
        <example-basic-usage />
        <example-tag />
        <example-size />
      </vui-col>
      <vui-col v-bind:span="12">
        <example-correct-level />
        <example-color />
        <example-image />
      </vui-col>
    </vui-row>
    <document>
      <h2 id="example-api">API</h2>
      <h3>Qrcode 属性</h3>
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
            <td>要编码的字符串</td>
            <td>String</td>
            <td>--</td>
          </tr>
          <tr>
            <td>tag</td>
            <td>使用哪个节点元素绘制二维码，可选值为 <code>canvas</code>、<code>svg</code>、<code>table</code> 或者不设</td>
            <td>String</td>
            <td>canvas</td>
          </tr>
          <tr>
            <td>size</td>
            <td>二维码的宽和高，单位为 <code>px</code>，只允许生成正方形二维码</td>
            <td>Number</td>
            <td>148</td>
          </tr>
          <tr>
            <td>correctLevel</td>
            <td>纠错级别，可选值为 <code>0</code>、<code>1</code>、<code>2</code>、<code>3</code>，数字越大说明所需纠错级别越大</td>
            <td>Number</td>
            <td>3</td>
          </tr>
          <tr>
            <td>background</td>
            <td>背景色</td>
            <td>String</td>
            <td>#ffffff</td>
          </tr>
          <tr>
            <td>foreground</td>
            <td>前景色</td>
            <td>String</td>
            <td>#000000</td>
          </tr>
          <tr>
            <td>pdground</td>
            <td>三个角的颜色</td>
            <td>String</td>
            <td>#000000</td>
          </tr>
          <tr>
            <td>image</td>
            <td>二维码正中间图片的 <code>url</code>，只支持配置正方形图片</td>
            <td>String</td>
            <td>--</td>
          </tr>
          <tr>
            <td>imageSize</td>
            <td>正中间图片的宽和高，单位为 <code>px</code></td>
            <td>Number</td>
            <td>40</td>
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
  import ExampleTag from "./examples/tag";
  import ExampleSize from "./examples/size";
  import ExampleCorrectLevel from "./examples/correct-level";
  import ExampleColor from "./examples/color";
  import ExampleImage from "./examples/image";

  export default {
    mixins: [
      MixinAnchors
    ],
    components: {
      Document,
      ExampleBasicUsage,
      ExampleTag,
      ExampleSize,
      ExampleCorrectLevel,
      ExampleColor,
      ExampleImage
    }
  };
</script>