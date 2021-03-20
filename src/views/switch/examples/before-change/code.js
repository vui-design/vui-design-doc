const code =
`<template>
  <vui-switch v-model="value" v-bind:beforeChange="beforeChange" />
</template>

<script>
  export default {
    data() {
      return {
        value: false
      };
    },
    watch: {
      value(value) {
        console.log(value);
      }
    }
    methods: {
      beforeChange(status, value) {
        const promise = new Promise((resolve, reject) => {
          this.$modal.confirm({
            title: "友情提示",
            description: "你确定要切换开关状态吗？",
            onCancel: reject,
            onOk: resolve
          });
        });

        return promise;
      }
    }
  };
</script>
`;

export default code;