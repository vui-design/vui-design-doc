const code =
`<template>
  <div class="example-time-basic-usage">
    <vui-time :time="time1" />
    <br />
    <vui-time :time="time2" />
    <br />
    <vui-time :time="time3" />
    <br />
    <vui-time :time="time4" />
    <br />
    <vui-time :time="time5" />
    <br />
    <vui-time :time="time6" />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        time1: new Date("2014-01-01"),
        time2: "2019-04-01",
        time3: new Date().getTime() - 5 * 24 * 60 * 60 * 1000,
        time4: new Date().getTime() - 5 * 60 * 60 * 1000,
        time5: new Date().getTime() - 5 * 60 * 1000,
        time6: new Date().getTime()
      };
    }
  };
</script>
`;

export default code;