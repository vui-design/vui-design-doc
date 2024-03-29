import VuiEmpty from "../../empty";
import VuiCheckbox from "../../checkbox";
import VuiRadio from "../../radio";
import PropTypes from "../../../utils/prop-types";
import Locale from "../../../mixins/locale";
import is from "../../../utils/is";
import clone from "../../../utils/clone";
import flatten from "../../../utils/flatten";
import getTargetByPath from "../../../utils/getTargetByPath";
import getScrollbarSize from "../../../utils/getScrollbarSize";
import utils from "./utils";

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
    VuiEmpty,
    VuiCheckbox,
    VuiRadio
  },
  mixins: [
    Locale
  ],
  props: {
    classNamePrefix: PropTypes.string.def("vui-table"),
    columns: PropTypes.array.def([]),
    data: PropTypes.array.def([]),
    colgroup: PropTypes.array.def([]),
    thead: PropTypes.array.def([]),
    tbody: PropTypes.array.def([]),
    rowKey: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).def("key"),
    rowClassName: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    rowTreeview: PropTypes.object,
    rowExpansion: PropTypes.object,
    rowSelection: PropTypes.object,
    openedRowKeys: PropTypes.array.def([]),
    expandedRowKeys: PropTypes.array.def([]),
    selectedRowKeys: PropTypes.oneOfType([PropTypes.array, PropTypes.string, PropTypes.number]).def([]),
    striped: PropTypes.bool.def(false),
    scroll: PropTypes.object,
    locale: PropTypes.object
  },
  methods: {
    isRowOpened(rowKey) {
      const { $props: props } = this;

      if (!props.rowTreeview) {
        return false;
      }

      return props.openedRowKeys.indexOf(rowKey) > -1;
    },
    isRowExpanded(rowKey) {
      const { $props: props } = this;

      if (!props.rowExpansion) {
        return false;
      }

      return props.expandedRowKeys.indexOf(rowKey) > -1;
    },
    isRowSelected(rowKey) {
      const { $props: props } = this;

      if (!props.rowSelection) {
        return false;
      }

      const isMultiple = utils.getSelectionMultiple(props.rowSelection);

      if (isMultiple) {
        return props.selectedRowKeys.indexOf(rowKey) > -1;
      }
      else {
        return props.selectedRowKeys === rowKey;
      }
    },
    getRowClassName(type, row, rowIndex, rowKey) {
      const { $props: props } = this;

      if (type === "placeholder") {
        return {
          [`${props.classNamePrefix}-row`]: true,
          [`${props.classNamePrefix}-row-placeholder`]: true
        };
      }
      else if (type === "expansion") {
        return {
          [`${props.classNamePrefix}-row`]: true,
          [`${props.classNamePrefix}-row-expanded`]: true
        };
      }
      else {
        const stripe = rowIndex % 2 === 0 ? "even" : "odd";
        const isSelected = this.isRowSelected(rowKey);
        let className;

        if (is.string(props.rowClassName)) {
          className = row[props.rowClassName];
        }
        else if (is.function(props.rowClassName)) {
          className = props.rowClassName(row, rowIndex, rowKey);
        }

        return {
          [`${props.classNamePrefix}-row`]: true,
          [`${props.classNamePrefix}-row-${stripe}`]: props.striped,
          [`${props.classNamePrefix}-row-selected`]: isSelected,
          [`${className}`]: className
        };
      }
    },
    getRowStyle(type) {
      const { $props: props } = this;

      if (type === "placeholder") {
        return {
          height: props.scroll && props.scroll.y > 0 ? (props.scroll.x > 0 ? (`${props.scroll.y - getScrollbarSize()}px`) : `${props.scroll.y}px`) : "auto"
        };
      }
    },
    getColumnClassName(type, column, columnKey, row) {
      const { $props: props } = this;
      const { fixedFirst, fixedLast, align = "center", ellipsis, className } = column;
      let fixed = column.fixed;
      let cellClassName;

      if (type === "expansion" || type === "selection") {
        fixed = props.colgroup.findIndex(col => col.fixed === "left") > -1 ? "left" : undefined;
      }

      if (row && row.cellClassName && columnKey) {
        cellClassName = row.cellClassName[columnKey];
      }

      return {
        [`${props.classNamePrefix}-column`]: true,
        [`${props.classNamePrefix}-column-fixed-${fixed}`]: fixed,
        [`${props.classNamePrefix}-column-fixed-left-last`]: fixed === "left" && fixedLast,
        [`${props.classNamePrefix}-column-fixed-right-first`]: fixed === "right" && fixedFirst,
        [`${props.classNamePrefix}-column-align-${align}`]: align,
        [`${props.classNamePrefix}-column-ellipsis`]: ellipsis,
        [`${props.classNamePrefix}-column-with-${type}`]: type,
        [`${props.classNamePrefix}-column-with-sorter`]: column.sorter,
        [`${props.classNamePrefix}-column-with-filter`]: column.filter,
        [`${className}`]: className,
        [`${cellClassName}`]: cellClassName
      };
    },
    getColumnStyle(type, column) {
      const { $props: props } = this;

      if (type === "expansion" || type === "selection") {
        const isFixed = props.colgroup.findIndex(col => col.fixed === "left") > -1;

        if (isFixed) {
          let offset = 0;

          if (type === "selection" && props.rowExpansion) {
            offset = offset + utils.getExpansionWidth(props.rowExpansion);
          }

          return {
            left: offset + "px"
          };
        }
      }
      else if (column.fixed === "left") {
        let offset = column.offset;

        if (props.rowExpansion) {
          offset = offset + utils.getExpansionWidth(props.rowExpansion);
        }

        if (props.rowSelection) {
          offset = offset + utils.getSelectionWidth(props.rowSelection);
        }

        return {
          left: offset + "px"
        };
      }
      else if (column.fixed === "right") {
        return {
          right: column.offset + "px"
        };
      }
    },
    getColumnBodyClassName() {
      const { $props: props } = this;

      return {
        [`${props.classNamePrefix}-column-body`]: true
      };
    },
    getColumnSwitchClassName(opened) {
      const { $props: props } = this;

      return {
        [`${props.classNamePrefix}-column-switch`]: true,
        [`active`]: opened
      };
    },
    getColumnExpansionClassName(expanded) {
      const { $props: props } = this;

      return {
        [`${props.classNamePrefix}-column-expansion`]: true,
        [`active`]: expanded
      };
    },
    getColumnSelectionClassName(selected) {
      const { $props: props } = this;

      return {
        [`${props.classNamePrefix}-column-selection`]: true,
        [`active`]: selected
      };
    },
    getColumnContentClassName() {
      const { $props: props } = this;

      return {
        [`${props.classNamePrefix}-column-content`]: true
      };
    },
    handleRowMouseenter(event, row, rowIndex, rowKey) {
      this.vuiTable.handleRowMouseenter(row, rowIndex, rowKey);
    },
    handleRowMouseleave(event, row, rowIndex, rowKey) {
      this.vuiTable.handleRowMouseleave(row, rowIndex, rowKey);
    },
    handleRowClick(event, row, rowIndex, rowKey) {
      const { $props: props } = this;
      const { rowTreeview, rowExpansion } = props;

      this.vuiTable.handleRowClick(row, rowIndex, rowKey);

      if (rowTreeview && rowTreeview.clickRowToToggle) {
        const isTogglable = utils.getRowTogglable(row, rowTreeview);

        if (!isTogglable) {
          return;
        }

        const isIgnoreElements = utils.isIgnoreElements(event, rowTreeview.ignoreElements);

        if (isIgnoreElements) {
          return;
        }

        this.vuiTable.handleRowToggle(row, rowIndex, rowKey);
      }

      if (rowExpansion && rowExpansion.clickRowToExpand) {
        const isExpandable = utils.getRowExpandable(row, rowKey, rowExpansion);

        if (!isExpandable) {
          return;
        }

        const isIgnoreElements = utils.isIgnoreElements(event, rowExpansion.ignoreElements);

        if (isIgnoreElements) {
          return;
        }

        this.vuiTable.handleRowExpand(row, rowIndex, rowKey);
      }
    },
    handleRowDblclick(event, row, rowIndex, rowKey) {
      this.vuiTable.handleRowDblclick(row, rowIndex, rowKey);
    },
    handleRowToggle(event, row, rowIndex, rowKey) {
      const { $props: props } = this;
      const { rowTreeview } = props;

      if (!rowTreeview) {
        return;
      }

      if (rowTreeview.clickRowToToggle) {
        return;
      }

      const isTogglable = utils.getRowTogglable(row, rowTreeview);

      if (!isTogglable) {
        return;
      }

      this.vuiTable.handleRowToggle(row, rowIndex, rowKey);
    },
    handleRowExpand(event, row, rowIndex, rowKey) {
      const { $props: props } = this;
      const { rowExpansion } = props;

      if (!rowExpansion) {
        return;
      }

      if (rowExpansion.clickRowToExpand) {
        return;
      }

      const isExpandable = utils.getRowExpandable(row, rowKey, rowExpansion);

      if (!isExpandable) {
        return;
      }

      this.vuiTable.handleRowExpand(row, rowIndex, rowKey);
    },
    handleRowSelect(checked, row, rowIndex, rowKey) {
      this.vuiTable.handleRowSelect(checked, row, rowIndex, rowKey);
    },
    getColgroup(h) {
      const { $props: props } = this;
      let cols = [];

      this.getColgroupChildren(h, cols, props.colgroup);

      return (
        <colgroup>{cols}</colgroup>
      );
    },
    getColgroupChildren(h, cols, columns) {
      const { $props: props } = this;

      if (props.rowExpansion) {
        cols.push(
          <col key="expansion" width={utils.getExpansionWidth(props.rowExpansion)} />
        );
      }

      if (props.rowSelection) {
        cols.push(
          <col key="selection" width={utils.getExpansionWidth(props.rowSelection)} />
        );
      }

      columns.forEach((column, columnIndex) => {
        cols.push(
          <col key={column.key} width={column.width} />
        );
      });
    },
    getTbody(h) {
      const { $props: props } = this;
      const { $slots: vuiTableSlots } = this.vuiTable;
      let trs = [];

      if (props.tbody.length === 0) {
        let colspan = 0;

        if (props.rowExpansion) {
          colspan++;
        }

        if (props.rowSelection) {
          colspan++;
        }

        colspan += props.colgroup.length;

        let empty;

        if (vuiTableSlots.empty) {
          empty = vuiTableSlots.empty;
        }
        else {
          const { locale } = props;
          const description = locale && locale.empty ? locale.empty : this.t("vui.table.empty");

          empty = (
            <VuiEmpty description={description} style="padding: 48px 0;" />
          );
        }

        trs.push(
          <tr class={this.getRowClassName("placeholder")} style={this.getRowStyle("placeholder")}>
            <td colspan={colspan}>
              {empty}
            </td>
          </tr>
        );
      }
      else {
        this.rowIndex = 0;
        this.getTbodyChildren(h, trs, 1, props.tbody);
      }

      return (
        <tbody>{trs}</tbody>
      );
    },
    getTbodyChildren(h, trs, level, rows) {
      const { $props: props } = this;
      const { $scopedSlots: vuiTableScopedSlots } = this.vuiTable;

      rows.forEach(row => {
        const rowKey = utils.getRowKey(row, props.rowKey);
        const rowIndex = this.rowIndex;
        let tds = [];

        if (props.rowExpansion) {
          const isExpandable = utils.getRowExpandable(row, rowKey, props.rowExpansion);
          let btnExpansion;

          if (isExpandable) {
            const btnExpansionAttributes = {
              class: this.getColumnExpansionClassName(this.isRowExpanded(rowKey)),
              on: {
                click: e => this.handleRowExpand(e, row, rowIndex, rowKey)
              }
            };

            btnExpansion = (
              <button {...btnExpansionAttributes}></button>
            );
          }

          tds.push(
            <td key="expansion" class={this.getColumnClassName("expansion", props.rowExpansion)} style={this.getColumnStyle("expansion", props.rowExpansion)}>
              <div class={this.getColumnBodyClassName()}>
                {btnExpansion}
              </div>
            </td>
          );
        }

        if (props.rowSelection) {
          const isMultiple = utils.getSelectionMultiple(props.rowSelection);
          const isRowSelected = this.isRowSelected(rowKey);
          const componentProps = utils.getSelectionComponentProps(row, rowKey, props.rowSelection);
          let btnSelection;
          let btnSelectionAttributes = {
            class: this.getColumnSelectionClassName(isRowSelected),
            props: {
              validator: false,
              checked: isRowSelected
            },
            on: {
              change: checked => this.handleRowSelect(checked, row, rowIndex, rowKey)
            }
          };

          if (props.rowTreeview && isMultiple && !props.rowSelection.strictly) {
            const childrenKey = utils.getTreeviewChildrenKey(props.rowTreeview);
            const children = utils.getRowChildren(row, childrenKey);

            if (is.array(children) && children.length > 0) {
              const status = utils.getSelectionComponentStatus(flatten(children, childrenKey, true), {
                rowKey: props.rowKey,
                rowSelection: props.rowSelection,
                selectedRowKeys: props.selectedRowKeys
              });

              btnSelectionAttributes.props.indeterminate = status.indeterminate;
            }
          }

          if (componentProps) {
            btnSelectionAttributes.props = {
              ...componentProps,
              ...btnSelectionAttributes.props
            };
          }

          if (isMultiple) {
            btnSelection = (
              <VuiCheckbox {...btnSelectionAttributes} />
            );
          }
          else {
            btnSelection = (
              <VuiRadio {...btnSelectionAttributes} />
            );
          }

          tds.push(
            <td key="selection" class={this.getColumnClassName("selection", props.rowSelection)} style={this.getColumnStyle("selection", props.rowExpansion)}>
              <div class={this.getColumnBodyClassName()}>
                {btnSelection}
              </div>
            </td>
          );
        }

        props.colgroup.forEach((column, columnIndex) => {
          const cellProps = column.cellProps;
          let columnCellProps = {};

          if (is.json(cellProps)) {
            columnCellProps.attrs = cellProps;
          }
          else if (is.function(cellProps)) {
            columnCellProps.attrs = cellProps({
              row: clone(row),
              rowIndex: rowIndex,
              column: clone(column),
              columnIndex: columnIndex
            });
          }

          if (columnCellProps.attrs && (columnCellProps.attrs.rowSpan === 0 || columnCellProps.attrs.colSpan === 0)) {
            return;
          }

          let btnSwitches = [];

          if (props.rowTreeview && columnIndex === 0) {
            const lastLevelIndex = level - 1;

            for (let i = 0; i < level; i++) {
              const childrenKey = utils.getTreeviewChildrenKey(props.rowTreeview);
              const children = utils.getRowChildren(row, childrenKey);
              let btnSwitchAttributes;

              if (i === lastLevelIndex && is.array(children) && children.length > 0) {
                const isRowOpened = this.isRowOpened(rowKey);

                btnSwitchAttributes = {
                  class: this.getColumnSwitchClassName(isRowOpened),
                  on: {
                    click: e => this.handleRowToggle(e, row, rowIndex, rowKey)
                  }
                };
              }
              else {
                btnSwitchAttributes = {
                  class: this.getColumnSwitchClassName(false),
                  style: {
                    visibility: "hidden"
                  }
                };
              }

              btnSwitches.push(
                <button {...btnSwitchAttributes}></button>
              );
            }
          }

          let content;

          if (column.slot) {
            const scopedSlot = vuiTableScopedSlots[column.slot];

            content = scopedSlot && scopedSlot({
              row: clone(row),
              rowIndex: rowIndex,
              column: clone(column),
              columnIndex: columnIndex
            });
          }
          else if (column.render) {
            content = column.render(h, {
              row: clone(row),
              rowIndex: rowIndex,
              column: clone(column),
              columnIndex: columnIndex
            });
          }
          else {
            const target = getTargetByPath(row, column.dataIndex);

            content = target.value;
          }

          tds.push(
            <td key={column.key} class={this.getColumnClassName(undefined, column, column.key, row)} style={this.getColumnStyle(undefined, column)} {...columnCellProps}>
              <div class={this.getColumnBodyClassName()}>
                {btnSwitches}
                <div class={this.getColumnContentClassName()}>{content}</div>
              </div>
            </td>
          );
        });

        trs.push(
          <tr
            key={rowKey}
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
            const scopedSlot = vuiTableScopedSlots[props.rowExpansion.slot];

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

          trs.push(
            <tr key={rowKey + "-expansion"} class={this.getRowClassName("expansion", row, rowIndex, rowKey)}>
              <td></td>
              <td colspan={props.colgroup.length}>{content}</td>
            </tr>
          );
        }

        this.rowIndex++;

        if (props.rowTreeview && this.isRowOpened(rowKey)) {
          const childrenKey = utils.getTreeviewChildrenKey(props.rowTreeview);
          const children = utils.getRowChildren(row, childrenKey);

          if (is.array(children) && children.length > 0) {
            this.getTbodyChildren(h, trs, level + 1, children);
          }
        }
      });
    }
  },
  render(h) {
    const { $props: props } = this;
    const styles = {
      el: {
        width: props.scroll && props.scroll.x > 0 ? `${props.scroll.x}px` : `100%`
      }
    };

    return (
      <table border="0" cellpadding="0" cellspacing="0" style={styles.el}>
        {this.getColgroup(h)}
        {this.getTbody(h)}
      </table>
    );
  }
};

export default VuiTableTbody;