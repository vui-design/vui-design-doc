const code =
`<template>
  <div class="example-input-size">
    <section>
      <vui-radio-group type="button" v-model="size">
        <vui-radio label="Small" value="small" />
        <vui-radio label="Medium" value="medium" />
        <vui-radio label="Large" value="large" />
      </vui-radio-group>
    </section>
    <section>
      <vui-input v-bind:size="size" placeholder="Enter something..." />
      <vui-input v-bind:size="size" suffix="calendar" placeholder="Enter something..." />
      <vui-input v-bind:size="size" append="@qq.com" placeholder="Enter something..." />
    </section>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        size: "medium"
      };
    }
  };
</script>

<style>
  .example-input-size section + section{ margin-top:24px; }
  .example-input-size .vui-input + .vui-input { margin-top:24px; }
</style>
`;

export default code;