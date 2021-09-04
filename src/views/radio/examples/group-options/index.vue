<template>
  <example v-bind:code="code" id="example-radio-group-options">
    <template slot="demo">
      <div class="example-radio-group-options">
        <section>
          <vui-radio-group v-model="value1" v-bind:options="options1" />
        </section>
        <section>
          <vui-radio-group v-model="value2" v-bind:options="options2" />
        </section>
        <section>
          <vui-radio-group v-model="value3" v-bind:options="options3" disabled />
        </section>
      </div>
    </template>
    <template slot="title">配置方式</template>
    <template slot="description">
      <p>通过配置 <code>options</code> 属性来渲染单选组合。</p>
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
        value1: "A",
        options1: ["A", "B", "C", "D"],
        value2: "A",
        options2: [
          { label: "A", value: "A" },
          { label: "B", value: "B", disabled: true },
          { label: "C", value: "C" },
          { label: "D", value: "D" }
        ],
        value3: "A",
        options3: [
          { label: "A", value: "A" },
          { label: "B", value: "B" },
          { label: "C", value: "C" },
          { label: "D", value: "D" }
        ]
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
  .example-radio-group-options section + section { margin-top:16px; font-size:0; }
</style>