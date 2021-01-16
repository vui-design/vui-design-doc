const code =
`<template>
  <div class="example-progress-line-dynamic">
    <vui-button-group>
      <vui-button icon="minus" @click="handleDecrease" />
      <vui-button icon="plus" @click="handleIncrease" />
    </vui-button-group>
    <vui-progress :percentage="percentage" />
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
  .example-progress-line-dynamic > .vui-progress { margin-top:15px; }
</style>
`;

export default code;