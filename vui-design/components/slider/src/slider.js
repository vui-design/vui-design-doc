import VuiTooltip from "vui-design/components/tooltip";
import VuiSliderSteps from "./slider-steps";
import VuiSliderMarks from "./slider-marks";
import PropTypes from "vui-design/utils/prop-types";
import is from "vui-design/utils/is";
import clone from "vui-design/utils/clone";
import getClassNamePrefix from "vui-design/utils/getClassNamePrefix";
import utils from "./utils";

const VuiSlider = {
	name: "vui-slider",
	components: {
		VuiTooltip,
		VuiSliderSteps,
		VuiSliderMarks
	},
	props: {
		classNamePrefix: PropTypes.string,
		vertical: PropTypes.bool.def(false),
		value: PropTypes.oneOfType([PropTypes.number, PropTypes.array]).def(0),
		range: PropTypes.bool.def(false),
		included: PropTypes.bool.def(true),
		min: PropTypes.number.def(0),
		max: PropTypes.number.def(100),
		step: PropTypes.number.def(1),
		showSteps: PropTypes.bool.def(false),
		marks: PropTypes.object.def({}),
		tooltip: PropTypes.object.def(() => {
			return {
				formatter: value => value,
				color: "dark",
				placement: "top",
				getPopupContainer: () => document.body
			};
		}),
		disabled: PropTypes.bool.def(false)
	},
	data() {
		const { $props: props } = this;

		return {
			state: {
				dragging: false,
				value: utils.getValueFromProps(props.value, props)
			}
		};
	},
	watch: {
		value(value) {
			const { $props: props } = this;

			this.state.value = utils.getValueFromProps(value, props);
		}
	},
	methods: {

	},
	render() {
		const { $slots: slots, $props: props, state } = this;
		const difference = props.max - props.min;

		const classNamePrefix = getClassNamePrefix(props.classNamePrefix, "slider");
		let classes = {};

		classes.el = {
			[`${classNamePrefix}`]: true
		};
		classes.elTrack = `${classNamePrefix}-track`;
		classes.elTrackBar = `${classNamePrefix}-track-bar`;
		classes.elHandlerWrapper = `${classNamePrefix}-handler-wrapper`;
		classes.elHandler = `${classNamePrefix}-handler`;

		// render
		let content = [];

		if (props.included) {
			let offset;
			let size;

			if (props.range) {
				offset = (Math.abs(state.value[0] - props.min) / difference) * 100 + "%";
				size = (Math.abs(state.value[1] - state.value[0]) / difference) * 100 + "%";
			}
			else {
				offset = "0%";
				size = (Math.abs(state.value - props.min) / difference) * 100 + "%";
			}

			let trackBarStyle = {};

			if (props.vertical) {
				trackBarStyle.bottom = offset;
				trackBarStyle.height = size;
			}
			else {
				trackBarStyle.left = offset;
				trackBarStyle.width = size;
			}

			content.push(
				<div class={classes.elTrack}>
					<div class={classes.elTrackBar} style={trackBarStyle}></div>
				</div>
			);
		}
		else {
			content.push(
				<div class={classes.elTrack}></div>
			);
		}

		content.push(
			<VuiSliderSteps
				vertical={props.vertical}
				value={state.value}
				range={props.range}
				included={props.included}
				min={props.min}
				max={props.max}
				step={props.step}
				showSteps={props.showSteps}
				stepStyle={props.stepStyle}
				activeStepStyle={props.activeStepStyle}
				marks={props.marks}
			/>
		);

		if (props.marks) {
			content.push(
				<VuiSliderMarks
					vertical={props.vertical}
					value={state.value}
					range={props.range}
					included={props.included}
					min={props.min}
					max={props.max}
					marks={props.marks}
					markStyle={props.markStyle}
					activeMarkStyle={props.activeMarkStyle}
				/>
			);
		}

		if (props.range) {
			let handler;

			if (!props.tooltip || !props.tooltip.formatter) {
				handler = (
					<div class={classes.elHandler}></div>
				);
			}
			else {
				handler = (
					<VuiTooltip color={props.tooltip.color} placement={props.tooltip.placement} getPopupContainer={props.tooltip.getPopupContainer}>
						<div class={classes.elHandler}></div>
						<div slot="content">{props.tooltip.formatter(50)}</div>
					</VuiTooltip>
				);
			}

			content.push(
				<div tabIndex="0" class={classes.elHandlerWrapper}>
					{handler}
				</div>
			);
		}

		let handler;

		if (!props.tooltip || !props.tooltip.formatter) {
			handler = (
				<div class={classes.elHandler}></div>
			);
		}
		else {
			handler = (
				<VuiTooltip color={props.tooltip.color} placement={props.tooltip.placement} getPopupContainer={props.tooltip.getPopupContainer}>
					<div class={classes.elHandler}></div>
					<div slot="content">{props.tooltip.formatter(50)}</div>
				</VuiTooltip>
			);
		}

		content.push(
			<div tabIndex="0" class={classes.elHandlerWrapper}>
				{handler}
			</div>
		);

		return (
			<div class={classes.el}>
				{content}
			</div>
		);
	}
};

export default VuiSlider;