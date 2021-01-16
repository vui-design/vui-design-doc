const code =
`<template>
  <vui-textarea v-model="value" maxLength="100" placeholder="Enter something..." />
</template>

<script>
  export default {
    data() {
      return {
        value: ""
      };
    }
  };
</script>
`;

export default code;