const code =
`<template>
    <div ref="container" class="example-affix-container">
      <div class="example-affix-container-content">
        <vui-affix v-bind:getScrollContainer="getScrollContainer">
          <vui-button type="primary">Fixed at the top of container</vui-button>
        </vui-affix>
      </div>
    </div>
</template>

<script>
  export default {
    methods: {
      getScrollContainer() {
        return this.$refs.container;
      }
    }
  };
</script>

<style>
  .example-affix-container { height:200px; overflow-y:auto; }
  .example-affix-container-content { height:400px; padding:40px 0; }
</style>
`;

export default code;