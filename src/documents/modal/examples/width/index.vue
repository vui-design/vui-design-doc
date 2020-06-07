<template>
	<Example vertical id="example-modal-width">
		<template slot="source">
			<div class="example-modal-width">
				<vui-button type="primary" @click="showModal">Modal width</vui-button>
				<vui-modal v-model="visible" title="Modal Title" :width="360">
					<p>Some contents...</p>
					<p>Some contents...</p>
					<p>Some contents...</p>
					<p>Some contents...</p>
				</vui-modal>
			</div>
		</template>
		<template slot="title">宽度</template>
		<template slot="describe">
			<p>设置对话框的宽度为 <code>360px</code>。</p>
			<p>对话框的宽度是响应式的。当屏幕宽度小于 <code>768px</code> 时，宽度会被强制设为 <code>auto</code>。</p>
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