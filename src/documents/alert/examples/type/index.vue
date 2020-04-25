<template>
	<Example vertical id="example-alert-type">
		<template slot="source">
			<div class="example-alert-type">
				<vui-alert message="Information" />
				<vui-alert type="warning" message="Warning" />
				<vui-alert type="success" message="Success" />
				<vui-alert type="error" message="Error" />
			</div>
		</template>
		<template slot="title">四种类型</template>
		<template slot="describe">
			<p>共有 <code>info</code>、<code>warning</code>、<code>success</code>、<code>error</code> 四种类型可以选择，默认为 <code>info</code> 类型。</p>
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