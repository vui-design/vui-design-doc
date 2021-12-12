<template>
  <example v-bind:code="code" id="example-cascader-bordered">
    <template slot="demo">
      <vui-cascader
        v-model="value"
        v-bind:bordered="false"
        v-bind:options="options"
        placeholder="Please select"
      />
    </template>
    <template slot="title">无边框</template>
    <template slot="description">
      <p>没有边框。</p>
    </template>
  </example>
</template>

<script>
  import Example from "src/components/example";
  import code from "./code";

  const options = [
    {
      value: "zhejiang",
      label: "Zhejiang",
      children: [
        {
          value: "hangzhou",
          label: "Hangzhou",
          children: [
            {
              value: "xihu",
              label: "West Lake"
            }
          ]
        }
      ]
    },
    {
      value: "jiangsu",
      label: "Jiangsu",
      children: [
        {
          value: "nanjing",
          label: "Nanjing",
          children: [
            {
              value: "zhonghuamen",
              label: "Zhong Hua Men"
            }
          ]
        }
      ]
    }
  ];

  export default {
    components: {
      Example
    },
    data() {
      return {
        code,
        value: [],
        options: options
      };
    },
    watch: {
      value(value) {
        console.log(value);
      }
    }
  };
</script>