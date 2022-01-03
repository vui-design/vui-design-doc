<template>
  <example v-bind:code="code" id="example-form-validate">
    <template slot="demo">
      <vui-form ref="form" v-bind:model="form" v-bind:rules="rules" v-bind:labelWidth="120">
        <vui-form-item prop="name" label="Name">
          <vui-input v-model="form.name" style="width: 200px;" placeholder="Enter your name..." />
        </vui-form-item>
        <vui-form-item prop="email" label="E-mail">
          <vui-input v-model="form.email" style="width: 50%;" placeholder="Enter your e-mail..." />
        </vui-form-item>
        <vui-form-item prop="city" label="City">
          <vui-select v-model="form.city" searchable style="width: 200px;" placeholder="Select your city...">
            <vui-option value="new york">New York</vui-option>
            <vui-option value="london">London</vui-option>
            <vui-option value="sydney">Sydney</vui-option>
            <vui-option value="ottawa">Ottawa</vui-option>
            <vui-option value="paris">Paris</vui-option>
            <vui-option value="canberra">Canberra</vui-option>
          </vui-select>
        </vui-form-item>
        <vui-form-item prop="age" label="Age">
          <vui-input-number v-model="form.age" v-bind:min="15" v-bind:max="100" placeholder="Enter your age..." />
        </vui-form-item>
        <vui-form-item prop="birthday" label="Birthday">
          <vui-input v-model="form.birthday" style="width: 200px;" placeholder="Select your birthday..." />
        </vui-form-item>
        <vui-form-item prop="gender" label="Gender">
          <vui-radio-group v-model="form.gender">
            <vui-radio value="male">Male</vui-radio>
            <vui-radio value="female">Female</vui-radio>
          </vui-radio-group>
        </vui-form-item>
        <vui-form-item prop="hobby" label="Hobby">
          <vui-checkbox-group v-model="form.hobby">
            <vui-checkbox value="eat">Eat</vui-checkbox>
            <vui-checkbox value="sleep">Sleep</vui-checkbox>
            <vui-checkbox value="run">Run</vui-checkbox>
            <vui-checkbox value="movie">Movie</vui-checkbox>
          </vui-checkbox-group>
        </vui-form-item>
        <vui-form-item label="Message reminder">
          <vui-switch v-model="form.message">
            <template slot="checked">ON</template>
            <template slot="unchecked">OFF</template>
          </vui-switch>
        </vui-form-item>
        <vui-form-item prop="introduction" label="Introduction">
          <vui-textarea v-model="form.introduction" autosize placeholder="Please introduce yourself briefly..." />
        </vui-form-item>
        <vui-form-item>
          <vui-button type="primary" v-on:click="handleSubmit">Submit</vui-button>
          <vui-button style="margin-left: 16px;" v-on:click="handleReset">Reset</vui-button>
        </vui-form-item>
      </vui-form>
    </template>
    <template slot="title">表单验证</template>
    <template slot="description">
      <p><code>Form</code> 组件是基于 <a href="https://github.com/yiminghe/async-validator" target="_blank">async-validator</a> 实现数据验证的，给 <code>Form</code> 设置 <code>rules</code> 属性，同时给需要验证的 <code>FormItem</code> 设置 <code>prop</code> 属性指向对应字段即可。去 <a href="https://github.com/yiminghe/async-validator" target="_blank">async-validator</a> 了解完整的验证规则。</p>
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
          name: "",
          email: "",
          city: undefined,
          age: undefined,
          birthday: "",
          gender: "male",
          hobby: [],
          message: false,
          introduction: ""
        },
        rules: {
          name: [
            { trigger: "blur" , required: true, message: "The name cannot be empty" }
          ],
          email: [
            { trigger: "blur", required: true, message: "The e-mail cannot be empty" },
            { trigger: "blur" , type: "email", message: "Incorrect email format" }
          ],
          city: [
            { trigger: "change", required: true, message: "Please select the city" }
          ],
          age: [
            { trigger: "change" , required: true, type: "number", message: "The age cannot be empty" }
          ],
          birthday: [
            { trigger: "blur", required: true, message: "The birthday cannot be empty" }
          ],
          hobby: [
            { trigger: "change", required: true, type: "array", min: 1, message: "Choose at least one hobby" },
            { trigger: "change", type: "array", max: 2, message: "Choose two hobbies at best" }
          ],
          introduction: [
            { trigger: "blur", required: true, message: "Please enter your introduction" },
            { trigger: "blur", type: "string", min: 20, message: "Introduce no less than 20 words" }
          ]
        }
      };
    },
    methods: {
      handleSubmit() {
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