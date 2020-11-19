const code =
`<template>
  <vui-cascader v-model="value" v-bind:options="options" style="width: 200px;" />
</template>

<script>
  export default {
    data() {
      return {
        value: ["zhejiang", "hangzhou1", "xihu"],
        options: [
          {
            label: "Zhejiang",
            value: "zhejiang",
            children: [
              {
                label: "Hangzhou1",
                value: "hangzhou1",
                children: [
                  {
                    label: "West Lake",
                    value: "xihu"
                  }
                ]
              },
              {
                label: "Hangzhou2",
                value: "hangzhou2",
                children: [
                  {
                    label: "West Lake",
                    value: "xihu"
                  }
                ]
              },
              {
                label: "Hangzhou3",
                value: "hangzhou3",
                children: [
                  {
                    label: "West Lake",
                    value: "xihu"
                  }
                ]
              },
              {
                label: "Hangzhou4",
                value: "hangzhou4",
                children: [
                  {
                    label: "West Lake",
                    value: "xihu"
                  }
                ]
              },
              {
                label: "Hangzhou5",
                value: "hangzhou5",
                children: [
                  {
                    label: "West Lake",
                    value: "xihu"
                  }
                ]
              },
              {
                label: "Hangzhou6",
                value: "hangzhou6",
                children: [
                  {
                    label: "West Lake",
                    value: "xihu"
                  }
                ]
              },
              {
                label: "Hangzhou7",
                value: "hangzhou7",
                children: [
                  {
                    label: "West Lake",
                    value: "xihu"
                  }
                ]
              },
              {
                label: "Hangzhou8",
                value: "hangzhou8",
                children: [
                  {
                    label: "West Lake",
                    value: "xihu"
                  }
                ]
              },
              {
                label: "Hangzhou9",
                value: "hangzhou9",
                children: [
                  {
                    label: "West Lake",
                    value: "xihu"
                  }
                ]
              },
              {
                label: "Hangzhou10",
                value: "hangzhou10",
                children: [
                  {
                    label: "West Lake",
                    value: "xihu"
                  }
                ]
              }
            ]
          },
          {
            label: "Jiangsu",
            value: "jiangsu",
            children: [
              {
                label: "Nanjing",
                value: "nanjing",
                children: [
                  {
                    label: "Zhong Hua Men",
                    value: "zhonghuamen"
                  }
                ]
              }
            ]
          }
        ]
      };
    }
  };
</script>
`;

export default code;