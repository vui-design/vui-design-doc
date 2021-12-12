<template>
  <example v-bind:code="code" id="example-cascader-formatter">
    <template slot="demo">
      <vui-cascader
        v-model="value"
        v-bind:options="options"
        v-bind:formatter="formatter"
        style="width: 200px;"
        placeholder="Please select"
      />
    </template>
    <template slot="title">自定义已选项</template>
    <template slot="description">
      <p>对于显示结果，可以通过 <code>formatter</code> 属性来实现自定义。其中第一个参数 <code>labels</code> 是当前已选选项的 <code>label</code> 集合，第二个参数 <code>selectedOptions</code> 是当前已选选项的数据集合，可以利用它们组合出你想要显示的内容。</p>
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
              label: "West Lake",
              code: 330009
            },
            {
              value: "xiasha",
              label: "Xia Sha",
              code: 310018,
              disabled: true
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
              label: "Zhong Hua Men",
              code: 210016
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
    },
    methods: {
      formatter(labels, selectedOptions) {
        const index = labels.length - 1;
        const option = selectedOptions[index];

        if (option && option.code) {
          return labels[index] + " - " + option.code;
        }

        return labels[index];
      }
    }
  };
</script>