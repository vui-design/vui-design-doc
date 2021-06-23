import VuiSliderTrack from "./slider-track";
import VuiSliderSteps from "./slider-steps";
import VuiSliderMarks from "./slider-marks";
import VuiSliderHandler from "./slider-handler";
import PropTypes from "vui-design/utils/prop-types";
import is from "vui-design/utils/is";
import clone from "vui-design/utils/clone";
import getClassNamePrefix from "vui-design/utils/getClassNamePrefix";
import utils from "./utils";

const VuiSlider = {
	name: "vui-slider",
	components: {
		VuiSliderTrack,
		VuiSliderSteps,
		VuiSliderMarks,
		VuiSliderHandler
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
		getContainer() {
			return this.$refs.slider;
		},
		handleDragging(type, value) {
			const { $props: props, state } = this;

			if (props.range) {
				let array = clone(state.value);

				if (type === "min") {
					array.splice(0, 1, value);
				}
				else if (type === "max") {
					array.splice(1, 1, value);
				}

				console.log(type, array.sort((a, b) => a - b))

				this.state.value = array.sort((a, b) => a - b);
			}
			else {
				if (type === "max") {
					this.state.value = value;
				}
			}
		}
	},
	render() {
		const { $slots: slots, $props: props, state } = this;
		const direction = props.vertical ? "vertical" : "horizontal";

		// class
		const classNamePrefix = getClassNamePrefix(props.classNamePrefix, "slider");
		let classes = {};

		classes.el = {
			[`${classNamePrefix}`]: true,
			[`${classNamePrefix}-${direction}`]: true
		};
		classes.elHandlerWrapper = `${classNamePrefix}-handler-wrapper`;
		classes.elHandler = `${classNamePrefix}-handler`;

		// render
		let children = [];

		children.push(
			<VuiSliderTrack
				classNamePrefix={classNamePrefix}
				vertical={props.vertical}
				value={state.value}
				range={props.range}
				included={props.included}
				min={props.min}
				max={props.max}
			/>
		);

		children.push(
			<VuiSliderSteps
				classNamePrefix={classNamePrefix}
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
			children.push(
				<VuiSliderMarks
					classNamePrefix={classNamePrefix}
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
			children.push(
				<VuiSliderHandler
					type="min"
					classNamePrefix={classNamePrefix}
					vertical={props.vertical}
					value={state.value[0]}
					min={props.min}
					max={props.max}
					step={props.step}
					tooltip={props.tooltip}
					getContainer={this.getContainer}
					disabled={props.disabled}
					onChange={this.handleDragging}
				/>
			);
		}

		children.push(
			<VuiSliderHandler
				type="max"
				classNamePrefix={classNamePrefix}
				vertical={props.vertical}
				value={props.range ? state.value[1] : state.value}
				min={props.min}
				max={props.max}
				step={props.step}
				tooltip={props.tooltip}
				getContainer={this.getContainer}
				disabled={props.disabled}
				onChange={this.handleDragging}
			/>
		);

		return (
			<div ref="slider" class={classes.el}>
				{children}
			</div>
		);
	}
};

export default VuiSlider;