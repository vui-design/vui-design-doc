<template>
  <example v-bind:code="code" id="example-modal-position">
    <template slot="demo">
      <div class="example-modal-position">
        <vui-button type="primary" v-on:click="showModal">Open modal at 160px to top</vui-button>
        <vui-modal v-model="visible" v-bind:centered="false" v-bind:top="160" title="Modal Title">
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </vui-modal>
      </div>
    </template>
    <template slot="title">位置</template>
    <template slot="description">
      <p>取消默认的垂直居中，使用 <code>top</code> 属性来设置对话框的打开位置。</p>
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
        code,
        visible: false
      };
    },
    methods: {
      showModal() {
        this.visible = true;
      }
    }
  };
</script>