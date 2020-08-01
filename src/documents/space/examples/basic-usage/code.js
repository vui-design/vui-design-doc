const code =
`<template>
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

<script>
  export default {

  };
</script>
`;

export default code;