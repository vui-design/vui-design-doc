<template>
	<example v-bind:code="code" id="example-rate-clearable">
		<template slot="demo">
			<div class="example-rate-clearable">
				<section>
					<vui-rate v-model="value" />
					<p>clearable: true</p>
				</section>
				<section>
					<vui-rate v-model="value" v-bind:clearable="false" />
					<p>clearable: false</p>
				</section>
			</div>
		</template>
		<template slot="title">清除</template>
		<template slot="description">
			<p>允许或者禁用清除。</p>
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
				value: 3
			};
		}
	};
</script>

<style>
	.example-rate-clearable section { display:flex; align-items:center; line-height:1; }
	.example-rate-clearable section + section { margin-top:16px; }
	.example-rate-clearable p { margin-left:16px; }
</style>