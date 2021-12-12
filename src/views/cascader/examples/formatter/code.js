const code =
`<template>
  <vui-cascader
    v-model="value"
    v-bind:options="options"
    v-bind:formatter="formatter"
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
`;

export default code;