<template>
	<example v-bind:code="code" id="example-progress-dynamic">
		<template slot="demo">
			<div class="example-progress-dynamic">
				<vui-button-group>
					<vui-button icon="minus" @click="handleDecrease" />
					<vui-button icon="plus" @click="handleIncrease" />
				</vui-button-group>
				<vui-progress :percentage="percentage" />
				<vui-progress type="circle" :percentage="percentage" />
				<vui-progress type="dashboard" :percentage="percentage" />
			</div>
		</template>
		<template slot="title">动态展示</template>
		<template slot="description">
			<p>通过数据的联动和逻辑控制，实现动态效果。</p>
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
				code,
				percentage: 10
			};
		},
		methods: {
			handleDecrease() {
				let percentage = this.percentage - 10;

				if (percentage < 0) {
					percentage = 0;
				}

				this.percentage = percentage;
			},
			handleIncrease() {
				let percentage = this.percentage + 10;

				if (percentage > 100) {
					percentage = 100;
				}

				this.percentage = percentage;
			}
		}
	};
</script>

<style>
	.example-progress-dynamic > .vui-progress-line { margin-top:15px; margin-bottom:15px; }
	.example-progress-dynamic > .vui-progress-circle { margin-right:15px; }
	.example-progress-dynamic > .vui-progress-dashboard {  }
</style>