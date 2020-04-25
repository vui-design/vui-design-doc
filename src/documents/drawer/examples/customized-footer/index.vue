<template>
	<Example vertical id="example-drawer-customized-footer">
		<template slot="source">
			<div class="example-drawer-customized-footer">
				<vui-button type="primary" @click="showDrawer">Open drawer with customized footer</vui-button>
				<vui-drawer v-model="visible" title="Drawer Title">
					<p>Some contents...</p>
					<p>Some contents...</p>
					<p>Some contents...</p>
					<p>Some contents...</p>
					<template slot="footer">
						<vui-button @click="handleReturn">Return</vui-button>
						<vui-button type="primary" :loading="loading" @click="handleSubmit">Submit</vui-button>
					</template>
				</vui-drawer>
			</div>
		</template>
		<template slot="title">自定义页脚</template>
		<template slot="describe">
			<p>利用 <code>footer</code> 插槽自定义抽屉底部内容。点击提交后进入 <code>loading</code> 状态，完成后关闭。</p>
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
				loading: false
			};
		},
		methods: {
			showDrawer() {
				this.visible = true;
			},
			handleReturn() {
				this.visible = false;
			},
			handleSubmit() {
				this.loading = true;

				setTimeout(() => {
					this.visible = false;
					this.loading = false;
				}, 3000);
			}
		}
	};
</script>