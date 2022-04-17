<template>
  <div>
    <document>
      <h1>List 列表</h1>
      <p>通用列表。</p>
      <h2>何时使用</h2>
      <p>最基础的列表展示，可承载文字、列表、图片、段落，常用于后台数据展示页面。</p>
      <h2>代码演示</h2>
    </document>
    <example-simple />
    <example-basic-usage />
    <example-load-more />
    <example-vertical />
    <example-grid />
    <document>
      <h2 id="example-api">API</h2>
      <h3>List 属性</h3>
      <table class="example-api-props">
        <thead>
          <tr>
            <th width="140">属性</th>
            <th>说明</th>
            <th width="200">类型</th>
            <th width="140">默认值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>header</td>
            <td>列表底部内容</td>
            <td>String | Slot</td>
            <td>--</td>
          </tr>
          <tr>
            <td>footer</td>
            <td>列表头部内容</td>
            <td>String | Slot</td>
            <td>--</td>
          </tr>
          <tr>
            <td>layout</td>
            <td>设置 <code>ListItem</code> 项目布局，可选值为 <code>horizontal</code>、<code>vertical</code> 或者不设</td>
            <td>String</td>
            <td>horizontal</td>
          </tr>
          <tr>
            <td>size</td>
            <td>尺寸，可选值为 <code>small</code>、<code>medium</code>、<code>large</code> 或者不设</td>
            <td>String</td>
            <td>medium</td>
          </tr>
          <tr>
            <td>bordered</td>
            <td>是否显示边框</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>split</td>
            <td>是否显示分割线</td>
            <td>Boolean</td>
            <td>true</td>
          </tr>
          <tr>
            <td>grid</td>
            <td>列表栅格配置，详见示例〔栅格列表〕</td>
            <td>Object</td>
            <td>--</td>
          </tr>
          <tr>
            <td>item</td>
            <td>栅格模式下的项目插槽，详见示例〔栅格列表〕</td>
            <td>Slot</td>
            <td>--</td>
          </tr>
          <tr>
            <td>data</td>
            <td>列表数据，只在栅格模式下有效，详见示例〔栅格列表〕</td>
            <td>Array</td>
            <td>--</td>
          </tr>
        </tbody>
      </table>
      <h3>ListGrid 属性</h3>
      <table class="example-api-props">
        <thead>
          <tr>
            <th width="140">属性</th>
            <th>说明</th>
            <th width="200">类型</th>
            <th width="140">默认值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>gutter</td>
            <td>栅格间隔</td>
            <td>Number</td>
            <td>16</td>
          </tr>
          <tr>
            <td>column</td>
            <td>列数，可选值为 <code>1</code>、<code>2</code>、<code>3</code>、<code>4</code>、<code>6</code>、<code>8</code>、<code>12</code>、<code>24</code> 或者不设</td>
            <td>Number</td>
            <td>4</td>
          </tr>
        </tbody>
      </table>
      <h3>ListItem 属性</h3>
      <table class="example-api-props">
        <thead>
          <tr>
            <th width="140">属性</th>
            <th>说明</th>
            <th width="200">类型</th>
            <th width="140">默认值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>actions</td>
            <td>列表操作组，根据 <code>List</code> 组件 <code>layout</code> 属性值的不同，位置在卡片底部或者右侧</td>
            <td>Slot</td>
            <td>--</td>
          </tr>
          <tr>
            <td>extra</td>
            <td>额外内容，通常用在 <code>layout</code> 为 <code>vertical</code> 的情况下展示右侧内容</td>
            <td>Slot</td>
            <td>--</td>
          </tr>
        </tbody>
      </table>
      <h3>ListItemMeta 属性</h3>
      <table class="example-api-props">
        <thead>
          <tr>
            <th width="140">属性</th>
            <th>说明</th>
            <th width="200">类型</th>
            <th width="140">默认值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>avatar</td>
            <td>列表元素的头像</td>
            <td>String | Slot</td>
            <td>--</td>
          </tr>
          <tr>
            <td>title</td>
            <td>列表元素的标题</td>
            <td>String | Slot</td>
            <td>--</td>
          </tr>
          <tr>
            <td>description</td>
            <td>列表元素的描述内容</td>
            <td>String | Slot</td>
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
  import ExampleSimple from "./examples/simple";
  import ExampleBasicUsage from "./examples/basic-usage";
  import ExampleLoadMore from "./examples/load-more";
  import ExampleVertical from "./examples/vertical";
  import ExampleGrid from "./examples/grid";

  export default {
    mixins: [
      MixinAnchors
    ],
    components: {
      Document,
      ExampleSimple,
      ExampleBasicUsage,
      ExampleLoadMore,
      ExampleVertical,
      ExampleGrid,
    }
  };
</script>