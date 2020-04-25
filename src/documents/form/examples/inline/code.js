const code =
`<template>
  <vui-form layout="inline">
    <vui-form-item>
      <vui-input style="width: 200px;" prefix="user" placeholder="Username" v-model="form.username" />
    </vui-form-item>
    <vui-form-item>
      <vui-input style="width: 200px;" prefix="lock" placeholder="Password" v-model="form.password" />
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