<template>
	<Example id="example-badge-colorful">
		<template slot="source">
			<div>
				<div class="example-badge-colorful">
					<h4>Presets</h4>
					<vui-badge color="blue" text="blue" />
					<vui-badge color="cyan" text="cyan" />
					<vui-badge color="geekblue" text="geekblue" />
					<vui-badge color="gold" text="gold" />
					<vui-badge color="green" text="green" />
					<vui-badge color="lime" text="lime" />
					<vui-badge color="magenta" text="magenta" />
					<vui-badge color="orange" text="orange" />
					<vui-badge color="pink" text="pink" />
					<vui-badge color="purple" text="purple" />
					<vui-badge color="red" text="red" />
					<vui-badge color="volcano" text="volcano" />
					<vui-badge color="yellow" text="yellow" />
				</div>
				<div class="example-badge-colorful">
					<h4>Custom</h4>
					<vui-badge color="#f60" text="#f60" />
					<vui-badge color="#2db7f5" text="#2db7f5" />
					<vui-badge color="#87d068" text="#87d068" />
					<vui-badge color="#108ee9" text="#108ee9" />
				</div>
			</div>
		</template>
		<template slot="title">多彩徽标</template>
		<template slot="describe">
			<p>我们添加了多种预设色彩的徽标样式，用作不同场景使用。如果预设值不能满足你的需求，可以设置为具体的色值。</p>
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
	.example-badge-colorful + .example-badge-colorful { margin-top:20px; }
	.example-badge-colorful > h4 { margin-bottom:10px; }
	.example-badge-colorful > .vui-badge { display:block; }
	.example-badge-colorful > .vui-badge + .vui-badge { margin-top:10px; }
</style>