import VuiIcon from "vui-design/components/icon";
import VuiTooltip from "vui-design/components/tooltip";
import PropTypes from "vui-design/utils/prop-types";
import is from "vui-design/utils/is";
import getClassNamePrefix from "vui-design/utils/getClassNamePrefix";

const VuiRateStar = {
	name: "vui-rate-star",
	inject: {
		vuiRate: {
			default: undefined
		}
	},
	components: {
		VuiIcon,
		VuiTooltip
	},
	props: {
		classNamePrefix: PropTypes.string,
		index: PropTypes.number,
		value: PropTypes.number,
		character: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
		tooltip: PropTypes.string,
		disabled: PropTypes.bool.def(false)
	},
	methods: {
		handleMouseenter(e, half) {
			const { $props: props } = this;

			if (props.disabled) {
				return;
			}

			this.$emit("mouseenter", e, props.value, half);
		},
		handleClick(e, half) {
			const { $props: props } = this;

			if (props.disabled) {
				return;
			}
 
			this.$emit("click", e, props.value, half);
		}
	},
	render() {
		const { vuiRate, $slots: slots, $props: props, state } = this;
		const { $props: vuiRateProps, state: vuiRateState } = vuiRate;
		const { handleMouseenter, handleClick } = this;

		// vuiRateStateValue
		const vuiRateStateValue = vuiRateState.mouseenter === undefined ? vuiRateState.value : vuiRateState.mouseenter;

		// status
		let status;

		if (vuiRateProps.allowHalf && props.value === vuiRateStateValue + 0.5) {
			status = "half";
		}
		else if (vuiRateStateValue < props.value) {
			status = "zero";
		}
		else {
			status = "full";
		}

		// character
		let character;

		if (slots.default) {
			character = slots.default;
		}
		else if (is.string(props.character)) {
			character = props.character;
		}
		else if (is.function(props.character)) {
			character = props.character(props.index);
		}
		else {
			character = (
				<VuiIcon type="star-filled" />
			);
		}

		// class
		const classNamePrefix = getClassNamePrefix(props.classNamePrefix, "star");
		let classes = {};

		classes.el = {
			[`${classNamePrefix}`]: true,
			[`${classNamePrefix}-${status}`]: status,
			[`${classNamePrefix}-disabled`]: props.disabled
		};
		classes.elFirst = `${classNamePrefix}-first`;
		classes.elSecond = `${classNamePrefix}-second`;

		// render
		const star = (
			<div class={classes.el}>
				<div class={classes.elFirst} onMouseenter={e => handleMouseenter(e, true)} onClick={e => handleClick(e, true)}>{character}</div>
				<div class={classes.elSecond} onMouseenter={e => handleMouseenter(e, false)} onClick={e => handleClick(e, false)}>{character}</div>
			</div>
		);

		if (props.tooltip) {
			return (
				<VuiTooltip content={props.tooltip}>{star}</VuiTooltip>
			);
		}

		return star;
	}
};

export default VuiRateStar;