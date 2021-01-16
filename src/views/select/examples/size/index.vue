<template>
	<vui-doc-example v-bind:code="code" id="example-select-size">
		<template slot="demo">
			<div class="example-select-size">
				<div>
					<vui-radio-group type="button" v-model="size">
						<vui-radio label="Small" value="small" />
						<vui-radio label="Medium" value="medium" />
						<vui-radio label="Large" value="large" />
					</vui-radio-group>
				</div>
				<vui-select v-model="value1" :size="size" style="width: 200px;">
					<vui-option value="new york">New York</vui-option>
					<vui-option value="london">London</vui-option>
					<vui-option value="sydney">Sydney</vui-option>
					<vui-option value="ottawa">Ottawa</vui-option>
					<vui-option value="paris">Paris</vui-option>
					<vui-option value="canberra">Canberra</vui-option>
				</vui-select>
				<vui-select v-model="value2" :size="size" multiple>
					<vui-option value="new york">New York</vui-option>
					<vui-option value="london">London</vui-option>
					<vui-option value="sydney">Sydney</vui-option>
					<vui-option value="ottawa">Ottawa</vui-option>
					<vui-option value="paris">Paris</vui-option>
					<vui-option value="canberra">Canberra</vui-option>
				</vui-select>
			</div>
		</template>
		<template slot="title">尺寸</template>
		<template slot="description">
			<p>提供三种尺寸：大、中（默认）、小。</p>
		</template>
	</vui-doc-example>
</template>

<script>
	import VuiDocExample from "src/components/example";
	import code from "./code";

	export default {
		components: {
			VuiDocExample
		},
		data() {
			return {
				code,
				size: "medium",
				value1: "",
				value2: ["new york", "sydney"]
			};
		}
	};
</script>

<style>
	.example-select-size .vui-select { display:block; margin-top:15px; }
</style>