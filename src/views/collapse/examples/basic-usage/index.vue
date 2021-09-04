<template>
	<example v-bind:code="code" id="example-collapse-basic-usage">
		<template slot="demo">
			<vui-collapse v-model="value">
				<vui-panel value="1" title="This is panel header 1">
					<p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>
				</vui-panel>
				<vui-panel value="2" title="This is panel header 2">
					<p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>
				</vui-panel>
				<vui-panel value="3" title="This is panel header 3">
					<p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>
				</vui-panel>
			</vui-collapse>
		</template>
		<template slot="title">基本用法</template>
		<template slot="description">
			<p>可以同时展开多个面板，这个例子默认展开了第一个。</p>
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
				value: ["1"]
			};
		}
	};
</script>