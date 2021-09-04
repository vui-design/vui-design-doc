<template>
	<example v-bind:code="code" id="example-collapse-borderless">
		<template slot="demo">
			<vui-collapse v-bind:bordered="false">
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
		</template>
		<template slot="title">无外边框</template>
		<template slot="description">
			<p>一套无外边框的简洁样式。</p>
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
				code
			};
		}
	};
</script>