import PropTypes from "vui-design/utils/prop-types";
import is from "vui-design/utils/is";
import getClassNamePrefix from "vui-design/utils/getClassNamePrefix";

const VuiTransfer = {
	name: "vui-transfer",
	props: {
		classNamePrefix: PropTypes.string,
		getScrollContainer: PropTypes.func.def(() => typeof window === "undefined" ? null : window),
		offsetTop: PropTypes.number,
		offsetBottom: PropTypes.number
	},
	data() {
		const state = {

		};

		return {
			state
		};
	},
	methods: {
		
	},
	render() {
		const { $slots: slots, $props: props, state } = this;

		// classes
		const classNamePrefix = getClassNamePrefix(props.classNamePrefix, "transfer");
		let classes = {};

		classes.el = {
			[`${classNamePrefix}`]: true
		};

		// render
		return (
			<div class={classes.el}>

			</div>
		);
	}
};

export default VuiTransfer;