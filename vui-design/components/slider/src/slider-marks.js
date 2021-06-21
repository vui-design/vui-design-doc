import PropTypes from "vui-design/utils/prop-types";
import is from "vui-design/utils/is";
import getClassNamePrefix from "vui-design/utils/getClassNamePrefix";
import utils from "./utils";

const VuiSliderMarks = {
	name: "vui-slider-marks",
	props: {
		classNamePrefix: PropTypes.string.def("vui-slider"),
		vertical: PropTypes.bool.def(false),
		value: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
		range: PropTypes.bool.def(false),
		included: PropTypes.bool.def(true),
		min: PropTypes.number.def(0),
		max: PropTypes.number.def(100),
		marks: PropTypes.object.def({}),
		markStyle: PropTypes.object,
		activeMarkStyle: PropTypes.object
	},
	render(h) {
		const { $props: props } = this;
		const difference = props.max - props.min;
		const marks = utils.getMarks(props.min, props.max, props.marks);

		let lower;
		let upper;

		if (props.range) {
			lower = props.value[0];
			upper = props.value[1];
		}
		else {
			lower = props.min;
			upper = props.value;
		}

		// class
		const classNamePrefix = getClassNamePrefix(props.classNamePrefix, "marks");
		let classes = {};

		classes.el = {
			[`${classNamePrefix}`]: true
		};

		// render
		if (marks.length === 0) {
			return null;
		}

		return (
			<div class={classes.el}>
				{
					marks.map(mark => {
						const offset = (Math.abs(mark.value - props.min) / difference) * 100 + "%";
						let isActive = false;

						if (props.included) {
							isActive = mark.value >= lower && mark.value <= upper;
						}
						else {
							isActive = mark.value === upper;
						}

						const markClass = {
							[`${classNamePrefix}-item`]: true,
							[`${classNamePrefix}-item-active`]: isActive
						};

						let markStyle = {
							...props.markStyle
						};

						if (is.json(mark.attributes.style)) {
							markStyle = { ...markStyle, ...mark.attributes.style };
						}

						if (isActive) {
							markStyle = { ...markStyle, ...props.activeMarkStyle };
						}

						if (props.vertical) {
							markStyle.bottom = offset;
						}
						else {
							markStyle.left = offset;
						}

						let label;

						if (is.function(mark.attributes.label)) {
							label = mark.attributes.label(h, mark.value, mark.attributes);
						}
						else {
							label = mark.attributes.label;
						}

						return (
							<div key={mark.value} class={markClass} style={markStyle}>
								{label}
							</div>
						);
					})
				}
			</div>
		);
	}
};

export default VuiSliderMarks;