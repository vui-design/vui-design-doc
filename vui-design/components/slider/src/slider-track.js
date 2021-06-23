import PropTypes from "vui-design/utils/prop-types";
import getClassNamePrefix from "vui-design/utils/getClassNamePrefix";

const VuiSliderTrack = {
	name: "vui-slider-track",
	props: {
		classNamePrefix: PropTypes.string.def("vui-slider"),
		vertical: PropTypes.bool.def(false),
		value: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
		range: PropTypes.bool.def(false),
		included: PropTypes.bool.def(true),
		min: PropTypes.number.def(0),
		max: PropTypes.number.def(100)
	},
	render(h) {
		const { $props: props } = this;
		const difference = props.max - props.min;

		// class
		const classNamePrefix = getClassNamePrefix(props.classNamePrefix, "track");
		let classes = {};

		classes.el = `${classNamePrefix}`;
		classes.elBar = `${classNamePrefix}-bar`;

		// render
		let bar;

		if (props.included) {
			let offset;
			let size;

			if (props.range) {
				offset = (Math.abs(props.value[0] - props.min) / difference) * 100 + "%";
				size = (Math.abs(props.value[1] - props.value[0]) / difference) * 100 + "%";
			}
			else {
				offset = "0%";
				size = (Math.abs(props.value - props.min) / difference) * 100 + "%";
			}

			let barStyle = {};

			if (props.vertical) {
				barStyle.bottom = offset;
				barStyle.height = size;
			}
			else {
				barStyle.left = offset;
				barStyle.width = size;
			}

			bar = (
				<div class={classes.elBar} style={barStyle}></div>
			);
		}

		return (
			<div class={classes.el}>
				{bar}
			</div>
		);
	}
};

export default VuiSliderTrack;