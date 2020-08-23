<template>
	<Example vertical id="example-tabs-closable">
		<template slot="source">
			<vui-tabs type="card" v-model="activeKey" closable v-on:close="handleClose">
				<vui-tab-panel v-for="panel in panels" v-bind:key="panel.key" v-bind:title="panel.title" v-bind:closable="panel.closable">
					{{panel.content}}
				</vui-tab-panel>
			</vui-tabs>
		</template>
		<template slot="title">动态关闭</template>
		<template slot="describe">
			<p>结合 <code>closable</code> 属性和 <code>close</code> 事件实现动态关闭页签。</p>
			<p>可以显式设置某个 <code>TabPanel</code> 的 <code>closable</code> 属性为 <code>false</code>，禁止其关闭。</p>
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

				if (index === 1) {
					panel.closable = false;
				}

				panels.push(panel);
			}

			return {
				code,
				panels: panels,
				activeKey: panels[0].key
			};
		},
		methods: {
			handleClose(key) {
				let activeKey = this.activeKey;
				let lastIndex;

				this.panels.forEach((panel, index) => {
					if (panel.key === key) {
						lastIndex = index - 1;
					}
				});

				let panels = this.panels.filter(panel => panel.key !== key);

				if (panels.length && activeKey === key) {
					if (lastIndex >= 0) {
						activeKey = panels[lastIndex].key;
					}
					else {
						activeKey = panels[0].key;
					}
				}

				this.panels = panels;
				this.activeKey = activeKey;
			}
		}
	};
</script>