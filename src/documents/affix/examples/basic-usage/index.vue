<template>
	<Example id="example-affix-basic-usage">
		<template slot="source">
			<div class="example-affix-basic-usage">
				<div class="example-affix-basic-usage-section">
					<vui-affix v-bind:offsetTop="top">
						<vui-button type="primary" v-on:click="addTop">Affix top</vui-button>
					</vui-affix>
				</div>
				<div class="example-affix-basic-usage-section">
					<vui-affix v-bind:offsetBottom="bottom">
						<vui-button type="primary" v-on:click="addBottom">Affix bottom</vui-button>
					</vui-affix>
				</div>
			</div>
		</template>
		<template slot="title">基本用法</template>
		<template slot="describe">
			<p>最简单的用法。</p>
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
				top: 10,
				bottom: 10
			};
		},
		methods: {
			addTop() {
				this.top += 10;
			},
			addBottom() {
				this.bottom += 10;
			}
		}
	};
</script>

<style>
	.example-affix-basic-usage {  }
	.example-affix-basic-usage-section + .example-affix-basic-usage-section { margin-top:10px; }
</style>