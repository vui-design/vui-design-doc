const code =
`<template>
  <div>
    <div class="example-badge-colorful">
      <h4>Presets</h4>
      <vui-badge color="blue" text="blue" />
      <vui-badge color="cyan" text="cyan" />
      <vui-badge color="geekblue" text="geekblue" />
      <vui-badge color="gold" text="gold" />
      <vui-badge color="green" text="green" />
      <vui-badge color="lime" text="lime" />
      <vui-badge color="magenta" text="magenta" />
      <vui-badge color="orange" text="orange" />
      <vui-badge color="pink" text="pink" />
      <vui-badge color="purple" text="purple" />
      <vui-badge color="red" text="red" />
      <vui-badge color="volcano" text="volcano" />
      <vui-badge color="yellow" text="yellow" />
    </div>
    <div class="example-badge-colorful">
      <h4>Custom</h4>
      <vui-badge color="#f60" text="#f60" />
      <vui-badge color="#2db7f5" text="#2db7f5" />
      <vui-badge color="#87d068" text="#87d068" />
      <vui-badge color="#108ee9" text="#108ee9" />
    </div>
  </div>
</template>

<script>
  export default {

  };
</script>

<style>
  .example-badge-colorful + .example-badge-colorful { margin-top:24px; }
  .example-badge-colorful > h4 { margin-bottom:8px; }
  .example-badge-colorful > .vui-badge { display:block; }
  .example-badge-colorful > .vui-badge + .vui-badge { margin-top:8px; }
</style>
`;

export default code;