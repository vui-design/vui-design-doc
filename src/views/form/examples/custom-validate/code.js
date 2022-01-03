const code =
`<template>
  <vui-form ref="form" v-bind:model="form" v-bind:rules="rules" v-bind:labelWidth="120">
    <vui-form-item label="Account" prop="account">
      <vui-input v-model="form.account" style="width: 200px;" placeholder="Enter your account..." />
    </vui-form-item>
    <vui-form-item label="Password" prop="password">
      <vui-input type="password" v-model="form.password" showPasswordToggler style="width: 50%;" placeholder="Enter your password..." />
    </vui-form-item>
    <vui-form-item label="Confirm" prop="confirm">
      <vui-input type="password" v-model="form.confirm" showPasswordToggler style="width: 50%;" placeholder="Enter your password again..." />
    </vui-form-item>
    <vui-form-item>
      <vui-button type="primary" v-on:click="handleSignup">Sign up</vui-button>
      <vui-button style="margin-left: 16px;" v-on:click="handleReset">Reset</vui-button>
    </vui-form-item>
  </vui-form>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          account: "",
          password: "",
          confirm: ""
        },
        rules: {
          account: [
            { trigger: "blur", validator: this.validateAccount }
          ],
          password: [
            { trigger: "blur", validator: this.validatePassword }
          ],
          confirm: [
            { trigger: "blur", validator: this.validateConfirm }
          ]
        }
      };
    },
    methods: {
      validateAccount(rule, value, callback) {
        if (!value) {
          return callback(new Error("Account cannot be empty"));
        }

        // 模拟异步验证效果
        setTimeout(() => {
          if (!/^\w\w{7,11}$/.test(value)) {
            callback(new Error("Account must be 8-12 letters or numbers"));
          }
          else if (value === "test") {
            callback(new Error("Account already exists"));
          }
          else {
            callback();
          }
        }, 500);
      },
      validatePassword(rule, value, callback) {
        if (value === "") {
          callback(new Error("Please enter your password"));
        }
        else {
          if (this.form.confirm !== "") {
            this.$refs.form.validateFields("confirm");
          }

          callback();
        }
      },
      validateConfirm(rule, value, callback) {
        if (value === "") {
          callback(new Error("Please enter your password again"));
        }
        else if (value !== this.form.password) {
          callback(new Error("The two input passwords do not match"));
        }
        else {
          callback();
        }
      },
      handleSignup() {
        this.$refs.form.validate(valid => {
          if (valid) {
            this.$message.success("Validation successed");
          }
          else {
            this.$message.error("Validation failed");
          }
        });
      },
      handleReset() {
        this.$refs.form.reset();
      }
    }
  };
</script>
`;

export default code;