<template>
	<Example vertical id="example-form-group">
		<template slot="source">
			<vui-form :model="form" :labelWidth="100">
				<fieldset>
					<legend>Form Group1</legend>
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
					<vui-form-item label="Multiple Select">
						<vui-select placeholder="Select..." multiple v-model="form.multipleSelect">
							<vui-option value="new york">New York</vui-option>
							<vui-option value="london">London</vui-option>
							<vui-option value="sydney">Sydney</vui-option>
							<vui-option value="ottawa">Ottawa</vui-option>
							<vui-option value="paris">Paris</vui-option>
							<vui-option value="canberra">Canberra</vui-option>
						</vui-select>
					</vui-form-item>
				</fieldset>
				<fieldset>
					<legend>Form Group2</legend>
					<vui-form-item label="Radio">
						<vui-radio-group v-model="form.radio">
							<vui-radio value="male">Male</vui-radio>
							<vui-radio value="female">Female</vui-radio>
						</vui-radio-group>
					</vui-form-item>
					<vui-form-item label="Checkbox">
						<vui-checkbox-group v-model="form.checkbox">
							<vui-checkbox value="eat">Eat</vui-checkbox>
							<vui-checkbox value="sleep">Sleep</vui-checkbox>
							<vui-checkbox value="run">Run</vui-checkbox>
							<vui-checkbox value="movie">Movie</vui-checkbox>
						</vui-checkbox-group>
					</vui-form-item>
					<vui-form-item label="Switch">
						<vui-switch v-model="form.switch">
							<template slot="checked">ON</template>
							<template slot="unchecked">OFF</template>
						</vui-switch>
					</vui-form-item>
					<vui-form-item label="Textarea">
						<vui-textarea placeholder="Enter something..." v-model="form.textarea" :autosize="{minRows: 4, maxRows: 8}" />
					</vui-form-item>
				</fieldset>
				<div style="text-align: center;">
					<vui-button type="primary">Submit</vui-button>
					<vui-button style="margin-left: 20px;">Cancel</vui-button>
				</div>
			</vui-form>
		</template>
		<template slot="title">表单分组</template>
		<template slot="describe">
			<p>可以利用原生的 <code>fieldset</code> 和 <code>legend</code> 标签对表单项进行分组。</p>
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
					input: "",
					select: undefined,
					multipleSelect: [],
					radio: "male",
					checkbox: ["eat"],
					switch: false,
					textarea: ""
				}
			};
		},
		watch: {
			form: {
				deep: true,
				handler: function(newValue, oldValue) {
					console.log(JSON.stringify(newValue));
				}
			}
		}
	};
</script>