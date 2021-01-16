const code =
`<template>
  <vui-collapse>
    <vui-panel title="This is panel header 1" extra="Extra">
      <p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>
    </vui-panel>
    <vui-panel title="This is panel header 2">
      <p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>
      <vui-badge slot="extra" v-bind:count="10" />
    </vui-panel>
    <vui-panel title="This is panel header 3">
      <p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>
      <vui-button slot="extra" size="small">Extra</vui-button>
    </vui-panel>
  </vui-collapse>
</template>

<script>
  export default {

  };
</script>
`;

export default code;