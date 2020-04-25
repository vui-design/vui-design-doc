const code =
`<template>
  <div class="example-button-loading">
    <section>
      <vui-button type="primary" icon="dustbin" :loading="loading2" @click="handleClick2">Click me</vui-button>
      <vui-button type="primary" :loading="loading1" @click="handleClick1">Click me</vui-button>
      <vui-button type="primary" loading>Loading...</vui-button>
    </section>
    <section>
      <vui-button type="primary" shape="circle" loading />
      <vui-button shape="circle" loading />
    </section>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        loading1: false,
        loading2: false
      };
    },
    methods: {
      handleClick1() {
        this.loading1 = true;
      },
      handleClick2() {
        this.loading2 = true;
      },
    }
  };
</script>

<style>
  .example-button-loading > section:not(:last-child) { margin-bottom:20px; }
  .example-button-loading > section > .vui-button { margin-right:10px; }
</style>
`;

export default code;