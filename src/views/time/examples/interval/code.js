const code =
`<template>
  <div class="example-time-interval">
    <vui-time :time="time" :interval="interval" />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        time: new Date().getTime(),
        interval: 5 * 60
      };
    }
  };
</script>
`;

export default code;