const code =
`{
  "presets": [
    [
      "env",
      {
        "modules": false,
        "targets": {
          "browsers": ["> 1%", "last 2 versions", "not ie <= 8"]
        }
      }
    ],
    "stage-2"
  ],
  "plugins": [
    "transform-vue-jsx",
    "transform-runtime",
+    [
+      "import",
+      {
+        "libraryName": "vui-design",
+        "libraryDirectory": "src/components"
+      }
+    ]
  ]
}`;

export default code;

