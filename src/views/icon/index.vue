<template>
  <div>
    <document>
      <h1>Icon 图标</h1>
      <p>语义化的矢量图形。</p>
      <h2>如何使用</h2>
      <p>使用 <code>Icon</code> 组件，指定图标对应的 <code>type</code> 属性即可，示例代码：</p>
      <example-icon />
      <p>渲染后为：</p>
      <example-html />
      <h2>代码演示</h2>
    </document>
    <example-basic-usage />
    <document>
      <h2 id="example-icon-list">图标集合</h2>
      <div style="display: flex; margin-bottom: 24px;">
        <vui-radio-group v-model="category" type="button" size="large">
          <vui-radio v-bind:value="1">
            <vui-icon type="apps" />
            <span style="margin-left: 8px;">全部</span>
          </vui-radio>
          <vui-radio v-bind:value="2">
            <vui-icon type="search" />
            <span style="margin-left: 8px;">线框风格</span>
          </vui-radio>
          <vui-radio v-bind:value="3">
            <vui-icon type="search-filled" />
            <span style="margin-left: 8px;">实底风格</span>
          </vui-radio>
        </vui-radio-group>
        <vui-input v-bind:value="keyword" v-on:input="handleSearch" size="large" style="margin-left: 16px;" placeholder="在此搜索图标，点击图标可复制组件代码" />
      </div>
      <vui-row>
        <vui-col v-for="icon in icons" v-bind:key="icon" v-bind:span="3">
          <div v-if="category === 1 || category === 2" title="点击复制" class="icon" v-on:click="handleCopy(icon)">
            <div class="icon-gallery">
              <vui-icon v-bind:type="icon" />
            </div>
            <div class="icon-type">{{icon}}</div>
          </div>
          <div v-if="category === 1 || category === 3" title="点击复制" class="icon" v-on:click="handleCopy(icon + '-filled')">
            <div class="icon-gallery">
              <vui-icon v-bind:type="icon + '-filled'" />
            </div>
            <div class="icon-type">{{icon}}-filled</div>
          </div>
        </vui-col>
      </vui-row>
      <h2 id="example-api">API</h2>
      <h3>Icon 属性</h3>
      <table class="example-api-props">
        <thead>
          <tr>
            <th width="120">属性</th>
            <th>说明</th>
            <th width="180">类型</th>
            <th width="120">默认值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>type</td>
            <td>图标类型</td>
            <td>String</td>
            <td>--</td>
          </tr>
          <tr>
            <td>color</td>
            <td>图标颜色</td>
            <td>String</td>
            <td>--</td>
          </tr>
          <tr>
            <td>size</td>
            <td>图标尺寸，单位为 <code>px</code></td>
            <td>Number | String</td>
            <td>--</td>
          </tr>
        </tbody>
      </table>
    </document>
  </div>
</template>

