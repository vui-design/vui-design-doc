const code =
`<template>
  <div class="example-time-interval">
    <vui-time v-bind:value="value" v-bind:interval="interval" />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: new Date().getTime(),
        interval: 5 * 60
      };
    }
  };
</script>
`;

export default code;