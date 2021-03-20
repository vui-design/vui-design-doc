const code =
`<template>
  <div class="example-affix-basic-usage">
    <section>
      <vui-affix v-bind:offsetTop="top">
        <vui-button type="primary" v-on:click="addTop">Affix top</vui-button>
      </vui-affix>
    </section>
    <section>
      <vui-affix v-bind:offsetBottom="bottom">
        <vui-button type="primary" v-on:click="addBottom">Affix bottom</vui-button>
      </vui-affix>
    </section>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        top: 10,
        bottom: 10
      };
    },
    methods: {
      addTop() {
        this.top += 10;
      },
      addBottom() {
        this.bottom += 10;
      }
    }
  };
</script>

<style>
  .example-affix-basic-usage section + section { margin-top:16px; }
</style>
`;

export default code;