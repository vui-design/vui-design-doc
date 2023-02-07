<template>
  <example v-bind:code="code" id="example-radio-button">
    <template slot="demo">
      <div class="example-radio-button">
        <section>
          <vui-radio-group type="button" v-model="value1">
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
          <vui-radio-group type="button" v-model="value3" disabled>
            <vui-radio v-bind:value="1">A</vui-radio>
            <vui-radio v-bind:value="2">B</vui-radio>
            <vui-radio v-bind:value="3">C</vui-radio>
            <vui-radio v-bind:value="4">D</vui-radio>
          </vui-radio-group>
        </section>
      </div>
    </template>
    <template slot="title">按钮样式</template>
    <template slot="description">
      <p>按钮样式的单选组合。</p>
    </template>
  </example>
</template>

<script>
  import Example from "src/components/example";
  import code from "./code";

  export default {
    components: {
      Example
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
  .example-radio-button section { line-height:1; }
  .example-radio-button section + section { margin-top:16px; }
</style>