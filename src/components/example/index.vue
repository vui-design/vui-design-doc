<template>
	<div class="vui-doc-example">
		<div ref="case" class="vui-doc-example-case">
			<div class="demo">
				<slot name="demo"></slot>
			</div>
			<vui-divider class="title" orientation="left" dashed>
				<slot name="title">{{title}}</slot>
			</vui-divider>
			<div class="description">
				<slot name="description">{{description}}</slot>
			</div>
			<div class="actions">
				<vui-tooltip v-bind:content="tooltips.expand">
					<a href="javascript:;" class="btn" v-on:click="handleExpand">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
							<path fill="#666666" d="M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z" />
						</svg>
					</a>
				</vui-tooltip>
				<vui-tooltip v-bind:content="tooltips.copy">
					<a href="javascript:;" class="btn btn-copy" v-on:click="handleCopy">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
							<path fill="#666666" d="M7 6V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3v3c0 .552-.45 1-1.007 1H4.007A1.001 1.001 0 0 1 3 21l.003-14c0-.552.45-1 1.006-1H7zM5.002 8L5 20h10V8H5.002zM9 6h8v10h2V4H9v2zm-2 5h6v2H7v-2zm0 4h6v2H7v-2z" />
						</svg>
					</a>
				</vui-tooltip>
				<vui-tooltip content="在 JsFiddle 中打开">
					<a v-bind:href="jsFiddleUrl" target="_blank" class="btn btn-jsfiddle">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
							<path fill="#666666" d="M17 21H7A6 6 0 0 1 5.008 9.339a7 7 0 1 1 13.984 0A6 6 0 0 1 17 21zm0-12a5 5 0 1 0-9.994.243l.07 1.488-1.404.494A4.002 4.002 0 0 0 7 19h10a4 4 0 1 0-3.796-5.265l-1.898-.633A6.003 6.003 0 0 1 17 9z" />
						</svg>
					</a>
				</vui-tooltip>
			</div>
		</div>
		<div ref="code" class="vui-doc-example-code" v-bind:style="styles.code">
			<pre v-highlightjs><code class="html" ref="source"><slot name="code">{{code}}</slot></code></pre>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			title: {
				type: String,
				default: undefined
			},
			description: {
				type: String,
				default: undefined
			},
			code: {
				type: String,
				default: undefined
			},
			jsFiddle: {
				type: String,
				default: undefined
			}
		},
		data() {
			return {
				ready: false,
				expanded: false,
				copied: false,
				caseHeight: 0,
				codeHeight: 0
			};
		},
		computed: {
			styles() {
				let styles = {};

				styles.code = {}

				if (this.ready) {
					if (this.expanded) {
						styles.code.height = Math.max(this.caseHeight, this.codeHeight) + "px";
					}
					else {
						styles.code.height = this.caseHeight + "px";
					}
				}

				return styles;
			},
			tooltips() {
				let tooltips = {};

				tooltips.expand = this.expanded ? "收起代码" : "展开代码";
				tooltips.copy = this.copied ? "复制成功" : "复制代码";

				return tooltips;
			},
			jsFiddleUrl() {
				if (!this.jsFiddle) {
					return "javascript:;";
				}

				return "https://jsfiddle.net/" + this.jsFiddle + "/";
			}
		},
		methods: {
			handleExpand() {
				this.expanded = !this.expanded;
			},
			handleCopy() {
				// 创建隐藏的 Textarea 标签，并将组件代码放入其中
				let textarea = document.createElement("textarea");

				textarea.style.position = "absolute";
				textarea.style.top = "0";
				textarea.style.left = "0";
				textarea.style.border = "none";
				textarea.style.margin = "0";
				textarea.style.padding = "0";
				textarea.style.opacity = "0";
				textarea.value = this.code;

				document.body.appendChild(textarea);

				// 复制 Textarea 标签的文本
				textarea.select();
				document.execCommand("copy");

				// 移除 Textarea 标签
				document.body.removeChild(textarea);

				// Tooltip 提示
				this.copied = true;

				let timeout = setTimeout(() => {
					this.copied = false;

					clearTimeout(timeout);
					timeout = null;
				}, 1000);
			}
		},
		mounted() {
			this.$nextTick(() => {
				this.ready = true;
				this.caseHeight = 0;
				this.codeHeight = this.$refs.code.clientHeight;
			});
		}
	};
</script>

<style>
	.vui-doc-example { border:1px solid #f0f0f0; border-radius:2px; background-color:#fff; margin:16px 0; color:rgba(0,0,0,0.85); font-size:14px; line-height:2; }
	.vui-doc-example:first-child { margin-top:0; }
	.vui-doc-example:last-child { margin-bottom:0; }

	.vui-doc-example-case { position:relative; box-sizing:border-box; }
	.vui-doc-example-case .demo { padding:24px; }
	.vui-doc-example-case .title { position:relative; margin:0; }
	.vui-doc-example-case .description { position:relative; padding:24px; }
	.vui-doc-example-case .description ul { list-style:circle; margin-bottom:10px; padding-left:18px; }
	.vui-doc-example-case .description ul li p { margin-bottom:0; }
	.vui-doc-example-case .description ol { list-style:circle; padding-left:18px; }
	.vui-doc-example-case .description ol li p { margin-bottom:0; }
	.vui-doc-example-case .description p { margin:0; }
	.vui-doc-example-case .description code { border-radius:2px; border:1px solid #f0f0f0; background-color:#fafafa; margin:0; padding:2px 4px; color:rgba(0,0,0,0.65); font-size:13px; font-family:SFMono-Regular, Consolas, Liberation Mono, Menlo, Courier, monospace; }
	.vui-doc-example-case .actions { display:flex; justify-content:center; align-items:center; border-top:1px dashed #e6e6e6; padding:12px 0; }
	.vui-doc-example-case .actions .vui-tooltip { display:block; margin:0 4px; }
	.vui-doc-example-case .actions .btn { cursor:pointer; display:block; width:24px; height:24px; background-repeat:no-repeat; background-position:50% 50%; padding:4px; opacity:0.5; transition:all 0.2s; }
	.vui-doc-example-case .actions .btn svg { display:block; width:100%; height:100%; }
	.vui-doc-example-case .actions .btn:hover { opacity:1; }

	.vui-doc-example-code { position:relative; box-sizing:border-box; overflow:hidden; transition:height 0.2s ease-in-out; }
	.vui-doc-example-code:before { content:""; position:absolute; top:0; left:0; right:0; border-top:1px dashed #e6e6e6; }
	.vui-doc-example-code pre { box-sizing:border-box; display:block; width:100%; height:100%; }
	.vui-doc-example-code pre code { box-sizing:border-box; display:block; width:100%; height:100%; background-color:transparent; padding:24px; overflow-x:hidden; overflow-y:hidden; color:rgba(0,0,0,0.65); font-size:13px; font-family:"Lucida Console", Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace; }
	.vui-doc-example-code pre code:hover { overflow-x:auto; overflow-y:hidden; }
</style>