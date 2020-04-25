const code =
`<template>
  <div class="example-pagination-total">
    <vui-pagination :total="95" showTotal />
    <vui-pagination :total="95" :showTotal />
  </div>
</template>

<script>
  export default {
    methods: {
      showTotal(total, range) {
        return range[0] + "~" + range[1] + " / " + total;
      }
    }
  };
</script>

<style>
  .example-pagination-total .vui-pagination + .vui-pagination { margin-top:15px; }
</style>
`;

export default code;