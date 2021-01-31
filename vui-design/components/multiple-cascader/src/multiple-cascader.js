import VuiMultipleCascaderSourceList from "./multiple-cascader-source-list";
import VuiMultipleCascaderTarget from "./multiple-cascader-target";
import Emitter from "vui-design/mixins/emitter";
import PropTypes from "vui-design/utils/prop-types";
import clone from "vui-design/utils/clone";
import getClassNamePrefix from "vui-design/utils/getClassNamePrefix";
import utils from "./utils";

const VuiMultipleCascader = {
	name: "vui-multiple-cascader",
	inject: {
		vuiForm: {
			default: undefined
		}
	},
	components: {
		VuiMultipleCascaderSourceList,
		VuiMultipleCascaderTarget
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
		handleClear() {
			const { $props: props } = this;
			const newValue = [];

			this.state.value = newValue;
			this.$emit("input", newValue);
			this.$emit("change", newValue);
		},
		handleSelect(value) {
			const { $props: props } = this;
			const newValue = clone(value);

			this.state.value = newValue;
			this.$emit("input", newValue);
			this.$emit("change", newValue);
		},
		handleDeselect(value, option) {
			const { $props: props, state } = this;
			const newValue = clone(state.value);
			const index = newValue.findIndex(element => value === element);

			if (index === -1) {
				return;
			}

			newValue.splice(index, 1);

			this.state.value = newValue;
			this.$emit("input", newValue);
			this.$emit("change", newValue);
		}
	},
	render() {
		const { $scopedSlots: scopedSlots, $props: props, state } = this;
		const { handleClear, handleSelect, handleDeselect } = this;

		// formatter
		const formatter = scopedSlots.formatter || props.formatter;

		// body
		const body = scopedSlots.body;

		// class
		const classNamePrefix = getClassNamePrefix(props.classNamePrefix, "multiple-cascader");
		let classes = {};

		classes.el = {
			[`${classNamePrefix}`]: true,
			[`${classNamePrefix}-disabled`]: props.disabled
		};

		// render
		return (
			<div class={classes.el}>
				<VuiMultipleCascaderSourceList
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
					onSelect={handleSelect}
				/>
				{
					props.showTargetPanel && (
						<VuiMultipleCascaderTarget
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
							onClear={handleClear}
							onDeselect={handleDeselect}
						/>
					)
				}
			</div>
		);
	}
};

export default VuiMultipleCascader;