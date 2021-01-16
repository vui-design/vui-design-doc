const code =
`<template>
  <div class="example-card-shadow">
    <vui-row v-bind:gutter="16">
      <vui-col v-bind:span="12">
        <vui-card v-bind:bordered="false" shadow="hover" title="Card title">
          <p>Card content...</p>
          <p>Card content...</p>
          <p>Card content...</p>
        </vui-card>
      </vui-col>
      <vui-col v-bind:span="12">
        <vui-card v-bind:bordered="false" shadow="always" title="Card title">
          <p>Card content...</p>
          <p>Card content...</p>
          <p>Card content...</p>
        </vui-card>
      </vui-col>
    </vui-row>
  </div>
</template>

<script>
  export default {

  };
</script>

<style>
  .example-card-shadow { background-color:#f6f6f6; padding:16px; }
</style>
`;

export default code;