<template>
  <example v-bind:code="code" id="example-checkbox-button">
    <template slot="demo">
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
    <template slot="title">按钮样式</template>
    <template slot="description">
      <p>按钮样式的多选组合。</p>
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