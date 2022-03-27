<template>
  <div>
    <document>
      <h1>Select 选择器</h1>
      <p>下拉选择器。</p>
      <h2>何时使用</h2>
      <ul>
        <li>弹出一个下拉菜单给用户选择操作，用于代替原生的选择器，或者需要一个更优雅的多选器时。</li>
        <li>当选项少时（少于 5 项），建议直接将选项平铺，使用 <code>Radio</code> 或 <code>Checkbox</code> 是更好的选择。</li>
      </ul>
      <h2>代码演示</h2>
    </document>
    <vui-row v-bind:gutter="16">
      <vui-col v-bind:span="12">
        <example-basic-usage />
        <example-multiple />
        <example-size />
        <example-searchable />
        <example-remote-search />
        <example-users />
        <example-bordered />
        <example-clearable />
      </vui-col>
      <vui-col v-bind:span="12">
        <example-disabled />
        <example-group />
        <example-coordinate />
        <example-backfill-option-prop />
        <example-max-tag-count />
        <example-hide-selected-options />
        <example-big-data />
      </vui-col>
    </vui-row>
    <document>
      <h2 id="example-api">API</h2>
      <h3>Select 属性</h3>
      <table class="example-api-props">
        <thead>
          <tr>
            <th width="180">属性</th>
            <th>说明</th>
            <th width="300">类型</th>
            <th width="180">默认值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>size</td>
            <td>选择框尺寸，可选值为 <code>small</code>、<code>medium</code>、<code>large</code> 或者不设</td>
            <td>String</td>
            <td>medium</td>
          </tr>
          <tr>
            <td>placeholder</td>
            <td>选择框占位文本</td>
            <td>String</td>
            <td>请选择...</td>
          </tr>
          <tr>
            <td>value</td>
            <td>指定选中项目的 <code>value</code> 值，可以使用 <code>v-model</code> 双向绑定数据</td>
            <td>String | Number | Boolean | Array</td>
            <td>--</td>
          </tr>
          <tr>
            <td>backfillOptionProp</td>
            <td>回填到选择框的 <code>Option</code> 属性值，可选值为 <code>label</code>、<code>value</code>、<code>children</code> 或者不设</td>
            <td>String | Function</td>
            <td>children</td>
          </tr>
          <tr>
            <td>multiple</td>
            <td>是否支持多选</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>maxTagCount</td>
            <td>多选模式下选择框中最多显示多少个 <code>tag</code> 标签</td>
            <td>Number</td>
            <td>--</td>
          </tr>
          <tr>
            <td>maxTagPlaceholder</td>
            <td>隐藏剩余 <code>tag</code> 标签时显示的内容，参数为剩余数量</td>
            <td>Function</td>
            <td>--</td>
          </tr>
          <tr>
            <td>searchable</td>
            <td>是否支持搜索</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>filter</td>
            <td>是否根据搜索关键词进行筛选。当其为一个函数时，会接收 <code>keyword</code>、<code>option</code> 两个参数，当 <code>option</code> 符合条件时，应返回 <code>true</code>，反之返回 <code>false</code></td>
            <td>Boolean | Function</td>
            <td>true</td>
          </tr>
          <tr>
            <td>filterOptionProp</td>
            <td>筛选时按 <code>Option</code> 的指定属性进行过滤，如设置为 <code>children</code> 表示对内嵌内容进行搜索，可选值为 <code>label</code>、<code>value</code>、<code>children</code> 或者不设</td>
            <td>String</td>
            <td>children</td>
          </tr>
          <tr>
            <td>allowCreate</td>
            <td>多选模式下是否允许用户创建新的项目</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>loading</td>
            <td>是否处于 <code>loading</code> 状态（即当前是否正在进行远程搜索）</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>loadingText</td>
            <td>远程搜索时的文本提示</td>
            <td>String</td>
            <td>加载中...</td>
          </tr>
          <tr>
            <td>notFoundText</td>
            <td>选项为空时的文本提示</td>
            <td>String</td>
            <td>暂无数据</td>
          </tr>
          <tr>
            <td>clearKeywordOnSelect</td>
            <td>是否在选中选项后自动清空搜索关键词，只在多选模式下有效</td>
            <td>Boolean</td>
            <td>true</td>
          </tr>
          <tr>
            <td>bordered</td>
            <td>是否有边框</td>
            <td>Boolean</td>
            <td>true</td>
          </tr>
          <tr>
            <td>clearable</td>
            <td>是否显示清空图标</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>是否禁用</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>placement</td>
            <td>下拉弹窗的弹出位置，可选值为 <code>top</code>、<code>top-start</code>、<code>top-end</code>、<code>bottom</code>、<code>bottom-start</code>、<code>bottom-end</code> 或者不设</td>
            <td>String</td>
            <td>bottom-start</td>
          </tr>
          <tr>
            <td>dropdownClassName</td>
            <td>下拉弹窗的样式类名</td>
            <td>String</td>
            <td>--</td>
          </tr>
          <tr>
            <td>dropdownAutoWidth</td>
            <td>下拉弹框宽度是否根据选项内容自动设置，默认将设置 <code>min-width</code>，保持最小宽度与选择框同宽</td>
            <td>Boolean</td>
            <td>true</td>
          </tr>
          <tr>
            <td>getPopupContainer</td>
            <td>指定下拉弹框挂载的 HTML 节点</td>
            <td>Function</td>
            <td>() => document.body</td>
          </tr>
          <tr>
            <td>beforeSelect</td>
            <td>选择某一选项前触发的回调函数，可用于判断选项是否可选，返回 <code>false</code> 时禁止选择，支持返回 <code>Promise</code> 对象</td>
            <td>Function</td>
            <td>--</td>
          </tr>
          <tr>
            <td>beforeDeselect</td>
            <td>取消选择某一选项前触发的回调函数，返回 <code>false</code> 时禁止取消选择，支持返回 <code>Promise</code> 对象</td>
            <td>Function</td>
            <td>--</td>
          </tr>
        </tbody>
      </table>
      <h3>Select 事件</h3>
      <table class="example-api-events">
        <thead>
          <tr>
            <th width="180">事件名</th>
            <th>说明</th>
            <th width="300">类型</th>
            <th width="180">回调参数</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>focus</td>
            <td>选择框获得光标时触发的事件回调函数</td>
            <td>Function</td>
            <td>--</td>
          </tr>
          <tr>
            <td>blur</td>
            <td>选择框失去光标时触发的事件回调函数</td>
            <td>Function</td>
            <td>--</td>
          </tr>
          <tr>
            <td>search</td>
            <td>搜索关键词发生变化时触发的事件回调函数</td>
            <td>Function</td>
            <td>keyword</td>
          </tr>
          <tr>
            <td>input</td>
            <td>选中项发生变化时触发的事件回调函数，可以使用 <code>v-model</code> 双向绑定数据</td>
            <td>Function</td>
            <td>value</td>
          </tr>
          <tr>
            <td>change</td>
            <td>选中项发生变化时触发的事件回调函数</td>
            <td>Function</td>
            <td>value, label[s]</td>
          </tr>
        </tbody>
      </table>
      <h3>OptionGroup 属性</h3>
      <table class="example-api-props">
        <thead>
          <tr>
            <th width="180">属性</th>
            <th>说明</th>
            <th width="300">类型</th>
            <th width="180">默认值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>label</td>
            <td>分组名称，必填</td>
            <td>String</td>
            <td>--</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>是否禁用该分组下所有选项</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
        </tbody>
      </table>
      <h3>Option 属性</h3>
      <table class="example-api-props">
        <thead>
          <tr>
            <th width="180">属性</th>
            <th>说明</th>
            <th width="300">类型</th>
            <th width="180">默认值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>label</td>
            <td>选项标签</td>
            <td>String</td>
            <td>--</td>
          </tr>
          <tr>
            <td>value</td>
            <td>选项值，必填</td>
            <td>String | Number | Boolean</td>
            <td>--</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>是否禁用</td>
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
  import ExampleMultiple from "./examples/multiple";
  import ExampleSize from "./examples/size";
  import ExampleSearchable from "./examples/searchable";
  import ExampleRemoteSearch from "./examples/remote-search";
  import ExampleUsers from "./examples/users";
  import ExampleBordered from "./examples/bordered";
  import ExampleClearable from "./examples/clearable";
  import ExampleDisabled from "./examples/disabled";
  import ExampleGroup from "./examples/group";
  import ExampleCoordinate from "./examples/coordinate";
  import ExampleBackfillOptionProp from "./examples/backfill-option-prop";
  import ExampleMaxTagCount from "./examples/max-tag-count";
  import ExampleHideSelectedOptions from "./examples/hide-selected-options";
  import ExampleBigData from "./examples/big-data";

  export default {
    mixins: [
      MixinAnchors
    ],
    components: {
      Document,
      ExampleBasicUsage,
      ExampleMultiple,
      ExampleSize,
      ExampleSearchable,
      ExampleRemoteSearch,
      ExampleUsers,
      ExampleBordered,
      ExampleClearable,
      ExampleDisabled,
      ExampleGroup,
      ExampleCoordinate,
      ExampleBackfillOptionProp,
      ExampleMaxTagCount,
      ExampleHideSelectedOptions,
      ExampleBigData
    }
  };
</script>