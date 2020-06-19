<template>
	<Example id="example-alert-close-text">
		<template slot="source">
			<vui-alert type="success" message="Success" closable closeText="Close" />
		</template>
		<template slot="title">自定义关闭按钮</template>
		<template slot="describe">
			<p>允许自定义关闭按钮，自定义的文本会替换默认的关闭图标。</p>
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