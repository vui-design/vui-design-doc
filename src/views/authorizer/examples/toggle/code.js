const code =
`<template>
  <div class="example-authorizer-toggle">
    <vui-radio-group v-model="value">
      <vui-radio value="admin">以下内容管理员可访问</vui-radio>
      <vui-radio value="superadmin">以下内容超级管理员可访问</vui-radio>
    </vui-radio-group>
    <vui-authorizer v-bind:value="value">
      <vui-descriptions bordered>
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
      <vui-result
        slot="replacement"
        status="403"
        title="403"
        description="Sorry, you are not authorized to access this page."
      >
        <template slot="extra">
          <vui-button type="primary">Back Home</vui-button>
        </template>
      </vui-result>
    </vui-authorizer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: "admin"
      };
    }
  };
</script>

<style>
  .example-authorizer-toggle .vui-radio-group { display:block; margin-bottom:16px; }
</style>
`;

export default code;