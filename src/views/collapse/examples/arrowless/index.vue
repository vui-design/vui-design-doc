<template>
	<example v-bind:code="code" id="example-collapse-arrowless">
		<template slot="demo">
			<vui-collapse>
				<vui-panel title="This is panel header 1">
					<p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>
				</vui-panel>
				<vui-panel title="This is panel header 2" v-bind:showArrow="false">
					<p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>
				</vui-panel>
				<vui-panel title="This is panel header 3" v-bind:showArrow="false">
					<p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>
				</vui-panel>
			</vui-collapse>
		</template>
		<template slot="title">隐藏箭头</template>
		<template slot="description">
			<p>通过设置 <code>Panel</code> 组件的 <code>showArrow</code> 属性可以隐藏箭头图标。</p>
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