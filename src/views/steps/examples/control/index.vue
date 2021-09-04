<template>
	<example v-bind:code="code" id="example-steps-control">
		<template slot="demo">
			<div class="example-steps-control">
				<vui-steps v-bind:step="step">
					<vui-step v-for="(item, index) in steps" v-bind:key="index" v-bind:title="item.title" />
				</vui-steps>
				<div class="example-steps-control-content">{{steps[step].content}}</div>
				<div class="example-steps-control-action">
					<vui-button v-bind:disabled="btnPrevDisabled" v-on:click="handlePrevStep">Previous</vui-button>
					<vui-button v-bind:disabled="btnNextDisabled" v-on:click="handleNextStep">Next</vui-button>
				</div>
			</div>
		</template>
		<template slot="title">切换步骤</template>
		<template slot="description">
			<p>通常配合内容及按钮使用，表示一个流程的处理进度。</p>
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
				steps: [
					{ title: "First", content: "First Content" },
					{ title: "Second", content: "Second Content" },
					{ title: "Third", content: "Third Content" },
					{ title: "Last", content: "Last Content" }
				],
        		step: 0
			};
		},
		computed: {
			btnNextDisabled() {
				return this.step >= this.steps.length - 1;
			},
			btnPrevDisabled() {
				return this.step <= 0;
			}
		},
		methods: {
			handlePrevStep() {
				if (this.step <= 0) {
					return;
				}

				this.step--;
			},
			handleNextStep() {
				if (this.step >= this.steps.length - 1) {
					return;
				}

				this.step++;
			}
		}
	};
</script>

<style>
	.example-steps-control {  }
	.example-steps-control-content { border:1px dashed #e0e0e0; border-radius:2px; background-color:#f9f9f9; margin-top:20px; text-align:center; line-height:200px; }
	.example-steps-control-action { margin-top:20px; }
	.example-steps-control-action .vui-button { margin-right:10px; }
</style>