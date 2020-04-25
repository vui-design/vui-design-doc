const code =
`<template>
  <div class="example-timeline-custom">
    <vui-timeline pending>
      <vui-timeline-item>Create a services site 2018-01-01</vui-timeline-item>
      <vui-timeline-item color="red">
        <vui-icon type="time" :size="16" slot="dot" />
        Solve initial network problems 2018-01-01
      </vui-timeline-item>
      <vui-timeline-item>Technical testing 2018-01-01</vui-timeline-item>
      <vui-timeline-item color="green">Network problems being solved 2018-01-01</vui-timeline-item>
      <vui-timeline-item>
        <vui-icon type="loading" :size="16" slot="dot" />
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