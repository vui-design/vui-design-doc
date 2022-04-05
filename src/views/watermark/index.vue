<template>
  <div>
    <document>
      <h1>Watermark 水印</h1>
      <p>水印，对页面敏感信息进行蒙层遮罩。</p>
      <h2>何时使用</h2>
      <ul>
        <li>为了防止截图等安全问题，在页面或局部板块中生成一个平铺的水印。</li>
        <li>要求水印内容为用户名，水印节点不能通过开发者工具修改、删除等。</li>
      </ul>
      <h2>代码演示</h2>
    </document>
    <example-basic-usage />
    <example-font />
    <example-size />
    <example-rotate />
    <document>
      <h2 id="example-api">API</h2>
      <h3>Watermark 属性</h3>
      <table class="example-api-props">
        <thead>
          <tr>
            <th width="140">属性</th>
            <th>说明</th>
            <th width="180">类型</th>
            <th width="200">默认值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>text</td>
            <td>水印文本</td>
            <td>String</td>
            <td>--</td>
          </tr>
          <tr>
            <td>color</td>
            <td>水印文本的字体颜色</td>
            <td>String</td>
            <td>rgba(0, 0, 0, 0.15)</td>
          </tr>
          <tr>
            <td>fontSize</td>
            <td>水印文本的字体大小</td>
            <td>String | Number</td>
            <td>14px</td>
          </tr>
          <tr>
            <td>fontFamily</td>
            <td>水印文本的字体，默认使用的字体同 <code>document.body</code> 一致</td>
            <td>String</td>
            <td>--</td>
          </tr>
          <tr>
            <td>width</td>
            <td>单个水印的画布宽度</td>
            <td>Number</td>
            <td>320</td>
          </tr>
          <tr>
            <td>height</td>
            <td>单个水印的画布高度</td>
            <td>Number</td>
            <td>120</td>
          </tr>
          <tr>
            <td>rotate</td>
            <td>单个水印的偏转角度，小于 <code>0</code> 时逆时针偏转，反之则顺时针偏转</td>
            <td>Number</td>
            <td>-20</td>
          </tr>
          <tr>
            <td>rows</td>
            <td>水印重复行数（水平循环次数）</td>
            <td>Number</td>
            <td>20</td>
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
  import ExampleFont from "./examples/font";
  import ExampleSize from "./examples/size";
  import ExampleRotate from "./examples/rotate";

  export default {
    mixins: [
      MixinAnchors
    ],
    components: {
      Document,
      ExampleBasicUsage,
      ExampleFont,
      ExampleSize,
      ExampleRotate
    }
  };
</script>