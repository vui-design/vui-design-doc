const code =
`<template>
  <vui-collapse v-model="value">
    <vui-panel name="1" title="This is panel header 1">
      <p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>
    </vui-panel>
    <vui-panel name="2" title="This is panel header 2">
      <p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>
    </vui-panel>
    <vui-panel name="3" title="This is panel header 3">
      <p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>
    </vui-panel>
  </vui-collapse>
</template>

<script>
  export default {
    data() {
      return {
        value: ["1"]
      };
    }
  };
</script>
`;

export default code;