<template>
  <example v-bind:code="code" id="example-modal-update-and-close">
    <template slot="demo">
      <vui-button type="primary" v-on:click="showSuccessNotice">Close automatically after 5s</vui-button>
    </template>
    <template slot="title">更新和关闭</template>
    <template slot="description">
      <p>手动更新和关闭通过 <code>this.$modal[type]</code> 方式创建的对话框。</p>
    </template>
  </example>
</template>

<script>
  import Example from "src/components/example";
  import code from "./code";

  export default {
    components: {
      Example
    },
    data() {
      return {
        code
      };
    },
    methods: {
      showSuccessNotice() {
        let seconds = 5;
        let modal = this.$modal.success({
          title: "Friendly Tips",
          description: "This modal will be closed after " + seconds + " second!"
        });
        let interval = setInterval(() => {
          seconds -= 1;
          modal.update({
            description: "This modal will be closed after " + seconds + " second!"
          });
        }, 1000);

        setTimeout(() => {
          clearInterval(interval);
          interval = null;

          modal.close();
        }, seconds * 1000);
      }
    }
  };
</script>
