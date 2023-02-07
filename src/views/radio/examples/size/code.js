const code =
`<template>
  <div class="example-radio-size">
    <section>
      <vui-radio-group size="small" v-model="value1">
        <vui-radio v-bind:value="1">A</vui-radio>
        <vui-radio v-bind:value="2">B</vui-radio>
        <vui-radio v-bind:value="3">C</vui-radio>
        <vui-radio v-bind:value="4">D</vui-radio>
      </vui-radio-group>
    </section>
    <section>
      <vui-radio-group v-model="value2">
        <vui-radio v-bind:value="1">A</vui-radio>
        <vui-radio v-bind:value="2" disabled>B</vui-radio>
        <vui-radio v-bind:value="3">C</vui-radio>
        <vui-radio v-bind:value="4">D</vui-radio>
      </vui-radio-group>
    </section>
    <section>
      <vui-radio-group size="large" v-model="value3" disabled>
        <vui-radio v-bind:value="1">A</vui-radio>
        <vui-radio v-bind:value="2">B</vui-radio>
        <vui-radio v-bind:value="3">C</vui-radio>
        <vui-radio v-bind:value="4">D</vui-radio>
      </vui-radio-group>
    </section>
    <section>
      <vui-radio-group type="button" size="small" v-model="value1">
        <vui-radio v-bind:value="1">A</vui-radio>
        <vui-radio v-bind:value="2">B</vui-radio>
        <vui-radio v-bind:value="3">C</vui-radio>
        <vui-radio v-bind:value="4">D</vui-radio>
      </vui-radio-group>
    </section>
    <section>
      <vui-radio-group type="button" v-model="value2">
        <vui-radio v-bind:value="1">A</vui-radio>
        <vui-radio v-bind:value="2" disabled>B</vui-radio>
        <vui-radio v-bind:value="3">C</vui-radio>
        <vui-radio v-bind:value="4">D</vui-radio>
      </vui-radio-group>
    </section>
    <section>
      <vui-radio-group type="button" size="large" v-model="value3" disabled>
        <vui-radio v-bind:value="1">A</vui-radio>
        <vui-radio v-bind:value="2">B</vui-radio>
        <vui-radio v-bind:value="3">C</vui-radio>
        <vui-radio v-bind:value="4">D</vui-radio>
      </vui-radio-group>
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
  .example-radio-size section { line-height:1; }
  .example-radio-size section + section { margin-top:16px; }
</style>
`;

export default code;