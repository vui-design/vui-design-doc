const code =
`<template>
  <div class="example-button-size">
    <section>
      <vui-radio-group type="button" v-model="size">
        <vui-radio label="Small" value="small" />
        <vui-radio label="Medium" value="medium" />
        <vui-radio label="Large" value="large" />
      </vui-radio-group>
    </section>
    <section>
      <vui-button type="primary" :size="size">Primary</vui-button>
      <vui-button :size="size">Default</vui-button>
      <vui-button type="dashed" :size="size">Dashed</vui-button>
      <vui-button type="text" :size="size">Text</vui-button>
    </section>
    <section>
      <vui-button type="primary" icon="download-package" :size="size">Download</vui-button>
      <vui-button type="primary" icon="download-package" shape="round" :size="size">Download</vui-button>
      <vui-button type="primary" icon="download-package" shape="circle" :size="size" />
    </section>
    <section>
      <vui-button-group type="primary" :size="size">
        <vui-button>
          <vui-icon type="chevron-left" />Backward
        </vui-button>
        <vui-button>
          Forward<vui-icon type="chevron-right" />
        </vui-button>
      </vui-button-group>
    </section>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        size: "medium"
      };
    }
  };
</script>

<style>
  .example-button-size > section:not(:last-child) { margin-bottom:20px; }
  .example-button-size > section > .vui-button { margin-right:10px; }
</style>
`;

export default code;