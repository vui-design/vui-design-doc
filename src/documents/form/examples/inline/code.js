const code =
`<template>
  <vui-form layout="inline">
    <vui-form-item>
      <vui-input v-model="form.username" prefix="user" placeholder="Username" style="width: 200px;" />
    </vui-form-item>
    <vui-form-item>
      <vui-input v-model="form.password" prefix="lock" placeholder="Password" style="width: 200px;" />
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
        handler: function(newValue, oldValue) {
          console.log(JSON.stringify(newValue));
        }
      }
    }
  };
</script>
`;

export default code;