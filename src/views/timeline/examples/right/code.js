const code =
`<template>
  <div class="example-timeline-right">
    <vui-timeline mode="right" pending>
      <vui-timeline-item>Create a services site 2018-01-01</vui-timeline-item>
      <vui-timeline-item color="red">
        <vui-icon slot="dot" type="time" v-bind:size="16" />
        Solve initial network problems 2018-01-01
      </vui-timeline-item>
      <vui-timeline-item>Technical testing 2018-01-01</vui-timeline-item>
      <vui-timeline-item color="green">Network problems being solved 2018-01-01</vui-timeline-item>
      <vui-timeline-item>
        <vui-icon slot="dot" type="loading" v-bind:size="16" />
        Recording...
      </vui-timeline-item>
    </vui-timeline>
  </div>
</template>

<script>
  export default {

  };
</script>
`;

export default code;