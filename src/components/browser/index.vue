<template>
  <div class="vui-doc-browser">
    <div class="vui-doc-browser-header">
      <div class="location">
        <div class="location-href"></div>
      </div>
      <i class="btn btn-max"></i>
      <i class="btn btn-min"></i>
      <i class="btn btn-close"></i>
    </div>
    <div class="vui-doc-browser-body" v-bind:style="style">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      height: {
        type: [String, Number],
        default: undefined
      }
    },
    computed: {
      style() {
        let style = {};

        if (this.height) {
          style.height = `${this.height}px`;
        }

        return style;
      }
    }
  };
</script>

<style>
  .vui-doc-browser {  }

  .vui-doc-browser-header { display:flex; align-items:center; background-color:#f0f2f4; padding:16px; }
  .vui-doc-browser-header .location { flex:1; position:relative; border-radius:2px; background-color:#fff; margin-right:16px; padding:4px; }
  .vui-doc-browser-header .location .location-href { height:4px; border-radius:2px; background-color:#f0f2f4; }
  .vui-doc-browser-header .btn { width:12px; height:12px; border-radius:12px; }
  .vui-doc-browser-header .btn + .btn { margin-left:8px; }
  .vui-doc-browser-header .btn.btn-max { background-color:#52c41a; }
  .vui-doc-browser-header .btn.btn-min { background-color:#faad14; }
  .vui-doc-browser-header .btn.btn-close { background-color:#ff4d4f; }

  .vui-doc-browser-body { overflow:auto; }
</style>