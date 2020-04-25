<template>
	<Example vertical id="example-select-backfill-option-prop">
		<template slot="source">
			<vui-select backfillOptionProp="label" v-model="value" style="width: 200px;">
				<vui-option label="New York" value="new york">
					New York<span style="float: right; color: #bfbfbf;">America</span>
				</vui-option>
				<vui-option label="London" value="london">
					London<span style="float: right; color: #bfbfbf;">U.K.</span>
				</vui-option>
				<vui-option label="Sydney" value="sydney">
					Sydney<span style="float: right; color: #bfbfbf;">Australian</span>
				</vui-option>
			</vui-select>
		</template>
		<template slot="title">定制回填内容</template>
		<template slot="describe">
			<p>可以对选项的内容进行自定义，使用 <code>backfillOptionProp</code> 指定回填到选择框的 <code>Option</code> 属性。</p>
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
				value: undefined
			};
		},
		watch: {
			value(value) {
				console.log(value);
			}
		}
	};
</script>