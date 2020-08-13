import VuiSpin from "vui-design/components/spin";
import VuiTableThead from "./components/thead";
import VuiTableTbody from "./components/tbody";
import is from "vui-design/utils/is";
import clone from "vui-design/utils/clone";
import getScrollbarSize from "vui-design/utils/getScrollbarSize";
import csv from "vui-design/utils/csv";
import getClassNamePrefix from "vui-design/utils/getClassNamePrefix";
import utils from "./utils";

const VuiTable = {
	name: "vui-table",

	provide() {
		return {
			vuiTable: this
		};
	},

	components: {
		VuiSpin,
		VuiTableThead,
		VuiTableTbody
	},

	props: {
		classNamePrefix: {
			type: String,
			default: undefined
		},
		columns: {
			type: Array,
			default: () => []
		},
		data: {
			type: Array,
			default: () => []
		},
		rowTree: {
			type: Object,
			default: undefined
		},
		rowExpansion: {
			type: Object,
			default: undefined
		},
		rowSelection: {
			type: Object,
			default: undefined
		},
		showHeader: {
			type: Boolean,
			default: true
		},
		bordered: {
			type: Boolean,
			default: false
		},
		striped: {
			type: Boolean,
			default: false
		},
		size: {
			type: String,
			default: "medium",
			validator: value => ["small", "medium", "large"].indexOf(value) > -1
		},
		scroll: {
			type: Object,
			default: undefined
		},
		loading: {
			type: Boolean,
			default: false
		},
		rowKey: {
			type: [String, Function],
			default: "key"
		},
		rowClassName: {
			type: [String, Function],
			default: undefined
		},
		locale: {
			type: Object,
			default: undefined
		}
	},

	data() {
		const state = {
			columns: [],
			data: [],
			colgroup: [],
			thead: [],
			tbody: [],
			hoveredRowKey: undefined,
			openedRowKeys: [],
			expandedRowKeys: [],
			selectedRowKeys: []
		};

		return { state };
	},

	watch: {
		columns: {
			handler(value) {
				let columns = utils.getDerivedColumns(value);

				this.state.columns = columns;
				this.state.colgroup = utils.getDerivedColgroup(columns);
				this.state.thead = utils.getDerivedHeader(columns);
				this.state.tbody = utils.getDerivedBody(columns, this.state.data);
			}
		},
		data: {
			handler(value) {
				let data = utils.getDerivedData(value);

				this.state.data = data;
				this.state.tbody = utils.getDerivedBody(this.state.columns, data);
			}
		},
		rowTree: {
			deep: true,
			handler(value) {
				let openedRowKeys = [];

				if (value && is.array(value.value)) {
					openedRowKeys = clone(value.value);
				}

				this.state.openedRowKeys = openedRowKeys;
			}
		},
		rowExpansion: {
			deep: true,
			handler(value) {
				let expandedRowKeys = [];

				if (value && is.array(value.value)) {
					expandedRowKeys = clone(value.value);
				}

				this.state.expandedRowKeys = expandedRowKeys;
			}
		},
		rowSelection: {
			deep: true,
			handler(value) {
				let selectedRowKeys = [];

				if (value) {
					let isCustomizedMultiple = "multiple" in value;
					let isMultiple = !isCustomizedMultiple || value.multiple;

					if (isMultiple) {
						selectedRowKeys = is.array(value.value) ? clone(value.value) : [];
					}
					else {
						selectedRowKeys = is.string(value.value) || is.number(value.value) ? value.value : undefined;
					}
				}

				this.state.selectedRowKeys = selectedRowKeys;
			}
		}
	},

	methods: {
		// 导出
		export(options) {
			let { state } = this;
			let settings = clone(options);

			if (settings.filename) {
				settings.filename = settings.filename.indexOf(".csv") > -1 ? settings.filename : (settings.filename + ".csv");
			}
			else {
				settings.filename = "table.csv";
			}

			if (!("original" in settings)) {
				settings.original = true;
			}

			if (!("showHeader" in settings)) {
				settings.showHeader = true;
			}

			let columns = [];
			let data = [];

			if (settings.columns && settings.data) {
				columns = settings.columns;
				data = settings.data;
			}
			else {
				columns = utils.getFlattenedColumns(state.columns);
				data = settings.original ? state.data : state.tbody;
			}

			let content = csv(columns, data, settings);

			if (is.function(settings.callback)) {
				settings.callback(content);
			}
			else {
				csv.export(settings.filename, content);
			}
		},
		// 更新筛选列的状态
		changeFilterColumnState(columns, key, value) {
			columns = utils.getFlattenedColumns(columns, true);

			columns.forEach(column => {
				if (column.key === key && column.filter) {
					column.filter.value = value;
				}
			});
		},
		// 更新排序列的状态
		changeSorterColumnState(columns, key, order) {
			columns = utils.getFlattenedColumns(columns, true);

			columns.forEach(column => {
				if (column.sorter) {
					column.sorter.order = column.key === key ? order : "none";
				}
			});
		},
		// 同步横向滚动位置
		changeScrollXPosition(e) {
			if (e.currentTarget !== e.target) {
				return;
			}

			let { $refs: refs } = this;
			let { tableMiddleHeaderScrollbar, tableMiddleBodyScrollbar } = refs;
			let target = e.target;
			let scrollLeft = target.scrollLeft;

			if (scrollLeft !== this.lastScrollLeft) {
				if (target === tableMiddleHeaderScrollbar && tableMiddleBodyScrollbar) {
					tableMiddleBodyScrollbar.scrollLeft = scrollLeft;
				}

				if (target === tableMiddleBodyScrollbar && tableMiddleHeaderScrollbar) {
					tableMiddleHeaderScrollbar.scrollLeft = scrollLeft;
				}
			}

			this.lastScrollLeft = scrollLeft;
		},
		// 同步纵向滚动位置
		changeScrollYPosition(e) {
			if (e.currentTarget !== e.target) {
				return;
			}

			let { $refs: refs } = this;
			let { tableLeftBodyScrollbar, tableMiddleBodyScrollbar, tableRightBodyScrollbar } = refs;
			let target = e.target;
			let scrollTop = target.scrollTop;

			if (scrollTop !== this.lastScrollTop) {
				if (tableLeftBodyScrollbar && target !== tableLeftBodyScrollbar) {
					tableLeftBodyScrollbar.scrollTop = scrollTop;
				}

				if (tableMiddleBodyScrollbar && target !== tableMiddleBodyScrollbar) {
					tableMiddleBodyScrollbar.scrollTop = scrollTop;
				}

				if (tableRightBodyScrollbar && target !== tableRightBodyScrollbar) {
					tableRightBodyScrollbar.scrollTop = scrollTop;
				}
			}

			this.lastScrollTop = scrollTop; 
		},
		// 滚动事件回调函数
		handleScroll(e) {
			this.changeScrollXPosition(e);
			this.changeScrollYPosition(e);
		},
		// 行鼠标移入事件回调函数
		handleRowMouseenter(row, rowIndex, rowKey) {
			this.state.hoveredRowKey = rowKey;
			this.$emit("rowMouseenter", row, rowIndex, rowKey);
		},
		// 行鼠标移出事件回调函数
		handleRowMouseleave(row, rowIndex, rowKey) {
			this.state.hoveredRowKey = undefined;
			this.$emit("rowMouseleave", row, rowIndex, rowKey);
		},
		// 行点击事件回调函数
		handleRowClick(row, rowIndex, rowKey) {
			this.$emit("rowClick", row, rowIndex, rowKey);
		},
		// 行双击事件回调函数
		handleRowDblclick(row, rowIndex, rowKey) {
			this.$emit("rowDblclick", row, rowIndex, rowKey);
		},
		// 展开事件回调函数
		handleRowExpand(row, rowIndex, rowKey) {
			let { $props: props, state } = this;

			if (!props.rowExpansion) {
				return;
			}

			let expandedRowKeys = clone(state.expandedRowKeys);
			let index = expandedRowKeys.indexOf(rowKey);

			if (props.rowExpansion.accordion) {
				expandedRowKeys = index === -1 ? [rowKey] : [];
			}
			else {
				if (index === -1) {
					expandedRowKeys.push(rowKey);
				}
				else {
					expandedRowKeys.splice(index, 1);
				}
			}

			this.state.expandedRowKeys = expandedRowKeys;
			this.$emit("rowExpand", clone(this.state.expandedRowKeys));
		},
		// 选择事件回调函数
		handleRowSelect(checked, row, rowIndex, rowKey) {
			let { $props: props, state } = this;

			if (!props.rowSelection) {
				return;
			}

			let selectedRowKeys = clone(state.selectedRowKeys);
			let isCustomizedMultiple = "multiple" in props.rowSelection;
			let isMultiple = !isCustomizedMultiple || props.rowSelection.multiple;

			if (isMultiple) {
				checked ? selectedRowKeys.push(rowKey) : selectedRowKeys.splice(selectedRowKeys.indexOf(rowKey), 1);
			}
			else {
				selectedRowKeys = checked ? rowKey : undefined;
			}

			this.state.selectedRowKeys = selectedRowKeys;
			this.$emit("rowSelect", clone(this.state.selectedRowKeys));
		},
		// 全选&取消全选事件回调函数
		handleSelectAll(checked) {
			let { $props: props, state } = this;

			// 以下两种情况返回不处理
			// 1、未启用行选择功能
			// 2、已启用行选择功能，但是使用单选模式
			if (!props.rowSelection || (("multiple") in props.rowSelection && props.rowSelection.multiple === false)) {
				return;
			}

			// 
			let selectedRowKeys = clone(state.selectedRowKeys);

			state.tbody.forEach((row, rowIndex) => {
				let rowKey;
				let attributes;

				if (is.string(props.rowKey)) {
					rowKey = row[props.rowKey];
				}
				else if (is.function(props.rowKey)) {
					rowKey = props.rowKey(clone(row), rowIndex);
				}
				else {
					rowKey = rowIndex;
				}

				if (is.function(props.rowSelection.getComponentProps)) {
					attributes = props.rowSelection.getComponentProps(clone(row), rowIndex, rowKey);
				}

				let isEnabled = !attributes || !attributes.disabled;

				if (checked) {
					if (selectedRowKeys.indexOf(rowKey) === -1 && isEnabled) {
						selectedRowKeys.push(rowKey);
					}
				}
				else {
					if (selectedRowKeys.indexOf(rowKey) > -1 && isEnabled) {
						selectedRowKeys.splice(selectedRowKeys.indexOf(rowKey), 1);
					}
				}
			});

			this.state.selectedRowKeys = selectedRowKeys;
			this.$emit("rowSelect", clone(this.state.selectedRowKeys));
		},
		// 筛选事件回调函数
		handleFilter(column, value) {
			let { state } = this;

			if (!column.filter) {
				return;
			}

			this.changeFilterColumnState(state.columns, column.key, value);

			if (!column.filter.useServerFilter) {
				this.state.tbody = utils.getDerivedBody(state.columns, state.data);
			}

			this.$emit("filter", clone(column), value);
		},
		// 排序事件回调函数
		handleSort(column, order) {
			let { state } = this;

			if (!column.sorter) {
				return;
			}

			this.changeSorterColumnState(state.columns, column.key, order);

			if (!column.sorter.useServerSort) {
				this.state.tbody = utils.getDerivedBody(state.columns, state.data);
			}

			this.$emit("sort", clone(column), order);
		},
		// 绘制左固定表格
		renderLeftTable() {
			let { $props: props, state } = this;
			let header;
			let body;

			// 计算 style 样式
			let width = state.colgroup.filter(column => column.fixed === "left").reduce((total, column) => total + column.width, 0);
			let showXScrollbar = props.scroll && props.scroll.x > 0;
			let showYScrollbar = props.scroll && props.scroll.y > 0;
			let styles = {
				el: {
					width: `${width}px`
				}
			};

			if (showYScrollbar) {
				let scrollbarSize = getScrollbarSize();

				styles.elBodyScrollbar = {
					width: `${width + scrollbarSize}px`,
					maxHeight: showXScrollbar ? `${props.scroll.y - scrollbarSize}px` : `${props.scroll.y}px`,
					overflowY: `scroll`
				};
			}
			else {
				styles.elBodyScrollbar = {
					width: `${width}px`
				};
			}

			// 计算 class 样式
			let classNamePrefix = getClassNamePrefix(props.classNamePrefix, "table");
			let classes = {
				el: `${classNamePrefix}-left`,
				elHeader: `${classNamePrefix}-header`,
				elHeaderScrollbar: `${classNamePrefix}-header-scrollbar`,
				elBody: `${classNamePrefix}-body`,
				elBodyScrollbar: `${classNamePrefix}-body-scrollbar`
			};

			// 是否显示表头
			if (props.showHeader) {
				header = (
					<div ref="tableLeftHeader" class={classes.elHeader}>
						<div ref="tableLeftHeaderScrollbar" class={classes.elHeaderScrollbar}>
							<VuiTableThead
								fixed="left"
								classNamePrefix={classNamePrefix}
								columns={state.columns}
								data={state.data}
								colgroup={state.colgroup}
								thead={state.thead}
								tbody={state.tbody}
								rowKey={props.rowKey}
								rowTree={props.rowTree}
								rowExpansion={props.rowExpansion}
								rowSelection={props.rowSelection}
								hoveredRowKey={state.hoveredRowKey}
								openedRowKeys={state.openedRowKeys}
								expandedRowKeys={state.expandedRowKeys}
								selectedRowKeys={state.selectedRowKeys}
								scroll={props.scroll}
								locale={props.locale}
							/>
						</div>
					</div>
				);
			}

			// 表格内容
			body = (
				<div ref="tableLeftBody" class={classes.elBody}>
					<div ref="tableLeftBodyScrollbar" style={styles.elBodyScrollbar} class={classes.elBodyScrollbar} onScroll={this.handleScroll}>
						<VuiTableTbody
							fixed="left"
							classNamePrefix={classNamePrefix}
							columns={state.columns}
							data={state.data}
							colgroup={state.colgroup}
							thead={state.thead}
							tbody={state.tbody}
							rowKey={props.rowKey}
							rowClassName={props.rowClassName}
							rowTree={props.rowTree}
							rowExpansion={props.rowExpansion}
							rowSelection={props.rowSelection}
							hoveredRowKey={state.hoveredRowKey}
							openedRowKeys={state.openedRowKeys}
							expandedRowKeys={state.expandedRowKeys}
							selectedRowKeys={state.selectedRowKeys}
							scroll={props.scroll}
							locale={props.locale}
						/>
					</div>
				</div>
			);

			return (
				<div class={classes.el} style={styles.el}>
					{header}
					{body}
				</div>
			);
		},
		// 绘制中间表格
		renderMiddleTable() {
			let { $props: props, state } = this;
			let header;
			let body;

			// 计算 style 样式
			let width = state.colgroup.filter(column => column.fixed === "left").reduce((total, column) => total + column.width, 0);
			let showXScrollbar = props.scroll && props.scroll.x > 0;
			let showYScrollbar = props.scroll && props.scroll.y > 0;
			let styles = {
				elHeaderScrollbar: {},
				elBodyScrollbar: {}
			};

			if (showXScrollbar) {
				styles.elBodyScrollbar.overflowX = `scroll`;
			}

			if (showYScrollbar) {
				styles.elHeaderScrollbar.overflowY = `scroll`;
				styles.elBodyScrollbar.maxHeight = `${props.scroll.y}px`;
				styles.elBodyScrollbar.overflowY = `scroll`;
			}

			// 计算 class 样式
			let classNamePrefix = getClassNamePrefix(props.classNamePrefix, "table");
			let classes = {
				el: `${classNamePrefix}-middle`,
				elHeader: `${classNamePrefix}-header`,
				elHeaderScrollbar: `${classNamePrefix}-header-scrollbar`,
				elBody: `${classNamePrefix}-body`,
				elBodyScrollbar: `${classNamePrefix}-body-scrollbar`
			};

			// 是否显示表头
			if (props.showHeader) {
				header = (
					<div ref="tableMiddleHeader" class={classes.elHeader}>
						<div ref="tableMiddleHeaderScrollbar" style={styles.elHeaderScrollbar} class={classes.elHeaderScrollbar}>
							<VuiTableThead
								classNamePrefix={classNamePrefix}
								columns={state.columns}
								data={state.data}
								colgroup={state.colgroup}
								thead={state.thead}
								tbody={state.tbody}
								rowKey={props.rowKey}
								rowTree={props.rowTree}
								rowExpansion={props.rowExpansion}
								rowSelection={props.rowSelection}
								hoveredRowKey={state.hoveredRowKey}
								openedRowKeys={state.openedRowKeys}
								expandedRowKeys={state.expandedRowKeys}
								selectedRowKeys={state.selectedRowKeys}
								scroll={props.scroll}
								locale={props.locale}
							/>
						</div>
					</div>
				);
			}

			// 表格内容
			body = (
				<div ref="tableMiddleBody" class={classes.elBody}>
					<div ref="tableMiddleBodyScrollbar" class={classes.elBodyScrollbar} style={styles.elBodyScrollbar} onScroll={this.handleScroll}>
						<VuiTableTbody
							classNamePrefix={classNamePrefix}
							columns={state.columns}
							data={state.data}
							colgroup={state.colgroup}
							thead={state.thead}
							tbody={state.tbody}
							rowKey={props.rowKey}
							rowClassName={props.rowClassName}
							rowTree={props.rowTree}
							rowExpansion={props.rowExpansion}
							rowSelection={props.rowSelection}
							hoveredRowKey={state.hoveredRowKey}
							openedRowKeys={state.openedRowKeys}
							expandedRowKeys={state.expandedRowKeys}
							selectedRowKeys={state.selectedRowKeys}
							scroll={props.scroll}
							locale={props.locale}
						/>
					</div>
				</div>
			);

			return (
				<div class={classes.el}>
					{header}
					{body}
				</div>
			);
		},
		// 绘制右固定表格
		renderRightTable() {
			let { $props: props, state } = this;
			let header;
			let body;

			// 计算 style 样式
			let width = state.colgroup.filter(column => column.fixed === "right").reduce((total, column) => total + column.width, 0);
			let showXScrollbar = props.scroll && props.scroll.x > 0;
			let showYScrollbar = props.scroll && props.scroll.y > 0;
			let styles = {
				el: {
					width: `${width}px`
				}
			};

			if (showYScrollbar) {
				let scrollbarSize = getScrollbarSize();

				styles.el.right = `${scrollbarSize}px`;
				styles.elBodyScrollbar = {
					width: `${width + scrollbarSize}px`,
					maxHeight: showXScrollbar ? `${props.scroll.y - scrollbarSize}px` : `${props.scroll.y}px`,
					overflowY: `scroll`
				};
			}
			else {
				styles.elBodyScrollbar = {
					width: `${width}px`
				};
			}

			// 计算 class 样式
			let classNamePrefix = getClassNamePrefix(props.classNamePrefix, "table");
			let classes = {
				el: `${classNamePrefix}-right`,
				elHeader: `${classNamePrefix}-header`,
				elHeaderScrollbar: `${classNamePrefix}-header-scrollbar`,
				elBody: `${classNamePrefix}-body`,
				elBodyScrollbar: `${classNamePrefix}-body-scrollbar`
			};

			// 是否显示表头
			if (props.showHeader) {
				header = (
					<div ref="tableRightHeader" class={classes.elHeader}>
						<div ref="tableRightHeaderScrollbar" class={classes.elHeaderScrollbar}>
							<VuiTableThead
								fixed="right"
								classNamePrefix={classNamePrefix}
								columns={state.columns}
								data={state.data}
								colgroup={state.colgroup}
								thead={state.thead}
								tbody={state.tbody}
								rowKey={props.rowKey}
								rowTree={props.rowTree}
								rowExpansion={props.rowExpansion}
								rowSelection={props.rowSelection}
								hoveredRowKey={state.hoveredRowKey}
								openedRowKeys={state.openedRowKeys}
								expandedRowKeys={state.expandedRowKeys}
								selectedRowKeys={state.selectedRowKeys}
								scroll={props.scroll}
								locale={props.locale}
							/>
						</div>
					</div>
				);
			}

			// 表格内容
			body = (
				<div ref="tableRightBody" class={classes.elBody}>
					<div ref="tableRightBodyScrollbar" style={styles.elBodyScrollbar} class={classes.elBodyScrollbar} onScroll={this.handleScroll}>
						<VuiTableTbody
							fixed="right"
							classNamePrefix={classNamePrefix}
							columns={state.columns}
							data={state.data}
							colgroup={state.colgroup}
							thead={state.thead}
							tbody={state.tbody}
							rowKey={props.rowKey}
							rowClassName={props.rowClassName}
							rowTree={props.rowTree}
							rowExpansion={props.rowExpansion}
							rowSelection={props.rowSelection}
							hoveredRowKey={state.hoveredRowKey}
							openedRowKeys={state.openedRowKeys}
							expandedRowKeys={state.expandedRowKeys}
							selectedRowKeys={state.selectedRowKeys}
							scroll={props.scroll}
							locale={props.locale}
						/>
					</div>
				</div>
			);

			return (
				<div class={classes.el} style={styles.el}>
					{header}
					{body}
				</div>
			);
		}
	},

	created() {
		let { $props: props } = this;
		let { rowTree, rowExpansion, rowSelection } = props;
		let columns = utils.getDerivedColumns(props.columns);
		let data = utils.getDerivedData(props.data);
		let hoveredRowKey = undefined;
		let openedRowKeys = [];
		let expandedRowKeys = [];
		let selectedRowKeys = [];

		if (rowTree && is.array(rowTree.value)) {
			openedRowKeys = clone(rowTree.value);
		}

		if (rowExpansion && is.array(rowExpansion.value)) {
			expandedRowKeys = clone(rowExpansion.value);
		}

		if (rowSelection) {
			let isCustomizedMultiple = "multiple" in rowSelection;
			let isMultiple = !isCustomizedMultiple || rowSelection.multiple;

			if (isMultiple) {
				selectedRowKeys = is.array(rowSelection.value) ? clone(rowSelection.value) : [];
			}
			else {
				selectedRowKeys = is.string(rowSelection.value) || is.number(rowSelection.value) ? rowSelection.value : undefined;
			}
		}

		this.state.columns = columns;
		this.state.data = data;
		this.state.colgroup = utils.getDerivedColgroup(columns);
		this.state.thead = utils.getDerivedHeader(columns);
		this.state.tbody = utils.getDerivedBody(columns, data);
		this.state.hoveredRowKey = hoveredRowKey;
		this.state.openedRowKeys = openedRowKeys;
		this.state.expandedRowKeys = expandedRowKeys;
		this.state.selectedRowKeys = selectedRowKeys;
	},

	render() {
		let { $props: props, state } = this;
		let { renderLeftTable, renderMiddleTable, renderRightTable } = this;

		// class
		let classNamePrefix = getClassNamePrefix(props.classNamePrefix, "table");
		let classes = {};

		classes.el = {
			[`${classNamePrefix}-wrapper`]: true,
			[`${classNamePrefix}-wrapper-bordered`]: props.bordered
		};
		classes.elTable = {
			[`${classNamePrefix}`]: true,
			[`${classNamePrefix}-bordered`]: props.bordered,
			[`${classNamePrefix}-striped`]: props.striped,
			[`${classNamePrefix}-${props.size}`]: props.size
		};

		// render
		let showLeftTable = state.columns.some(column => column.fixed === "left");
		let showRightTable = state.columns.some(column => column.fixed === "right");

		return (
			<div class={classes.el}>
				<div ref="table" class={classes.elTable}>
					{showLeftTable && renderLeftTable()}
					{renderMiddleTable()}
					{showRightTable && renderRightTable()}
				</div>
				{
					props.loading ? <VuiSpin fixed /> : null
				}
			</div>
		);
	}
};

export default VuiTable;