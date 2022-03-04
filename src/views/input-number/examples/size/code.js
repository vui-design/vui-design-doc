const code =
`<template>
  <div class="example-input-number-size">
    <section>
      <vui-radio-group type="button" v-model="size">
        <vui-radio value="small" label="Small" />
        <vui-radio value="medium" label="Medium" />
        <vui-radio value="large" label="Large" />
      </vui-radio-group>
    </section>
    <section style="margin-top: 16px;">
      <vui-input-number v-model="value" v-bind:size="size" />
    </section>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        size: "medium",
        value: 1
      };
    },
    watch: {
      value(value) {
        console.log(value);
      }
    }
  };
</script>
`;

export default code;