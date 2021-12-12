const code =
`<template>
  <vui-cascader
    v-model="value"
    v-bind:options="options"
    v-bind:optionKeys="optionKeys"
    style="width: 200px;"
    placeholder="Please select"
  />
</template>

<script>
  const options = [
    {
      code: "zhejiang",
      name: "Zhejiang",
      items: [
        {
          code: "hangzhou",
          name: "Hangzhou",
          items: [
            {
              code: "xihu",
              name: "West Lake"
            },
            {
              code: "xiasha",
              name: "Xia Sha",
              invalid: true
            }
          ]
        }
      ]
    },
    {
      code: "jiangsu",
      name: "Jiangsu",
      items: [
        {
          code: "nanjing",
          name: "Nanjing",
          items: [
            {
              code: "zhonghuamen",
              name: "Zhong Hua Men"
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
        options: options,
        optionKeys: {
          label: "name",
          value: "code",
          children: "items",
          disabled: "invalid"
        }
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