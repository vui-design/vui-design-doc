const code =
`<template>
  <div class="example-input-number-size">
    <section>
      <vui-radio-group type="button" v-model="size">
        <vui-radio label="Small" value="small" />
        <vui-radio label="Medium" value="medium" />
        <vui-radio label="Large" value="large" />
      </vui-radio-group>
    </section>
    <section style="margin-top: 15px;">
      <vui-input-number :size="size" v-model="value" />
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
      size(value) {
        console.log(value);
      },
      value(value) {
        console.log(value);
      }
    }
  };
</script>
`;

export default code;