<template>
	<vui-doc-example v-bind:code="code" id="example-form-dynamic">
		<template slot="demo">
			<vui-form ref="form" v-bind:model="form" v-bind:labelWidth="100">
				<vui-form-item
					v-for="(item, index) in form.items"
					v-bind:key="index"
					v-bind:prop="'items.' + index + '.value'"
					v-bind:rules="getRules(index)"
					v-bind:label="'Item ' + (index + 1)"
				>
					<vui-input v-model="item.value" style="width: 200px;" placeholder="服务地址" />
					<vui-button-group style="margin-left: 10px;">
						<vui-button icon="minus" v-if="form.items.length > 1" v-on:click="handleRemove(index)" />
						<vui-button icon="plus" v-if="index === form.items.length - 1" v-on:click="handleAdd" />
					</vui-button-group>
				</vui-form-item>
				<vui-form-item>
					<vui-button type="primary" v-on:click="handleSubmit">Submit</vui-button>
					<vui-button style="margin-left: 20px;" v-on:click="handleReset">Reset</vui-button>
				</vui-form-item>
			</vui-form>
		</template>
		<template slot="title">动态增减表单项</template>
		<template slot="description">
			<p>当需要动态维护 <code>FormItem</code> 时，也可以直接给 <code>FormItem</code> 设置 <code>rules</code> 属性来单独为该域做验证。</p>
		</template>
	</vui-doc-example>
</template>

<script>
	import VuiDocExample from "src/components/example";
	import code from "./code";

	export default {
		components: {
			VuiDocExample
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
			getRules(index) {
				return {
					trigger: "blur",
					required: true,
					message: "Item " + (index + 1) + " can not be empty"
				};
			},
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