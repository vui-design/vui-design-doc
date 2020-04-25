<template>
	<Example vertical id="example-textarea-autosize">
		<template slot="source">
			<div class="example-textarea-autosize">
				<vui-textarea v-model="value1" placeholder="Autosize height based on content lines" autosize />
				<vui-textarea v-model="value2" placeholder="Autosize height with minimum and maximum number of lines" :autosize="{minRows: 4, maxRows: 8}" />
			</div>
		</template>
		<template slot="title">适应内容高度的文本域</template>
		<template slot="describe">
			<p>启用 <code>autosize</code> 属性，文本域会自动适应内容高度变化。<code>autosize</code> 也可以设定为一个对象，指定最小行数和最大行数。</p>
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
				value1: "",
				value2: ""
			};
		}
	};
</script>

<style>
	.example-textarea-autosize > .vui-textarea + .vui-textarea { margin-top:20px; }
</style>