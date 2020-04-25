<template>
	<Example vertical id="example-drawer-basic-usage">
		<template slot="source">
			<div class="example-drawer-basic-usage">
				<vui-button type="primary" @click="handleOpen">Open basic drawer</vui-button>
				<vui-drawer title="Drawer Title" v-model="visible">
					<p>Some contents...</p>
					<p>Some contents...</p>
					<p>Some contents...</p>
					<p>Some contents...</p>
				</vui-drawer>
			</div>
		</template>
		<template slot="title">基本用法</template>
		<template slot="describe">
			<p>点击打开按钮抽屉从右滑出，点击遮罩区关闭。</p>
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
				code,
				visible: false
			};
		},
		methods: {
			handleOpen() {
				this.visible = true;
			}
		}
	};
</script>