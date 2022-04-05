const code =
`<template>
  <div class="example-badge-status">
    <vui-badge status="default" />
    <vui-badge status="processing" />
    <vui-badge status="warning" />
    <vui-badge status="success" />
    <vui-badge status="error" />
    <br />
    <vui-badge status="default" text="默认" />
    <br />
    <vui-badge status="processing" text="处理中" />
    <br />
    <vui-badge status="warning" text="警告" />
    <br />
    <vui-badge status="success" text="成功" />
    <br />
    <vui-badge status="error" text="错误" />
  </div>
</template>

<script>
  export default {

  };
</script>

<style>
  .example-badge-status > .vui-badge { margin-right:16px; }
</style>
`;

export default code;