<template>
  <example v-bind:code="code" id="example-cascader-change-on-select">
    <template slot="demo">
      <vui-cascader
        v-model="value"
        v-bind:options="options"
        changeOnSelect
        style="width: 200px;"
        placeholder="Please select"
      />
    </template>
    <template slot="title">选择即改变</template>
    <template slot="description">
      <p>这种交互允许只选中父级选项。</p>
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