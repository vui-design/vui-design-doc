<template>
  <example v-bind:code="code" id="example-checkbox-size">
    <template slot="demo">
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
    <template slot="title">尺寸</template>
    <template slot="description">
      <p>通过 <code>size</code> 属性使用不同尺寸的多选组合。</p>
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
  .example-checkbox-size section + section { margin-top:16px; font-size:0; }
</style>