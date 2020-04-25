const code =
`<template>
  <div class="example-button-group">
    <section>
      <h4>Basic</h4>
      <vui-button-group type="primary">
        <vui-button>Cancel</vui-button>
        <vui-button>OK</vui-button>
      </vui-button-group>
      <vui-button-group disabled>
        <vui-button>Cancel</vui-button>
        <vui-button>OK</vui-button>
      </vui-button-group>
      <vui-button-group>
        <vui-button>Cancel</vui-button>
        <vui-button>OK</vui-button>
      </vui-button-group>
    </section>
    <section>
      <h4>Shape And Icon</h4>
      <vui-button-group type="primary">
        <vui-button>
          <vui-icon type="left" />Backward
        </vui-button>
        <vui-button>
          Forward<vui-icon type="right" />
        </vui-button>
      </vui-button-group>
      <vui-button-group type="primary" shape="round">
        <vui-button icon="left" />
        <vui-button icon="right" />
      </vui-button-group>
      <vui-button-group shape="round">
        <vui-button icon="left" />
        <vui-button icon="right" />
      </vui-button-group>
    </section>
    <section>
      <h4>Size</h4>
      <div>
        <vui-button-group size="small">
          <vui-button>L</vui-button>
          <vui-button>M</vui-button>
          <vui-button>R</vui-button>
        </vui-button-group>
      </div>
      <div style="margin-top: 10px;">
        <vui-button-group>
          <vui-button>L</vui-button>
          <vui-button>M</vui-button>
          <vui-button>R</vui-button>
        </vui-button-group>
      </div>
      <div style="margin-top: 10px;">
        <vui-button-group size="large">
          <vui-button>L</vui-button>
          <vui-button>M</vui-button>
          <vui-button>R</vui-button>
        </vui-button-group>
      </div>
    </section>
  </div>
</template>

<script>
  export default {

  };
</script>

<style>
  .example-button-group > section:not(:last-child) { margin-bottom:20px; }
  .example-button-group > section > h4 { margin-bottom:10px; }
  .example-button-group > section > .vui-button-group { margin-right:10px; }
</style>
`;

export default code;