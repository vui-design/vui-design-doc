<template>
	<div class="markdown">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name: "Markdown"
	};
</script>

<style>
	.markdown { color:#595959; font-size:14px; line-height:1.71428571; }
	.markdown h1 { margin-bottom:20px; color:#333; font-size:24px; font-weight:600; }
	.markdown h1:last-child { margin-bottom:0; }
	.markdown h2 { margin-bottom:20px; color:#333; font-size:20px; font-weight:600; }
	.markdown h2:last-child { margin-bottom:0; }
	.markdown h3 { margin-bottom:20px; color:#333; font-size:16px; font-weight:600; }
	.markdown h3:last-child { margin-bottom:0; }
	.markdown p { margin-bottom:20px; }
	.markdown p:last-child { margin-bottom:0; }
	.markdown blockquote { border-left:4px solid #e6e6e6; margin-bottom:20px; padding-left:10px; }
	.markdown blockquote p { margin-bottom:0; }
	.markdown blockquote:last-child { margin-bottom:0; }
	.markdown table { width:100%; margin-bottom:20px; }
	.markdown table:last-child { margin-bottom:0; }
	.markdown table th { border-top:1px solid #f0f0f0; border-bottom:1px solid #e6e6e6; padding:10px; color:#333; text-align:left; }
	.markdown table th:first-child { white-space:nowrap; }
	.markdown table th:last-child { white-space:nowrap; }
	.markdown table td { border-bottom:1px solid #f0f0f0; padding:10px; text-align:left; }
	.markdown table td:first-child { white-space:nowrap; }
	.markdown table td:last-child { white-space:nowrap; }
	.markdown table.example-api-props td:nth-child(3) { color:#c7254e; }
	.markdown table.example-api-events td:nth-child(3) { color:#c7254e; }
	.markdown ul { list-style:disc; margin-bottom:20px; padding-left:18px; }
	.markdown ul:last-child { margin-bottom:0; }
	.markdown ul li { margin-bottom:5px; }
	.markdown ul li:last-child { margin-bottom:0; }
	.markdown ul li p { margin-bottom:0; }
	.markdown ol { list-style:decimal; margin-bottom:20px; padding-left:18px; }
	.markdown ol:last-child { margin-bottom:0; }
	.markdown ol li { margin-bottom:5px; }
	.markdown ol li:last-child { margin-bottom:0; }
	.markdown ol li p { margin-bottom:0; }
	.markdown code { border-radius:2px; border:1px solid #eee; background-color:#f2f4f5; margin:0; padding:2px 4px; color:#595959; font-size:12px; font-family:Consolas; }
	.markdown pre { margin:20px 0; }
	.markdown pre code { border-radius:2px; border:1px solid #eee; background-color:#f2f4f5; margin:0; padding:15px; color:#595959; font-size:12px; font-family:Consolas; }
</style>