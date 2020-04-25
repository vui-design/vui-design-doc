<template>
	<Example id="example-steps-icon">
		<template slot="source">
			<vui-steps v-bind:step="2">
				<vui-step icon="user" title="Login" />
				<vui-step icon="shield-flash" title="Verification" />
				<vui-step icon="loading" title="Pay" />
				<vui-step icon="checkmark-circle" title="Done" />
			</vui-steps>
		</template>
		<template slot="title">自定义图标的步骤条</template>
		<template slot="describe">
			<p>通过 <code>Step</code> 的 <code>icon</code> 属性，可以使用自定义图标。</p>
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
				code
			};
		}
	};
</script>