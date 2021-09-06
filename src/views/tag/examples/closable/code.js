const code =
`<template>
  <div class="example-tag-closable">
    <vui-tag v-if="showTag1" closable v-on:close="showTag1 = false">Tag 1</vui-tag>
    <vui-tag v-if="showTag2" closable v-on:close="showTag2 = false">Tag 2</vui-tag>
    <vui-tag v-if="showTag3" closable v-on:close="showTag3 = false">Tag 3</vui-tag>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        showTag1: true,
        showTag2: true,
        showTag3: true
      };
    }
  };
</script>

<style>
  .example-tag-closable { display:flex; }
  .example-tag-closable .vui-tag { margin-right:8px; }
</style>
`;

export default code;