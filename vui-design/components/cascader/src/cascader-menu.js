import VuiCascaderMenuItem from "./cascader-menu-item";
import PropTypes from "vui-design/utils/prop-types";
import is from "vui-design/utils/is";
import getClassNamePrefix from "vui-design/utils/getClassNamePrefix";
import utils from "./utils";

export default {
	name: "vui-cascader-menu",
	inject: {
		vuiCascader: {
			default: undefined
		},
		vuiCascaderDropdown: {
			default: undefined
		},
		vuiCascaderMenuList: {
			default: undefined
		}
	},
	provide() {
		return {
			vuiCascaderMenu: this
		};
	},
	components: {
		VuiCascaderMenuItem
	},
	props: {
		classNamePrefix: PropTypes.string,
		level: PropTypes.number.def(0),
		value: PropTypes.object.def({}),
		options: PropTypes.array.def([]),
		optionKeys: PropTypes.object.def(utils.optionKeys),
		dangerouslyUseHTMLString: PropTypes.bool.def(false),
		expandTrigger: PropTypes.oneOf(["click", "hover"]).def("click")
	},
	data() {
		const { $props: props } = this;
		const value = props.value[props.optionKeys.value];

		return {
			state: {
				mouseenter: value,
				click: value
			}
		};
	},
	watch: {
		value(value) {
			const { $props: props } = this;

			value = value[props.optionKeys.value];

			this.state.mouseenter = value;
			this.state.click = value;
		}
	},
	methods: {
		handleOptionMouseenter(data) {
			const { $props: props } = this;

			this.state.mouseenter = data[props.optionKeys.value];
			this.$emit("mouseenter", props.level, data);

			if (props.expandTrigger === "hover" && data[props.optionKeys.children]) {
				this.handleOptionClick(data);
			}
		},
		handleOptionClick(data) {
			const { $props: props } = this;

			this.state.click = data[props.optionKeys.value];
			this.$emit("select", props.level, data);
		}
	},
	render(h) {
		const { $props: props } = this;
		const { handleOptionMouseenter, handleOptionClick } = this;

		// classes
		const classNamePrefix = getClassNamePrefix(props.classNamePrefix, "menu");
		let classes = {};

		classes.el = `${classNamePrefix}`;

		// render
		return (
			<div class={classes.el}>
				{
					props.options.map(option => {
						return (
							<VuiCascaderMenuItem
								key={option[props.optionKeys.value]}
								classNamePrefix={props.classNamePrefix}
								data={option}
								optionKeys={props.optionKeys}
								dangerouslyUseHTMLString={props.dangerouslyUseHTMLString}
								onMouseenter={handleOptionMouseenter}
								onClick={handleOptionClick}
							/>
						);
					})
				}
			</div>
		);
	}
};