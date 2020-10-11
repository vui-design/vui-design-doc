<template>
	<Example id="example-affix-change">
		<template slot="source">
			<vui-affix v-bind:offsetTop="top" v-on:change="handleChange">
				<vui-button>100px to affix top</vui-button>
			</vui-affix>
		</template>
		<template slot="title">监听状态变化</template>
		<template slot="describe">
			<p>通过 <code>change</code> 事件监听固定状态的变化。</p>
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
				top: 100
			};
		},
		methods: {
			handleChange(affixed) {
				console.log(affixed);
			}
		}
	};
</script>