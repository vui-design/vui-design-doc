<template>
	<vui-doc-example v-bind:code="code" id="example-drawer-button-props">
		<template slot="demo">
			<div class="example-drawer-button-props">
				<vui-button type="primary" v-on:click="showDrawer">Open drawer with customized button props</vui-button>
				<vui-drawer
					v-model="visible"
					v-bind:cancelButtonProps="cancelButtonProps"
					v-bind:okButtonProps="okButtonProps"
					cancelText="Cancel"
					okText="OK"
					title="Drawer Title"
				>
					<p>Some contents...</p>
					<p>Some contents...</p>
					<p>Some contents...</p>
					<p>Some contents...</p>
				</vui-drawer>
			</div>
		</template>
		<template slot="title">按钮属性</template>
		<template slot="description">
			<p>通过 <code>cancelText</code> 和 <code>okText</code> 属性来设置按钮的显示文字。</p>
			<p>设置 <code>cancelButtonProps</code> 和 <code>okButtonProps</code> 分别定义取消按钮和确定按钮的属性，详见 <router-link to="/components/button">Button</router-link> 组件。</p>
		</template>
	</vui-doc-example>
</template>

<script>
	import VuiDocExample from "src/components/example";
	import code from "./code";

	export default {
		components: {
			VuiDocExample
		},
		data() {
			return {
				code,
				visible: false,
				cancelButtonProps: {
					props: {
						type: "text"
					}
				},
				okButtonProps: {
					props: {
						disabled: true
					}
				}
			};
		},
		methods: {
			showDrawer() {
				this.visible = true;
			}
		}
	};
</script>