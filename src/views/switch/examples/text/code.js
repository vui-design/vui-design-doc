const code =
`<template>
  <div class="example-switch-text">
    <vui-switch>
      <template slot="checked">开</template>
      <template slot="unchecked">关</template>
    </vui-switch>
    <vui-switch>
      <template slot="checked">1</template>
      <template slot="unchecked">0</template>
    </vui-switch>
    <vui-switch checked>
      <vui-icon type="checkmark" slot="checked" />
      <vui-icon type="crossmark" slot="unchecked" />
    </vui-switch>
  </div>
</template>

<script>
  export default {

  };
</script>

<style>
  .example-switch-text .vui-switch { margin-right:10px; }
</style>
`;

export default code;