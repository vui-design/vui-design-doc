const code =
`<template>
  <vui-dropdown>
    <a href="javascript:;">Hover me</a>
    <vui-dropdown-menu slot="menu">
      <vui-dropdown-menu-item value="1" title="Menu Item 1" />
      <vui-dropdown-menu-item value="2" title="Menu Item 2" />
      <vui-dropdown-menu-item disabled value="3" title="Menu Item 3" />
      <vui-dropdown-menu-divider />
      <vui-dropdown-menu-item value="4" title="Menu Item 4" />
    </vui-dropdown-menu>
  </vui-dropdown>
</template>

<script>
  export default {

  };
</script>
`;

export default code;