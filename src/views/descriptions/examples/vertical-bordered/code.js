const code =
`<template>
  <vui-descriptions layout="vertical" bordered title="User Info">
    <vui-description label="Product">Cloud Database</vui-description>
    <vui-description label="Billing Mode">Prepaid</vui-description>
    <vui-description label="Automatic Renewal">YES</vui-description>
    <vui-description label="Order time">2018-04-24 18:00:00</vui-description>
    <vui-description label="Usage Time" v-bind:span="2">2019-04-24 18:00:00</vui-description>
    <vui-description label="Status" v-bind:span="3">
      <vui-badge status="processing" text="Running" />
    </vui-description>
    <vui-description label="Negotiated Amount">$80.00</vui-description>
    <vui-description label="Discount">$20.00</vui-description>
    <vui-description label="Official Receipts">$60.00</vui-description>
    <vui-description label="Config Info">
      <p>Data disk type: MongoDB</p>
      <p>Database version: 3.4</p>
      <p>Package: dds.mongo.mid</p>
      <p>Storage space: 10 GB</p>
      <p>Replication factor: 3</p>
      <p>Region: East China 1</p>
    </vui-description>
  </vui-descriptions>
</template>

<script>
  export default {

  };
</script>
`;

export default code;