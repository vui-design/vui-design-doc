<template>
	<example v-bind:code="code" id="example-drawer-multi-level">
		<template slot="demo">
			<div class="example-drawer-multi-level">
				<vui-button type="primary" v-on:click="handleOpenDrawer">Open drawer</vui-button>
				<vui-drawer v-model="visible" title="Drawer Title">
					<vui-button type="primary" v-on:click="handleOpenTwoLevelDrawer">Open two-level drawer</vui-button>
					<vui-drawer v-model="twoLevelDrawerVisible" title="Two-Level Drawer Title">
						<p>This is two-level drawer</p>
					</vui-drawer>
				</vui-drawer>
			</div>
		</template>
		<template slot="title">多层抽屉</template>
		<template slot="description">
			<p>在抽屉内打开新的抽屉，用以解决多分支任务的复杂状况。</p>
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
				visible: false,
				twoLevelDrawerVisible: false
			};
		},
		methods: {
			handleOpenDrawer() {
				this.visible = true;
			},
			handleOpenTwoLevelDrawer() {
				this.twoLevelDrawerVisible = true;
			}
		}
	};
</script>