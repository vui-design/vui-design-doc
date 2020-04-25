<template>
	<Example vertical id="example-collapse-nested">
		<template slot="source">
			<vui-collapse>
				<vui-panel title="This is panel header 1">
					<vui-collapse accordion>
						<vui-panel title="This is panel header 1-1">
							<p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>
						</vui-panel>
						<vui-panel title="This is panel header 1-2">
							<p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>
						</vui-panel>
					</vui-collapse>
				</vui-panel>
				<vui-panel title="This is panel header 2">
					<p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>
				</vui-panel>
				<vui-panel title="This is panel header 3">
					<p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>
				</vui-panel>
			</vui-collapse>
		</template>
		<template slot="title">嵌套面板</template>
		<template slot="describe">
			<p>折叠面板可以进行嵌套。</p>
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
				code
			};
		}
	};
</script>