<template>
	<Example vertical id="example-form-inline">
		<template slot="source">
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
		<template slot="title">行内表单</template>
		<template slot="describe">
			<p>当垂直方向空间受限且表单较简单时，可以在一行内放置表单组件。</p>
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