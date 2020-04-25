<template>
	<Example vertical id="example-form-custom-validate">
		<template slot="source">
			<vui-form ref="form" :model="form" :rules="rules" :labelWidth="100">
				<vui-form-item label="Account" prop="account">
					<vui-input
						style="width: 200px;"
						placeholder="Enter your account..."
						v-model="form.account"
					/>
				</vui-form-item>
				<vui-form-item label="Password" prop="password">
					<vui-input
						type="password"
						showPasswordToggler
						style="width: 50%;"
						placeholder="Enter your password..."
						v-model="form.password"
					/>
				</vui-form-item>
				<vui-form-item label="Confirm" prop="confirm">
					<vui-input
						type="password"
						showPasswordToggler
						style="width: 50%;"
						placeholder="Enter your password again..."
						v-model="form.confirm"
					/>
				</vui-form-item>
				<vui-form-item>
					<vui-button type="primary" @click="handleSignup">Sign up</vui-button>
					<vui-button style="margin-left: 20px;" @click="handleReset">Reset</vui-button>
				</vui-form-item>
			</vui-form>
		</template>
		<template slot="title">自定义验证</template>
		<template slot="describe">
			<p>可以完全自定义验证规则来完成更复杂的验证，比如某些数据需要在服务端验证。示例展示的是一个简单的用户注册验证。</p>
		</template>
		<template slot="code">{{code}}</template>
	</Example>
</template>

<script>
	import Example from "@/components/example";
	import code from "./code";

	export default {
		components: {
			Example
		},
		data() {
			return {
				code,
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
		watch: {
			form: {
				deep: true,
				handler: function(newValue, oldValue) {
					console.log(JSON.stringify(newValue));
				}
			}
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
						this.$message.success("Validation passed");
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