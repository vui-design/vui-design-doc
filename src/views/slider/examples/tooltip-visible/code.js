const code =
`<template>
  <vui-slider v-model="value" v-bind:tooltip="tooltip" />
</template>

<script>
  export default {
    data() {
      return {
        value: 30,
        tooltip: {
          trigger: "always",
          formatter: value => value + "%"
        }
      };
    }
  };
</script>
`;

export default code;