<script>
  import MixinAnchors from "src/mixins/anchors";
  import Document from "src/components/document";
  import ExampleIcon from "./examples/icon";
  import ExampleHtml from "./examples/html";
  import ExampleBasicUsage from "./examples/basic-usage";

  const icons = [
    "apps",
    "menu-fold",
    "menu-unfold",
    "more-x",
    "more-y",
    "heart",
    "star",
    "star-half",
    "thumb-up",
    "thumb-down",
    "settings",
    "list-settings",
    "forbid",
    "help",
    "info",
    "warning",
    "alert",
    "checkmark",
    "checkmark-circle",
    "crossmark",
    "crossmark-circle",
    "plus",
    "plus-circle",
    "minus",
    "minus-circle",
    "arrow-up",
    "arrow-up-circle",
    "arrow-down",
    "arrow-down-circle",
    "arrow-left",
    "arrow-left-circle",
    "arrow-right",
    "arrow-right-circle",
    "arrow-go-back",
    "arrow-go-forward",
    "chevron-up",
    "chevron-up-circle",
    "chevron-down",
    "chevron-down-circle",
    "chevron-left",
    "chevron-left-circle",
    "chevron-right",
    "chevron-right-circle",
    "upload",
    "upload-package",
    "upload-cloud",
    "download",
    "download-package",
    "download-cloud",
    "login",
    "logout",
    "shut-down",
    "refresh",
    "restart",
    "shield",
    "shield-cross",
    "shield-flash",
    "shield-star",
    "shield-user",
    "dustbin",
    "dustbin-blank",
    "lock",
    "unlock",
    "eye",
    "eye-off",
    "eye-close",
    "search",
    "search-eye",
    "zoom-in",
    "zoom-out",
    "find-replace",
    "share",
    "share-square",
    "share-circle",
    "share-forward",
    "rss",
    "scan",
    "bluetooth",
    "bluetooth-connect",
    "wifi",
    "time",
    "timer",
    "alarm",
    "alarm-warning",
    "qrcode",
    "barcode",
    "gps",
    "base-station",
    "filter",
    "copyright",
    "loading",
    "loading-spinner",
    "home",
    "home-x",
    "home-y",
    "home-dot",
    "home-window",
    "home-gear",
    "home-heart",
    "home-rss",
    "home-smile",
    "building",
    "bank",
    "community",
    "government",
    "hospital",
    "hotel",
    "store",
    "archive",
    "archive-drawer",
    "at",
    "attachment",
    "award",
    "bar-chart",
    "bookmark",
    "bookmark-star",
    "briefcase",
    "calculator",
    "calendar",
    "cloud",
    "customer-service",
    "flag",
    "global",
    "honour",
    "inbox",
    "inbox-archive",
    "links",
    "mail",
    "mail-open",
    "pie-chart",
    "printer",
    "profile",
    "projector",
    "record-mail",
    "reply",
    "send-plane",
    "slideshow",
    "stack",
    "window",
    "chat",
    "chat-ellipsis",
    "chat-smile",
    "chat-voice",
    "discuss",
    "message",
    "message-checkmark",
    "message-crossmark",
    "message-ellipsis",
    "message-help",
    "message-info",
    "message-warning",
    "message-smile",
    "message-voice",
    "qa",
    "anticlockwise",
    "clockwise",
    "artboard",
    "ball-pen",
    "brush",
    "compasses",
    "contrast",
    "crop",
    "drag-move",
    "drop",
    "edit",
    "edit-circle",
    "edit-square",
    "eraser",
    "focus",
    "fountain-pen",
    "grid",
    "hairbrush",
    "layout",
    "layout-column",
    "layout-row",
    "magic",
    "mark-pen",
    "markup",
    "paint",
    "paintbrush",
    "palette",
    "pantone",
    "pencil",
    "quill-pen",
    "ruler",
    "scissors",
    "scissors-cut",
    "screenshot",
    "shape",
    "sip",
    "sketchpad",
    "table",
    "braces",
    "brackets",
    "bug",
    "command",
    "css3",
    "cursor",
    "git-branch",
    "git-commit",
    "git-merge",
    "git-pull-request",
    "git-repository",
    "git-repository-commits",
    "git-repository-private",
    "html5",
    "parentheses",
    "terminal",
    "terminal-square",
    "airplay",
    "battery-x",
    "battery-x-charge",
    "battery-x-low",
    "battery-y",
    "battery-y-charge",
    "battery-y-low",
    "cast",
    "computer",
    "cpu",
    "database",
    "device",
    "gradienter",
    "hard-drive",
    "keyboard",
    "mac",
    "macbook",
    "mouse",
    "phone",
    "radar",
    "router",
    "save",
    "sd-card",
    "sensor",
    "server",
    "sim-card",
    "smartphone",
    "tablet",
    "tv",
    "u-disk",
    "door-lock",
    "fire",
    "key",
    "lightbulb",
    "lightbulb-flash",
    "outlet",
    "plug",
    "shirt",
    "t-shirt",
    "umbrella",
    "anchor",
    "bike",
    "bus",
    "car",
    "charging-pile",
    "china-railway",
    "compass",
    "compass-discover",
    "cup",
    "directions",
    "earth",
    "e-bike",
    "footprint",
    "gas-station",
    "globe",
    "goblet",
    "guide",
    "hotel-bed",
    "map",
    "map-pin",
    "map-pin-plus",
    "map-pin-time",
    "map-pin-user",
    "motorbike",
    "navigation",
    "oil",
    "parking",
    "plane",
    "restaurant",
    "riding",
    "road-map",
    "rocket",
    "route",
    "run",
    "sailboat",
    "ship",
    "signal-tower",
    "space-ship",
    "train",
    "treasure-map",
    "truck",
    "walk",
    "4k",
    "album",
    "broadcast",
    "camera",
    "camera-off",
    "clapperboard",
    "disc",
    "dv",
    "dvd",
    "equalizer",
    "fast-backward",
    "fast-forward",
    "film",
    "fullscreen",
    "fullscreen-exit",
    "hd",
    "headphone",
    "hq",
    "image",
    "landscape",
    "lens",
    "mic",
    "mic-off",
    "movie",
    "music",
    "mv",
    "notification",
    "notification-off",
    "pause",
    "pause-circle",
    "play",
    "play-circle",
    "radio",
    "repeat",
    "repeat-one",
    "rhythm",
    "shuffle",
    "skip-backward",
    "skip-forward",
    "sound-module",
    "speaker",
    "stop",
    "stop-circle",
    "surround-sound",
    "tape",
    "video",
    "vidicon",
    "voiceprint",
    "volume-down",
    "volume-up",
    "webcam",
    "account",
    "emotion",
    "emotion-happy",
    "emotion-normal",
    "emotion-skull",
    "emotion-unhappy",
    "group",
    "men",
    "robot",
    "user",
    "user-checkmark",
    "user-crossmark",
    "user-minus",
    "user-plus",
    "user-search",
    "user-settings",
    "user-star",
    "women",
    "celsius",
    "cloudy",
    "drizzle",
    "fahrenheit",
    "foggy",
    "hail",
    "heavy-showers",
    "mist",
    "moon",
    "moon-clear",
    "moon-cloudy",
    "moon-foggy",
    "rainy",
    "showers",
    "snowy",
    "sun",
    "sun-cloudy",
    "sun-foggy",
    "sun-haze",
    "temp-cold",
    "temp-hot",
    "thunderstorms",
    "tornado",
    "wind",
    "windy"
  ];

  export default {
    mixins: [
      MixinAnchors
    ],
    components: {
      Document,
      ExampleIcon,
      ExampleHtml,
      ExampleBasicUsage
    },
    data() {
      return {
        category: 1,
        keyword: "",
        icons: icons
      };
    },
    methods: {
      handleSearch(value) {
        this.keyword = value.trim();

        if (this.keyword) {
          this.icons = icons.filter(icon => icon.includes(this.keyword));
        }
        else {
          this.icons = icons;
        }
      },
      handleCopy(type) {
        // 创建隐藏的 Textarea 标签，并将组件代码放入其中
        let textarea = document.createElement("textarea");

        textarea.style.position = "absolute";
        textarea.style.top = "0";
        textarea.style.left = "0";
        textarea.style.border = "none";
        textarea.style.margin = "0";
        textarea.style.padding = "0";
        textarea.style.opacity = "0";
        textarea.value = `<vui-icon type="${type}" />`;

        document.body.appendChild(textarea);

        // 复制 Textarea 标签的文本
        textarea.select();
        document.execCommand("copy");

        // 移除 Textarea 标签
        document.body.removeChild(textarea);

        // 提示
        this.$message.success("图标已经复制到剪切板！");
      }
    }
  };
</script>

<style>
  .icon { cursor:pointer; box-sizing:border-box; border-radius:2px; border:1px solid #fff; background-color:#fafafa; padding:10px; }
  .icon .icon-gallery { padding:10px 0;color:#595959; font-size:24px; text-align:center; line-height:1; }
  .icon .icon-type { padding:10px 0; overflow:hidden; white-space:nowrap; text-overflow:ellipsis; color:#a6a6a6; font-size:14px; text-align:center; line-height:1; }

  .icon:hover { border-color:#2d8cf0; }
  .icon:hover .icon-gallery { color:#2d8cf0; }
  .icon:hover .icon-type { color:#2d8cf0; }
</style>