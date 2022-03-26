const code =
`<template>
  <div class="example-steps-clickable">
    <vui-steps v-bind:step="step" v-on:change="handleChange">
      <vui-step title="Step 1" description="This is a description." />
      <vui-step title="Step 2" description="This is a description." />
      <vui-step title="Step 3" description="This is a description." />
    </vui-steps>
    <vui-divider v-bind:gutter="24" />
    <vui-steps direction="vertical" v-bind:step="step" v-on:change="handleChange">
      <vui-step title="Step 1" description="This is a description." />
      <vui-step title="Step 2" description="This is a description." />
      <vui-step title="Step 3" description="This is a description." />
    </vui-steps>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        step: 1
      };
    },
    methods: {
      handleChange(step) {
        this.step = step;
      }
    }
  };
</script>
`;

export default code;