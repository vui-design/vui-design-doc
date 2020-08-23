<template>
	<Example vertical id="example-tabs-addable">
		<template slot="source">
			<vui-tabs type="card" v-model="activeKey" addable v-on:add="handleAdd">
				<vui-tab-panel v-for="panel in panels" v-bind:key="panel.key" v-bind:title="panel.title">
					{{panel.content}}
				</vui-tab-panel>
			</vui-tabs>
		</template>
		<template slot="title">动态添加</template>
		<template slot="describe">
			<p>结合 <code>addable</code> 属性和 <code>add</code> 事件实现动态添加页签。</p>
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
				panels: panels,
				activeKey: panels[0].key,
				index: index
			};
		},
		methods: {
			handleAdd() {
				this.panels.push({
					key: "tab" + this.index,
					title: "Tab " + this.index,
					content: "Content of Tab panel " + this.index
				});
				this.activeKey = "tab" + this.index;
				this.index++;
			}
		}
	};
</script>