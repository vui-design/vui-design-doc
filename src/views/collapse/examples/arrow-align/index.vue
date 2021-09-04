<template>
	<example v-bind:code="code" id="example-collapse-arrow-align">
		<template slot="demo">
			<div class="example-collapse-arrow-align">
				<vui-radio-group type="button" v-model="arrowAlign">
					<vui-radio label="Left" value="left" />
					<vui-radio label="Right" value="right" />
				</vui-radio-group>
				<vui-collapse v-bind:arrowAlign="arrowAlign">
					<vui-panel title="This is panel header 1">
						<p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>
					</vui-panel>
					<vui-panel title="This is panel header 2">
						<p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>
					</vui-panel>
					<vui-panel title="This is panel header 3">
						<p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>
					</vui-panel>
				</vui-collapse>
			</div>
		</template>
		<template slot="title">箭头位置</template>
		<template slot="description">
			<p>通过 <code>arrowAlign</code> 属性可以改变箭头图标的位置。</p>
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
				arrowAlign: "left"
			};
		}
	};
</script>

<style>
	.example-collapse-arrow-align > .vui-collapse { margin-top:20px; }
</style>