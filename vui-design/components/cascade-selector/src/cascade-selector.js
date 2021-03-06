import VuiCascadeSelectorSourceList from "./cascade-selector-source-list";
import VuiCascadeSelectorTarget from "./cascade-selector-target";
import Emitter from "vui-design/mixins/emitter";
import PropTypes from "vui-design/utils/prop-types";
import clone from "vui-design/utils/clone";
import getClassNamePrefix from "vui-design/utils/getClassNamePrefix";

const VuiCascadeSelector = {
	name: "vui-cascade-selector",
	inject: {
		vuiForm: {
			default: undefined
		}
	},
	components: {
		VuiCascadeSelectorSourceList,
		VuiCascadeSelectorTarget
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
		title: PropTypes.func.def(props => ""),
		showTargetPanel: PropTypes.bool.def(true),
		value: PropTypes.array.def([]),
		options: PropTypes.array.def([]),
		valueKey: PropTypes.string.def("value"),
		childrenKey: PropTypes.string.def("children"),
		formatter: PropTypes.func.def(option => option.label),
		showSelectAll: PropTypes.bool.def(true),
		showClear: PropTypes.bool.def(true),
		disabled: PropTypes.bool.def(false),
		locale: PropTypes.object,
		validator: PropTypes.bool.def(true)
	},
	data() {
		const { $props: props } = this;
		const state = {
			value: clone(props.value)
		};

		return {
			state
		};
	},
	watch: {
		value(value) {
			this.state.value = clone(value);
		}
	},
	methods: {
		handleClick(option) {
			this.$emit("click", option);
		},
		handleSelect(value) {
			const { $props: props } = this;

			this.state.value = value;
			this.$emit("input", value);
			this.$emit("change", value);

			if (props.validator) {
				this.dispatch("vui-form-item", "change", value);
			}
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
			this.$emit("input", value);
			this.$emit("change", value);

			if (props.validator) {
				this.dispatch("vui-form-item", "change", value);
			}
		},
		handleClear() {
			const { $props: props } = this;
			const value = [];

			this.state.value = value;
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
		const classNamePrefix = getClassNamePrefix(props.classNamePrefix, "cascade-selector");
		let classes = {};

		classes.el = {
			[`${classNamePrefix}`]: true,
			[`${classNamePrefix}-disabled`]: props.disabled
		};

		// render
		return (
			<div class={classes.el}>
				<VuiCascadeSelectorSourceList
					classNamePrefix={classNamePrefix}
					title={props.title}
					value={state.value}
					options={props.options}
					valueKey={props.valueKey}
					childrenKey={props.childrenKey}
					formatter={formatter}
					body={body}
					showSelectAll={props.showSelectAll}
					disabled={props.disabled}
					locale={props.locale}
					onClick={handleClick}
					onSelect={handleSelect}
				/>
				{
					props.showTargetPanel && (
						<VuiCascadeSelectorTarget
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
					)
				}
			</div>
		);
	}
};

export default VuiCascadeSelector;