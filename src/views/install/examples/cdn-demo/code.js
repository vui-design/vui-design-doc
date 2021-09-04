const code =
`<!DOCTYPE html>
<html>
<head>
  <title>Vui Design Demo</title>
  <meta charset="utf-8" />
  <link type="text/css" rel="stylesheet" href="//unpkg.com/vui-design/dist/style/vui-design.css" />
</head>

<body>
  <div id="app">
    <vui-button type="primary" @click="showModal">Click me!</vui-button>
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