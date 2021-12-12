const code =
`<template>
  <vui-cascader
    v-model="value"
    v-bind:options="options"
    changeOnSelect
    searchable
    style="width: 200px;"
    placeholder="Please select"
  />
</template>

<script>
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
    data() {
      return {
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
`;

export default code;