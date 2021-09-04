<template>
  <coding language="shell">{{code}}</coding>
</template>

<script>
  import Coding from "src/components/coding";
  import code from "./code";

  export default {
    components: {
      Coding
    },
    data() {
      return {
        code
      };
    }
  };
</script>