<template>
	<vui-doc-example v-bind:code="code" id="example-tooltip-colorful">
		<template slot="demo">
			<div>
				<div class="example-tooltip-colorful">
					<h4>Presets</h4>
					<vui-tooltip color="dark" content="This is a tooltip">
						<vui-button>Dark</vui-button>
					</vui-tooltip>
					<vui-tooltip color="light" content="This is a tooltip">
						<vui-button>Light</vui-button>
					</vui-tooltip>
					<vui-tooltip color="blue" content="This is a tooltip">
						<vui-button>Blue</vui-button>
					</vui-tooltip>
					<vui-tooltip color="cyan" content="This is a tooltip">
						<vui-button>Cyan</vui-button>
					</vui-tooltip>
					<vui-tooltip color="geekblue" content="This is a tooltip">
						<vui-button>Geekblue</vui-button>
					</vui-tooltip>
					<vui-tooltip color="gold" content="This is a tooltip">
						<vui-button>Gold</vui-button>
					</vui-tooltip>
					<vui-tooltip color="green" content="This is a tooltip">
						<vui-button>Green</vui-button>
					</vui-tooltip>
					<vui-tooltip color="lime" content="This is a tooltip">
						<vui-button>Lime</vui-button>
					</vui-tooltip>
					<vui-tooltip color="magenta" content="This is a tooltip">
						<vui-button>Magenta</vui-button>
					</vui-tooltip>
					<vui-tooltip color="orange" content="This is a tooltip">
						<vui-button>Orange</vui-button>
					</vui-tooltip>
					<vui-tooltip color="pink" content="This is a tooltip">
						<vui-button>Pink</vui-button>
					</vui-tooltip>
					<vui-tooltip color="purple" content="This is a tooltip">
						<vui-button>Purple</vui-button>
					</vui-tooltip>
					<vui-tooltip color="red" content="This is a tooltip">
						<vui-button>Red</vui-button>
					</vui-tooltip>
					<vui-tooltip color="volcano" content="This is a tooltip">
						<vui-button>Volcano</vui-button>
					</vui-tooltip>
					<vui-tooltip color="yellow" content="This is a tooltip">
						<vui-button>Yellow</vui-button>
					</vui-tooltip>
				</div>
				<div class="example-tooltip-colorful">
					<h4>Custom</h4>
					<vui-tooltip color="#f60" content="This is a tooltip">
						<vui-button>#f60</vui-button>
					</vui-tooltip>
					<vui-tooltip color="#2db7f5" content="This is a tooltip">
						<vui-button>#2db7f5</vui-button>
					</vui-tooltip>
					<vui-tooltip color="#87d068" content="This is a tooltip">
						<vui-button>#87d068</vui-button>
					</vui-tooltip>
					<vui-tooltip color="#108ee9" content="This is a tooltip">
						<vui-button>#108ee9</vui-button>
					</vui-tooltip>
				</div>
			</div>
		</template>
		<template slot="title">多彩文字提示</template>
		<template slot="description">
			<p>多种预设颜色，用作不同场景。如果预设值不能满足你的需求，可以设置为具体的颜色值。</p>
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
	.example-tooltip-colorful:not(:last-child) { margin-bottom:20px; }
	.example-tooltip-colorful > h4 { margin-bottom:10px; }
	.example-tooltip-colorful > .vui-tooltip { margin-right:10px; margin-bottom:10px; }
</style>