<template>
	<example v-bind:code="code" id="example-slider-tooltip-visible">
		<template slot="demo">
			<vui-slider v-model="value" v-bind:tooltip="tooltip" />
		</template>
		<template slot="title">控制 Tooltip 显示</template>
		<template slot="description">
			<p>当 <code>tooltip.trigger</code> 为 <code>always</code> 时，将始终显示 <router-link to="/components/tooltip">文字提示</router-link>。</p>
		</template>
	</example>
</template>

<script>
	import Example from "src/components/example";
	import code from "./code";

	export default {
		components: {
			Example
		},
		data() {
			return {
				code,
				value: 30,
				tooltip: {
					trigger: "always",
					formatter: value => value + "%"
				}
			};
		}
	};
</script>