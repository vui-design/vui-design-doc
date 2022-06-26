<template>
  <div>
    <document>
      <h1>CascadeTransfer 级联穿梭框</h1>
      <p>双栏级联穿梭选择框。</p>
      <h2>何时使用</h2>
      <ul>
        <li>需要在多个可选项中进行多选时。</li>
        <li>相较于 <code>Select</code>，级联穿梭框占据更大的空间，可以展示可选项的更多信息。</li>
      </ul>
      <p>级联穿梭选择框用直观的方式在两栏中移动元素，完成选择行为。</p>
      <p>选择一个或以上的选项后，可以把选中的选项移动到另一栏。其中，左边一栏为 <code>source</code>，右边一栏为 <code>target</code>，API 的设计也反映了这两个概念。</p>
      <h2>代码演示</h2>
    </document>
    <example-basic-usage />
    <document>
      <h2 id="example-api">API</h2>
      <h3>CascadeTransfer 属性</h3>
      <table class="example-api-props">
        <thead>
          <tr>
            <th width="200">属性</th>
            <th>说明</th>
            <th width="220">类型</th>
            <th width="220">默认值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>value</td>
            <td>选中项的 <code>value</code> 值集合，显示在右侧一栏中，可以使用 <code>v-model</code> 双向绑定数据</td>
            <td>Array</td>
            <td>[]</td>
          </tr>
          <tr>
            <td>options</td>
            <td>可选项数据源，其中的数据将会被渲染到左侧一栏中</td>
            <td>Array</td>
            <td>[]</td>
          </tr>
          <tr>
            <td>valueKey</td>
            <td>指定选项的 <code>value</code> 值属性名</td>
            <td>String</td>
            <td>value</td>
          </tr>
          <tr>
            <td>childrenKey</td>
            <td>指定选项的 <code>children</code> 子选项属性名</td>
            <td>String</td>
            <td>children</td>
          </tr>
          <tr>
            <td>title</td>
            <td>面板标题</td>
            <td>Function</td>
            <td>props => ""</td>
          </tr>
          <tr>
            <td>formatter</td>
            <td>选项数据渲染函数，接收 <code>options</code> 中的数据项作为参数</td>
            <td>Function | Scoped Slot</td>
            <td>option => option.label</td>
          </tr>
          <tr>
            <td>checkedStrategy</td>
            <td>定义选中项回填的方式。为 <code>parent</code> 时只显示父节点（当父节点下所有子节点都选中时），为 <code>children</code> 时只显示选中的子节点</td>
            <td>String</td>
            <td>parent</td>
          </tr>
          <tr>
            <td>showTargetPanel</td>
            <td>是否显示右侧栏</td>
            <td>Boolean</td>
            <td>true</td>
          </tr>
          <tr>
            <td>showSelectAll</td>
            <td>是否显示全选勾选框</td>
            <td>Boolean</td>
            <td>true</td>
          </tr>
          <tr>
            <td>showClear</td>
            <td>是否显示清空按钮</td>
            <td>Boolean</td>
            <td>true</td>
          </tr>
          <tr>
            <td>showChildrenCount</td>
            <td>是否显示子选项数量</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>searchable</td>
            <td>是否支持搜索</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>filterOptionProp</td>
            <td>搜索时按 <code>option</code> 的指定属性进行筛选，在设置了自定义 <code>filter</code> 函数时可忽略此属性</td>
            <td>String</td>
            <td>label</td>
          </tr>
          <tr>
            <td>filter</td>
            <td>自定义搜索函数，接收 <code>keyword</code>、<code>option</code> 两个参数，若 <code>option</code> 符合筛选条件，应返回 <code>true</code>，反之返回 <code>false</code></td>
            <td>Function</td>
            <td>--</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>是否禁用</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>locale</td>
            <td>默认文案设置，目前包括清空按钮、搜索输入框占位文本、暂无数据等相关文案</td>
            <td>Object</td>
            <td>
<pre style="margin: 0;">
{
  clear: "清空",
  search: "请输入搜索内容",
  notFound: "暂无数据"
}
</pre>
            </td>
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

  export default {
    mixins: [
      MixinAnchors
    ],
    components: {
      Document,
      ExampleBasicUsage
    }
  };
</script>