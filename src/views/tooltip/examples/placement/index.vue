<template>
	<example v-bind:code="code" id="example-tooltip-placement">
		<template slot="demo">
			<div class="example-tooltip-placement">
				<div class="top">
					<vui-tooltip placement="top-start" content="This is a tooltip">
						<vui-button>TL</vui-button>
					</vui-tooltip>
					<vui-tooltip placement="top" content="This is a tooltip">
						<vui-button>T</vui-button>
					</vui-tooltip>
					<vui-tooltip placement="top-end" content="This is a tooltip">
						<vui-button>TR</vui-button>
					</vui-tooltip>
				</div>
				<div class="middle">
					<div class="middle-left">
						<vui-tooltip placement="left-start" content="This is a tooltip">
							<vui-button block>LT</vui-button>
						</vui-tooltip>
						<vui-tooltip placement="left" content="This is a tooltip">
							<vui-button block>L</vui-button>
						</vui-tooltip>
						<vui-tooltip placement="left-end" content="This is a tooltip">
							<vui-button block>LB</vui-button>
						</vui-tooltip>
					</div>
					<div class="middle-right">
						<vui-tooltip placement="right-start" content="This is a tooltip">
							<vui-button block>RT</vui-button>
						</vui-tooltip>
						<vui-tooltip placement="right" content="This is a tooltip">
							<vui-button block>R</vui-button>
						</vui-tooltip>
						<vui-tooltip placement="right-end" content="This is a tooltip">
							<vui-button block>RB</vui-button>
						</vui-tooltip>
					</div>
				</div>
				<div class="bottom">
					<vui-tooltip placement="bottom-start" content="This is a tooltip">
						<vui-button>BL</vui-button>
					</vui-tooltip>
					<vui-tooltip placement="bottom" content="This is a tooltip">
						<vui-button>B</vui-button>
					</vui-tooltip>
					<vui-tooltip placement="bottom-end" content="This is a tooltip">
						<vui-button>BR</vui-button>
					</vui-tooltip>
				</div>
			</div>
		</template>
		<template slot="title">位置</template>
		<template slot="description">
			<p>位置有 <code>12</code> 个方向。</p>
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
				code
			};
		}
	};
</script>

<style>
	.example-tooltip-placement .top { text-align:center; }
	.example-tooltip-placement .top .vui-tooltip { margin:0 5px; }
	.example-tooltip-placement .top .vui-button { width:60px; }

	.example-tooltip-placement .middle { width:340px; height:132px; margin:5px auto; }

	.example-tooltip-placement .middle-left { float:left; width:60px; }
	.example-tooltip-placement .middle-left .vui-tooltip { margin:5px 0; }
	.example-tooltip-placement .middle-left .vui-button { width:60px; }

	.example-tooltip-placement .middle-right { float:right; width:60px; }
	.example-tooltip-placement .middle-right .vui-tooltip { margin:5px 0; }
	.example-tooltip-placement .middle-right .vui-button { width:60px; }

	.example-tooltip-placement .bottom { text-align:center; }
	.example-tooltip-placement .bottom .vui-tooltip { margin:0 5px; }
	.example-tooltip-placement .bottom .vui-button { width:60px; }
</style>