<template>
  <div>
    <document>
      <h1>Breadcrumb 面包屑</h1>
      <p>显示当前页面在系统层级结构中的位置，并能向上返回。</p>
      <h2>何时使用</h2>
      <ul>
        <li>当系统拥有超过两级以上的层级结构时；</li>
        <li>当需要告知用户『你在哪里』时；</li>
        <li>当需要向上导航的功能时。</li>
      </ul>
      <h2>代码演示</h2>
    </document>
    <vui-row v-bind:gutter="16">
      <vui-col v-bind:span="12">
        <example-basic-usage />
        <example-icon />
        <example-separator />
      </vui-col>
      <vui-col v-bind:span="12">
        <example-link />
      </vui-col>
    </vui-row>
    <document>
      <h2 id="example-api">API</h2>
      <h3>Breadcrumb 属性</h3>
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
            <td>separator</td>
            <td>自定义分隔符</td>
            <td>String</td>
            <td>/</td>
          </tr>
        </tbody>
      </table>
      <h3>BreadcrumbItem 属性</h3>
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
            <td>icon</td>
            <td>项目图标类型</td>
            <td>String</td>
            <td>--</td>
          </tr>
          <tr>
            <td>title</td>
            <td>项目标题</td>
            <td>String</td>
            <td>--</td>
          </tr>
          <tr>
            <td>href</td>
            <td>设置项目点击后的跳转地址，指定此属性后项目的行为和 <code>a</code> 链接一致</td>
            <td>String</td>
            <td>--</td>
          </tr>
          <tr>
            <td>to</td>
            <td>设置项目点击后的跳转地址，指定此属性后项目的行为和 <code>&lt;router-link /&gt;</code> 组件一致</td>
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
    </document>
  </div>
</template>

<script>
  import MixinAnchors from "src/mixins/anchors";
  import Document from "src/components/document";
  import ExampleBasicUsage from "./examples/basic-usage";
  import ExampleLink from "./examples/link";
  import ExampleIcon from "./examples/icon";
  import ExampleSeparator from "./examples/separator";

  export default {
    mixins: [
      MixinAnchors
    ],
    components: {
      Document,
      ExampleBasicUsage,
      ExampleLink,
      ExampleIcon,
      ExampleSeparator
    }
  };
</script>