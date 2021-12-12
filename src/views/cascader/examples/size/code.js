const code =
`<template>
  <div class="example-cascader-size">
    <vui-cascader v-bind:options="options" size="small" style="width: 200px;" placeholder="Please select" />
    <vui-cascader v-bind:options="options" style="width: 200px;" placeholder="Please select" />
    <vui-cascader v-bind:options="options" size="large" style="width: 200px;" placeholder="Please select" />
  </div>
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
        options: options
      };
    }
  };
</script>

<style>
  .example-cascader-size .vui-cascader { display:block; }
  .example-cascader-size .vui-cascader + .vui-cascader { margin-top:16px; }
</style>
`;

export default code;