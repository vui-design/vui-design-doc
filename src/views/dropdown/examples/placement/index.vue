<template>
	<example v-bind:code="code" id="example-dropdown-placement">
		<template slot="demo">
			<div class="example-dropdown-placement">
				<div class="example-dropdown-placement-top">
					<vui-dropdown placement="top-start">
						<vui-button>Top Left</vui-button>
						<vui-dropdown-menu slot="menu">
							<vui-dropdown-menu-item name="1" title="Menu Item 1" />
							<vui-dropdown-menu-item name="2" title="Menu Item 2" />
							<vui-dropdown-menu-item name="3" title="Menu Item 3" />
							<vui-dropdown-menu-item name="4" title="Menu Item 4" />
						</vui-dropdown-menu>
					</vui-dropdown>
					<vui-dropdown placement="top">
						<vui-button>Top Center</vui-button>
						<vui-dropdown-menu slot="menu">
							<vui-dropdown-menu-item name="1" title="Menu Item 1" />
							<vui-dropdown-menu-item name="2" title="Menu Item 2" />
							<vui-dropdown-menu-item name="3" title="Menu Item 3" />
							<vui-dropdown-menu-item name="4" title="Menu Item 4" />
						</vui-dropdown-menu>
					</vui-dropdown>
					<vui-dropdown placement="top-end">
						<vui-button>Top Right</vui-button>
						<vui-dropdown-menu slot="menu">
							<vui-dropdown-menu-item name="1" title="Menu Item 1" />
							<vui-dropdown-menu-item name="2" title="Menu Item 2" />
							<vui-dropdown-menu-item name="3" title="Menu Item 3" />
							<vui-dropdown-menu-item name="4" title="Menu Item 4" />
						</vui-dropdown-menu>
					</vui-dropdown>
				</div>
				<div class="example-dropdown-placement-bottom">
					<vui-dropdown placement="bottom-start">
						<vui-button>Bottom Left</vui-button>
						<vui-dropdown-menu slot="menu">
							<vui-dropdown-menu-item name="1" title="Menu Item 1" />
							<vui-dropdown-menu-item name="2" title="Menu Item 2" />
							<vui-dropdown-menu-item name="3" title="Menu Item 3" />
							<vui-dropdown-menu-item name="4" title="Menu Item 4" />
						</vui-dropdown-menu>
					</vui-dropdown>
					<vui-dropdown placement="bottom">
						<vui-button>Bottom Center</vui-button>
						<vui-dropdown-menu slot="menu">
							<vui-dropdown-menu-item name="1" title="Menu Item 1" />
							<vui-dropdown-menu-item name="2" title="Menu Item 2" />
							<vui-dropdown-menu-item name="3" title="Menu Item 3" />
							<vui-dropdown-menu-item name="4" title="Menu Item 4" />
						</vui-dropdown-menu>
					</vui-dropdown>
					<vui-dropdown placement="bottom-end">
						<vui-button>Bottom Right</vui-button>
						<vui-dropdown-menu slot="menu">
							<vui-dropdown-menu-item name="1" title="Menu Item 1" />
							<vui-dropdown-menu-item name="2" title="Menu Item 2" />
							<vui-dropdown-menu-item name="3" title="Menu Item 3" />
							<vui-dropdown-menu-item name="4" title="Menu Item 4" />
						</vui-dropdown-menu>
					</vui-dropdown>
				</div>
			</div>
		</template>
		<template slot="title">弹出位置</template>
		<template slot="description">
			<p>支持 6 个弹出位置。</p>
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
	.example-dropdown-placement-top {  }
	.example-dropdown-placement-top .vui-dropdown { margin-right:10px; }
	.example-dropdown-placement-top .vui-button { width:130px; }
	.example-dropdown-placement-bottom { margin-top:10px; }
	.example-dropdown-placement-bottom .vui-dropdown { margin-right:10px; }
	.example-dropdown-placement-bottom .vui-button { width:130px; }
</style>
