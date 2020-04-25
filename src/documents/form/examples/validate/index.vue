<template>
	<Example vertical id="example-form-validate">
		<template slot="source">
			<vui-form ref="form" :model="form" :rules="rules" :labelWidth="100">
				<vui-form-item label="Name" prop="name">
					<vui-input style="width: 200px;" placeholder="Enter your name..." v-model="form.name" />
				</vui-form-item>
				<vui-form-item label="E-mail" prop="email">
					<vui-input style="width: 50%;" placeholder="Enter your e-mail..." v-model="form.email" />
				</vui-form-item>
				<vui-form-item label="City" prop="city">
					<vui-select style="width: 200px;" placeholder="Select your city..." clearable v-model="form.city">
						<vui-option value="new york">New York</vui-option>
						<vui-option value="london">London</vui-option>
						<vui-option value="sydney">Sydney</vui-option>
						<vui-option value="ottawa">Ottawa</vui-option>
						<vui-option value="paris">Paris</vui-option>
						<vui-option value="canberra">Canberra</vui-option>
					</vui-select>
				</vui-form-item>
				<vui-form-item label="Age" prop="age">
					<vui-input-number placeholder="Enter your age..." :min="15" :max="100" v-model="form.age" />
				</vui-form-item>
				<vui-form-item label="Birthday" prop="birthday">
					<vui-input style="width: 200px;" placeholder="Select your birthday..." v-model="form.birthday" />
				</vui-form-item>
				<vui-form-item label="Gender" prop="gender">
					<vui-radio-group v-model="form.gender">
						<vui-radio value="male">Male</vui-radio>
						<vui-radio value="female">Female</vui-radio>
					</vui-radio-group>
				</vui-form-item>
				<vui-form-item label="Hobby" prop="hobby">
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
				<vui-form-item label="Introduction" prop="introduction">
					<vui-textarea placeholder="Please introduce yourself briefly..." v-model="form.introduction" :autosize="{minRows: 4, maxRows: 8}" />
				</vui-form-item>
				<vui-form-item>
					<vui-button type="primary" @click="handleSubmit">Submit</vui-button>
					<vui-button style="margin-left: 20px;" @click="handleReset">Reset</vui-button>
				</vui-form-item>
			</vui-form>
		</template>
		<template slot="title">表单验证</template>
		<template slot="describe">
			<p><code>Form</code> 组件是基于 <a href="https://github.com/yiminghe/async-validator" target="_blank">async-validator</a> 实现数据验证的，给 <code>Form</code> 设置 <code>rules</code> 属性，同时给需要验证的 <code>FormItem</code> 设置 <code>prop</code> 属性指向对应字段即可。去 <a href="https://github.com/yiminghe/async-validator" target="_blank">async-validator</a> 了解完整的验证规则。</p>
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
						{ trigger: "blur", required: true, message: "Mailbox cannot be empty" },
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
		watch: {
			form: {
				deep: true,
				handler: function(newValue, oldValue) {
					console.log(JSON.stringify(newValue));
				}
			}
		},
		methods: {
			handleSubmit() {
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