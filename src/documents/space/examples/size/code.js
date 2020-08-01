const code =
`<template>
  <div class="example-descriptions-size">
    <vui-radio-group v-model="size">
      <vui-radio label="Small" value="small" />
      <vui-radio label="Medium" value="medium" />
      <vui-radio label="Large" value="large" />
    </vui-radio-group>
    <vui-descriptions bordered title="Custom Size" v-bind:size="size">
      <vui-description label="Product">Cloud Database</vui-description>
      <vui-description label="Billing">Prepaid</vui-description>
      <vui-description label="time">18:00:00</vui-description>
      <vui-description label="Amount">$80.00</vui-description>
      <vui-description label="Discount">$20.00</vui-description>
      <vui-description label="Official">$60.00</vui-description>
      <vui-description label="Config Info">
        <p>Data disk type: MongoDB</p>
        <p>Database version: 3.4</p>
        <p>Package: dds.mongo.mid</p>
        <p>Storage space: 10 GB</p>
        <p>Replication factor: 3</p>
        <p>Region: East China 1</p>
      </vui-description>
    </vui-descriptions>
    <vui-descriptions title="Custom Size" v-bind:size="size">
      <vui-description label="Product">Cloud Database</vui-description>
      <vui-description label="Billing">Prepaid</vui-description>
      <vui-description label="time">18:00:00</vui-description>
      <vui-description label="Amount">$80.00</vui-description>
      <vui-description label="Discount">$20.00</vui-description>
      <vui-description label="Official">$60.00</vui-description>
    </vui-descriptions>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        size: "small"
      };
    }
  };
</script>

<style>
  .example-descriptions-size {  }
  .example-descriptions-size .vui-descriptions { margin-top:20px; }
</style>
`;

export default code;