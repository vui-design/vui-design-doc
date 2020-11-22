const code =
`<template>
  <div class="example-rate-clearable">
    <section>
      <vui-rate v-model="value" />
      <p>clearable: true</p>
    </section>
    <section>
      <vui-rate v-model="value" v-bind:clearable="false" />
      <p>clearable: false</p>
    </section>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: 3
      };
    }
  };
</script>

<style>
  .example-rate-clearable section { display:flex; align-items:center; line-height:1; }
  .example-rate-clearable section + section { margin-top:16px; }
  .example-rate-clearable p { margin-left:16px; }
</style>
`;

export default code;