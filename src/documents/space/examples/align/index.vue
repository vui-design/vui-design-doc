<template>
	<Example id="example-space-align">
		<template slot="source">
			<div class="example-space-align">
				<div class="example-space-align-block">
					<vui-space align="start">
						start
						<vui-button type="primary">Primary</vui-button>
						<div style="background-color: rgba(150, 150, 150, 0.2); padding: 20px 10px;">Block</div>
					</vui-space>
				</div>
				<div class="example-space-align-block">
					<vui-space align="center">
						center
						<vui-button type="primary">Primary</vui-button>
						<div style="background-color: rgba(150, 150, 150, 0.2); padding: 20px 10px;">Block</div>
					</vui-space>
				</div>
				<div class="example-space-align-block">
					<vui-space align="end">
						end
						<vui-button type="primary">Primary</vui-button>
						<div style="background-color: rgba(150, 150, 150, 0.2); padding: 20px 10px;">Block</div>
					</vui-space>
				</div>
			</div>
		</template>
		<template slot="title">对齐方式</template>
		<template slot="describe">
			<p>横向布局时，设置项目在交叉轴上的对齐方式。</p>
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

<style>
	.example-space-align { display:inline-flex; flex-direction:column; }
	.example-space-align-block { border:1px solid #2d8cf0; padding:10px; }
	.example-space-align-block + .example-space-align-block { margin-top:10px; }
</style>