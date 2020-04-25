<template>
	<Example vertical id="example-checkbox-group-options">
		<template slot="source">
			<div class="example-checkbox-group-options">
				<div style="font-size: 0;">
					<vui-checkbox-group :options="options1" v-model="value1" />
				</div>
				<div style="margin-top: 15px; font-size: 0;">
					<vui-checkbox-group :options="options2" v-model="value2" />
				</div>
				<div style="margin-top: 15px; font-size: 0;">
					<vui-checkbox-group disabled :options="options3" v-model="value3" />
				</div>
			</div>
		</template>
		<template slot="title">配置方式</template>
		<template slot="describe">
			<p>通过配置 <code>options</code> 属性来渲染多选组合。</p>
		</template>
		<template slot="code">{{code}}</template>
	</Example>
</template>

<script>
	import Example from "@/components/example";
	import code from "./code";

	export default {
		name: "ExampleCheckboxGroupOptions",
		components: {
			Example
		},
		data() {
			return {
				code,
				options1: ["A", "B", "C", "D"],
				value1: ["A"],
				options2: [
					{ label: "A", value: "A" },
					{ label: "B", value: "B", disabled: true },
					{ label: "C", value: "C" },
					{ label: "D", value: "D" }
				],
				value2: ["A"],
				options3: [
					{ label: "A", value: "A" },
					{ label: "B", value: "B" },
					{ label: "C", value: "C" },
					{ label: "D", value: "D" }
				],
				value3: ["A"]
			};
		},
		watch: {
			value1(value) {
				console.log(value);
			},
			value2(value) {
				console.log(value);
			},
			value3(value) {
				console.log(value);
			}
		}
	};
</script>