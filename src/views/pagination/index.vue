<template>
  <div>
    <document>
      <h1>Pagination 分页</h1>
      <p>采用分页的形式分隔长列表，每次只加载一个页面。</p>
      <h2>何时使用</h2>
      <ul>
        <li>当加载/渲染所有数据将花费很多时间时；</li>
        <li>可切换页码浏览数据。</li>
      </ul>
      <h2>代码演示</h2>
    </document>
     <example-basic-usage />
    <example-more />
    <example-total />
    <example-flip-button />
    <example-pageSize />
    <example-goto />
    <example-align />
    <example-small />
    <example-simple />
    <example-hide-on-single-page /> 
    <document>
      <h2 id="example-api">API</h2>
      <h3>Pagination 属性</h3>
      <table class="example-api-props">
        <thead>
          <tr>
            <th width="180">属性</th>
            <th>说明</th>
            <th width="200">类型</th>
            <th width="180">默认值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>small</td>
            <td>使用小型尺寸</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>simple</td>
            <td>使用简洁版本</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>align</td>
            <td>对齐方式，可选值为 <code>left</code>、<code>center</code>、<code>right</code> 或者不设</td>
            <td>String</td>
            <td>left</td>
          </tr>
          <tr>
            <td>total</td>
            <td>数据总数</td>
            <td>Number</td>
            <td>0</td>
          </tr>
          <tr>
            <td>showTotal</td>
            <td>用于显示数据总数和当前数据范围</td>
            <td>Boolean | Function</td>
            <td>false</td>
          </tr>
          <tr>
            <td>page</td>
            <td>当前页码，可以使用 <code>v-model</code> 双向绑定数据</td>
            <td>Number</td>
            <td>1</td>
          </tr>
          <tr>
            <td>pageSize</td>
            <td>每页条数</td>
            <td>Number</td>
            <td>10</td>
          </tr>
          <tr>
            <td>pageSizeOptions</td>
            <td>用于指定 <code>pageSize</code> 的可选列表</td>
            <td>Array</td>
            <td>[10, 20, 30, 40]</td>
          </tr>
          <tr>
            <td>showPageSizer</td>
            <td>是否可以切换 <code>pageSize</code></td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>showPageElevator</td>
            <td>是否可以快速跳转至某一页</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>prevPageText</td>
            <td>替代图标显示的上一页文字</td>
            <td>String</td>
            <td>--</td>
          </tr>
          <tr>
            <td>nextPageText</td>
            <td>替代图标显示的下一页文字</td>
            <td>String</td>
            <td>--</td>
          </tr>
          <tr>
            <td>hideOnSinglePage</td>
            <td>当只有一页时是否隐藏分页</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
        </tbody>
      </table>
      <h3>Pagination 事件</h3>
      <table class="example-api-events">
        <thead>
          <tr>
            <th width="180">事件名</th>
            <th>说明</th>
            <th width="200">类型</th>
            <th width="180">回调参数</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>input</td>
            <td>页码改变时触发的事件回调，可以使用 <code>v-model</code> 双向绑定数据</td>
            <td>Function</td>
            <td>page</td>
          </tr>
          <tr>
            <td>change</td>
            <td>页码改变时触发的事件回调</td>
            <td>Function</td>
            <td>page</td>
          </tr>
          <tr>
            <td>changePageSize</td>
            <td>切换 <code>pageSize</code> 时触发的事件回调</td>
            <td>Function</td>
            <td>pageSize</td>
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
  import ExampleMore from "./examples/more";
  import ExampleTotal from "./examples/total";
  import ExampleFlipButton from "./examples/flip-button";
  import ExamplePageSize from "./examples/page-size";
  import ExampleGoto from "./examples/goto";
  import ExampleAlign from "./examples/align";
  import ExampleSmall from "./examples/small";
  import ExampleSimple from "./examples/simple";
  import ExampleHideOnSinglePage from "./examples/hide-on-single-page";

  export default {
    mixins: [
      MixinAnchors
    ],
    components: {
      Document,
      ExampleBasicUsage,
      ExampleMore,
      ExampleTotal,
      ExampleFlipButton,
      ExamplePageSize,
      ExampleGoto,
      ExampleAlign,
      ExampleSmall,
      ExampleSimple,
      ExampleHideOnSinglePage
    }
  };
</script>