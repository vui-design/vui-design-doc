<template>
  <example v-bind:code="code" id="example-form-inline">
    <template slot="demo">
      <vui-form layout="inline">
        <vui-form-item>
          <vui-input v-model="form.username" prefix="user" style="width: 200px;" placeholder="Username" />
        </vui-form-item>
        <vui-form-item>
          <vui-input v-model="form.password" type="password" prefix="lock" style="width: 200px;" placeholder="Password" />
        </vui-form-item>
        <vui-form-item>
          <vui-button type="primary">Sign in</vui-button>
        </vui-form-item>
      </vui-form>
    </template>
    <template slot="title">行内表单</template>
    <template slot="description">
      <p>当垂直方向空间受限且表单较简单时，可以在一行内放置表单组件。</p>
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
        form: {
          username: "",
          password: ""
        }
      };
    },
    watch: {
      form: {
        deep: true,
        handler: function(value) {
          console.log(JSON.stringify(value));
        }
      }
    }
  };
</script>