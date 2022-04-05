const code =
`<template>
  <div class="example-timeline-alternate">
    <vui-timeline mode="alternate" pending>
      <vui-timeline-item>
        <h4>2018-01-01</h4>
        <p>Create a services site</p>
      </vui-timeline-item>
      <vui-timeline-item color="red">
        <vui-icon slot="dot" type="time" v-bind:size="16" />
        <h4>2018-01-01</h4>
        <p>Solve initial network problems</p>
      </vui-timeline-item>
      <vui-timeline-item>
        <h4>2018-01-01</h4>
        <p>Technical testing</p>
      </vui-timeline-item>
      <vui-timeline-item color="green">
        <h4>2018-01-01</h4>
        <p>Network problems being solved</p>
      </vui-timeline-item>
      <vui-timeline-item>
        <vui-icon slot="dot" type="loading" v-bind:size="16" />
        <p>Recording...</p>
      </vui-timeline-item>
    </vui-timeline>
  </div>
</template>

<script>
  export default {

  };
</script>

<style>
  .example-timeline-alternate {  }
  .example-timeline-alternate h4 { margin-bottom:8px; color:#8c8c8c; }
  .example-timeline-alternate p { color:#595959; }
</style>
`;

export default code;