<template>
  <div class="document">
    <slot></slot>
  </div>
</template>

<script>
  export default {

  };
</script>

<style>
  .document { color:rgba(0,0,0,0.85); font-size:14px; line-height:2; }
  .document h1 { margin:32px 0; color:rgba(0,0,0,0.85); font-size:28px; font-weight:600; }
  .document h1:first-child { margin-top:0; }
  .document h2 { margin:24px 0; color:rgba(0,0,0,0.85); font-size:24px; font-weight:600; }
  .document h3 { margin:16px 0; color:rgba(0,0,0,0.85); font-size:16px; font-weight:600; }
  .document h4 { margin:16px 0; color:rgba(0,0,0,0.85); font-size:14px; font-weight:600; }
  .document p { margin:16px 0; color:rgba(0,0,0,0.85); font-size:14px; }
  .document blockquote { border-left:4px solid #e6e6e6; margin:16px 0; padding-left:12px; }
  .document blockquote p { margin-bottom:0; color:rgba(0,0,0,0.45); }
  .document table { width:100%; margin:16px 0; }
  .document table th { border:1px solid #f0f0f0; background-color:#fafafa; padding:8px 16px; font-size:13px; text-align:left; vertical-align:top; }
  .document table td { border:1px solid #f0f0f0; padding:8px 16px; font-size:13px; text-align:left; vertical-align:top; }
  .document table.example-api-props th:nth-child(1) { white-space:nowrap; }
  .document table.example-api-props th:nth-child(2) {  }
  .document table.example-api-props th:nth-child(3) {  }
  .document table.example-api-props th:nth-child(4) { white-space:nowrap; }
  .document table.example-api-props td:nth-child(1) { font-family:Lucida Console, Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace; white-space:nowrap; }
  .document table.example-api-props td:nth-child(2) {  }
  .document table.example-api-props td:nth-child(3) { color:#ff4d4f; font-family:Lucida Console, Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace; }
  .document table.example-api-props td:nth-child(4) { font-family:Lucida Console, Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace; white-space:nowrap; }
  .document table.example-api-events th:nth-child(1) { white-space:nowrap; }
  .document table.example-api-events th:nth-child(2) {  }
  .document table.example-api-events th:nth-child(3) {  }
  .document table.example-api-events th:nth-child(4) { white-space:nowrap; }
  .document table.example-api-events td:nth-child(1) { font-family:Lucida Console, Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace; white-space:nowrap; }
  .document table.example-api-events td:nth-child(2) {  }
  .document table.example-api-events td:nth-child(3) { color:#ff4d4f; font-family:Lucida Console, Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace; }
  .document table.example-api-events td:nth-child(4) { font-family:Lucida Console, Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace; white-space:nowrap; }
  .document ul { list-style:circle; margin-bottom:16px; padding-left:18px; }
  .document ul li p { margin-bottom:0; }
  .document ol { list-style:circle; margin-bottom:16px; padding-left:18px; }
  .document ol li { margin-bottom:5px; }
  .document ol li p { margin-bottom:0; }
  .document pre { margin:16px 0; }
  .document code { border-radius:2px; border:1px solid #f0f0f0; background-color:#fafafa; margin:0; padding:2px 4px; color:rgba(0,0,0,0.65); font-size:13px; font-family:Lucida Console, Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace; }
  .document pre code { padding:12px 16px; }
</style>