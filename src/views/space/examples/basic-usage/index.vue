<template>
  <example v-bind:code="code" id="example-space-basic-usage">
    <template slot="demo">
      <vui-space>
        Space
        <vui-button type="primary">Button</vui-button>
        <vui-dropdown placement="bottom-start">
          <vui-button>Dropdown</vui-button>
          <vui-dropdown-menu slot="menu">
            <vui-dropdown-menu-item name="1" title="Menu Item 1" />
            <vui-dropdown-menu-item name="2" title="Menu Item 2" />
            <vui-dropdown-menu-item name="3" title="Menu Item 3" />
            <vui-dropdown-menu-item name="4" title="Menu Item 4" />
          </vui-dropdown-menu>
        </vui-dropdown>
        <vui-popconfirm title="Are you sure delete this task?" cancelText="No" okText="Yes">
          <vui-button type="dashed">Delete</vui-button>
        </vui-popconfirm>
      </vui-space>
    </template>
    <template slot="title">基本用法</template>
    <template slot="description">
      <p>相邻组件水平间距。</p>
    </template>
  </example>
</template>

<script>
  import Example from "src/components/example";
  import code from "./code";

  export default {
    components: {
      Example
    },
    data() {
      return {
        code
      };
    }
  };
</script>