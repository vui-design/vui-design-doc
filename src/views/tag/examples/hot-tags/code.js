const code =
`<template>
  <div class="example-tag-hot-tags">
    <h4>Categories:</h4>
    <vui-tag
      v-for="tag in tags"
      color="primary"
      checkable
      v-bind:key="tag"
      v-bind:checked="selectedTags.indexOf(tag) > -1"
      v-on:change="checked => handleChange(checked, tag)"
    >
      {{tag}}
    </vui-tag>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tags: ["Movies", "Books", "Music", "Sports"],
        selectedTags: ["Movies"]
      };
    },
    methods: {
      handleChange(checked, tag) {
        let selectedTags = this.selectedTags;
        let nextSelectedTags = checked ? [...selectedTags, tag] : selectedTags.filter(item => item !== tag);

        this.selectedTags = nextSelectedTags;
      }
    }
  };
</script>

<style>
  .example-tag-hot-tags:before,
  .example-tag-hot-tags:after { content:""; display:block; width:100%; height:0; visibility:hidden; clear:both; }
  .example-tag-hot-tags > h4,
  .example-tag-hot-tags > .vui-tag { float:left; margin-right:8px; }
  .example-tag-hot-tags > h4 { height:24px; color:#333; font-size:14px; line-height:24px; }
</style>
`;

export default code;