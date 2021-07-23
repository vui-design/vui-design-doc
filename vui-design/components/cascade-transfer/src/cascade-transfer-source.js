import VuiCheckbox from "vui-design/components/checkbox";
import VuiIcon from "vui-design/components/icon";
import VuiCascadeTransferEmpty from "./cascade-transfer-empty";
import Portal from "vui-design/directives/portal";
import PropTypes from "vui-design/utils/prop-types";
import is from "vui-design/utils/is";
import clone from "vui-design/utils/clone";
import getClassNamePrefix from "vui-design/utils/getClassNamePrefix";
import utils from "./utils";

const VuiCascadeTransferSource = {
	name: "vui-cascade-transfer-source",
	inject: {
		vuiCascadeTransferSourceList: {
			default: undefined
		},
		vuiCascadeTransferSource: {
			default: undefined
		}
	},
	provide() {
		return {
			vuiCascadeTransferSource: this
		};
	},
	components: {
		VuiCheckbox,
		VuiIcon,
		VuiCascadeTransferEmpty
	},
	directives: {
		Portal
	},
	props: {
		classNamePrefix: PropTypes.string,
		level: PropTypes.number.def(1),
		parent: PropTypes.object,
		selectedKeys: PropTypes.array.def([]),
		options: PropTypes.array.def([]),
		valueKey: PropTypes.string.def("value"),
		childrenKey: PropTypes.string.def("children"),
		title: PropTypes.func.def(props => ""),
		formatter: PropTypes.func.def(option => option.label),
		body: PropTypes.func,
		showSelectAll: PropTypes.bool.def(true),
		disabled: PropTypes.bool.def(false),
		locale: PropTypes.object,
		getContainer: PropTypes.any.def(element => element.parentNode)
	},
	data() {
		const { $props: props } = this;
		const state = {
			expandedKey: undefined,
			selectedKeys: clone(props.selectedKeys)
		};

		return {
			state
		};
	},
	watch: {
		selectedKeys(value) {
			this.state.selectedKeys = clone(value);
		}
	},
	methods: {
		getHeader(props) {
			// class
			const classNamePrefix = getClassNamePrefix(props.classNamePrefix, "source-header");
			let classes = {};

			classes.el = `${classNamePrefix}`;
			classes.elCheckbox = `${classNamePrefix}-checkbox`;
			classes.elTitle = `${classNamePrefix}-title`;

			// title
			const title = props.title({
				direction: props.direction,
				level: props.level,
				parent: props.parent
			});

			// render
			let content = [];

			if (props.showSelectAll) {
				const selectedStatus = utils.getSelectedStatus(props.selectedKeys, props.options, props.valueKey);

				const checked = selectedStatus === "all";
				const indeterminate = utils.getIndeterminateStatus(this.vuiCascadeTransferSourceList.state.value, props.options, props.valueKey, props.childrenKey);;
				const disabled = props.disabled;

				content.push(
					<div class={classes.elCheckbox}>
						<VuiCheckbox checked={checked} indeterminate={indeterminate} disabled={disabled} validator={false} onChange={props.onSelectAll} />
					</div>
				);
			}

			content.push(
				<div class={classes.elTitle}>
					{title}
				</div>
			);

			return (
				<div class={classes.el}>
					{content}
				</div>
			);
		},
		getBody(scopedSlot, props) {
			// class
			const classNamePrefix = getClassNamePrefix(props.classNamePrefix, "source-body");
			let classes = {};

			classes.el = `${classNamePrefix}`;

			// render
			let content;

			if (scopedSlot) {
				content = scopedSlot;
			}
			else if (props.options.length) {
				content = this.getMenu(props);
			}
			else {
				content = (
					<VuiCascadeTransferEmpty
						classNamePrefix={props.classNamePrefix}
						description={props.locale ? props.locale.notFound : undefined}
					/>
				);
			}

			return (
				<div class={classes.el}>
					{content}
				</div>
			);
		},
		getMenu(props) {
			// class
			const classNamePrefix = getClassNamePrefix(props.classNamePrefix, "menu");
			let classes = {};

			classes.el = `${classNamePrefix}`;

			// render
			return (
				<div class={classes.el}>
					{
						props.options.map(option => {
							const value = option[props.valueKey];
							const children = option[props.childrenKey];

							const expanded = props.expandedKey === value;
							const indeterminate = utils.getIndeterminateStatus(this.vuiCascadeTransferSourceList.state.value, children, props.valueKey, props.childrenKey);
							const checked = props.selectedKeys.indexOf(value) > -1;

							const attributes = {
								classNamePrefix: classNamePrefix,
								direction: props.direction,
								value: value,
								children: children,
								option: option,
								formatter: props.formatter,
								expanded: expanded,
								indeterminate: indeterminate,
								checked: checked,
								disabled: props.disabled,
								onExpand: props.onExpand,
								onClick: props.onClick,
								onSelect: props.onSelect
							};

							return this.getMenuItem(attributes);
						})
					}
				</div>
			);
		},
		getMenuItem(props) {
			// content
			let content;

			if (is.function(props.formatter)) {
				const attributes = {
					direction: props.direction,
					option: props.option
				};

				content = props.formatter(attributes);
			}
			else {
				content = props.value;
			}

			// onStopPropagation
			const onStopPropagation = e => e.stopPropagation();

			// onClick
			const onClick = () => {
				props.onExpand(props.value, props.option);
				props.onClick(props.value, props.option);
			};

			// onSelect
			const onSelect = checked => {
				props.onSelect(checked, props.value, props.option);
			};

			// class
			const classNamePrefix = getClassNamePrefix(props.classNamePrefix, "item");
			let classes = {};

			classes.el = {
				[`${classNamePrefix}`]: true,
				[`${classNamePrefix}-expanded`]: props.expanded,
				[`${classNamePrefix}-indeterminate`]: props.indeterminate,
				[`${classNamePrefix}-checked`]: props.checked,
				[`${classNamePrefix}-disabled`]: props.disabled
			};
			classes.elCheckbox = `${classNamePrefix}-checkbox`;
			classes.elLabel = `${classNamePrefix}-label`;
			classes.elArrow = `${classNamePrefix}-arrow`;

			// render
			let children = [];

			children.push(
				<div class={classes.elCheckbox} onClick={onStopPropagation}>
					<VuiCheckbox indeterminate={props.indeterminate} checked={props.checked} disabled={props.disabled} onChange={onSelect} />
				</div>
			);

			children.push(
				<div class={classes.elLabel}>
					{content}
				</div>
			);

			if (props.children && props.children.length > 0) {
				children.push(
					<div class={classes.elArrow}>
						<VuiIcon type="chevron-right" />
					</div>
				);
			}

			return (
				<div class={classes.el} onClick={onClick}>
					{children}
				</div>
			);
		},
		getChildren(props) {
			// show sub source
			let subSourceLevel = props.level + 1;
			let subSourceParent;
			let subSourceParentKey;
			let subSourceOptions = [];
			let subSourceOptionKeys = [];
			let showSubSource = false;

			if (props.expandedKey) {
				subSourceParent = props.options.find(option => option[props.valueKey] === props.expandedKey);

				if (subSourceParent) {
					subSourceParentKey = props.expandedKey;
					subSourceOptions = subSourceParent[props.childrenKey];
					subSourceOptionKeys = subSourceOptions ? subSourceOptions.map(option => option[props.valueKey]) : [];
					showSubSource = subSourceOptions && subSourceOptions.length > 0;
				}
			}

			if (!showSubSource) {
				return;
			}

			let subSourceSelectedKeys = [];

			if (props.selectedKeys.indexOf(subSourceParentKey) > -1) {
				subSourceSelectedKeys = subSourceOptions.map(option => option[props.valueKey]);
			}
			else {
				subSourceSelectedKeys = subSourceOptionKeys.filter(optionKey => this.vuiCascadeTransferSourceList.state.value.indexOf(optionKey) > -1);
			}

			// class
			const classNamePrefix = getClassNamePrefix(props.classNamePrefix, "source-children");
			let classes = {};

			classes.el = `${classNamePrefix}`;

			// render
			return (
				<div key={props.expandedKey} class={classes.el}>
					<VuiCascadeTransferSource
						classNamePrefix={props.classNamePrefix}
						level={subSourceLevel}
						parent={subSourceParent}
						selectedKeys={subSourceSelectedKeys}
						options={subSourceOptions}
						valueKey={props.valueKey}
						childrenKey={props.childrenKey}
						title={props.title}
						formatter={props.formatter}
						body={props.body}
						locale={props.locale}
						showSelectAll={props.showSelectAll}
						disabled={props.disabled}
						getContainer={props.getContainer}
						onClick={props.onClick}
						onSelect={props.onSelect}
					/>
				</div>
			);
		},
		handleExpand(value, option) {
			const { $props: props } = this;

			if (props.disabled) {
				return;
			}

			this.state.expandedKey = value;
		},
		handleClick(value, option) {
			const { $props: props } = this;

			if (props.disabled) {
				return;
			}

			this.$emit("click", value, option);
		},
		handleSelectAll(checked) {
			const { $props: props } = this;

			if (props.disabled) {
				return;
			}

			if (this.vuiCascadeTransferSource && props.parent) {
				const option = {
					value: props.parent[props.valueKey],
					data: props.parent
				};

				this.vuiCascadeTransferSource.handleSelect(checked, option);
			}
			else {
				props.options.forEach(option => {
					this.handleSelect(checked, {
						value: option[props.valueKey],
						data: option
					});
				});
			}
		},
		handleSelect(checked, value, option) {
			const { $props: props } = this;

			if (props.disabled) {
				return;
			}

			// 更新当前面板的选中状态
			const index = this.state.selectedKeys.indexOf(value);

			if (checked) {
				this.state.selectedKeys.push(value);
			}
			else {
				this.state.selectedKeys.splice(index, 1);
			}

			// 更新全局的选中状态





















			return;

			// 更新全局的选中状态
			props.options.forEach(option => {
				const value = option[props.valueKey];
				const children = option[props.childrenKey];
				const checked = this.state.selectedKeys.indexOf(value) > -1;

				this.vuiCascadeTransferSourceList.handleSelect(checked, {
					value: value,
					children: children,
					data: option
				});
			});

			// 通过判断自身是否全选、半选、未选状态，触发父级选项的选择事件
			const selectedStatus = utils.getSelectedStatus(this.state.selectedKeys, props.options, props.valueKey);

			if (selectedStatus === "all") {
				if (this.vuiCascadeTransferSource && props.parent) {
					const option = {
						value: props.parent[props.valueKey],
						data: props.parent
					};

					this.vuiCascadeTransferSource.handleSelect(true, value, option);
				}
			}
			else {
				if (this.vuiCascadeTransferSource && props.parent) {
					const option = {
						value: props.parent[props.valueKey],
						data: props.parent
					};

					this.vuiCascadeTransferSource.handleSelect(false, value, option);
				}
			}
		}
	},
	render(h) {
		const { $props: props, state } = this;
		const { handleExpand, handleClick, handleSelectAll, handleSelect } = this;

		// class
		const classNamePrefix = getClassNamePrefix(props.classNamePrefix, "source");
		let classes = {};

		classes.el = `${classNamePrefix}`;

		// render
		const attributes = {
			direction: "source",
			classNamePrefix: props.classNamePrefix,
			level: props.level,
			parent: props.parent,
			expandedKey: state.expandedKey,
			selectedKeys: state.selectedKeys,
			options: props.options,
			valueKey: props.valueKey,
			childrenKey: props.childrenKey,
			title: props.title,
			formatter: props.formatter,
			locale: props.locale,
			showSelectAll: props.showSelectAll,
			disabled: props.disabled,
			getContainer: props.getContainer,
			onExpand: handleExpand,
			onClick: handleClick,
			onSelectAll: handleSelectAll,
			onSelect: handleSelect
		};

		return (
			<div v-portal={props.getContainer} class={classes.el}>
				{this.getHeader(attributes)}
				{this.getBody(is.function(props.body) ? props.body(attributes) : undefined, attributes)}
				{this.getChildren(attributes)}
			</div>
		);
	}
};

export default VuiCascadeTransferSource;