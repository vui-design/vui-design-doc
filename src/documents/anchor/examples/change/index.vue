<template>
	<Example id="example-anchor-change">
		<template slot="source">
			<vui-anchor v-bind:affix="false" v-on:change="handleChange">
				<vui-anchor-link href="#example-anchor-basic-usage" title="Basic Usage" />
				<vui-anchor-link href="#example-anchor-static" title="Static" />
				<vui-anchor-link href="#example-api" title="API">
					<vui-anchor-link href="#example-api-anchor-props" title="Anchor Props" />
					<vui-anchor-link href="#example-api-anchor-events" title="Anchor Events" />
					<vui-anchor-link href="#example-api-anchor-link-props" title="Anchor Link Props" />
				</vui-anchor-link>
			</vui-anchor>
		</template>
		<template slot="title">监听锚点链接变化</template>
		<template slot="describe">
			<p>通过 <code>onChange</code> 事件监听锚点链接变化。</p>
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
		},
		methods: {
			handleChange(newHref, oldHref) {
				console.log("newHref:", newHref, "oldHref:", oldHref);
			}
		}
	};
</script>