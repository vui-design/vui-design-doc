const code =
`<template>
  <div>
    <div class="example-tooltip-colorful">
      <h4>Presets</h4>
      <vui-tooltip color="dark" content="This is a tooltip">
        <vui-button>Dark</vui-button>
      </vui-tooltip>
      <vui-tooltip color="light" content="This is a tooltip">
        <vui-button>Light</vui-button>
      </vui-tooltip>
      <vui-tooltip color="blue" content="This is a tooltip">
        <vui-button>Blue</vui-button>
      </vui-tooltip>
      <vui-tooltip color="cyan" content="This is a tooltip">
        <vui-button>Cyan</vui-button>
      </vui-tooltip>
      <vui-tooltip color="geekblue" content="This is a tooltip">
        <vui-button>Geekblue</vui-button>
      </vui-tooltip>
      <vui-tooltip color="gold" content="This is a tooltip">
        <vui-button>Gold</vui-button>
      </vui-tooltip>
      <vui-tooltip color="green" content="This is a tooltip">
        <vui-button>Green</vui-button>
      </vui-tooltip>
      <vui-tooltip color="lime" content="This is a tooltip">
        <vui-button>Lime</vui-button>
      </vui-tooltip>
      <vui-tooltip color="magenta" content="This is a tooltip">
        <vui-button>Magenta</vui-button>
      </vui-tooltip>
      <vui-tooltip color="orange" content="This is a tooltip">
        <vui-button>Orange</vui-button>
      </vui-tooltip>
      <vui-tooltip color="pink" content="This is a tooltip">
        <vui-button>Pink</vui-button>
      </vui-tooltip>
      <vui-tooltip color="purple" content="This is a tooltip">
        <vui-button>Purple</vui-button>
      </vui-tooltip>
      <vui-tooltip color="red" content="This is a tooltip">
        <vui-button>Red</vui-button>
      </vui-tooltip>
      <vui-tooltip color="volcano" content="This is a tooltip">
        <vui-button>Volcano</vui-button>
      </vui-tooltip>
      <vui-tooltip color="yellow" content="This is a tooltip">
        <vui-button>Yellow</vui-button>
      </vui-tooltip>
    </div>
    <div class="example-tooltip-colorful">
      <h4>Custom</h4>
      <vui-tooltip color="#f60" content="This is a tooltip">
        <vui-button>#f60</vui-button>
      </vui-tooltip>
      <vui-tooltip color="#2db7f5" content="This is a tooltip">
        <vui-button>#2db7f5</vui-button>
      </vui-tooltip>
      <vui-tooltip color="#87d068" content="This is a tooltip">
        <vui-button>#87d068</vui-button>
      </vui-tooltip>
      <vui-tooltip color="#108ee9" content="This is a tooltip">
        <vui-button>#108ee9</vui-button>
      </vui-tooltip>
    </div>
  </div>
</template>

<script>
  export default {

  };
</script>

<style>
  .example-tooltip-colorful + .example-tooltip-colorful { margin-bottom:24px; }
  .example-tooltip-colorful > h4 { margin-bottom:8px; }
  .example-tooltip-colorful > .vui-tooltip { margin-right:8px; margin-bottom:8px; }
</style>
`;

export default code;