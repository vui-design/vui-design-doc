<template>
  <div>
    <document>
      <h1>PageHeader 页头</h1>
      <p>页头位于页容器中，页容器顶部，起到了内容概览和引导页级操作的作用。包括由面包屑、标题、页面内容简介、页面级操作、页面级导航等组成。</p>
      <h2>何时使用</h2>
      <p>当需要使用户快速理解当前页是什么，以及方便用户使用页面功能时使用，通常也可被用作页面间导航。</p>
      <h2>代码演示</h2>
    </document>
     <example-basic-usage />
     <example-ghost />
     <example-breadcrumb />
     <example-more />
     <example-content />
    <document>
      <h2 id="example-api">API</h2>
      <h3>PageHeader 属性</h3>
      <table class="example-api-props">
        <thead>
          <tr>
            <th width="160">属性</th>
            <th>说明</th>
            <th width="160">类型</th>
            <th width="160">默认值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>breadcrumb</td>
            <td>面包屑配置。为数组类型时，数组项为 <code>Object</code> 类型，详细的项目属性请参考 <code>BreadcrumbItem</code> 组件</td>
            <td>Array | Slot</td>
            <td>--</td>
          </tr>
          <tr>
            <td>backIcon</td>
            <td>自定义后退按钮图标类型/图标</td>
            <td>String | Slot</td>
            <td>--</td>
          </tr>
          <tr>
            <td>avatar</td>
            <td>标题左侧的头像地址/头像</td>
            <td>String | Slot</td>
            <td>--</td>
          </tr>
          <tr>
            <td>title</td>
            <td>标题</td>
            <td>String | Slot</td>
            <td>--</td>
          </tr>
          <tr>
            <td>subTitle</td>
            <td>副标题</td>
            <td>String | Slot</td>
            <td>--</td>
          </tr>
          <tr>
            <td>tags</td>
            <td>标题右侧的 <code>Tag</code> 列表。为数组类型时，数组项为 <code>Object</code> 类型，如 <code>[{ color: "red", title: "Tag" }]</code></td>
            <td>Array | Slot</td>
            <td>--</td>
          </tr>
          <tr>
            <td>extra</td>
            <td>操作区，位于标题行的行尾</td>
            <td>Slot</td>
            <td>--</td>
          </tr>
          <tr>
            <td>footer</td>
            <td><code>PageHeader</code> 的页脚，一般用于渲染横向导航菜单</td>
            <td>Slot</td>
            <td>--</td>
          </tr>
          <tr>
            <td>ghost</td>
            <td><code>PageHeader</code> 的背景类型，将会改变背景颜色</td>
            <td>Boolean</td>
            <td>true</td>
          </tr>
        </tbody>
      </table>
      <h3>PageHeader 事件</h3>
      <table class="example-api-events">
        <thead>
          <tr>
            <th width="160">事件名</th>
            <th>说明</th>
            <th width="160">类型</th>
            <th width="160">回调参数</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>back</td>
            <td>返回按钮的点击事件回调函数</td>
            <td>Function</td>
            <td>event</td>
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
  import ExampleGhost from "./examples/ghost";
  import ExampleBreadcrumb from "./examples/breadcrumb";
  import ExampleMore from "./examples/more";
  import ExampleContent from "./examples/content";

  export default {
    mixins: [
      MixinAnchors
    ],
    components: {
      Document,
      ExampleBasicUsage,
      ExampleGhost,
      ExampleBreadcrumb,
      ExampleMore,
      ExampleContent
    }
  };
</script>