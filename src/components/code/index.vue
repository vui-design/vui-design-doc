<template>
  <pre v-highlightjs><code v-bind:class="language"><slot>{{code}}</slot></code></pre>
</template>

<script>
  export default {
    props: {
      code: {
        type: String,
        default: undefined
      },
      language: {
        type: String,
        default: "html"
      }
    }
  };
</script>