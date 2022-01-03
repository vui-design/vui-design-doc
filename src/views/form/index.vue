<template>
  <div>
    <document>
      <h1>Form 表单</h1>
      <p>具有数据收集、验证和提交功能的表单，包含复选框、单选框、输入框、下拉选择框等元素。</p>
      <h2>何时使用</h2>
      <ul>
        <li>用于创建一个实体或收集信息。</li>
        <li>需要对输入的数据类型进行验证时。</li>
      </ul>
      <h2>表单</h2>
      <p>我们为 <code>Form</code> 提供了以下三种排列方式：</p>
      <ul>
        <li>水平排列：标签和表单控件水平排列；（默认）</li>
        <li>垂直排列：标签和表单控件上下垂直排列；</li>
        <li>行内排列：表单项水平行内排列。</li>
      </ul>
      <h2>表单域</h2>
      <p>表单一定会包含表单域，表单域可以是输入控件，标准表单域，标签，下拉菜单，文本域等。</p>
      <h2>代码演示</h2>
    </document>
    <example-inline />
    <example-layout />
    <example-required-mark />
    <example-label-align />
    <example-control />
    <example-group />
    <example-validate />
    <example-custom-validate />
    <example-dynamic />
    <document>
      <h2 id="example-api">API</h2>
      <h3>Form 属性</h3>
      <table class="example-api-props">
        <thead>
          <tr>
            <th width="160">属性</th>
            <th>说明</th>
            <th width="200">类型</th>
            <th width="220">默认值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>layout</td>
            <td>表单布局，可选值为 <code>horizontal</code>、<code>vertical</code>、<code>inline</code> 或者不设</td>
            <td>String</td>
            <td>horizontal</td>
          </tr>
          <tr>
            <td>size</td>
            <td>用于控制表单内部组件的尺寸，可选值为 <code>small</code>、<code>medium</code>、<code>large</code> 或者不设，仅适用于具有 <code>size</code> 属性的表单类组件</td>
            <td>String</td>
            <td>--</td>
          </tr>
          <tr>
            <td>autocomplete</td>
            <td>原生的 <code>autocomplete</code> 属性，可选值为 <code>off</code>、<code>on</code> 或者不设</td>
            <td>String</td>
            <td>off</td>
          </tr>
          <tr>
            <td>model</td>
            <td>表单关联的数据对象</td>
            <td>Object</td>
            <td>--</td>
          </tr>
          <tr>
            <td>rules</td>
            <td>表单验证规则，具体配置请查看 <a href="https://github.com/yiminghe/async-validator" target="_blank">async-validator</a></td>
            <td>Object</td>
            <td>--</td>
          </tr>
          <tr>
            <td>labelWidth</td>
            <td>用于设置表单域标签的宽度，设为 <code>String</code> 类型时支持百分比宽度，仅在非 <code>vertical</code> 布局下有效</td>
            <td>String | Number</td>
            <td>--</td>
          </tr>
          <tr>
            <td>labelAlign</td>
            <td>用于设置表单域标签的文本对齐方式，可选值为 <code>left</code>、<code>right</code> 或者不设，默认根据 <code>layout</code> 属性自动配置</td>
            <td>String</td>
            <td>--</td>
          </tr>
          <tr>
            <td>requiredMark</td>
            <td>必选样式，可以切换为必选或者可选展示样式，<code>FormItem</code> 无法单独配置</td>
            <td>Boolean | "optional"</td>
            <td>true</td>
          </tr>
          <tr>
            <td>colon</td>
            <td>是否显示 <code>label</code> 后面的冒号，仅有在 <code>layout</code> 属性为 <code>horizontal</code> 时有效</td>
            <td>Boolean</td>
            <td>true</td>
          </tr>
          <tr>
            <td>showMessage</td>
            <td>是否显示验证错误信息</td>
            <td>Boolean</td>
            <td>true</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>是否禁用表单内部所有组件，仅适用于具有 <code>disabled</code> 属性的表单类组件</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
        </tbody>
      </table>
      <h3>Form 方法</h3>
      <table class="example-api-events">
        <thead>
          <tr>
            <th width="160">方法名</th>
            <th>说明</th>
            <th width="200">类型</th>
            <th width="220">参数</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>validate</td>
            <td>对整个表单进行验证，参数为一个回调函数，该回调函数会在校验结束后被调用，并传入两个参数：是否校验成功和未通过校验的字段。若不传入回调函数，则会返回一个 <code>promise</code> 对象</td>
            <td>Function</td>
            <td>callback</td>
          </tr>
          <tr>
            <td>validateFields</td>
            <td>对部分表单字段进行验证，第一个参数为需要验证的字段名，第二个参数为验证完成的回调，返回错误信息</td>
            <td>Function</td>
            <td>field[s], callback</td>
          </tr>
          <tr>
            <td>reset</td>
            <td>对整个表单进行重置，将所有字段值重置为初始值并移除验证结果</td>
            <td>Function</td>
            <td>--</td>
          </tr>
          <tr>
            <td>resetFields</td>
            <td>对部分表单字段进行重置，将字段值重置为初始值并移除验证结果，参数为需要验证的字段名</td>
            <td>Function</td>
            <td>field[s]</td>
          </tr>
        </tbody>
      </table>
      <h3>Form 事件</h3>
      <table class="example-api-events">
        <thead>
          <tr>
            <th width="160">方法名</th>
            <th>说明</th>
            <th width="200">类型</th>
            <th width="220">参数</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>validate</td>
            <td>任一表单项被验证后触发，返回字段名、校验状态、错误消息</td>
            <td>Function</td>
            <td>field, status, message</td>
          </tr>
        </tbody>
      </table>
      <h3>FormGroup 属性</h3>
      <table class="example-api-props">
        <thead>
          <tr>
            <th width="160">属性</th>
            <th>说明</th>
            <th width="200">类型</th>
            <th width="220">默认值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>title</td>
            <td>表单组的标题</td>
            <td>String | Slot</td>
            <td>--</td>
          </tr>
        </tbody>
      </table>
      <h3>FormItem 属性</h3>
      <table class="example-api-props">
        <thead>
          <tr>
            <th width="160">属性</th>
            <th>说明</th>
            <th width="200">类型</th>
            <th width="220">默认值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>label</td>
            <td>表单域标签的文本</td>
            <td>String | Slot</td>
            <td>--</td>
          </tr>
          <tr>
            <td>labelFor</td>
            <td>指定原生的 <code>label</code> 标签的 <code>for</code> 属性，配合表单组件的 <code>name</code> 属性，可以点击 <code>label</code> 时聚焦该组件。</td>
            <td>String | Number</td>
            <td>--</td>
          </tr>
          <tr>
            <td>labelWidth</td>
            <td>表单域标签的宽度，设为 <code>String</code> 类型时支持百分比宽度，默认继承父级 <code>Form</code> 组件</td>
            <td>String | Number</td>
            <td>--</td>
          </tr>
          <tr>
            <td>labelAlign</td>
            <td>表单域标签的文本对齐方式，可选值为 <code>left</code>、<code>right</code> 或者不设，默认继承父级 <code>Form</code> 组件</td>
            <td>String</td>
            <td>--</td>
          </tr>
          <tr>
            <td>description</td>
            <td>表单域标签的描述信息，位于 <code>label</code> 右侧，仅在 <code>vertical</code> 布局下有效</td>
            <td>String | Slot</td>
            <td>--</td>
          </tr>
          <tr>
            <td>tooltip</td>
            <td>表单域标签的提示信息，位于 <code>label</code> 右侧</td>
            <td>String | Slot</td>
            <td>--</td>
          </tr>
          <tr>
            <td>tooltipColor</td>
            <td>提示框的颜色主题</td>
            <td>String</td>
            <td>--</td>
          </tr>
          <tr>
            <td>tooltipMaxWidth</td>
            <td>提示框的最大宽度</td>
            <td>String | Number</td>
            <td>400</td>
          </tr>
          <tr>
            <td>extra</td>
            <td>额外的提示信息，和 <code>message</code> 类似，当需要错误信息和提示文案同时出现时，可以使用这个</td>
            <td>String | Slot</td>
            <td>--</td>
          </tr>
          <tr>
            <td>prop</td>
            <td>对应表单域 <code>model</code> 里的字段</td>
            <td>String</td>
            <td>--</td>
          </tr>
          <tr>
            <td>required</td>
            <td>是否必填，如不设置，则会根据验证规则自动生成</td>
            <td>Boolean</td>
            <td>--</td>
          </tr>
          <tr>
            <td>rules</td>
            <td>验证规则</td>
            <td>Object | Array</td>
            <td>--</td>
          </tr>
          <tr>
            <td>message</td>
            <td>验证错误信息，设置该值会使表单验证状态变为 <code>error</code>，并显示该错误信息</td>
            <td>String</td>
            <td>--</td>
          </tr>
          <tr>
            <td>showMessage</td>
            <td>是否显示验证错误信息</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
        </tbody>
      </table>
    </document>
  </div>
</template>

<script>
  import MixinAnchors from "src/mixins/anchors";
  import Document from "src/components/document";
  import ExampleInline from "./examples/inline";
  import ExampleLayout from "./examples/layout";
  import ExampleRequiredMark from "./examples/required-mark";
  import ExampleLabelAlign from "./examples/label-align";
  import ExampleControl from "./examples/control";
  import ExampleGroup from "./examples/group";
  import ExampleValidate from "./examples/validate";
  import ExampleCustomValidate from "./examples/custom-validate";
  import ExampleDynamic from "./examples/dynamic";

  export default {
    mixins: [
      MixinAnchors
    ],
    components: {
      Document,
      ExampleInline,
      ExampleLayout,
      ExampleRequiredMark,
      ExampleLabelAlign,
      ExampleControl,
      ExampleGroup,
      ExampleValidate,
      ExampleCustomValidate,
      ExampleDynamic
    }
  };
</script>