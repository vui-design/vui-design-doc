const code =
`<template>
  <div class="example-space-size">
    <vui-radio-group v-model="size">
      <vui-radio label="Small" value="small" />
      <vui-radio label="Medium" value="medium" />
      <vui-radio label="Large" value="large" />
    </vui-radio-group>
    <section>
      <vui-space v-bind:size="size">
        <vui-button type="primary">Primary</vui-button>
        <vui-button>Default</vui-button>
        <vui-button type="dashed">Dashed</vui-button>
        <vui-button type="text">Text</vui-button>
      </vui-space>
    </section>
    <section>
      <vui-space divider v-bind:size="size">
        <a href="javascript:;">Link</a>
        <a href="javascript:;">Link</a>
        <a href="javascript:;">Link</a>
      </vui-space>
    </section>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        size: "small"
      };
    }
  };
</script>

<style>
  .example-space-size section { margin-top:24px; }
</style>
`;

export default code;