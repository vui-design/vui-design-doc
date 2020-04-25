<template>
	<Example vertical id="example-form-dynamic">
		<template slot="source">
			<vui-form ref="form" :model="form" :labelWidth="100">
				<vui-form-item
					v-for="(item, index) in form.items"
					:key="index"
					:label="'Item ' + (index + 1)"
					:prop="'items.' + index + '.value'"
					:rules="{trigger: 'blur', required: true, message: 'Item ' + (index + 1) +' can not be empty'}"
				>
					<vui-input v-model="item.value" style="width: 200px;" placeholder="服务地址" />
					<vui-button-group style="margin-left: 10px;">
						<vui-button icon="minus" v-if="form.items.length > 1" @click="handleRemove(index)" />
						<vui-button icon="plus" v-if="index === form.items.length - 1" @click="handleAdd" />
					</vui-button-group>
				</vui-form-item>
				<vui-form-item>
					<vui-button type="primary" @click="handleSubmit">Submit</vui-button>
					<vui-button style="margin-left: 20px;" @click="handleReset">Reset</vui-button>
				</vui-form-item>
			</vui-form>
		</template>
		<template slot="title">动态增减表单项</template>
		<template slot="describe">
			<p>当需要动态维护 <code>FormItem</code> 时，也可以直接给 <code>FormItem</code> 设置 <code>rules</code> 属性来单独为该域做验证。</p>
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
					items: [
						{ value: "" }
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
			handleAdd() {
				this.form.items.push({
					value: ""
				});
			},
			handleRemove(index) {
				this.form.items.splice(index, 1);
			},
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