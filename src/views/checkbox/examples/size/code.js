const code =
`<template>
  <div class="example-checkbox-size">
    <section>
      <vui-checkbox-group size="small" v-model="value1">
        <vui-checkbox v-bind:value="1">A</vui-checkbox>
        <vui-checkbox v-bind:value="2">B</vui-checkbox>
        <vui-checkbox v-bind:value="3">C</vui-checkbox>
        <vui-checkbox v-bind:value="4">D</vui-checkbox>
      </vui-checkbox-group>
    </section>
    <section>
      <vui-checkbox-group v-model="value2">
        <vui-checkbox v-bind:value="1">A</vui-checkbox>
        <vui-checkbox v-bind:value="2" disabled>B</vui-checkbox>
        <vui-checkbox v-bind:value="3">C</vui-checkbox>
        <vui-checkbox v-bind:value="4">D</vui-checkbox>
      </vui-checkbox-group>
    </section>
    <section>
      <vui-checkbox-group size="large" v-model="value3" disabled>
        <vui-checkbox v-bind:value="1">A</vui-checkbox>
        <vui-checkbox v-bind:value="2">B</vui-checkbox>
        <vui-checkbox v-bind:value="3">C</vui-checkbox>
        <vui-checkbox v-bind:value="4">D</vui-checkbox>
      </vui-checkbox-group>
    </section>
    <section>
      <vui-checkbox-group type="button" size="small" v-model="value1">
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
      <vui-checkbox-group type="button" size="large" v-model="value3" disabled>
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
        value1: 1,
        value2: 1,
        value3: 1
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
  .example-checkbox-size section + section { margin-top:16px; font-size:0; }
</style>
`;

export default code;