const code =
`<template>
  <div class="example-card-shadow">
    <vui-row :gutter="20">
      <vui-col :span="12">
        <vui-card title="Card title" shadow="always" :bordered="false">
          <p>Card content...</p>
          <p>Card content...</p>
          <p>Card content...</p>
        </vui-card>
      </vui-col>
      <vui-col :span="12">
        <vui-card title="Card title" shadow="hover" :bordered="false">
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
  .example-card-shadow { background-color:#ececec; padding:20px; }
</style>
`;

export default code;