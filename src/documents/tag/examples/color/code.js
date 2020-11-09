const code =
`<template>
  <div>
    <div class="example-tag-color">
      <h4>Presets</h4>
      <vui-tag>default</vui-tag>
      <vui-tag color="primary">primary</vui-tag>
      <vui-tag color="info">info</vui-tag>
      <vui-tag color="warning">warning</vui-tag>
      <vui-tag color="success">success</vui-tag>
      <vui-tag color="error">error</vui-tag>
      <vui-tag color="blue">blue</vui-tag>
      <vui-tag color="cyan">cyan</vui-tag>
      <vui-tag color="geekblue">geekblue</vui-tag>
      <vui-tag color="gold">gold</vui-tag>
      <vui-tag color="green">green</vui-tag>
      <vui-tag color="lime">lime</vui-tag>
      <vui-tag color="magenta">magenta</vui-tag>
      <vui-tag color="orange">orange</vui-tag>
      <vui-tag color="pink">pink</vui-tag>
      <vui-tag color="purple">purple</vui-tag>
      <vui-tag color="red">red</vui-tag>
      <vui-tag color="volcano">volcano</vui-tag>
      <vui-tag color="yellow">yellow</vui-tag>
    </div>
    <div class="example-tag-color">
      <h4>Custom</h4>
      <vui-tag color="#f60">#f60</vui-tag>
      <vui-tag color="#2db7f5">#2db7f5</vui-tag>
      <vui-tag color="#87d068">#87d068</vui-tag>
      <vui-tag color="#108ee9">#108ee9</vui-tag>
    </div>
  </div>
</template>

<script>
  export default {

  };
</script>

<style>
  .example-tag-color:not(:last-child) { margin-bottom:20px; }
  .example-tag-color > h4 { margin-bottom:10px; }
  .example-tag-color > .vui-tag { margin-right:10px; margin-bottom:10px; }
</style>
`;

export default code;