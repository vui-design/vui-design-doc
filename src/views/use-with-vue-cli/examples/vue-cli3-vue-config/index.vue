<template>
  <vui-doc-code language="javascript">{{code}}</vui-doc-code>
</template>

<script>
  import VuiDocCode from "src/components/code";
  import code from "./code";

  export default {
    components: {
      VuiDocCode
    },
    data() {
      return {
        code
      };
    }
  };
</script>