const code =
`module.exports = {
  presets: [
    "@vue/cli-plugin-babel/preset"
  ],
  plugins: [
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

