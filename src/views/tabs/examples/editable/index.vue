<template>
	<example v-bind:code="code" id="example-tabs-editable">
		<template slot="demo">
			<vui-tabs type="card" v-model="activeKey" editable v-on:add="handleAdd" v-on:close="handleClose">
				<vui-tab-panel v-for="panel in panels" v-bind:key="panel.key" v-bind:title="panel.title" v-bind:closable="panel.closable">
					{{panel.content}}
				</vui-tab-panel>
			</vui-tabs>
		</template>
		<template slot="title">动态增减</template>
		<template slot="description">
			<p>同时具有添加和关闭功能。</p>
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

				if (index === 1) {
					panel.closable = false;
				}

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
			},
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