import VuiCascadeTransferSource from "./cascade-transfer-source";
import PropTypes from "vui-design/utils/prop-types";
import clone from "vui-design/utils/clone";
import getClassNamePrefix from "vui-design/utils/getClassNamePrefix";
import utils from "./utils";

const VuiCascadeTransferSourceList = {
	name: "vui-cascade-transfer-source-list",
	provide() {
		return {
			vuiCascadeTransferSourceList: this
		};
	},
	components: {
		VuiCascadeTransferSource
	},
	props: {
		classNamePrefix: PropTypes.string,
		value: PropTypes.array.def([]),
		options: PropTypes.array.def([]),
		valueKey: PropTypes.string.def("value"),
		childrenKey: PropTypes.string.def("children"),
		title: PropTypes.func.def(props => ""),
		formatter: PropTypes.func.def(option => option.key),
		body: PropTypes.func,
		locale: PropTypes.object,
		showSelectAll: PropTypes.bool.def(true),
		disabled: PropTypes.bool.def(false)
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
		getContainer() {
			return this.$el;
		},
		handleClick(value, option) {
			this.$emit("click", value, option);
		},
		handleSelect(checked, option) {
			const { $props: props, state } = this;

			if (checked) {
				if (option.children && option.children.length > 0) {
					const options = utils.flatten(option.children, props.childrenKey, true);

					options.forEach(option => {
						const index = this.state.value.findIndex(element => option[props.valueKey] === element);

						if (index > -1) {
							this.state.value.splice(index, 1);
						}
					});
				}

				const index = this.state.value.findIndex(element => option.value === element);

				if (index === -1) {
					this.state.value.push(option.value);
				}
			}
			else {
				const index = this.state.value.findIndex(element => option.value === element);

				if (index > -1) {
					this.state.value.splice(index, 1);
				}
			}

			this.$emit("select", clone(this.state.value));
		}
	},
	render(h) {
		const { $props: props, state, getContainer } = this;
		const { handleClick, handleSelect } = this;

		// selectedKeys
		const selectedKeys = props.options.map(option => option[props.valueKey]).filter(optionKey => state.value.indexOf(optionKey) > -1);

		// class
		const classNamePrefix = getClassNamePrefix(props.classNamePrefix, "source-list");
		let classes = {};

		classes.el = `${classNamePrefix}`;

		// render
		return (
			<div class={classes.el}>
				<VuiCascadeTransferSource
					classNamePrefix={props.classNamePrefix}
					selectedKeys={selectedKeys}
					options={props.options}
					valueKey={props.valueKey}
					childrenKey={props.childrenKey}
					title={props.title}
					formatter={props.formatter}
					body={props.body}
					locale={props.locale}
					showSelectAll={props.showSelectAll}
					disabled={props.disabled}
					getContainer={getContainer}
					onClick={handleClick}
					onSelect={handleSelect}
				/>
			</div>
		);
	}
};

export default VuiCascadeTransferSourceList;