<template>
	<Example vertical id="example-modal-hide-close-button">
		<template slot="source">
			<div class="example-modal-hide-close-button">
				<vui-button type="primary" @click="showModal">Hide Close Button</vui-button>
				<vui-modal title="Modal Title" :closable="false" v-model="visible">
					<p>Some contents...</p>
					<p>Some contents...</p>
					<p>Some contents...</p>
					<p>Some contents...</p>
				</vui-modal>
			</div>
		</template>
		<template slot="title">隐藏关闭按钮</template>
		<template slot="describe">
			<p>将 <code>closable</code> 属性设置为 <code>false</code>，可以隐藏对话框右上角的关闭按钮。</p>
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
			showModal() {
				this.visible = true;
			}
		}
	};
</script>