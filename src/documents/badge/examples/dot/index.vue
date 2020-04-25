<template>
	<Example vertical id="example-badge-dot">
		<template slot="source">
			<div class="example-badge-dot">
				<vui-badge dot :count="99">
					<img src="https://dummyimage.com/48x48/e6e6e6/6a6a6a" />
				</vui-badge>
				<vui-badge dot :count="100">
					<vui-icon type="mail" />
				</vui-badge>
				<vui-badge dot :count="1000">
					<a href="javascript:;">可以是一个链接</a>
				</vui-badge>
			</div>
		</template>
		<template slot="title">小红点</template>
		<template slot="describe">
			<p>不显示具体的数值或文本。友情提醒，强迫症患者慎用！</p>
		</template>
		<template slot="code">{{code}}</template>
	</Example>
</template>

<script>
	import Example from "@/components/example";
	import code from "./code";

	export default {
		name: "ExampleBadgeDot",
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
	.example-badge-dot > .vui-badge { margin-right:20px; }
	.example-badge-dot > .vui-badge > img { width:48px; height:48px; border-radius:5px; }
</style>