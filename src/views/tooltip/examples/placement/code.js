const code =
`<template>
  <div class="example-tooltip-placement">
    <div class="top">
      <vui-tooltip placement="top-start" content="This is a tooltip">
        <vui-button>TL</vui-button>
      </vui-tooltip>
      <vui-tooltip placement="top" content="This is a tooltip">
        <vui-button>T</vui-button>
      </vui-tooltip>
      <vui-tooltip placement="top-end" content="This is a tooltip">
        <vui-button>TR</vui-button>
      </vui-tooltip>
    </div>
    <div class="middle">
      <div class="middle-left">
        <vui-tooltip placement="left-start" content="This is a tooltip">
          <vui-button block>LT</vui-button>
        </vui-tooltip>
        <vui-tooltip placement="left" content="This is a tooltip">
          <vui-button block>L</vui-button>
        </vui-tooltip>
        <vui-tooltip placement="left-end" content="This is a tooltip">
          <vui-button block>LB</vui-button>
        </vui-tooltip>
      </div>
      <div class="middle-right">
        <vui-tooltip placement="right-start" content="This is a tooltip">
          <vui-button block>RT</vui-button>
        </vui-tooltip>
        <vui-tooltip placement="right" content="This is a tooltip">
          <vui-button block>R</vui-button>
        </vui-tooltip>
        <vui-tooltip placement="right-end" content="This is a tooltip">
          <vui-button block>RB</vui-button>
        </vui-tooltip>
      </div>
    </div>
    <div class="bottom">
      <vui-tooltip placement="bottom-start" content="This is a tooltip">
        <vui-button>BL</vui-button>
      </vui-tooltip>
      <vui-tooltip placement="bottom" content="This is a tooltip">
        <vui-button>B</vui-button>
      </vui-tooltip>
      <vui-tooltip placement="bottom-end" content="This is a tooltip">
        <vui-button>BR</vui-button>
      </vui-tooltip>
    </div>
  </div>
</template>

<script>
  export default {

  };
</script>

<style>
  .example-tooltip-placement .top { text-align:center; }
  .example-tooltip-placement .top .vui-tooltip { margin:0 8px; }
  .example-tooltip-placement .top .vui-button { width:60px; }

  .example-tooltip-placement .middle { width:348px; height:150px; margin:8px auto; }

  .example-tooltip-placement .middle-left { float:left; width:60px; }
  .example-tooltip-placement .middle-left .vui-tooltip { margin:8px 0; }
  .example-tooltip-placement .middle-left .vui-button { width:60px; }

  .example-tooltip-placement .middle-right { float:right; width:60px; }
  .example-tooltip-placement .middle-right .vui-tooltip { margin:8px 0; }
  .example-tooltip-placement .middle-right .vui-button { width:60px; }

  .example-tooltip-placement .bottom { text-align:center; }
  .example-tooltip-placement .bottom .vui-tooltip { margin:0 8px; }
  .example-tooltip-placement .bottom .vui-button { width:60px; }
</style>
`;

export default code;