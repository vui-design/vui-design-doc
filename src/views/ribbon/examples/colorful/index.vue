<template>
  <example v-bind:code="code" id="example-ribbon-colorful">
    <template slot="demo">
      <div>
        <div class="example-ribbon-colorful">
          <h4>Presets</h4>
          <vui-ribbon color="blue" text="Blue">
            <vui-card title="Pushes open the window">
              <p>and raises the spyglass.</p>
            </vui-card>
          </vui-ribbon>
          <vui-ribbon color="cyan" text="Cyan">
            <vui-card title="Pushes open the window">
              <p>and raises the spyglass.</p>
            </vui-card>
          </vui-ribbon>
          <vui-ribbon color="geekblue" text="Geekblue">
            <vui-card title="Pushes open the window">
              <p>and raises the spyglass.</p>
            </vui-card>
          </vui-ribbon>
          <vui-ribbon color="gold" text="Gold">
            <vui-card title="Pushes open the window">
              <p>and raises the spyglass.</p>
            </vui-card>
          </vui-ribbon>
          <vui-ribbon color="green" text="Green">
            <vui-card title="Pushes open the window">
              <p>and raises the spyglass.</p>
            </vui-card>
          </vui-ribbon>
          <vui-ribbon color="lime" text="Lime">
            <vui-card title="Pushes open the window">
              <p>and raises the spyglass.</p>
            </vui-card>
          </vui-ribbon>
          <vui-ribbon color="magenta" text="Magenta">
            <vui-card title="Pushes open the window">
              <p>and raises the spyglass.</p>
            </vui-card>
          </vui-ribbon>
          <vui-ribbon color="orange" text="Orange">
            <vui-card title="Pushes open the window">
              <p>and raises the spyglass.</p>
            </vui-card>
          </vui-ribbon>
          <vui-ribbon color="pink" text="Pink">
            <vui-card title="Pushes open the window">
              <p>and raises the spyglass.</p>
            </vui-card>
          </vui-ribbon>
          <vui-ribbon color="purple" text="Purple">
            <vui-card title="Pushes open the window">
              <p>and raises the spyglass.</p>
            </vui-card>
          </vui-ribbon>
          <vui-ribbon color="red" text="Red">
            <vui-card title="Pushes open the window">
              <p>and raises the spyglass.</p>
            </vui-card>
          </vui-ribbon>
          <vui-ribbon color="volcano" text="Volcano">
            <vui-card title="Pushes open the window">
              <p>and raises the spyglass.</p>
            </vui-card>
          </vui-ribbon>
          <vui-ribbon color="yellow" text="Yellow">
            <vui-card title="Pushes open the window">
              <p>and raises the spyglass.</p>
            </vui-card>
          </vui-ribbon>
        </div>
        <div class="example-ribbon-colorful">
          <h4>Custom</h4>
          <vui-ribbon color="#f60" text="#f60">
            <vui-card title="Pushes open the window">
              <p>and raises the spyglass.</p>
            </vui-card>
          </vui-ribbon>
          <vui-ribbon color="#2db7f5" text="#2db7f5">
            <vui-card title="Pushes open the window">
              <p>and raises the spyglass.</p>
            </vui-card>
          </vui-ribbon>
          <vui-ribbon color="#87d068" text="#87d068">
            <vui-card title="Pushes open the window">
              <p>and raises the spyglass.</p>
            </vui-card>
          </vui-ribbon>
          <vui-ribbon color="#108ee9" text="#108ee9">
            <vui-card title="Pushes open the window">
              <p>and raises the spyglass.</p>
            </vui-card>
          </vui-ribbon>
        </div>
      </div>
    </template>
    <template slot="title">多彩缎带</template>
    <template slot="description">
      <p>我们添加了多种预设色彩的缎带样式，用作不同场景使用。如果预设值不能满足你的需求，可以设置为具体的色值。</p>
    </template>
  </example>
</template>

<script>
  import Example from "src/components/example";
  import code from "./code";

  export default {
    components: {
      Example
    },
    data() {
      return {
        code
      };
    }
  };
</script>

<style>
  .example-ribbon-colorful + .example-ribbon-colorful { margin-top:24px; }
  .example-ribbon-colorful h4 { margin-bottom:16px; }
  .example-ribbon-colorful .vui-ribbon-wrapper + .vui-ribbon-wrapper { margin-top:24px; }
</style>