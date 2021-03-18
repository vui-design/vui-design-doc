const code =
`<template>
  <div class="example-checkbox-button">
    <section>
      <vui-checkbox-group type="button" v-model="value1">
        <vui-checkbox v-bind:value="1">A</vui-checkbox>
        <vui-checkbox v-bind:value="2">B</vui-checkbox>
        <vui-checkbox v-bind:value="3">C</vui-checkbox>
        <vui-checkbox v-bind:value="4">D</vui-checkbox>
      </vui-checkbox-group>
    </section>
    <section>
      <vui-checkbox-group type="button" v-model="value2">
        <vui-checkbox v-bind:value="1">A</vui-checkbox>
        <vui-checkbox v-bind:value="2" disabled>B</vui-checkbox>
        <vui-checkbox v-bind:value="3">C</vui-checkbox>
        <vui-checkbox v-bind:value="4">D</vui-checkbox>
      </vui-checkbox-group>
    </section>
    <section>
      <vui-checkbox-group type="button" v-model="value3" disabled>
        <vui-checkbox v-bind:value="1">A</vui-checkbox>
        <vui-checkbox v-bind:value="2">B</vui-checkbox>
        <vui-checkbox v-bind:value="3">C</vui-checkbox>
        <vui-checkbox v-bind:value="4">D</vui-checkbox>
      </vui-checkbox-group>
    </section>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value1: [1],
        value2: [1],
        value3: [1]
      };
    },
    watch: {
      value1(value) {
        console.log(value);
      },
      value2(value) {
        console.log(value);
      },
      value3(value) {
        console.log(value);
      }
    }
  };
</script>

<style>
  .example-checkbox-button section + section { margin-top:16px; }
</style>
`;

export default code;