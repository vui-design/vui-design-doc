<template>
	<Example vertical id="example-button-group">
		<template slot="source">
			<div class="example-button-group">
				<section>
					<h4>Basic</h4>
					<vui-button-group type="primary">
						<vui-button>Cancel</vui-button>
						<vui-button>OK</vui-button>
					</vui-button-group>
					<vui-button-group disabled>
						<vui-button>Cancel</vui-button>
						<vui-button>OK</vui-button>
					</vui-button-group>
					<vui-button-group>
						<vui-button>Cancel</vui-button>
						<vui-button>OK</vui-button>
					</vui-button-group>
				</section>
				<section>
					<h4>Shape And Icon</h4>
					<vui-button-group type="primary">
						<vui-button>
							<vui-icon type="chevron-left" />Backward
						</vui-button>
						<vui-button>
							Forward<vui-icon type="chevron-right" />
						</vui-button>
					</vui-button-group>
					<vui-button-group type="primary" shape="round">
						<vui-button icon="chevron-left" />
						<vui-button icon="chevron-right" />
					</vui-button-group>
					<vui-button-group shape="round">
						<vui-button icon="chevron-left" />
						<vui-button icon="chevron-right" />
					</vui-button-group>
				</section>
				<section>
					<h4>Size</h4>
					<div>
						<vui-button-group size="small">
							<vui-button>L</vui-button>
							<vui-button>M</vui-button>
							<vui-button>R</vui-button>
						</vui-button-group>
					</div>
					<div style="margin-top: 10px;">
						<vui-button-group>
							<vui-button>L</vui-button>
							<vui-button>M</vui-button>
							<vui-button>R</vui-button>
						</vui-button-group>
					</div>
					<div style="margin-top: 10px;">
						<vui-button-group size="large">
							<vui-button>L</vui-button>
							<vui-button>M</vui-button>
							<vui-button>R</vui-button>
						</vui-button-group>
					</div>
				</section>
			</div>
		</template>
		<template slot="title">按钮组合</template>
		<template slot="describe">
			<p>可以将多个 <code>Button</code> 放入 <code>ButtonGroup</code> 容器中，实现按钮组合。</p>
			<p>通过 <code>shape</code> 属性设置按钮组合的形状，<code>size</code> 属性用于设置尺寸。</p>
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
	.example-button-group > section:not(:last-child) { margin-bottom:20px; }
	.example-button-group > section > h4 { margin-bottom:10px; }
	.example-button-group > section > .vui-button-group { margin-right:10px; }
</style>