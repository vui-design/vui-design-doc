const code =
`<template>
  <div class="example-collapse-arrow-align">
    <vui-radio-group type="button" v-model="arrowAlign">
      <vui-radio label="Left" value="left" />
      <vui-radio label="Right" value="right" />
    </vui-radio-group>
    <vui-collapse v-bind:arrowAlign="arrowAlign">
      <vui-panel title="This is panel header 1">
        <p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>
      </vui-panel>
      <vui-panel title="This is panel header 2">
        <p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>
      </vui-panel>
      <vui-panel title="This is panel header 3">
        <p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>
      </vui-panel>
    </vui-collapse>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        arrowAlign: "left"
      };
    }
  };
</script>

<style>
  .example-collapse-arrow-align > .vui-collapse { margin-top:20px; }
</style>
`;

export default code;