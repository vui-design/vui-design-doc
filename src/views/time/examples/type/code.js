const code =
`<template>
  <div class="example-time-type">
    <vui-time :time="time" />
    <br />
    <vui-time type="date" :time="time" />
    <br />
    <vui-time type="datetime" :time="time" />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        time: new Date().getTime() - 5 * 24 * 60 * 60 * 1000
      };
    }
  };
</script>
`;

export default code;