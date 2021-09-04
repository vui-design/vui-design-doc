<template>
  <div
    class="color"
    v-bind:class="value === 'transparent' ? 'color-transparent' : ''"
    v-bind:style="'background-color: ' + value + ';'"
  >
    <div class="color-body">
      <h4 v-bind:style="'color:' + fontColor + ';'">{{title}}</h4>
      <p v-bind:style="'color:' + fontColor + ';'">{{value}}</p>
    </div>
    <div v-if="showFooter" class="color-footer">
      <div v-bind:style="'background-color: ' + light + '; color:' + fontColor + ';'">Light</div>
      <div v-bind:style="'background-color: ' + dark + '; color:' + fontColor + ';'">Dark</div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        default: undefined
      },
      value: {
        type: String,
        default: undefined
      },
      light: {
        type: String,
        default: undefined
      },
      dark: {
        type: String,
        default: undefined
      },
      showFooter: {
        type: Boolean,
        default: true
      },
      fontColor: {
        type: String,
        default: "#ffffff"
      }
    }
  };
</script>

<style>
  .color { box-sizing:border-box; border-radius:2px; overflow:hidden; }
  .color-transparent { background:transparent url("~src/assets/images/transparent.png") repeat 50% 50%; }
  .color .color-body { padding:24px; }
  .color .color-body h4 { font-size:16px; }
  .color .color-body p { margin-top:16px; opacity:0.7; font-size:14px; }
  .color .color-footer { display:flex; height:48px; }
  .color .color-footer div { flex:1; opacity:0.7; font-size:14px; text-align:center; line-height:48px; }

  .color + .color { margin-top:16px; }
</style>