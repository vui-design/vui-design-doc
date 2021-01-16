<template>
	<vui-doc-example v-bind:code="code" id="example-popover-placement">
		<template slot="demo">
			<div class="example-popover-placement">
				<div class="top">
					<vui-popover placement="top-start" title="Title" content="This is a popover.">
						<vui-button>TL</vui-button>
					</vui-popover>
					<vui-popover placement="top" title="Title" content="This is a popover.">
						<vui-button>T</vui-button>
					</vui-popover>
					<vui-popover placement="top-end" title="Title" content="This is a popover.">
						<vui-button>TR</vui-button>
					</vui-popover>
				</div>
				<div class="middle">
					<div class="middle-left">
						<vui-popover placement="left-start" title="Title" content="This is a popover.">
							<vui-button block>LT</vui-button>
						</vui-popover>
						<vui-popover placement="left" title="Title" content="This is a popover.">
							<vui-button block>L</vui-button>
						</vui-popover>
						<vui-popover placement="left-end" title="Title" content="This is a popover.">
							<vui-button block>LB</vui-button>
						</vui-popover>
					</div>
					<div class="middle-right">
						<vui-popover placement="right-start" title="Title" content="This is a popover.">
							<vui-button block>RT</vui-button>
						</vui-popover>
						<vui-popover placement="right" title="Title" content="This is a popover.">
							<vui-button block>R</vui-button>
						</vui-popover>
						<vui-popover placement="right-end" title="Title" content="This is a popover.">
							<vui-button block>RB</vui-button>
						</vui-popover>
					</div>
				</div>
				<div class="bottom">
					<vui-popover placement="bottom-start" title="Title" content="This is a popover.">
						<vui-button>BL</vui-button>
					</vui-popover>
					<vui-popover placement="bottom" title="Title" content="This is a popover.">
						<vui-button>B</vui-button>
					</vui-popover>
					<vui-popover placement="bottom-end" title="Title" content="This is a popover.">
						<vui-button>BR</vui-button>
					</vui-popover>
				</div>
			</div>
		</template>
		<template slot="title">位置</template>
		<template slot="description">
			<p>位置有 <code>12</code> 个方向。</p>
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
	.example-popover-placement .top { text-align:center; }
	.example-popover-placement .top .vui-popover { margin:0 5px; }
	.example-popover-placement .top .vui-button { width:60px; }

	.example-popover-placement .middle { width:340px; height:132px; margin:5px auto; }

	.example-popover-placement .middle-left { float:left; width:60px; }
	.example-popover-placement .middle-left .vui-popover { margin:5px 0; }
	.example-popover-placement .middle-left .vui-button { width:60px; }

	.example-popover-placement .middle-right { float:right; width:60px; }
	.example-popover-placement .middle-right .vui-popover { margin:5px 0; }
	.example-popover-placement .middle-right .vui-button { width:60px; }

	.example-popover-placement .bottom { text-align:center; }
	.example-popover-placement .bottom .vui-popover { margin:0 5px; }
	.example-popover-placement .bottom .vui-button { width:60px; }
</style>