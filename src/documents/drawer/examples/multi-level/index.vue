<template>
	<Example vertical id="example-drawer-multi-level">
		<template slot="source">
			<div class="example-drawer-multi-level">
				<vui-button type="primary" @click="handleOpenDrawer">Open drawer</vui-button>
				<vui-drawer title="Drawer Title" v-model="visible">
					<vui-button type="primary" @click="handleOpenTwoLevelDrawer">Open two-level drawer</vui-button>
					<vui-drawer title="Two-Level Drawer Title" v-model="twoLevelDrawerVisible">
						<p>This is two-level drawer</p>
					</vui-drawer>
				</vui-drawer>
			</div>
		</template>
		<template slot="title">多层抽屉</template>
		<template slot="describe">
			<p>在抽屉内打开新的抽屉，用以解决多分支任务的复杂状况。</p>
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