<template>
	<Example vertical id="example-tabs-addable">
		<template slot="source">
			<vui-tabs type="card" v-model="activeTabPanel" addable @add="handleAdd">
				<vui-tab-panel v-for="panel in panels" :key="panel.name" :name="panel.name" :title="panel.title">
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
					title: "Tab " + index,
					name: "tab" + index,
					content: "Content of Tab panel " + index
				};

				panels.push(panel);
			}

			return {
				code,
				panels: panels,
				activeTabPanel: panels[0].name,
				index: index
			};
		},
		methods: {
			handleAdd() {
				this.panels.push({
					title: "Tab " + this.index,
					name: "tab" + this.index,
					content: "Content of Tab panel " + this.index
				});
				this.activeTabPanel = "tab" + this.index;
				this.index++;
			}
		}
	};
</script>