<template>
	<Example vertical id="example-list-simple">
		<template slot="source">
			<div class="example-list-simple">
				<vui-list header="Header" footer="Footer" size="small" bordered>
					<vui-list-item>Racing car sprays burning fuel into crowd.</vui-list-item>
					<vui-list-item>Japanese princess to wed commoner.</vui-list-item>
					<vui-list-item>Australian walks 100km after outback crash.</vui-list-item>
					<vui-list-item>Man charged over missing wedding girl.</vui-list-item>
					<vui-list-item>Los Angeles battles huge wildfires.</vui-list-item>
				</vui-list>
				<vui-list header="Header" footer="Footer" bordered>
					<vui-list-item>Racing car sprays burning fuel into crowd.</vui-list-item>
					<vui-list-item>Japanese princess to wed commoner.</vui-list-item>
					<vui-list-item>Australian walks 100km after outback crash.</vui-list-item>
					<vui-list-item>Man charged over missing wedding girl.</vui-list-item>
					<vui-list-item>Los Angeles battles huge wildfires.</vui-list-item>
				</vui-list>
				<vui-list header="Header" footer="Footer" size="large" bordered>
					<vui-list-item>Racing car sprays burning fuel into crowd.</vui-list-item>
					<vui-list-item>Japanese princess to wed commoner.</vui-list-item>
					<vui-list-item>Australian walks 100km after outback crash.</vui-list-item>
					<vui-list-item>Man charged over missing wedding girl.</vui-list-item>
					<vui-list-item>Los Angeles battles huge wildfires.</vui-list-item>
				</vui-list>
			</div>
		</template>
		<template slot="title">简单列表</template>
		<template slot="describe">
			<p>列表拥有大、中、小三种尺寸，默认为中型尺寸。</p>
			<p>可通过设置 <code>header</code> 和 <code>footer</code>，来自定义列表头部和尾部。</p>
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
	.example-list-simple .vui-list + .vui-list { margin-top:20px; }
</style>