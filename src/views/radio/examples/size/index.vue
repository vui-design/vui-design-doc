<template>
  <vui-doc-example v-bind:code="code" id="example-radio-size">
    <template slot="demo">
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
    <template slot="title">尺寸</template>
    <template slot="description">
      <p>通过 <code>size</code> 属性使用不同尺寸的单选组合。</p>
    </template>
  </vui-doc-example>
</template>

<script>
  import VuiDocExample from "src/components/example";
  import code from "./code";

  export default {
    name: "ExampleRadioSize",
    components: {
      VuiDocExample
    },
    data() {
      return {
        code,
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
  .example-radio-size section + section { margin-top:16px; font-size:0; }
</style>