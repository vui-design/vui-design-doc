<template>
	<Example id="example-anchor-click">
		<template slot="source">
			<vui-anchor v-bind:affix="false" v-on:click="handleClick">
				<vui-anchor-link href="#example-anchor-basic-usage" title="Basic Usage" />
				<vui-anchor-link href="#example-anchor-static" title="Static" />
				<vui-anchor-link href="#example-api" title="API">
					<vui-anchor-link href="#example-api-anchor-props" title="Anchor Props" />
					<vui-anchor-link href="#example-api-anchor-events" title="Anchor Events" />
					<vui-anchor-link href="#example-api-anchor-link-props" title="Anchor Link Props" />
				</vui-anchor-link>
			</vui-anchor>
		</template>
		<template slot="title">自定义 onClick 事件</template>
		<template slot="describe">
			<p>通过在 <code>onClick</code> 事件中禁止点击链接的默认行为，以使点击锚点时不记录历史。</p>
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
			handleClick(e, link) {
				e.preventDefault();
				console.log(link);
			}
		}
	};
</script>