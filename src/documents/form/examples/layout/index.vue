<template>
	<Example vertical id="example-form-layout">
		<template slot="source">
			<vui-form :layout="form.layout" :model="form" :labelWidth="labelWidth">
				<vui-form-item label="Layout">
					<vui-radio-group type="button" v-model="form.layout">
						<vui-radio value="horizontal">Horizontal</vui-radio>
						<vui-radio value="vertical">Vertical</vui-radio>
						<vui-radio value="inline">Inline</vui-radio>
					</vui-radio-group>
				</vui-form-item>
				<vui-form-item label="Input">
					<vui-input placeholder="Enter something..." v-model="form.input" />
				</vui-form-item>
				<vui-form-item label="Select">
					<vui-select style="width: 200px;" placeholder="Select..." v-model="form.select">
						<vui-option value="new york">New York</vui-option>
						<vui-option value="london">London</vui-option>
						<vui-option value="sydney">Sydney</vui-option>
						<vui-option value="ottawa">Ottawa</vui-option>
						<vui-option value="paris">Paris</vui-option>
						<vui-option value="canberra">Canberra</vui-option>
					</vui-select>
				</vui-form-item>
				<vui-form-item>
					<vui-button type="primary">Submit</vui-button>
				</vui-form-item>
			</vui-form>
		</template>
		<template slot="title">表单布局</template>
		<template slot="describe">
			<p>包含三种表单布局。</p>
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
				form: {
					layout: "horizontal",
					input: "",
					select: undefined
				}
			};
		},
		computed: {
			labelWidth() {
				if (this.form.layout === "horizontal") {
					return "100px";
				}
				else {
					return "auto";
				}
			}
		}
	};
</script>