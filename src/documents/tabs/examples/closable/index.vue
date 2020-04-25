<template>
	<Example vertical id="example-tabs-closable">
		<template slot="source">
			<vui-tabs type="card" v-model="activeTabPanel" closable @close="handleClose">
				<vui-tab-panel v-for="panel in panels" :key="panel.name" :name="panel.name" :title="panel.title" :closable="panel.closable">
					{{panel.content}}
				</vui-tab-panel>
			</vui-tabs>
		</template>
		<template slot="title">动态关闭</template>
		<template slot="describe">
			<p>结合 <code>closable</code> 属性和 <code>close</code> 事件实现动态关闭页签。</p>
			<p>可以显式设置某个 <code>TabsPanel</code> 的 <code>closable</code> 属性为 <code>false</code>，禁止其关闭。</p>
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

				if (index === 1) {
					panel.closable = false;
				}

				panels.push(panel);
			}

			return {
				code,
				panels: panels,
				activeTabPanel: panels[0].name
			};
		},
		methods: {
			handleClose(name) {
				let activeTabPanel = this.activeTabPanel;
				let lastIndex;

				this.panels.forEach((panel, index) => {
					if (panel.name === name) {
						lastIndex = index - 1;
					}
				});

				let panels = this.panels.filter(panel => panel.name !== name);

				if (panels.length && activeTabPanel === name) {
					if (lastIndex >= 0) {
						activeTabPanel = panels[lastIndex].name;
					}
					else {
						activeTabPanel = panels[0].name;
					}
				}

				this.panels = panels;
				this.activeTabPanel = activeTabPanel;
			}
		}
	};
</script>