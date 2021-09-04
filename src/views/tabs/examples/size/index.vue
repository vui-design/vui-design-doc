<template>
	<example v-bind:code="code" id="example-tabs-size">
		<template slot="demo">
			<div class="example-tabs-size">
				<vui-radio-group type="button" v-model="size">
					<vui-radio label="Small" value="small" />
					<vui-radio label="Medium" value="medium" />
					<vui-radio label="Large" value="large" />
				</vui-radio-group>
				<vui-tabs v-bind:size="size">
					<vui-tab-panel v-for="panel in panels" v-bind:key="panel.key" v-bind:title="panel.title">
						{{panel.content}}
					</vui-tab-panel>
				</vui-tabs>
				<vui-tabs type="card" v-bind:size="size">
					<vui-tab-panel v-for="panel in panels" v-bind:key="panel.key" v-bind:title="panel.title">
						{{panel.content}}
					</vui-tab-panel>
				</vui-tabs>
			</div>
		</template>
		<template slot="title">页签尺寸</template>
		<template slot="description">
			<p>大号用在页头区域，小号则建议用在弹出框等较狭窄的容器内。</p>
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
			let panels = [];
			let index = 1;

			for (; index < 4; index++) {
				let panel = {
					key: "tab" + index,
					title: "Tab " + index,
					content: "Content of Tab panel " + index
				};

				panels.push(panel);
			}

			return {
				code,
				size: "medium",
				panels: panels
			};
		}
	};
</script>

<style>
	.example-tabs-size {  }
	.example-tabs-size .vui-tabs { margin-top:20px; }
</style>