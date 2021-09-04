<template>
  <div>
    <document>
      <h1>Color 色彩</h1>
      <p>为了避免视觉传达差异，Vui Design 推荐使用以下调色板的颜色作为设计和开发规范，以保证页面和组件之间的视觉一致。</p>
      <h2 id="example-color-primary">主色彩</h2>
      <p>Vui Design 使用较为安全的蓝色作为主色调，其中 <code>Light</code> 常用于 <code>hover</code> 状态色，<code>Dark</code> 常用于 <code>active</code> 状态色。</p>
    </document>
    <example-primary />
    <document>
      <h2 id="example-color-auxiliary">辅助色</h2>
      <p>辅助色是具有代表性的颜色，常用于类型提示，比如信息、警告、成功和失败。</p>
    </document>
    <example-auxiliary />
    <document>
      <h2 id="example-color-neutral">中性色</h2>
      <p>中性色常用于文本、边框、背景或阴影等，合理运用中性色可以很好的体现出页面的层次结构。</p>
    </document>
    <example-neutral />
  </div>
</template>

<script>
  import MixinAnchors from "src/mixins/anchors";
  import Document from "src/components/document";
  import ExamplePrimary from "./examples/primary";
  import ExampleAuxiliary from "./examples/auxiliary";
  import ExampleNeutral from "./examples/neutral";

  export default {
    mixins: [
      MixinAnchors
    ],
    components: {
      Document,
      ExamplePrimary,
      ExampleAuxiliary,
      ExampleNeutral
    }
  };
</script>