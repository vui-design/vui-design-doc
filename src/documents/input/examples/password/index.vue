<template>
	<Example vertical id="example-input-password">
		<template slot="source">
			<vui-input type="password" v-model="value" showPasswordToggler placeholder="Please enter password..." />
		</template>
		<template slot="title">密码框</template>
		<template slot="describe">
			<p>密码框，开启 <code>showPasswordToggler</code> 属性可以切换显示隐藏密码。</p>
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
				value: ""
			};
		}
	};
</script>