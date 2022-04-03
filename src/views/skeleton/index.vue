<template>
  <div>
    <document>
      <h1>Skeleton 骨架屏</h1>
      <p>在需要等待加载内容的位置提供一个占位图形组合。</p>
      <h2>何时使用</h2>
      <ul>
        <li>网络较慢，需要长时间等待加载处理的情况下；</li>
        <li>图文信息内容较多的列表/卡片中；</li>
        <li>只在第一次加载数据的时候使用；</li>
        <li>可以被 <code>Spin</code> 完全代替，但是在可用的场景下可以比 <code>Spin</code> 提供更好的视觉效果和用户体验。</li>
      </ul>
      <h2>代码演示</h2>
    </document>
    <example-basic-usage />
    <example-complex />
    <example-animated />
    <example-element />
    <example-children />
    <example-list />
    <document>
      <h2 id="example-api">API</h2>
      <h3>Skeleton 属性</h3>
      <table class="example-api-props">
        <thead>
          <tr>
            <th width="140">属性</th>
            <th>说明</th>
            <th width="300">类型</th>
            <th width="140">默认值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>loading</td>
            <td>为 <code>true</code> 时，显示占位图，反之则直接展示子组件</td>
            <td>Boolean</td>
            <td>--</td>
          </tr>
          <tr>
            <td>animated</td>
            <td>是否展示动画效果</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>avatar</td>
            <td>是否显示头像占位图</td>
            <td>Boolean | SkeletonAvatarProps</td>
            <td>false</td>
          </tr>
          <tr>
            <td>title</td>
            <td>是否显示标题占位图</td>
            <td>Boolean | SkeletonTitleProps</td>
            <td>true</td>
          </tr>
          <tr>
            <td>paragraph</td>
            <td>是否显示段落占位图</td>
            <td>Boolean | SkeletonParagraphProps</td>
            <td>true</td>
          </tr>
        </tbody>
      </table>
      <h3>SkeletonAvatarProps 属性</h3>
      <table class="example-api-props">
        <thead>
          <tr>
            <th width="140">属性</th>
            <th>说明</th>
            <th width="300">类型</th>
            <th width="140">默认值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>animated</td>
            <td>是否展示动画效果</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>shape</td>
            <td>头像占位图的形状，可选值为 <code>circle</code>、<code>square</code> 或者不设</td>
            <td>String</td>
            <td>circle</td>
          </tr>
          <tr>
            <td>size</td>
            <td>头像占位图的尺寸，预设值为 <code>small</code>、<code>medium</code>、<code>large</code>，可以设置为具体的数值</td>
            <td>String | Number</td>
            <td>medium</td>
          </tr>
        </tbody>
      </table>
      <h3>SkeletonTitleProps 属性</h3>
      <table class="example-api-props">
        <thead>
          <tr>
            <th width="140">属性</th>
            <th>说明</th>
            <th width="300">类型</th>
            <th width="140">默认值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>animated</td>
            <td>是否展示动画效果</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>width</td>
            <td>标题占位图的宽度</td>
            <td>String | Number</td>
            <td>--</td>
          </tr>
        </tbody>
      </table>
      <h3>SkeletonParagraphProps 属性</h3>
      <table class="example-api-props">
        <thead>
          <tr>
            <th width="140">属性</th>
            <th>说明</th>
            <th width="300">类型</th>
            <th width="140">默认值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>animated</td>
            <td>是否展示动画效果</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>rows</td>
            <td>段落占位图的行数</td>
            <td>Number</td>
            <td>--</td>
          </tr>
          <tr>
            <td>width</td>
            <td>段落占位图的宽度，若为数组时则为对应的每行宽度，反之则是最后一行的宽度</td>
            <td>String | Number | Array</td>
            <td>--</td>
          </tr>
        </tbody>
      </table>
      <h3>SkeletonInputProps 属性</h3>
      <table class="example-api-props">
        <thead>
          <tr>
            <th width="140">属性</th>
            <th>说明</th>
            <th width="300">类型</th>
            <th width="140">默认值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>animated</td>
            <td>是否展示动画效果</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>block</td>
            <td>使输入框占位图的宽度撑满父元素</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>size</td>
            <td>输入框占位图尺寸，可选值为 <code>small</code>、<code>medium</code>、<code>large</code> 或者不设</td>
            <td>String</td>
            <td>medium</td>
          </tr>
        </tbody>
      </table>
      <h3>SkeletonButtonProps 属性</h3>
      <table class="example-api-props">
        <thead>
          <tr>
            <th width="140">属性</th>
            <th>说明</th>
            <th width="300">类型</th>
            <th width="140">默认值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>animated</td>
            <td>是否展示动画效果</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>block</td>
            <td>使按钮占位图的宽度撑满父元素</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>shape</td>
            <td>按钮占位图形状，可选值为 <code>default</code>、<code>round</code>、<code>circle</code> 或者不设</td>
            <td>String</td>
            <td>default</td>
          </tr>
          <tr>
            <td>size</td>
            <td>按钮占位图尺寸，可选值为 <code>small</code>、<code>medium</code>、<code>large</code> 或者不设</td>
            <td>String</td>
            <td>medium</td>
          </tr>
        </tbody>
      </table>
      <h3>SkeletonImageProps 属性</h3>
      <table class="example-api-props">
        <thead>
          <tr>
            <th width="140">属性</th>
            <th>说明</th>
            <th width="300">类型</th>
            <th width="140">默认值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>animated</td>
            <td>是否展示动画效果</td>
            <td>Boolean</td>
            <td>false</td>
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
  import ExampleComplex from "./examples/complex";
  import ExampleAnimated from "./examples/animated";
  import ExampleElement from "./examples/element";
  import ExampleChildren from "./examples/children";
  import ExampleList from "./examples/list";

  export default {
    mixins: [
      MixinAnchors
    ],
    components: {
      Document,
      ExampleBasicUsage,
      ExampleComplex,
      ExampleAnimated,
      ExampleElement,
      ExampleChildren,
      ExampleList
    }
  };
</script>