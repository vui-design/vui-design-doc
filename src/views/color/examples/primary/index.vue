<template>
  <vui-row v-bind:gutter="16">
    <vui-col v-bind:span="6">
      <color value="#2d8cf0" light="#4298f2" dark="#297ed8" title="Primary" />
    </vui-col>
  </vui-row>
</template>

<script>
  import Color from "src/components/color";

  export default {
    components: {
      Color
    }
  };
</script>