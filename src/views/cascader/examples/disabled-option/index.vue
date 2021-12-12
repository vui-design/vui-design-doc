<template>
  <example v-bind:code="code" id="example-cascader-disabled-option">
    <template slot="demo">
      <vui-cascader
        v-model="value"
        v-bind:options="options"
        style="width: 200px;"
        placeholder="Please select"
      />
    </template>
    <template slot="title">禁用选项</template>
    <template slot="description">
      <p>通过指定 <code>options</code> 里的 <code>disabled</code> 字段来禁用选项。</p>
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
            },
            {
              value: "xiasha",
              label: "Xia Sha",
              disabled: true
            }
          ]
        }
      ]
    },
    {
      value: "jiangsu",
      label: "Jiangsu",
      disabled: true,
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