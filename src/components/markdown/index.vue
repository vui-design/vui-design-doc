<template>
  <div class="vui-doc-markdown">
    <slot></slot>
  </div>
</template>

<script>
  export default {

  };
</script>

<style>
  .vui-doc-markdown { color:rgba(0,0,0,0.85); font-size:14px; line-height:2; }
  .vui-doc-markdown h1 { margin:32px 0; color:rgba(0,0,0,0.85); font-size:28px; font-weight:600; }
  .vui-doc-markdown h1:first-child { margin-top:0; }
  .vui-doc-markdown h2 { margin:24px 0; color:rgba(0,0,0,0.85); font-size:24px; font-weight:600; }
  .vui-doc-markdown h3 { margin:16px 0; color:rgba(0,0,0,0.85); font-size:16px; font-weight:600; }
  .vui-doc-markdown h4 { margin:16px 0; color:rgba(0,0,0,0.85); font-size:14px; font-weight:600; }
  .vui-doc-markdown p { margin:16px 0; color:rgba(0,0,0,0.85); font-size:14px; }
  .vui-doc-markdown blockquote { border-left:4px solid #e6e6e6; margin:16px; padding-left:12px; }
  .vui-doc-markdown blockquote p { margin-bottom:0; }
  .vui-doc-markdown table { width:100%; margin:16px 0; }
  .vui-doc-markdown table th { border:1px solid #f0f0f0; background-color:#fafafa; padding:8px 16px; font-size:13px; text-align:left; vertical-align:top; }
  .vui-doc-markdown table td { border:1px solid #f0f0f0; padding:8px 16px; font-size:13px; text-align:left; vertical-align:top; }
  .vui-doc-markdown table.example-api-props th:nth-child(1) { white-space:nowrap; }
  .vui-doc-markdown table.example-api-props th:nth-child(2) {  }
  .vui-doc-markdown table.example-api-props th:nth-child(3) {  }
  .vui-doc-markdown table.example-api-props th:nth-child(4) { white-space:nowrap; }
  .vui-doc-markdown table.example-api-props td:nth-child(1) { font-family:SFMono-Regular, Consolas, Liberation Mono, Menlo, Courier, monospace; white-space:nowrap; }
  .vui-doc-markdown table.example-api-props td:nth-child(2) {  }
  .vui-doc-markdown table.example-api-props td:nth-child(3) { color:#ff4d4f; font-family:SFMono-Regular, Consolas, Liberation Mono, Menlo, Courier, monospace; }
  .vui-doc-markdown table.example-api-props td:nth-child(4) { white-space:nowrap; }
  .vui-doc-markdown table.example-api-events th:nth-child(1) { white-space:nowrap; }
  .vui-doc-markdown table.example-api-events th:nth-child(2) {  }
  .vui-doc-markdown table.example-api-events th:nth-child(3) {  }
  .vui-doc-markdown table.example-api-events th:nth-child(4) { white-space:nowrap; }
  .vui-doc-markdown table.example-api-events td:nth-child(1) { font-family:SFMono-Regular, Consolas, Liberation Mono, Menlo, Courier, monospace; white-space:nowrap; }
  .vui-doc-markdown table.example-api-events td:nth-child(2) {  }
  .vui-doc-markdown table.example-api-events td:nth-child(3) { color:#ff4d4f; font-family:SFMono-Regular, Consolas, Liberation Mono, Menlo, Courier, monospace; }
  .vui-doc-markdown table.example-api-events td:nth-child(4) { white-space:nowrap; }
  .vui-doc-markdown ul { list-style:circle; margin-bottom:16px; padding-left:18px; }
  .vui-doc-markdown ul li p { margin-bottom:0; }
  .vui-doc-markdown ol { list-style:circle; margin-bottom:16px; padding-left:18px; }
  .vui-doc-markdown ol li { margin-bottom:5px; }
  .vui-doc-markdown ol li p { margin-bottom:0; }
  .vui-doc-markdown pre { margin:16px 0; }
  .vui-doc-markdown code { border-radius:2px; border:1px solid #f0f0f0; background-color:#fafafa; margin:0; padding:2px 4px; color:rgba(0,0,0,0.65); font-size:13px; font-family:SFMono-Regular, Consolas, Liberation Mono, Menlo, Courier, monospace; }
  .vui-doc-markdown pre code { padding:16px; }
</style>