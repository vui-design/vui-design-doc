const code =
`<template>
  <vui-input type="password" v-model="value" showPasswordToggler placeholder="Please enter password..." />
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