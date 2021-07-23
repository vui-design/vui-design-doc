import VuiCheckbox from "vui-design/components/checkbox";
import VuiIcon from "vui-design/components/icon";
import VuiCascadeTransferEmpty from "./cascade-transfer-empty";
import PropTypes from "vui-design/utils/prop-types";
import is from "vui-design/utils/is";
import clone from "vui-design/utils/clone";
import getClassNamePrefix from "vui-design/utils/getClassNamePrefix";
import utils from "./utils";

const VuiCascadeTransferSource = {
	name: "vui-cascade-transfer-source",
	components: {
		VuiCheckbox,
		VuiIcon,
		VuiCascadeTransferEmpty
	},
	props: {
		classNamePrefix: PropTypes.string,
		level: PropTypes.number.def(1),
		parent: PropTypes.object,
		value: PropTypes.array.def([]),
		options: PropTypes.array.def([]),
		valueKey: PropTypes.string.def("value"),
		childrenKey: PropTypes.string.def("children"),
		title: PropTypes.func.def(props => ""),
		formatter: PropTypes.func.def(option => option.label),
		body: PropTypes.func,
		locale: PropTypes.object,
		showSelectAll: PropTypes.bool.def(true),
		disabled: PropTypes.bool.def(false)
	},
	data() {
		const { $props: props } = this;
		const state = {
			expandedKey: undefined,
			selectedKeys: []
		};

		return {
			state
		};
	},
	watch: {
		value(value) {
			this.state.selectedKeys = [];
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
				type: props.type,
				level: props.level,
				parent: props.parent
			});

			// render
			let content = [];

			if (props.showSelectAll) {
				const checkedStatus = utils.getCheckedStatus(props.selectedKeys, props.options, props.valueKey);

				const checked = checkedStatus === "all";
				const indeterminate = utils.getIndeterminateStatus(props.value, props.options, props.valueKey, props.childrenKey);;
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
						props.options.map((option, optionIndex) => {
							const value = option[props.valueKey];
							const children = option[props.childrenKey];

							const expanded = props.expandedKey === value;
							const indeterminate = utils.getIndeterminateStatus(props.value, children, props.valueKey, props.childrenKey);
							const checked = props.selectedKeys.indexOf(value) > -1;

							const attributes = {
								classNamePrefix: classNamePrefix,
								type: props.type,
								level: props.level,
								parent: props.parent,
								option: option,
								optionIndex: optionIndex,
								value: value,
								children: children,
								formatter: props.formatter,
								expanded: expanded,
								indeterminate: indeterminate,
								checked: checked,
								disabled: props.disabled,
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
					type: props.type,
					level: props.level,
					parent: props.parent,
					option: props.option,
					optionIndex: props.optionIndex
				};

				content = props.formatter(attributes);
			}
			else {
				content = props.value;
			}

			// onStopPropagation
			const onStopPropagation = e => e.stopPropagation();

			// onClick
			const onClick = e => {
				props.onClick(props.level, props.parent, props.option, props.optionIndex, props.value, props.children);
			};

			// onSelect
			const onSelect = checked => {
				props.onSelect(checked, props.level, props.parent, props.option, props.optionIndex, props.value, props.children);
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


















		handleClick(level, parent, option, optionIndex, value, children) {
			const { $props: props } = this;

			if (props.disabled) {
				return;
			}

			this.state.expandedKey = value;
			this.$emit("click", level, parent, option, optionIndex, value, children);
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
		handleSelect(checked, level, parent, option, optionIndex, value, children) {
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
			this.$emit("select", []);
		}





















	},
	render(h) {
		const { $props: props, state } = this;
		const { handleClick, handleSelectAll, handleSelect } = this;

		// class
		const classNamePrefix = getClassNamePrefix(props.classNamePrefix, "source");
		let classes = {};

		classes.el = `${classNamePrefix}`;

		// render
		const attributes = {
			type: "source",
			classNamePrefix: props.classNamePrefix,
			level: props.level,
			parent: props.parent,
			value: props.value,
			options: props.options,
			valueKey: props.valueKey,
			childrenKey: props.childrenKey,
			title: props.title,
			formatter: props.formatter,
			locale: props.locale,
			showSelectAll: props.showSelectAll,
			disabled: props.disabled,
			expandedKey: state.expandedKey,
			selectedKeys: state.selectedKeys,
			onClick: handleClick,
			onSelectAll: handleSelectAll,
			onSelect: handleSelect
		};

		return (
			<div class={classes.el}>
				{this.getHeader(attributes)}
				{this.getBody(is.function(props.body) ? props.body(attributes) : undefined, attributes)}
			</div>
		);
	}
};

export default VuiCascadeTransferSource;