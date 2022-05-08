<template>
  <div>
    <document>
      <h1>Menu 导航菜单</h1>
      <p>为页面和功能提供导航的菜单列表。</p>
      <h2>何时使用</h2>
      <p>导航菜单是一个网站的灵魂，用户依赖导航在各个页面中进行跳转。一般分为顶部导航和侧边导航，顶部导航提供全局性的类目和功能，侧边导航提供多级结构来收纳和排列网站架构。</p>
      <h2>代码演示</h2>
    </document>
    <example-horizontal />
    <example-vertical />
    <example-inline />
    <example-inline-collapsed />
    <example-switch-mode />
    <document>
      <h2 id="example-api">API</h2>
      <h3>Menu 属性</h3>
      <table class="example-api-props">
        <thead>
          <tr>
            <th width="160">属性</th>
            <th>说明</th>
            <th width="200">类型</th>
            <th width="160">默认值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>mode</td>
            <td>菜单类型，可选值为 <code>horizontal</code>、<code>vertical</code>、<code>inline</code> 或者不设</td>
            <td>String</td>
            <td>horizontal</td>
          </tr>
          <tr>
            <td>color</td>
            <td>主题颜色，可选值为 <code>light</code>、<code>dark</code>，支持自定义颜色值</td>
            <td>String</td>
            <td>light</td>
          </tr>
          <tr>
            <td>collapsed</td>
            <td>是否水平折叠收起菜单，仅在 <code>mode</code> 为 <code>inline</code> 时可用</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>openNames</td>
            <td>当前打开的 <code>Submenu</code> 子菜单的 <code>name</code> 名称数组，仅在 <code>mode</code> 为 <code>inline</code> 时可用</td>
            <td>Array</td>
            <td>[]</td>
          </tr>
          <tr>
            <td>selectedName</td>
            <td>当前选中的 <code>MenuItem</code> 菜单项的 <code>name</code> 名称</td>
            <td>String | Number</td>
            <td>--</td>
          </tr>
        </tbody>
      </table>
      <h3>Menu 事件</h3>
      <table class="example-api-events">
        <thead>
          <tr>
            <th width="160">事件名</th>
            <th>说明</th>
            <th width="200">类型</th>
            <th width="160">回调参数</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>toggle</td>
            <td><code>Submenu</code> 打开/关闭时触发</td>
            <td>Function</td>
            <td><code>name[]</code></td>
          </tr>
          <tr>
            <td>open</td>
            <td><code>Submenu</code> 打开时触发</td>
            <td>Function</td>
            <td><code>name</code></td>
          </tr>
          <tr>
            <td>close</td>
            <td><code>Submenu</code> 关闭时触发</td>
            <td>Function</td>
            <td><code>name</code></td>
          </tr>
          <tr>
            <td>select</td>
            <td><code>MenuItem</code> 被选中时触发</td>
            <td>Function</td>
            <td><code>name</code></td>
          </tr>
        </tbody>
      </table>
      <h3>Submenu 属性</h3>
      <table class="example-api-props">
        <thead>
          <tr>
            <th width="160">属性</th>
            <th>说明</th>
            <th width="200">类型</th>
            <th width="160">默认值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>name</td>
            <td>子菜单唯一名称标志，默认自动生成</td>
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
            <td>disabled</td>
            <td>是否禁用</td>
            <td>Boolean</td>
            <td><code>false</code></td>
          </tr>
        </tbody>
      </table>
      <h3>MenuItemGroup 属性</h3>
      <table class="example-api-props">
        <thead>
          <tr>
            <th width="160">属性</th>
            <th>说明</th>
            <th width="200">类型</th>
            <th width="160">默认值</th>
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
      <h3>MenuItem 属性</h3>
      <table class="example-api-props">
        <thead>
          <tr>
            <th width="160">属性</th>
            <th>说明</th>
            <th width="200">类型</th>
            <th width="160">默认值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>name</td>
            <td>菜单项唯一名称标志，默认自动生成</td>
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
            <td><code>false</code></td>
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
            <td><code>false</code></td>
          </tr>
          <tr>
            <td>append</td>
            <td>同 <code>&lt;router-link /&gt;</code> 组件的 <code>append</code> 属性，详细说明请参考 <a href="https://router.vuejs.org/zh/api/#append" target="_blank">Vue Router API</a></td>
            <td>Boolean</td>
            <td><code>false</code></td>
          </tr>
          <tr>
            <td>target</td>
            <td>相当于 <code>a</code> 链接的 <code>target</code> 属性，可选值请参考 <a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a#attr-target" target="_blank">HTML 标准</a></td>
            <td>String</td>
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
  import ExampleHorizontal from "./examples/horizontal";
  import ExampleVertical from "./examples/vertical";
  import ExampleInline from "./examples/inline";
  import ExampleInlineCollapsed from "./examples/inline-collapsed";
  import ExampleSwitchMode from "./examples/switch-mode";

  export default {
    mixins: [
      MixinAnchors
    ],
    components: {
      Document,
      ExampleHorizontal,
      ExampleVertical,
      ExampleInline,
      ExampleInlineCollapsed,
      ExampleSwitchMode
    }
  };
</script>