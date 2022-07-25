<template>
  <div>
    <document>
      <h1>Table 表格</h1>
      <p>展示行列数据。</p>
      <h2>何时使用</h2>
      <ul>
        <li>当有大量结构化的数据需要展现时；</li>
        <li>当需要对数据进行排序、筛选、分页、自定义操作等复杂行为时。</li>
      </ul>
      <h2>代码演示</h2>
    </document>
    <example-basic-usage />
    <example-bordered />
    <example-striped />
    <example-size />
    <example-fixed-header />
    <example-fixed-columns />
    <example-fixed-header-columns />
    <example-filter />
    <example-sorter />
    <example-expansion />
    <example-click-row-to-expand />
    <example-multiple-selection />
    <example-single-selection />
    <example-treeview />
    <example-treeview-more />
    <example-grouping-columns />
    <example-rowspan-colspan />
    <example-loading />
    <example-export />
    <document>
      <h2 id="example-api">API</h2>
      <h3>Table 属性</h3>
      <table class="example-api-props">
        <thead>
          <tr>
            <th width="140">属性</th>
            <th>说明</th>
            <th width="170">类型</th>
            <th width="190">默认值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>columns</td>
            <td>表格列的配置描述，<a href="javascript:;">详细配置见下表</a></td>
            <td>Array</td>
            <td><code>[]</code></td>
          </tr>
          <tr>
            <td>data</td>
            <td>数据数组。注意，每条数据中的 <code>columnClassNames</code> 字段用于设置对应行中任意单元格的样式类型，因此数据项不能使用该字段，<a href="javascript:;">详见示例</a></td>
            <td>Array</td>
            <td><code>[]</code></td>
          </tr>
          <tr>
            <td>rowTreeview</td>
            <td>启用树形结构展示，<a href="javascript:;">详细配置见下表</a></td>
            <td>Object</td>
            <td>--</td>
          </tr>
          <tr>
            <td>rowExpansion</td>
            <td>表格行是否可展开，<a href="javascript:;">详细配置见下表</a></td>
            <td>Object</td>
            <td>--</td>
          </tr>
          <tr>
            <td>rowSelection</td>
            <td>表格行是否可选择，<a href="javascript:;">详细配置见下表</a></td>
            <td>Object</td>
            <td>--</td>
          </tr>
          <tr>
            <td>showHeader</td>
            <td>是否显示表头</td>
            <td>Boolean</td>
            <td><code>true</code></td>
          </tr>
          <tr>
            <td>affixHeader</td>
            <td>是否启用浮动表头，当表格滚动至可视区域外部时，表头浮动至窗口顶部。设置为 <code>Object</code> 类型时，属性请参考 <code>Affix</code> 固钉组件</td>
            <td>Boolean | Object</td>
            <td><code>false</code></td>
          </tr>
          <tr>
            <td>size</td>
            <td>表格尺寸，可选值为 <code>small</code>、<code>medium</code>、<code>large</code> 或者不设</td>
            <td>String</td>
            <td><code>medium</code></td>
          </tr>
          <tr>
            <td>bordered</td>
            <td>是否显示外边框和列边框</td>
            <td>Boolean</td>
            <td><code>false</code></td>
          </tr>
          <tr>
            <td>striped</td>
            <td>是否显示间隔斑马纹</td>
            <td>Boolean</td>
            <td><code>false</code></td>
          </tr>
          <tr>
            <td>scroll</td>
            <td>设置横向或纵向滚动，格式：<code>{ x: number, y: number }</code></td>
            <td>Object</td>
            <td>--</td>
          </tr>
          <tr>
            <td>loading</td>
            <td>表格是否处于加载中的状态</td>
            <td>Boolean</td>
            <td><code>false</code></td>
          </tr>
          <tr>
            <td>rowKey</td>
            <td>指定表格行的 <code>key</code> 属性，可以是字符串或一个函数，为函数时接收 <code>row</code> 作为参数</td>
            <td>String | Function</td>
            <td><code>key</code></td>
          </tr>
          <tr>
            <td>rowClassName</td>
            <td>指定表格行的样式类名，可以是字符串或一个函数，为函数式接收 <code>row</code>、<code>rowIndex</code>、<code>rowKey</code> 作为参数</td>
            <td>String | Function</td>
            <td>--</td>
          </tr>
          <tr>
            <td>locale</td>
            <td>默认文案设置，目前包括筛选、暂无数据相关文案</td>
            <td>Object</td>
            <td>
              <div><code>confirm: "确认"</code></div>
              <div><code>clear: "清空"</code></div>
              <div><code>empty: "暂无数据"</code></div>
            </td>
          </tr>
          <tr>
            <td>empty</td>
            <td>数据为空时的展示内容</td>
            <td>Slot</td>
            <td>--</td>
          </tr>
        </tbody>
      </table>
      <p>注意：在 <code>Table</code> 中，<code>columns</code> 和 <code>data</code> 里的数据项都需要指定 <code>key</code> 值。对于 <code>data</code>，其数据项的 <code>key</code> 值会与树形结构、行展开、行选择，以及行的渲染有着密切的关系。组件内部默认会将每项数据的 <code>key</code> 属性作为唯一的标识。如果你的数据没有这个属性，请务必使用 <code>rowKey</code> 来指定数据项的主键，不同数据项的主键不允许重复。若没有指定，或出现重复，表格组件可能会出现意想不到的错误。</p>
      <p>比如你的数据主键是 uid，请按如下方式指定：</p>
      <p><code>&lt;vui-table rowKey="uid" /&gt;</code></p>
      <p>或</p>
      <p><code>&lt;vui-table v-bind:rowKey="row => row.uid" /&gt;</code></p>
      <h3>Table 事件</h3>
      <table class="example-api-events">
        <thead>
          <tr>
            <th width="140">事件名</th>
            <th>说明</th>
            <th width="100">类型</th>
            <th width="360">回调参数</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>sort</td>
            <td>确认排序时触发的事件回调函数</td>
            <td>Function</td>
            <td>
              <div><code>column</code> - 当前列数据</div>
              <div><code>order</code> - 当前选中的排序方式</div>
            </td>
          </tr>
          <tr>
            <td>filter</td>
            <td>确认筛选时触发的事件回调函数</td>
            <td>Function</td>
            <td>
              <div><code>column</code> - 当前列数据</div>
              <div><code>value</code> - 当前选中的筛选条件</div>
            </td>
          </tr>
          <tr>
            <td>rowMouseenter</td>
            <td>鼠标移入行时触发的事件回调函数</td>
            <td>Function</td>
            <td>
              <div><code>row</code> - 当前行数据</div>
              <div><code>rowIndex</code> - 当前行索引</div>
              <div><code>rowKey</code> - 当前行 key 值</div>
            </td>
          </tr>
          <tr>
            <td>rowMouseleave</td>
            <td>鼠标移出行时触发的事件回调函数</td>
            <td>Function</td>
            <td>
              <div><code>row</code> - 当前行数据</div>
              <div><code>rowIndex</code> - 当前行索引</div>
              <div><code>rowKey</code> - 当前行 key 值</div>
            </td>
          </tr>
          <tr>
            <td>rowClick</td>
            <td>点击行时触发的事件回调函数</td>
            <td>Function</td>
            <td>
              <div><code>row</code> - 当前行数据</div>
              <div><code>rowIndex</code> - 当前行索引</div>
              <div><code>rowKey</code> - 当前行 key 值</div>
            </td>
          </tr>
          <tr>
            <td>rowDblclick</td>
            <td>双击行时触发的事件回调函数</td>
            <td>Function</td>
            <td>
              <div><code>row</code> - 当前行数据</div>
              <div><code>rowIndex</code> - 当前行索引</div>
              <div><code>rowKey</code> - 当前行 key 值</div>
            </td>
          </tr>
          <tr>
            <td>rowToggle</td>
            <td>展开或收起行时触发的事件回调函数，用于树形结构</td>
            <td>Function</td>
            <td>
              <div><code>openedRowKeys</code> - 已展开行的 key 值集合</div>
            </td>
          </tr>
          <tr>
            <td>rowExpand</td>
            <td>展开或折叠行时触发的事件回调函数，用于展开功能</td>
            <td>Function</td>
            <td>
              <div><code>expandedRowKeys</code> - 已展开行的 key 值集合</div>
            </td>
          </tr>
          <tr>
            <td>rowSelect</td>
            <td>选择或取消选择行时触发的事件回调函数，用于选择功能</td>
            <td>Function</td>
            <td>
              <div><code>selectedRowKeys</code> - 已选择行的 key 值集合</div>
            </td>
          </tr>
        </tbody>
      </table>
      <h3>Table 方法</h3>
      <table class="example-api-methods">
        <thead>
          <tr>
            <th width="140">方法名</th>
            <th>说明</th>
            <th width="360">参数</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>export</td>
            <td>将数据导出为 <code>csv</code> 文件，参数为 <code>Object</code> 类型</td>
            <td>
              <div><code>filename</code> - 文件名，默认为 table.csv</div>
              <div><code>original</code> - 是否导出原始数据，默认为 true</div>
              <div><code>quoted</code> - 是否为每项数据添加引号，默认为 false</div>
              <div><code>separator</code> - 数据分隔符，默认为英文逗号 ,</div>
              <div><code>showHeader</code> - 是否显示表头，默认为 true</div>
              <div><code>columns</code> - 自定义导出的列数据</div>
              <div><code>data</code> - 自定义导出的行数据</div>
              <div><code>callback</code> - 添加此函数后，不会下载，而是返回数据</div>
            </td>
          </tr>
        </tbody>
      </table>
      <h3>Column 属性</h3>
      <p>列描述数据对象，是 <code>columns</code> 中的一项。</p>
      <table class="example-api-props">
        <thead>
          <tr>
            <th width="140">属性</th>
            <th>说明</th>
            <th width="170">类型</th>
            <th width="80">默认值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>key</td>
            <td><code>Vue</code> 循环所需要的 <code>key</code>，如果已经设置了唯一的 <code>dataIndex</code>，可以忽略这个属性</td>
            <td>String</td>
            <td>--</td>
          </tr>
          <tr>
            <td>dataIndex</td>
            <td>列数据在数据项中对应的路径，支持通过 <code>.</code> 点号连接符查询嵌套路径</td>
            <td>String</td>
            <td>--</td>
          </tr>
          <tr>
            <td>title</td>
            <td>列头显示文本。设置为 <code>Function</code> 类型时允许自定义渲染列头，此时将使用 <code>Vue</code> 的 <code>render</code> 函数，接收 <code>h</code>、<code>column</code>、<code>columnIndex</code> 作为参数，其中 <code>column</code> 表示当前列数据，<code>columnIndex</code> 表示当前列索引，<a href="https://cn.vuejs.org/v2/guide/render-function.html" target="_blank">学习 render 函数 & JSX</a></td>
            <td>String | Function</td>
            <td>--</td>
          </tr>
          <tr>
            <td>tooltip</td>
            <td>列头提示文本。设置为 <code>Object</code> 类型时，属性请参考 <code>Tooltip</code> 文字提示组件</td>
            <td>String | Object</td>
            <td>--</td>
          </tr>
          <tr>
            <td>fixed</td>
            <td>列是否固定，可选值为 <code>left</code>、<code>right</code> 或者不设</td>
            <td>String</td>
            <td>--</td>
          </tr>
          <tr>
            <td>className</td>
            <td>列的样式类名</td>
            <td>String</td>
            <td>--</td>
          </tr>
          <tr>
            <td>width</td>
            <td>列的宽度</td>
            <td>Number</td>
            <td>--</td>
          </tr>
          <tr>
            <td>align</td>
            <td>列的文本对齐方式，可选值为 <code>left</code>、<code>center</code>、<code>right</code> 或者不设</td>
            <td>String</td>
            <td><code>left</code></td>
          </tr>
          <tr>
            <td>ellipsis</td>
            <td>开启后，文本将不换行，超出部分显示为省略号</td>
            <td>Boolean</td>
            <td><code>false</code></td>
          </tr>
          <tr>
            <td>colSpan</td>
            <td>表头列合并，设置为 <code>0</code> 时，不渲染。注意，由于表头分组将根据嵌套关系自动计算 <code>rowSpan</code> 和 <code>colSpan</code> 等属性，故该属性不能用于表头分组中。</td>
            <td>Number</td>
            <td>--</td>
          </tr>
          <tr>
            <td>filter</td>
            <td>对应列是否启用筛选功能，<a href="javascript:;">详细配置见下表</a></td>
            <td>Object</td>
            <td>--</td>
          </tr>
          <tr>
            <td>sorter</td>
            <td>对应列是否启用排序功能。当设置为 <code>Object</code> 类型时，<a href="javascript:;">详细配置见下表</a></td>
            <td>Boolean | Object</td>
            <td>--</td>
          </tr>
          <tr>
            <td>cellProps</td>
            <td>用于获取列单元格属性配置，可通过返回 <code>{ rowSpan, colSpan }</code> 实现表格行/列合并。允许设置为 <code>Function</code> 类型，接收 <code>{ column, columnIndex, row, rowIndex }</code> 作为参数</td>
            <td>Object | Function</td>
            <td>--</td>
          </tr>
          <tr>
            <td>render</td>
            <td>自定义渲染列内容，使用 <code>Vue</code> 的 <code>render</code> 函数，接收 <code>h</code>、<code>{ column, columnIndex, row, rowIndex }</code> 作为参数，其中 <code>column</code> 和 <code>row</code> 分别表示当前列和当前行数据，<a href="https://cn.vuejs.org/v2/guide/render-function.html" target="_blank">学习 render 函数 & JSX</a></td>
            <td>Function</td>
            <td>--</td>
          </tr>
          <tr>
            <td>slot</td>
            <td>通过插槽的形式自定义渲染列内容，设置该属性后，允许在 <code>Table</code> 组件的 <code>slot</code> 中使用 <code>slot-scope</code> 实现自定义渲染列内容；优先级高于 <code>render</code> 属性</td>
            <td>String</td>
            <td>--</td>
          </tr>
          <tr>
            <td>children</td>
            <td>表头分组</td>
            <td>Array</td>
            <td>--</td>
          </tr>
        </tbody>
      </table>
      <h3>Filter 属性</h3>
      <p>筛选功能的配置描述 。</p>
      <table class="example-api-props">
        <thead>
          <tr>
            <th width="140">属性</th>
            <th>说明</th>
            <th width="170">类型</th>
            <th width="80">默认值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>options</td>
            <td>筛选选项，必填；格式为数组，数组中的每一项都必须包含 <code>label</code> 和 <code>value</code> 两个属性</td>
            <td>Array</td>
            <td><code>[]</code></td>
          </tr>
          <tr>
            <td>multiple</td>
            <td>是否多选</td>
            <td>Boolean</td>
            <td><code>true</code></td>
          </tr>
          <tr>
            <td>value</td>
            <td>默认选中的选项。多选模式下是由多个选项的 <code>value</code> 值组成的数组，单选模式下为单个选项的 <code>value</code> 值</td>
            <td>Array</td>
            <td>--</td>
          </tr>
          <tr>
            <td>method</td>
            <td>自定义筛选函数，必填，接收 <code>value</code>、<code>row</code> 作为参数</td>
            <td>Function</td>
            <td>--</td>
          </tr>
          <tr>
            <td>useServerFilter</td>
            <td>是否启用服务端筛选。设置为 <code>true</code> 时表示启用服务端筛选，此时需要监听 <code>Table</code> 的 <code>filter</code> 事件</td>
            <td>Boolean</td>
            <td><code>false</code></td>
          </tr>
        </tbody>
      </table>
      <h3>Sorter 属性</h3>
      <p>排序功能的配置描述。</p>
      <table class="example-api-props">
        <thead>
          <tr>
            <th width="140">属性</th>
            <th>说明</th>
            <th width="170">类型</th>
            <th width="80">默认值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>order</td>
            <td>默认排序方式，可选值为 <code>none</code>、<code>asc</code>、<code>desc</code> 或者不设</td>
            <td>String</td>
            <td><code>none</code></td>
          </tr>
          <tr>
            <td>method</td>
            <td>自定义排序函数，接收 <code>a</code>、<code>b</code>、<code>order</code> 作为参数</td>
            <td>Function</td>
            <td>--</td>
          </tr>
          <tr>
            <td>useServerSort</td>
            <td>是否使用服务端排序。设置为 <code>true</code> 时表示启用服务端排序，此时需要监听 <code>Table</code> 的 <code>sort</code> 事件</td>
            <td>Boolean</td>
            <td><code>false</code></td>
          </tr>
        </tbody>
      </table>
      <h3>rowTreeview 属性</h3>
      <p>树形结构的配置描述。注意：开启选择功能后，将自动在表格左侧插入一列，用于显示多选框/单选框。</p>
      <table class="example-api-props">
        <thead>
          <tr>
            <th width="140">属性</th>
            <th>说明</th>
            <th width="170">类型</th>
            <th width="80">默认值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>children</td>
            <td>指定子行对应的键值属性</td>
            <td>String</td>
            <td><code>children</code></td>
          </tr>
          <tr>
            <td>clickRowToToggle</td>
            <td>通过点击行来展开/收起子行，展开/收起子行的行为默认是由图标控制的</td>
            <td>Boolean</td>
            <td><code>false</code></td>
          </tr>
          <tr>
            <td>ignoreElements</td>
            <td>忽略指定元素（即点击行内指定元素禁止触发展开/收起行为），返回 <code>true</code> 时不会进行折叠；仅在 <code>clickRowToToggle</code> 为 <code>true</code> 时有效</td>
            <td>Function</td>
            <td>--</td>
          </tr>
          <tr>
            <td>value</td>
            <td>默认展开的行，由行的 <code>key</code> 值组成的数组</td>
            <td>Array</td>
            <td><code>[]</code></td>
          </tr>
        </tbody>
      </table>
      <h3>rowExpansion 属性</h3>
      <p>展开功能的配置描述。注意：开启展开功能后，将自动在表格左侧插入一列，用于显示展开图标。</p>
      <table class="example-api-props">
        <thead>
          <tr>
            <th width="140">属性</th>
            <th>说明</th>
            <th width="170">类型</th>
            <th width="80">默认值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>title</td>
            <td>列头显示文本</td>
            <td>String</td>
            <td>--</td>
          </tr>
          <tr>
            <td>width</td>
            <td>列的宽度</td>
            <td>Number</td>
            <td><code>50</code></td>
          </tr>
          <tr>
            <td>align</td>
            <td>列的文本对齐方式，可选值为 <code>left</code>、<code>center</code>、<code>right</code> 或者不设</td>
            <td>String</td>
            <td><code>center</code></td>
          </tr>
          <tr>
            <td>expandable</td>
            <td>是否允许行展开，返回 <code>true</code> 时允许展开，反之不允许，接收 <code>row</code>、<code>rowKey</code> 作为参数</td>
            <td>Function</td>
            <td>--</td>
          </tr>
          <tr>
            <td>accordion</td>
            <td>是否开启手风琴模式，开启后每次至多展开一行</td>
            <td>Boolean</td>
            <td><code>false</code></td>
          </tr>
          <tr>
            <td>clickRowToExpand</td>
            <td>通过点击行来展开子行，展开子行的行为默认是由图标控制的</td>
            <td>Boolean</td>
            <td><code>false</code></td>
          </tr>
          <tr>
            <td>ignoreElements</td>
            <td>忽略指定元素（即点击行内指定元素禁止触发展开行为），返回 <code>true</code> 时不会进行折叠；仅在 <code>clickRowToExpand</code> 为 <code>true</code> 时有效</td>
            <td>Function</td>
            <td>--</td>
          </tr>
          <tr>
            <td>value</td>
            <td>默认展开的行，由行的 <code>key</code> 值组成的数组</td>
            <td>Array</td>
            <td><code>[]</code></td>
          </tr>
          <tr>
            <td>render</td>
            <td>自定义展开行的内容，使用 <code>Vue</code> 的 <code>render</code> 函数，接收 <code>h</code>、<code>{ row, rowIndex }</code> 作为参数，<a href="https://cn.vuejs.org/v2/guide/render-function.html" target="_blank">学习 render 函数 & JSX</a></td>
            <td>Function</td>
            <td>--</td>
          </tr>
          <tr>
            <td>slot</td>
            <td>通过插槽的形式自定义展开行的内容，设置该属性后，允许在 <code>Table</code> 组件的 <code>slot</code> 中使用 <code>slot-scope</code> 实现自定义展开行的内容；优先级高于 <code>render</code> 属性</td>
            <td>String</td>
            <td>--</td>
          </tr>
        </tbody>
      </table>
      <h3>rowSelection 属性</h3>
      <p>选择功能的配置描述。注意：开启选择功能后，将自动在表格左侧插入一列，用于显示多选框/单选框。</p>
      <table class="example-api-props">
        <thead>
          <tr>
            <th width="140">属性</th>
            <th>说明</th>
            <th width="170">类型</th>
            <th width="80">默认值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>title</td>
            <td>列头显示文本</td>
            <td>String</td>
            <td>--</td>
          </tr>
          <tr>
            <td>width</td>
            <td>列的宽度</td>
            <td>Number</td>
            <td><code>50</code></td>
          </tr>
          <tr>
            <td>align</td>
            <td>列的文本对齐方式，可选值为 <code>left</code>、<code>center</code>、<code>right</code> 或者不设</td>
            <td>String</td>
            <td><code>center</code></td>
          </tr>
          <tr>
            <td>multiple</td>
            <td>是否多选</td>
            <td>Boolean</td>
            <td><code>true</code></td>
          </tr>
          <tr>
            <td>strictly</td>
            <td>是否启用严格模式，仅在 <code>multiple</code> 为 <code>true</code> 时有效。非严格模式下，节点选择完全受控，反之，父子数据选中状态不再关联</td>
            <td>Boolean</td>
            <td><code>false</code></td>
          </tr>
          <tr>
            <td>value</td>
            <td>默认选中的行。多选模式下是由多个行的 <code>key</code> 值组成的数组，单选模式下为单个行的 <code>key</code> 值</td>
            <td>Array | String | Number</td>
            <td>--</td>
          </tr>
          <tr>
            <td>getComponentProps</td>
            <td>用于获取选择框属性配置，接收 <code>row</code>、<code>rowKey</code> 作为参数</td>
            <td>Function</td>
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
  import ExampleBasicUsage from "./examples/basic-usage";
  import ExampleBordered from "./examples/bordered";
  import ExampleStriped from "./examples/striped";
  import ExampleSize from "./examples/size";
  import ExampleFixedHeader from "./examples/fixed-header";
  import ExampleFixedColumns from "./examples/fixed-columns";
  import ExampleFixedHeaderColumns from "./examples/fixed-header-columns";
  import ExampleFilter from "./examples/filter";
  import ExampleSorter from "./examples/sorter";
  import ExampleExpansion from "./examples/expansion";
  import ExampleClickRowToExpand from "./examples/click-row-to-expand";
  import ExampleMultipleSelection from "./examples/multiple-selection";
  import ExampleSingleSelection from "./examples/single-selection";
  import ExampleTreeview from "./examples/treeview";
  import ExampleTreeviewMore from "./examples/treeview-more";
  import ExampleGroupingColumns from "./examples/grouping-columns";
  import ExampleRowspanColspan from "./examples/rowspan-colspan";
  import ExampleLoading from "./examples/loading";
  import ExampleExport from "./examples/export";

  export default {
    mixins: [
      MixinAnchors
    ],
    components: {
      Document,
      ExampleBasicUsage,
      ExampleBordered,
      ExampleStriped,
      ExampleSize,
      ExampleFixedHeader,
      ExampleFixedColumns,
      ExampleFixedHeaderColumns,
      ExampleFilter,
      ExampleSorter,
      ExampleExpansion,
      ExampleClickRowToExpand,
      ExampleMultipleSelection,
      ExampleSingleSelection,
      ExampleTreeview,
      ExampleTreeviewMore,
      ExampleGroupingColumns,
      ExampleRowspanColspan,
      ExampleLoading,
      ExampleExport
    }
  };
</script>