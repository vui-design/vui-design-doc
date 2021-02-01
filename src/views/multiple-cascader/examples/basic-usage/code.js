const code =
`<template>
  <vui-multiple-cascader
    v-model="value"
    v-bind:title="getPanelTitle"
    v-bind:options="options"
    v-bind:formatter="formatter"
  />
</template>

<script>
  export default {
    data() {
      return {
        value: [],
        options: options,
        formatter: props => props.data.text
      };
    },
    methods: {
      getPanelTitle(props) {
        if (props.direction === "source") {
          return props.level > 1 ? props.parent.text : "省份";
        }
        else if (props.direction === "target") {
          return "已选";
        }
      }
    }
  };
</script>
`;

export default code;