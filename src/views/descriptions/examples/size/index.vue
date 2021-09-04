<template>
  <example v-bind:code="code" id="example-descriptions-size">
    <template slot="demo">
      <div class="example-descriptions-size">
        <vui-radio-group v-model="size">
          <vui-radio value="small" label="Small" />
          <vui-radio value="medium" label="Medium" />
          <vui-radio value="large" label="Large" />
        </vui-radio-group>
        <vui-descriptions bordered v-bind:size="size" title="Custom Size">
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
        <vui-descriptions v-bind:size="size" title="Custom Size">
          <vui-description label="Product">Cloud Database</vui-description>
          <vui-description label="Billing">Prepaid</vui-description>
          <vui-description label="time">18:00:00</vui-description>
          <vui-description label="Amount">$80.00</vui-description>
          <vui-description label="Discount">$20.00</vui-description>
          <vui-description label="Official">$60.00</vui-description>
        </vui-descriptions>
      </div>
    </template>
    <template slot="title">尺寸</template>
    <template slot="description">
      <p>不同尺寸，适应在各种容器中展示。</p>
    </template>
  </example>
</template>

<script>
  import Example from "src/components/example";
  import code from "./code";

  export default {
    components: {
      Example
    },
    data() {
      return {
        code,
        size: "small"
      };
    }
  };
</script>

<style>
  .example-descriptions-size .vui-descriptions { margin-top:24px; }
</style>