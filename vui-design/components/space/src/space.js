import PropTypes from "vui-design/utils/prop-types";
import is from "vui-design/utils/is";
import getValidElements from "vui-design/utils/getValidElements";
import getClassNamePrefix from "vui-design/utils/getClassNamePrefix";

const sizes = ["small", "medium", "large"];

const VuiSpace = {
	name: "vui-space",
	props: {
		classNamePrefix: PropTypes.string,
		direction: PropTypes.oneOf(["horizontal", "vertical"]).def("horizontal"),
		divider: PropTypes.oneOfType([PropTypes.bool, PropTypes.string, PropTypes.number]).def(false),
		justify: PropTypes.oneOf(["start", "center", "end"]).def("center"),
		align: PropTypes.oneOf(["start", "center", "end"]).def("center"),
		size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).def("medium")
	},
	render(h) {
		const { $slots: slots, $props: props } = this;
		const isHorizontal = props.direction === "horizontal";
		const withPresetSize = props.size && sizes.indexOf(props.size) > -1;
		const withCustomSize = props.size && sizes.indexOf(props.size) === -1;

		// size
		let size;

		if (withCustomSize) {
			size = is.string(props.size) ? props.size : `${props.size}px`;
		}

		// class
		const classNamePrefix = getClassNamePrefix(props.classNamePrefix, "space");
		let classes = {};

		classes.el = {
			[`${classNamePrefix}`]: true,
			[`${classNamePrefix}-with-divider`]: props.divider,
			[`${classNamePrefix}-${props.direction}`]: props.direction,
			[`${classNamePrefix}-${props.align}`]: isHorizontal && props.align,
			[`${classNamePrefix}-${props.size}`]: withPresetSize
		};
		classes.elItem = `${classNamePrefix}-item`;
		classes.elDivider = `${classNamePrefix}-divider`;

		// style
		let styles = {};

		if (isHorizontal) {
			if (props.divider) {
				let divider;

				if (is.string(props.divider)) {
					divider = props.divider;
				}
				else if (is.number(props.divider)) {
					divider = props.divider + "px";
				}
				else {
					divider = "12px";
				}

				styles.elDivider = {
					height: divider,
					marginLeft: size,
					marginRight: size
				};
			}
			else {
				if (withCustomSize) {
					styles.elItem = {
						marginLeft: size
					};
				}
			}
		}
		else {
			if (withCustomSize) {
				styles.elItem = {
					marginTop: size
				};
			}
		}

		// render
		const list = getValidElements(slots.default);
		let children = [];

		list.forEach((item, index) => {
			if (props.divider && index > 0) {
				children.push(
					<i class={classes.elDivider} style={styles.elDivider}></i>
				);
			}

			const isNotFirst = index > 0;

			children.push(
				<div class={classes.elItem} style={isNotFirst && styles.elItem}>{item}</div>
			);
		});

		return (
			<div class={classes.el}>{children}</div>
		);
	}
};

export default VuiSpace;