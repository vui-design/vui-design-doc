import VuiCheckbox from "vui-design/components/checkbox";
import VuiRadio from "vui-design/components/radio";
import VuiEmpty from "vui-design/components/empty";
import Locale from "vui-design/mixins/locale";
import is from "vui-design/utils/is";
import noop from "vui-design/utils/noop";
import clone from "vui-design/utils/clone";
import getTargetByPath from "vui-design/utils/getTargetByPath";

const VuiTableTbody = {
	name: "vui-table-tbody",

	inject: {
		vuiTable: {
			default: undefined
		}
	},

	provide() {
		return {
			vuiTableTbody: this
		};
	},

	components: {
		VuiCheckbox,
		VuiRadio,
		VuiEmpty
	},

	mixins: [
		Locale
	],

	props: {
		classNamePrefix: {
			type: String,
			default: "vui-table"
		},
		fixed: {
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
		colgroup: {
			type: Array,
			default: () => []
		},
		thead: {
			type: Array,
			default: () => []
		},
		tbody: {
			type: Array,
			default: () => []
		},
		rowKey: {
			type: [String, Function],
			default: "key"
		},
		rowClassName: {
			type: [String, Function],
			default: undefined
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
		hoveredRowKey: {
			type: [String, Number],
			default: undefined
		},
		openedRowKeys: {
			type: Array,
			default: () => []
		},
		expandedRowKeys: {
			type: Array,
			default: () => []
		},
		selectedRowKeys: {
			type: [Array, String, Number],
			default: () => []
		},
		scroll: {
			type: Object,
			default: undefined
		},
		locale: {
			type: Object,
			default: undefined
		}
	},

	methods: {
		isRowHovered(rowKey) {
			let { $props: props } = this;

			return props.hoveredRowKey === rowKey;
		},
		isRowExpanded(rowKey) {
			let { $props: props } = this;

			if (!props.rowExpansion) {
				return false;
			}

			return props.expandedRowKeys.indexOf(rowKey) > -1;
		},
		isRowSelected(rowKey) {
			let { $props: props } = this;

			if (!props.rowSelection) {
				return false;
			}

			let isCustomizedMultiple = "multiple" in props.rowSelection;
			let isMultiple = !isCustomizedMultiple || this.rowSelection.multiple;

			if (isMultiple) {
				return props.selectedRowKeys.indexOf(rowKey) > -1;
			}
			else {
				return props.selectedRowKeys === rowKey;
			}
		},
		getRowClassName(type, row, rowIndex, rowKey) {
			let { $props: props } = this;

			if (type === "expansion") {
				return {
					[`${props.classNamePrefix}-row`]: true,
					[`${props.classNamePrefix}-row-expanded`]: true
				};
			}
			else {
				let stripe = rowIndex % 2 === 0 ? "even" : "odd";
				let isHovered = this.isRowHovered(rowKey);
				let isSelected = this.isRowSelected(rowKey);
				let className;

				if (is.string(props.rowClassName)) {
					className = row[props.rowClassName];
				}
				else if (is.function(props.rowClassName)) {
					className = props.rowClassName(row, rowIndex, rowKey);
				}

				return {
					[`${props.classNamePrefix}-row`]: true,
					[`${props.classNamePrefix}-row-${stripe}`]: stripe,
					[`${props.classNamePrefix}-row-hovered`]: isHovered,
					[`${props.classNamePrefix}-row-selected`]: isSelected,
					[`${className}`]: className
				};
			}
		},
		getColumnClassName(type, column, columnKey, row, rowKey) {
			let { $props: props } = this;
			let ellipsis = column.ellipsis;
			let align = column.align || "center";
			let className = column.className;

			if (type === "expansion") {
				return {
					[`${props.classNamePrefix}-column-with-expansion`]: true,
					[`${props.classNamePrefix}-column-ellipsis`]: ellipsis,
					[`${props.classNamePrefix}-column-align-${align}`]: align,
					[`${className}`]: className
				};
			}
			else if (type === "selection") {
				return {
					[`${props.classNamePrefix}-column-with-selection`]: true,
					[`${props.classNamePrefix}-column-ellipsis`]: ellipsis,
					[`${props.classNamePrefix}-column-align-${align}`]: align,
					[`${className}`]: className
				};
			}
			else {
				let maybeShowColumn = false;
				let maybeShowColumnSorter = column.sorter;
				let maybeShowColumnFilter = column.filter;
				let customizedClassName;

				if (!props.fixed && !column.fixed) {
					maybeShowColumn = true;
				}
				else if (props.fixed === "left" && column.fixed === "left") {
					maybeShowColumn = true;
				}
				else if (props.fixed === "right" && column.fixed === "right") {
					maybeShowColumn = true;
				}

				if (row.columnClassNames && columnKey && row.columnClassNames[columnKey]) {
					customizedClassName = row.columnClassNames[columnKey];
				}

				return {
					[`${props.classNamePrefix}-column-hidden`]: !maybeShowColumn,
					[`${props.classNamePrefix}-column-with-sorter`]: maybeShowColumnSorter,
					[`${props.classNamePrefix}-column-with-filter`]: maybeShowColumnFilter,
					[`${props.classNamePrefix}-column-ellipsis`]: ellipsis,
					[`${props.classNamePrefix}-column-align-${align}`]: align,
					[`${className}`]: className,
					[`${customizedClassName}`]: customizedClassName
				};
			}
		},
		getColumnExpansionClassName(column, expanded) {
			let { $props: props } = this;

			return {
				[`${props.classNamePrefix}-column-expansion`]: true,
				[`${props.classNamePrefix}-column-expanded`]: expanded
			};
		},
		getColumnSelectionClassName(column, selected) {
			let { $props: props } = this;

			return {
				[`${props.classNamePrefix}-column-selection`]: true,
				[`${props.classNamePrefix}-column-selected`]: selected
			};
		},
		handleRowMouseenter(event, row, rowIndex, rowKey) {
			let { vuiTable } = this;

			vuiTable.handleRowMouseenter(row, rowIndex, rowKey);
		},
		handleRowMouseleave(event, row, rowIndex, rowKey) {
			let { vuiTable } = this;

			vuiTable.handleRowMouseleave(row, rowIndex, rowKey);
		},
		handleRowClick(event, row, rowIndex, rowKey) {
			let { vuiTable, $props: props } = this;
			let { rowExpansion } = props;

			vuiTable.handleRowClick(row, rowIndex, rowKey);

			if (rowExpansion && rowExpansion.clickRowToExpand) {
				let isExpandable = is.function(rowExpansion.expandable) ? rowExpansion.expandable(row, rowIndex, rowKey) : true;

				if (!isExpandable) {
					return;
				}

				let e = event || window.event;
				let target = e.target || e.srcElement;
				let isIgnoreElements = is.function(rowExpansion.ignoreElements) ? rowExpansion.ignoreElements(target) : false;

				if (isIgnoreElements) {
					return;
				}

				vuiTable.handleRowExpand(row, rowIndex, rowKey);
			}
		},
		handleRowDblclick(event, row, rowIndex, rowKey) {
			let { vuiTable } = this;

			vuiTable.handleRowDblclick(row, rowIndex, rowKey);
		},
		handleRowExpand(event, row, rowIndex, rowKey) {
			let { vuiTable, $props: props } = this;
			let { rowExpansion } = props;

			if (!rowExpansion) {
				return;
			}

			if (rowExpansion.clickRowToExpand) {
				return;
			}

			let isExpandable = is.function(rowExpansion.expandable) ? rowExpansion.expandable(row, rowIndex, rowKey) : true;

			if (!isExpandable) {
				return;
			}

			vuiTable.handleRowExpand(row, rowIndex, rowKey);
		},
		handleRowSelect(checked, row, rowIndex, rowKey) {
			let { vuiTable } = this;

			vuiTable.handleRowSelect(checked, row, rowIndex, rowKey);
		},
		renderColgroupChildren(h) {
			let { $props: props } = this;
			let children = [];

			if (props.rowExpansion) {
				let { width = 50 } = props.rowExpansion;

				children.push(
					<col key="expansion" width={width} />
				);
			}

			if (props.rowSelection) {
				let { width = 50 } = props.rowSelection;

				children.push(
					<col key="selection" width={width} />
				);
			}

			props.colgroup.forEach((column, columnIndex) => {
				children.push(
					<col key={column.key || columnIndex} width={column.width} />
				);
			});

			return children;
		},
		renderTbodyChildren(h) {
			let { vuiTable, $props: props } = this;
			let children = [];

			if (props.tbody.length === 0) {
				let colspan = 0;
				let description = props.locale && props.locale.empty ? props.locale.empty : this.t("vui.table.empty");

				if (props.rowExpansion) {
					colspan++;
				}

				if (props.rowSelection) {
					colspan++;
				}

				colspan += props.colgroup.length;

				return (
					<tr>
						<td colspan={colspan}>
							<VuiEmpty description={description} style="padding: 30px 0;" />
						</td>
					</tr>
				);
			}

			props.tbody.forEach((row, rowIndex) => {
				let rowKey;

				if (is.string(props.rowKey)) {
					rowKey = row[props.rowKey];
				}
				else if (is.function(props.rowKey)) {
					rowKey = props.rowKey(clone(row), rowIndex);
				}
				else {
					rowKey = rowIndex;
				}

				let tds = [];

				if (props.rowExpansion) {
					let isExpandable = is.function(props.rowExpansion.expandable) ? props.rowExpansion.expandable(row, rowIndex, rowKey) : true;
					let isRowExpanded = this.isRowExpanded(rowKey);

					tds.push(
						<td key="expansion" class={this.getColumnClassName("expansion", props.rowExpansion)}>
							{
								isExpandable ? (
									<button
										class={this.getColumnExpansionClassName(props.rowExpansion, isRowExpanded)}
										onClick={e => this.handleRowExpand(e, row, rowIndex, rowKey)}
									></button>
								) : null
							}
						</td>
					);
				}

				if (props.rowSelection) {
					let isCustomizedMultiple = "multiple" in props.rowSelection;
					let isMultiple = !isCustomizedMultiple || props.rowSelection.multiple;
					let isRowSelected = this.isRowSelected(rowKey);
					let attributes = {
						class: this.getColumnSelectionClassName(props.rowSelection, isRowSelected),
						on: {
							change: checked => this.handleRowSelect(checked, row, rowIndex, rowKey)
						}
					};

					if (is.function(props.rowSelection.getComponentProps)) {
						let componentProps = props.rowSelection.getComponentProps(clone(row), rowIndex, rowKey);;

						attributes.props = {
							...componentProps,
							checked: isRowSelected
						};
					}
					else {
						attributes.props = {
							checked: isRowSelected
						};
					}

					tds.push(
						<td key="selection" class={this.getColumnClassName("selection", props.rowSelection)}>
							{
								isMultiple ? (
									<VuiCheckbox {...attributes} />
								) : (
									<VuiRadio {...attributes} />
								)
							}
						</td>
					);
				}

				props.colgroup.forEach((column, columnIndex) => {
					let columnCellProps = {};

					if (is.plainObject(column.cellProps)) {
						columnCellProps.attrs = column.cellProps;
					}
					else if (is.function(column.cellProps)) {
						columnCellProps.attrs = column.cellProps({
							row: clone(row),
							rowIndex: rowIndex,
							column: clone(column),
							columnIndex: columnIndex
						});
					}

					if (columnCellProps.attrs && (columnCellProps.attrs.rowSpan === 0 || columnCellProps.attrs.colSpan === 0)) {
						return;
					}

					let columnKey = column.key || columnIndex;
					let content;

					if (column.slot) {
						let scopedSlot = vuiTable.$scopedSlots[column.slot];

						content = scopedSlot && scopedSlot({
							column: clone(column),
							columnIndex: columnIndex,
							row: clone(row),
							rowIndex: rowIndex
						});
					}
					else if (column.render) {
						content = column.render(h, {
							column: clone(column),
							columnIndex: columnIndex,
							row: clone(row),
							rowIndex: rowIndex
						});
					}
					else {
						let target = getTargetByPath(row, column.dataIndex);

						content = target.value;
					}

					tds.push(
						<td key={columnKey} class={this.getColumnClassName("", column, columnKey, row, rowKey)} {...columnCellProps}>
							{content}
						</td>
					);
				});

				children.push(
					<tr
						key={rowKey || rowIndex}
						class={this.getRowClassName("", row, rowIndex, rowKey)}
						onMouseenter={e => this.handleRowMouseenter(e, row, rowIndex, rowKey)}
						onMouseleave={e => this.handleRowMouseleave(e, row, rowIndex, rowKey)}
						onClick={e => this.handleRowClick(e, row, rowIndex, rowKey)}
						onDblclick={e => this.handleRowDblclick(e, row, rowIndex, rowKey)}
					>
						{tds}
					</tr>
				);

				if (props.rowExpansion && this.isRowExpanded(rowKey)) {
					let content;

					if (props.rowExpansion.slot) {
						let scopedSlot = vuiTable.$scopedSlots[props.rowExpansion.slot];

						content = scopedSlot && scopedSlot({
							row: clone(row),
							rowIndex: rowIndex
						});
					}
					else if (props.rowExpansion.render) {
						content = props.rowExpansion.render(h, {
							row: clone(row),
							rowIndex: rowIndex
						});
					}

					children.push(
						<tr class={this.getRowClassName("expansion", row, rowIndex, rowKey)}>
							<td></td>
							<td colspan={props.colgroup.length}>{content}</td>
						</tr>
					);
				}
			});

			return children;
		}
	},

	render(h) {
		let { $props: props, renderColgroupChildren, renderTbodyChildren } = this;
		let styles = {
			el: {
				width: props.scroll && props.scroll.x > 0 ? `${props.scroll.x}px` : `100%`
			}
		};

		return (
			<table border="0" cellpadding="0" cellspacing="0" style={styles.el}>
				<colgroup>
					{renderColgroupChildren(h)}
				</colgroup>
				<tbody>
					{renderTbodyChildren(h)}
				</tbody>
			</table>
		);
	}
};

export default VuiTableTbody;