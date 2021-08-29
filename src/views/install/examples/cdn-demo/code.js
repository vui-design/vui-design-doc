const code =
`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Vui Design Example</title>
  <link type="text/css" rel="stylesheet" href="//unpkg.com/vui-design/dist/style/vui-design.css" />
</head>

<body>
  <div id="app">
    <vui-button @click="showModal">Click me!</vui-button>
    <vui-modal v-model="visible" title="Welcome">Welcome to Vui Design!</vui-modal>
  </div>
  <script src="//vuejs.org/js/vue.min.js"></script>
  <script src="//unpkg.com/vui-design/dist/vui-design.min.js"></script>
  <script>
    new Vue({
      el: "#app",
      data: {
        visible: false
      },
      methods: {
        showModal: function() {
          this.visible = true;
        }
      }
    });
  </script>
</body>
</html>
`;

export default code;