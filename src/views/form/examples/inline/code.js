const code =
`<template>
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

<script>
  export default {
    data() {
      return {
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
`;

export default code;