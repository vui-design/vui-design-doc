const code =
`<template>
  <vui-anchor v-bind:offset="offset">
    <vui-anchor-link href="#example-anchor-basic-usage" title="Basic Usage" />
    <vui-anchor-link href="#example-anchor-static" title="Static" />
    <vui-anchor-link href="#example-api" title="API">
      <vui-anchor-link href="#example-api-anchor-props" title="Anchor Props" />
      <vui-anchor-link href="#example-api-anchor-events" title="Anchor Events" />
      <vui-anchor-link href="#example-api-anchor-link-props" title="Anchor Link Props" />
    </vui-anchor-link>
  </vui-anchor>
</template>

<script>
  export default {
    data() {
      return {
        offset: undefined
      };
    },
    mounted() {
      this.offset = window.innerHeight / 2;
    }
  };
</script>
`;

export default code;