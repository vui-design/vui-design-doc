const code =
`<template>
  <div class="example-progress-dynamic">
    <vui-button-group>
      <vui-button icon="minus" v-on:click="handleDecrease" />
      <vui-button icon="plus" v-on:click="handleIncrease" />
    </vui-button-group>
    <vui-progress v-bind:percentage="percentage" />
    <vui-space block>
      <vui-progress type="circle" v-bind:percentage="percentage" />
      <vui-progress type="dashboard" v-bind:percentage="percentage" />
    </vui-space>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        percentage: 10
      };
    },
    methods: {
      handleDecrease() {
        let percentage = this.percentage - 10;

        if (percentage < 0) {
          percentage = 0;
        }

        this.percentage = percentage;
      },
      handleIncrease() {
        let percentage = this.percentage + 10;

        if (percentage > 100) {
          percentage = 100;
        }

        this.percentage = percentage;
      }
    }
  };
</script>

<style>
  .example-progress-dynamic .vui-progress-line { margin-top:16px; margin-bottom:16px; }
</style>
`;

export default code;