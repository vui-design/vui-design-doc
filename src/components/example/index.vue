<template>
	<div class="example">
		<div class="example-case" ref="exampleCase">
			<div class="source">
				<slot name="source"></slot>
			</div>
			<div class="title">
				<h4><slot name="title"></slot></h4>
			</div>
			<div class="describe">
				<div class="btn-list">
					<vui-tooltip :content="showMore ? '收起代码' : '展开代码'">
						<i class="btn" :class="showMore ? 'btn-embed-end' : 'btn-embed-start'" @click="handleShowMore" />
					</vui-tooltip>
				</div>
				<slot name="describe"></slot>
			</div>
		</div>
		<div class="example-code" ref="exampleCode" :style="codeStyle">
			<div class="btn-list">
				<vui-tooltip :content="copied ? '复制成功' : '复制代码'">
					<i class="btn btn-copy" @click="handleCopy" />
				</vui-tooltip>
				<!--
				<vui-tooltip content="在 JsFiddle 中打开">
					<i class="btn btn-jsfiddle" @click="handleJsFiddle" />
				</vui-tooltip>
				-->
			</div>
			<div class="code">
				<pre v-highlightjs><code class="html" ref="code"><slot name="code"></slot></code></pre>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				showMore: false,
				ready: false,
				caseHeight: 0,
				codeHeight: 0,
				copied: false
			};
		},
		computed: {
			codeStyle() {
				let style = {};

				if (this.ready) {
					if (this.showMore) {
						style.height = Math.max(this.caseHeight, this.codeHeight) + "px";
					}
					else {
						style.height = this.caseHeight + "px";
					}
				}

				return style;
			}
		},
		methods: {
			handleShowMore() {
				this.showMore = !this.showMore;
			},
			handleJsFiddle() {

			},
			handleCopy() {
				let range = document.createRange();

				range.selectNode(this.$refs.code);
				window.getSelection().removeAllRanges();
				window.getSelection().addRange(range);
				document.execCommand("copy");
				window.getSelection().removeAllRanges();

				this.copied = true;

				let timeout = setTimeout(() => {
					this.copied = false;
				}, 1000);
			}
		},
		mounted() {
			this.$nextTick(() => {
				this.ready = true;
				this.caseHeight = 0;
				this.codeHeight = this.$refs.exampleCode.clientHeight;
			});
		}
	};
</script>

<style>
	.example { border:1px solid #e6e6e6; border-radius:2px; background-color:#fff; margin:20px 0; color:#595959; font-size:14px; line-height:1.71428571; }

	.example .example-case { position:relative; box-sizing:border-box; }
	.example .example-case .source { padding:20px; }
	.example .example-case .title { position:relative; padding:0 20px; font-size:0; }
	.example .example-case .title:before { content:""; position:absolute; top:50%; left:0; right:0; border-top:1px dashed #e6e6e6; }
	.example .example-case .title h4 { position:relative; display:inline-block; background-color:#fff; padding:0 10px; vertical-align:middle; font-size:14px; line-height:1; }
	.example .example-case .describe { position:relative; padding:20px 40px 20px 20px; }
	.example .example-case .describe ul { list-style:disc; margin-bottom:10px; padding-left:18px; }
	.example .example-case .describe ul:last-child { margin-bottom:0; }
	.example .example-case .describe ul li { margin-bottom:5px; }
	.example .example-case .describe ul li:last-child { margin-bottom:0; }
	.example .example-case .describe ul li p { margin-bottom:0; }
	.example .example-case .describe ol { list-style:decimal; margin-bottom:10px; padding-left:18px; }
	.example .example-case .describe ol:last-child { margin-bottom:0; }
	.example .example-case .describe ol li { margin-bottom:5px; }
	.example .example-case .describe ol li:last-child { margin-bottom:0; }
	.example .example-case .describe ol li p { margin-bottom:0; }
	.example .example-case .describe p { margin-bottom:10px; }
	.example .example-case .describe p:last-child { margin-bottom:0; }
	.example .example-case .describe code { border-radius:2px; border:1px solid #eee; background-color:#f2f4f5; margin:0; padding:2px 4px; color:#595959; font-size:12px; font-family:Consolas; }
	.example .example-case .describe .btn-list { position:absolute; bottom:22px; right:20px; }
	.example .example-case .describe .btn-list .vui-tooltip { float:left; }
	.example .example-case .describe .btn-list .btn { cursor:pointer; display:block; width:20px; height:20px; background-repeat:no-repeat; background-position:50% 50%; margin-right:10px; opacity:0.5; }
	.example .example-case .describe .btn-list .btn:last-child { margin-right:0; }
	.example .example-case .describe .btn-list .btn:hover { opacity:1; }
	.example .example-case .describe .btn-list .btn.btn-embed-start { background-image:url("images/icon-embed-start.png"); }
	.example .example-case .describe .btn-list .btn.btn-embed-end { background-image:url("images/icon-embed-end.png"); }

	.example .example-code { position:relative; box-sizing:border-box; overflow:hidden; transition:height 0.2s ease-in-out; }
	.example .example-code:before { content:""; position:absolute; top:0; left:0; right:0; border-top:1px dashed #e6e6e6; }
	.example .example-code .btn-list { position:absolute; top:20px; right:20px; }
	.example .example-code .btn-list .vui-tooltip { float:left; margin-left:10px; }
	.example .example-code .btn-list .btn { cursor:pointer; display:block; width:20px; height:20px; background-repeat:no-repeat; background-position:50% 50%; opacity:0.5; }
	.example .example-code .btn-list .btn:hover { opacity:1; }
	.example .example-code .btn-list .btn.btn-copy { background-image:url("images/icon-copy.png"); }
	.example .example-code .btn-list .btn.btn-jsfiddle { background-image:url("images/icon-jsfiddle.png"); }
	.example .example-code .code { box-sizing:border-box; width:100%; height:100%; }
	.example .example-code .code pre { box-sizing:border-box; display:block; width:100%; height:100%; }
	.example .example-code .code pre .hljs { box-sizing:border-box; display:block; width:100%; height:100%; background-color:transparent; padding:20px; overflow-x:hidden; overflow-y:hidden; color:#595959; font-size:13px; font-family:"Lucida Console", Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace; line-height:1.71428571; }
	.example .example-code .code pre .hljs:hover { overflow-x:auto; overflow-y:hidden; }
</style>