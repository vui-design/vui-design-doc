<template>
	<vui-doc-example v-bind:code="code" id="example-popconfirm-placement">
		<template slot="demo">
			<div class="example-popconfirm-placement">
				<div class="top">
					<vui-popconfirm placement="top-start" title="Are you sure delete this task?" cancelText="No" okText="Yes">
						<vui-button>TL</vui-button>
					</vui-popconfirm>
					<vui-popconfirm placement="top" title="Are you sure delete this task?" cancelText="No" okText="Yes">
						<vui-button>T</vui-button>
					</vui-popconfirm>
					<vui-popconfirm placement="top-end" title="Are you sure delete this task?" cancelText="No" okText="Yes">
						<vui-button>TR</vui-button>
					</vui-popconfirm>
				</div>
				<div class="middle">
					<div class="middle-left">
						<vui-popconfirm placement="left-start" title="Are you sure delete this task?" cancelText="No" okText="Yes">
							<vui-button block>LT</vui-button>
						</vui-popconfirm>
						<vui-popconfirm placement="left" title="Are you sure delete this task?" cancelText="No" okText="Yes">
							<vui-button block>L</vui-button>
						</vui-popconfirm>
						<vui-popconfirm placement="left-end" title="Are you sure delete this task?" cancelText="No" okText="Yes">
							<vui-button block>LB</vui-button>
						</vui-popconfirm>
					</div>
					<div class="middle-right">
						<vui-popconfirm placement="right-start" title="Are you sure delete this task?" cancelText="No" okText="Yes">
							<vui-button block>RT</vui-button>
						</vui-popconfirm>
						<vui-popconfirm placement="right" title="Are you sure delete this task?" cancelText="No" okText="Yes">
							<vui-button block>R</vui-button>
						</vui-popconfirm>
						<vui-popconfirm placement="right-end" title="Are you sure delete this task?" cancelText="No" okText="Yes">
							<vui-button block>RB</vui-button>
						</vui-popconfirm>
					</div>
				</div>
				<div class="bottom">
					<vui-popconfirm placement="bottom-start" title="Are you sure delete this task?" cancelText="No" okText="Yes">
						<vui-button>BL</vui-button>
					</vui-popconfirm>
					<vui-popconfirm placement="bottom" title="Are you sure delete this task?" cancelText="No" okText="Yes">
						<vui-button>B</vui-button>
					</vui-popconfirm>
					<vui-popconfirm placement="bottom-end" title="Are you sure delete this task?" cancelText="No" okText="Yes">
						<vui-button>BR</vui-button>
					</vui-popconfirm>
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
	.example-popconfirm-placement .top { text-align:center; }
	.example-popconfirm-placement .top .vui-popover { margin:0 5px; }
	.example-popconfirm-placement .top .vui-button { width:60px; }

	.example-popconfirm-placement .middle { width:340px; height:132px; margin:5px auto; }

	.example-popconfirm-placement .middle-left { float:left; width:60px; }
	.example-popconfirm-placement .middle-left .vui-popover { margin:5px 0; }
	.example-popconfirm-placement .middle-left .vui-button { width:60px; }

	.example-popconfirm-placement .middle-right { float:right; width:60px; }
	.example-popconfirm-placement .middle-right .vui-popover { margin:5px 0; }
	.example-popconfirm-placement .middle-right .vui-button { width:60px; }

	.example-popconfirm-placement .bottom { text-align:center; }
	.example-popconfirm-placement .bottom .vui-popover { margin:0 5px; }
	.example-popconfirm-placement .bottom .vui-button { width:60px; }
</style>