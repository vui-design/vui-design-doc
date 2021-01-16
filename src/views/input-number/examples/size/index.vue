<template>
	<vui-doc-example v-bind:code="code" id="example-input-number-size">
		<template slot="demo">
			<div class="example-input-number-size">
				<section>
					<vui-radio-group type="button" v-model="size">
						<vui-radio label="Small" value="small" />
						<vui-radio label="Medium" value="medium" />
						<vui-radio label="Large" value="large" />
					</vui-radio-group>
				</section>
				<section style="margin-top: 15px;">
					<vui-input-number :size="size" v-model="value" />
				</section>
			</div>
		</template>
		<template slot="title">尺寸</template>
		<template slot="description">
			<p>三种大小的数字输入框。</p>
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
				value: 1
			};
		},
		watch: {
			size(value) {
				console.log(value);
			},
			value(value) {
				console.log(value);
			}
		}
	};
</script>