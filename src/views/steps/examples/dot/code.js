const code =
`<template>
  <div class="example-steps-dot">
    <vui-steps type="dot" v-bind:step="1">
      <vui-step title="Finished" description="This is a description." />
      <vui-step title="In Progress" description="This is a description." />
      <vui-step title="Waiting" description="This is a description." />
      <vui-step title="Waiting" description="This is a description." />
    </vui-steps>
    <vui-divider v-bind:gutter="24" />
    <vui-steps type="dot" direction="vertical" v-bind:step="1">
      <vui-step title="Finished" description="This is a description." />
      <vui-step title="In Progress" description="This is a description." />
      <vui-step title="Waiting" description="This is a description." />
      <vui-step title="Waiting" description="This is a description." />
    </vui-steps>
  </div>
</template>

<script>
  export default {

  };
</script>
`;

export default code;