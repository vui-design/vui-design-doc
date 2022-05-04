<template>
  <div>
    <document>
      <h1>Dropdown 下拉菜单</h1>
      <p>向下弹出的菜单列表。</p>
      <h2>何时使用</h2>
      <p>当页面上的操作命令过多时，用此组件可以收纳操作元素。点击或移入触点，会出现一个下拉菜单。可在列表中进行选择，并执行相应的命令。</p>
      <h2>代码演示</h2>
    </document>
    <vui-row v-bind:gutter="16">
      <vui-col v-bind:span="12">
        <example-basic-usage />
        <example-other-elements />
        <example-trigger />
        <example-event />
      </vui-col>
      <vui-col v-bind:span="12">
        <example-cascaded />
        <example-placement />
        <example-button />
      </vui-col>
    </vui-row>
    <document>
      <h2 id="example-api">API</h2>
      <h3>Dropdown 属性</h3>
      <table class="example-api-props">
        <thead>
          <tr>
            <th width="180">属性</th>
            <th>说明</th>
            <th width="160">类型</th>
            <th width="200">默认值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>visible</td>
            <td>下拉菜单是否显示，可以使用 <code>v-model</code> 双向绑定数据</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>trigger</td>
            <td>下拉菜单的触发方式，可选值为 <code>hover</code>、<code>click</code> 或者不设</td>
            <td>String</td>
            <td>hover</td>
          </tr>
          <tr>
            <td>placement</td>
            <td>下拉菜单的弹出位置，可选值为 <code>top</code>、<code>top-start</code>、<code>top-end</code>、<code>bottom</code>、<code>bottom-start</code>、<code>bottom-end</code> 或者不设</td>
            <td>String</td>
            <td>bottom-start</td>
          </tr>
          <tr>
            <td>dropdownAutoWidth</td>
            <td>下拉菜单的宽度是否根据菜单内容自适应，设置为 <code>false</code> 时将保持与操作按钮或链接同宽</td>
            <td>Boolean</td>
            <td>true</td>
          </tr>
          <tr>
            <td>getPopupContainer</td>
            <td>指定下拉菜单挂载的 HTML 节点</td>
            <td>Function</td>
            <td>() => document.body</td>
          </tr>
        </tbody>
      </table>
      <h3>Dropdown 事件</h3>
      <table class="example-api-events">
        <thead>
          <tr>
            <th width="180">事件名</th>
            <th>说明</th>
            <th width="160">类型</th>
            <th width="200">回调参数</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>change</td>
            <td>下拉菜单显示状态发生变化时触发的事件回调函数</td>
            <td>Function</td>
            <td>visible</td>
          </tr>
        </tbody>
      </table>
      <h3>DropdownButton 属性</h3>
      <table class="example-api-props">
        <thead>
          <tr>
            <th width="180">属性</th>
            <th>说明</th>
            <th width="160">类型</th>
            <th width="200">默认值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>type</td>
            <td>按钮类型，可选值为 <code>default</code>、<code>primary</code>、<code>info</code>、<code>warning</code>、<code>success</code>、<code>error</code>、<code>dashed</code>、<code>text</code> 或者不设</td>
            <td>String</td>
            <td>default</td>
          </tr>
          <tr>
            <td>icon</td>
            <td>按钮图标类型/图标</td>
            <td>String | Slot</td>
            <td>--</td>
          </tr>
          <tr>
            <td>visible</td>
            <td>下拉菜单是否显示，可以使用 <code>v-model</code> 双向绑定数据</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>trigger</td>
            <td>下拉菜单的触发方式，可选值为 <code>hover</code>、<code>click</code> 或者不设</td>
            <td>String</td>
            <td>hover</td>
          </tr>
          <tr>
            <td>placement</td>
            <td>下拉菜单的弹出位置，可选值为 <code>top</code>、<code>top-start</code>、<code>top-end</code>、<code>bottom</code>、<code>bottom-start</code>、<code>bottom-end</code> 或者不设</td>
            <td>String</td>
            <td>bottom-end</td>
          </tr>
          <tr>
            <td>dropdownAutoWidth</td>
            <td>下拉菜单的宽度是否根据菜单内容自适应，设置为 <code>false</code> 时将保持与操作按钮或链接同宽</td>
            <td>Boolean</td>
            <td>true</td>
          </tr>
          <tr>
            <td>getPopupContainer</td>
            <td>指定下拉菜单挂载的 HTML 节点</td>
            <td>Function</td>
            <td>() => document.body</td>
          </tr>
        </tbody>
      </table>
      <h3>DropdownButton 事件</h3>
      <table class="example-api-events">
        <thead>
          <tr>
            <th width="180">事件名</th>
            <th>说明</th>
            <th width="160">类型</th>
            <th width="200">回调参数</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>click</td>
            <td>左侧按钮点击时触发的事件回调函数</td>
            <td>Function</td>
            <td>--</td>
          </tr>
          <tr>
            <td>change</td>
            <td>右侧按钮的下拉菜单显示状态发生变化时触发的事件回调函数</td>
            <td>Function</td>
            <td>visible</td>
          </tr>
        </tbody>
      </table>
      <h3>DropdownMenu 属性</h3>
      <table class="example-api-props">
        <thead>
          <tr>
            <th width="180">属性</th>
            <th>说明</th>
            <th width="160">类型</th>
            <th width="200">默认值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>color</td>
            <td>菜单的主题颜色，可选值为 <code>light</code>、<code>dark</code> 或者不设</td>
            <td>String</td>
            <td>light</td>
          </tr>
          <tr>
            <td>width</td>
            <td>菜单的宽度</td>
            <td>String | Number</td>
            <td>--</td>
          </tr>
        </tbody>
      </table>
      <h3>DropdownMenu 事件</h3>
      <table class="example-api-events">
        <thead>
          <tr>
            <th width="180">事件名</th>
            <th>说明</th>
            <th width="160">类型</th>
            <th width="200">回调参数</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>click</td>
            <td>点击 <code>DropdownMenuItem</code> 时触发的事件回调函数</td>
            <td>Function</td>
            <td>value</td>
          </tr>
        </tbody>
      </table>
      <h3>DropdownSubmenu 属性</h3>
      <table class="example-api-props">
        <thead>
          <tr>
            <th width="180">属性</th>
            <th>说明</th>
            <th width="160">类型</th>
            <th width="200">默认值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>value</td>
            <td>子菜单的唯一值/标识</td>
            <td>String | Number</td>
            <td>--</td>
          </tr>
          <tr>
            <td>icon</td>
            <td>子菜单图标类型/图标</td>
            <td>String | Slot</td>
            <td>--</td>
          </tr>
          <tr>
            <td>title</td>
            <td>子菜单标题</td>
            <td>String | Slot</td>
            <td>--</td>
          </tr>
          <tr>
            <td>width</td>
            <td>子菜单的宽度</td>
            <td>String | Number</td>
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
      <h3>DropdownMenuItemGroup 属性</h3>
      <table class="example-api-props">
        <thead>
          <tr>
            <th width="180">属性</th>
            <th>说明</th>
            <th width="160">类型</th>
            <th width="200">默认值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>title</td>
            <td>分组标题</td>
            <td>String | Slot</td>
            <td>--</td>
          </tr>
        </tbody>
      </table>
      <h3>DropdownMenuItem 属性</h3>
      <table class="example-api-props">
        <thead>
          <tr>
            <th width="180">属性</th>
            <th>说明</th>
            <th width="160">类型</th>
            <th width="200">默认值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>value</td>
            <td>菜单项的唯一值/标识</td>
            <td>String | Number</td>
            <td>--</td>
          </tr>
          <tr>
            <td>icon</td>
            <td>菜单项图标类型/图标</td>
            <td>String | Slot</td>
            <td>--</td>
          </tr>
          <tr>
            <td>title</td>
            <td>菜单项标题</td>
            <td>String | Slot</td>
            <td>--</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>是否禁用</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>href</td>
            <td>设置菜单项点击后的跳转地址，指定此属性后菜单项的行为和 <code>a</code> 链接一致</td>
            <td>String</td>
            <td>--</td>
          </tr>
          <tr>
            <td>to</td>
            <td>设置菜单项点击后的跳转地址，指定此属性后菜单项的行为和 <code>&lt;router-link /&gt;</code> 组件一致</td>
            <td>String | Object</td>
            <td>--</td>
          </tr>
          <tr>
            <td>replace</td>
            <td>同 <code>&lt;router-link /&gt;</code> 组件的 <code>replace</code> 属性，详细说明请参考 <a href="https://router.vuejs.org/zh/api/#replace" target="_blank">Vue Router API</a></td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>append</td>
            <td>同 <code>&lt;router-link /&gt;</code> 组件的 <code>append</code> 属性，详细说明请参考 <a href="https://router.vuejs.org/zh/api/#append" target="_blank">Vue Router API</a></td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>target</td>
            <td>相当于 <code>a</code> 链接的 <code>target</code> 属性，可选值请参考 <a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a#attr-target" target="_blank">HTML 标准</a></td>
            <td>String</td>
            <td>--</td>
          </tr>
        </tbody>
      </table>
      <h3>DropdownMenuDivider 属性</h3>
      <table class="example-api-props">
        <thead>
          <tr>
            <th width="180">属性</th>
            <th>说明</th>
            <th width="160">类型</th>
            <th width="200">默认值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>gutter</td>
            <td>分割线距离菜单项之间的间隔，单位 <code>px</code></td>
            <td>String | Number</td>
            <td>4</td>
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
  import ExampleOtherElements from "./examples/other-elements";
  import ExampleTrigger from "./examples/trigger";
  import ExampleEvent from "./examples/event";
  import ExampleCascaded from "./examples/cascaded";
  import ExamplePlacement from "./examples/placement";
  import ExampleButton from "./examples/button";

  export default {
    mixins: [
      MixinAnchors
    ],
    components: {
      Document,
      ExampleBasicUsage,
      ExampleOtherElements,
      ExampleTrigger,
      ExampleEvent,
      ExampleCascaded,
      ExamplePlacement,
      ExampleButton
    }
  };
</script>