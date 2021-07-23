import VuiCascadeTransferSourceList from "./cascade-transfer-source-list";
import VuiCascadeTransferSource from "./cascade-transfer-source";
import VuiCascadeTransferTarget from "./cascade-transfer-target";
import Emitter from "vui-design/mixins/emitter";
import PropTypes from "vui-design/utils/prop-types";
import clone from "vui-design/utils/clone";
import getClassNamePrefix from "vui-design/utils/getClassNamePrefix";
import utils from "./utils";

const VuiCascadeTransfer = {
	name: "vui-cascade-transfer",
	inject: {
		vuiForm: {
			default: undefined
		}
	},
	components: {
		VuiCascadeTransferSourceList,
		VuiCascadeTransferSource,
		VuiCascadeTransferTarget
	},
	mixins: [
		Emitter
	],
	model: {
		prop: "value",
		event: "input"
	},
	props: {
		classNamePrefix: PropTypes.string,
		value: PropTypes.array.def([]),
		options: PropTypes.array.def([]),
		valueKey: PropTypes.string.def("value"),
		childrenKey: PropTypes.string.def("children"),
		title: PropTypes.func.def(props => ""),
		formatter: PropTypes.func.def(option => option.label),
		locale: PropTypes.object,
		showTargetPanel: PropTypes.bool.def(true),
		showSelectAll: PropTypes.bool.def(true),
		showClear: PropTypes.bool.def(true),
		disabled: PropTypes.bool.def(false),
		validator: PropTypes.bool.def(true)
	},
	data() {
		const { $props: props } = this;
		const sourceList = [];
		const source = {
			parent: undefined,
			options: props.options
		};

		return {
			state: {
				value: clone(props.value),
				sourceList: sourceList.concat(source)
			}
		};
	},
	watch: {
		value(value) {
			this.state.value = clone(value);
		},
		options(value) {
			const sourceList = [];
			const source = {
				parent: undefined,
				options: value
			};

			this.state.sourceList = sourceList.concat(source);
		}
	},
	methods: {
		handleClick(level, parent, option, optionIndex, value, children) {
			const { $props: props, state } = this;

			if (children && children.length > 0) {
				const sourceList = state.sourceList.slice(0, level);
				const source = {
					parent: option,
					options: children
				};

				this.state.sourceList = sourceList.concat(source);
			}

			this.$emit("click", option, optionIndex, value, children);
		},
		handleSelect(value) {
			const { $props: props } = this;

			this.state.value = value;
			this.handleChange();
		},
		handleDeselect(option) {
			const { $props: props, state } = this;

			let value = clone(state.value);
			const index = value.findIndex(element => element === option.value);

			if (index === -1) {
				return;
			}

			value.splice(index, 1);

			this.state.value = value;
			this.handleChange();
		},
		handleClear() {
			const { $props: props, state } = this;

			if (state.value.length === 0) {
				return;
			}

			this.state.value = [];
			this.handleChange();
		},
		handleChange() {
			const { $props: props } = this;
			const value = clone(this.state.value);

			this.$emit("input", value);
			this.$emit("change", value);

			if (props.validator) {
				this.dispatch("vui-form-item", "change", value);
			}
		}
	},
	render() {
		const { $scopedSlots: scopedSlots, $props: props, state } = this;
		const { handleClick, handleSelect, handleDeselect, handleClear } = this;

		// formatter
		const formatter = scopedSlots.formatter || props.formatter;

		// body
		const body = scopedSlots.body;

		// class
		const classNamePrefix = getClassNamePrefix(props.classNamePrefix, "cascade-transfer");
		let classes = {};

		classes.el = {
			[`${classNamePrefix}`]: true,
			[`${classNamePrefix}-disabled`]: props.disabled
		};

		// render
		let children = [];

		children.push(
			<VuiCascadeTransferSourceList classNamePrefix={classNamePrefix}>
				{
					state.sourceList.map((source, index) => {
						return (
							<VuiCascadeTransferSource
								key={index}
								classNamePrefix={classNamePrefix}
								level={index + 1}
								parent={source.parent}
								value={state.value}
								options={source.options}
								valueKey={props.valueKey}
								childrenKey={props.childrenKey}
								title={props.title}
								formatter={props.formatter}
								body={props.body}
								locale={props.locale}
								showSelectAll={props.showSelectAll}
								disabled={props.disabled}
								onClick={handleClick}
								onSelect={handleSelect}
							/>
						);
					})
				}
			</VuiCascadeTransferSourceList>
		);

		if (props.showTargetPanel) {
			children.push(
				<VuiCascadeTransferTarget
					classNamePrefix={classNamePrefix}
					title={props.title}
					value={state.value}
					options={props.options}
					valueKey={props.valueKey}
					childrenKey={props.childrenKey}
					formatter={formatter}
					body={body}
					showClear={props.showClear}
					disabled={props.disabled}
					locale={props.locale}
					onDeselect={handleDeselect}
					onClear={handleClear}
				/>
			);
		}

		return (
			<div class={classes.el}>
				{children}
			</div>
		);
	}
};

export default VuiCascadeTransfer;