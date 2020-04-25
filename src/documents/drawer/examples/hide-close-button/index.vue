<template>
	<Example vertical id="example-drawer-hide-close-button">
		<template slot="source">
			<div class="example-drawer-hide-close-button">
				<vui-button type="primary" @click="showDrawer">Hide close cutton</vui-button>
				<vui-drawer title="Drawer Title" :closable="false" v-model="visible">
					<p>Some contents...</p>
					<p>Some contents...</p>
					<p>Some contents...</p>
					<p>Some contents...</p>
				</vui-drawer>
			</div>
		</template>
		<template slot="title">隐藏关闭按钮</template>
		<template slot="describe">
			<p>将 <code>closable</code> 属性设置为 <code>false</code>，可以隐藏抽屉右上角的关闭按钮。</p>
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
			showDrawer() {
				this.visible = true;
			}
		}
	};
</script>