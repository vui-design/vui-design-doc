<template>
	<vui-doc-example v-bind:code="code" id="example-input-password">
		<template slot="demo">
			<vui-input type="password" v-model="value" showPasswordToggler placeholder="Please enter password..." />
		</template>
		<template slot="title">密码框</template>
		<template slot="description">
			<p>密码框，开启 <code>showPasswordToggler</code> 属性可以切换显示隐藏密码。</p>
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
				value: ""
			};
		}
	};
</script>