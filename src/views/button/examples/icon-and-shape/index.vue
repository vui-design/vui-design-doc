<template>
	<vui-doc-example v-bind:code="code" id="example-button-icon-and-shape">
		<template slot="demo">
			<div class="example-button-icon-and-shape">
				<section>
					<vui-button type="primary" icon="search">Search</vui-button>
					<vui-button type="primary" icon="search" shape="round">Search</vui-button>
					<vui-button type="primary" icon="search" shape="circle" />
					<vui-button type="primary" shape="round">
						More<vui-icon type="more-x" />
					</vui-button>
					<vui-button type="primary" shape="circle">
						<vui-icon type="more-x" />
					</vui-button>
				</section>
				<section>
					<vui-button icon="search">Search</vui-button>
					<vui-button icon="search" shape="round">Search</vui-button>
					<vui-button icon="search" shape="circle" />
					<vui-button shape="round">
						More<vui-icon type="more-x" />
					</vui-button>
					<vui-button shape="circle">
						<vui-icon type="more-x" />
					</vui-button>
				</section>
			</div>
		</template>
		<template slot="title">图标以及形状</template>
		<template slot="description">
			<p>如果需要在 <code>Button</code> 内插入一个图标，可以设置 <code>icon</code> 属性，或者直接在 <code>Button</code> 内使用 <code>Icon</code> 组件。</p>
			<p>使用 <code>Button</code> 的 <code>icon</code> 属性，图标将被插入到按钮左侧，如果需要自定义位置，请使用 <code>Icon</code> 组件。</p>
			<p>属性 <code>shape</code> 用于设置按钮形状，可选值为 <code>round</code>、<code>circle</code>，或者不设。</p>
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
				code
			};
		}
	};
</script>

<style>
	.example-button-icon-and-shape > section:not(:last-child) { margin-bottom:20px; }
	.example-button-icon-and-shape > section > .vui-button { margin-right:10px; }
</style>