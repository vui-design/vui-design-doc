import VuiSliderTrack from "./slider-track";
import VuiSliderSteps from "./slider-steps";
import VuiSliderMarks from "./slider-marks";
import VuiSliderDragger from "./slider-dragger";
import Emitter from "vui-design/mixins/emitter";
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
		VuiSliderDragger
	},
	mixins: [
		Emitter
	],
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
		tooltip: PropTypes.object.def({
			formatter: value => value,
			color: "dark",
			placement: "top",
			getPopupContainer: () => document.body
		}),
		disabled: PropTypes.bool.def(false),
		validator: PropTypes.bool.def(true)
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
	computed: {
		dragging() {
			return this.state.dragging;
		}
	},
	watch: {
		value(value) {
			const { $props: props } = this;

			if (this.state.dragging) {
				return;
			}

			this.state.value = utils.getValueFromProps(value, props);
		},
		dragging(value) {
			const { $props: props } = this;

			if (value) {
				return;
			}

			this.state.value = utils.getValueFromProps(props.value, props);
		}
	},
	methods: {
		getContainer() {
			return this.$refs.slider;
		},
		change(value) {
			const { $props: props } = this;

			if (props.range) {
				value = value.map(number => number).sort((a, b) => a - b);
			}

			this.$emit("input", value);
			this.$emit("change", value);

			if (props.validator) {
				this.dispatch("vui-form-item", "change", value);
			}
		},
		handleMousedown(e) {
			e.preventDefault();
		},
		handleMove(type, value) {
			const { $props: props } = this;

			if (props.range) {
				if (type === "min") {
					const maybeReverse = value > this.state.value[1];

					this.state.value.splice(0, 1, value);
					this.$nextTick(() => maybeReverse ? this.$refs.maxDragger.focus() : this.$refs.minDragger.focus());
				}
				else if (type === "max") {
					const maybeReverse = value < this.state.value[0];

					this.state.value.splice(1, 1, value);
					this.$nextTick(() => maybeReverse ? this.$refs.minDragger.focus() : this.$refs.maxDragger.focus());
				}
			}
			else {
				if (type === "max") {
					this.state.value = value;
					this.$nextTick(() => this.$refs.maxDragger.focus());
				}
			}

			this.change(this.state.value);
		},
		handleDragstart(type, dragging) {
			this.state.dragging = dragging;
		},
		handleDragging(type, dragging, value) {
			const { $props: props } = this;

			if (props.range) {
				if (type === "min") {
					this.state.value.splice(0, 1, value);
				}
				else if (type === "max") {
					this.state.value.splice(1, 1, value);
				}
			}
			else {
				if (type === "max") {
					this.state.value = value;
				}
			}

			this.change(this.state.value);
		},
		handleDragend(type, dragging) {
			this.state.dragging = dragging;
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
			[`${classNamePrefix}-${direction}`]: true,
			[`${classNamePrefix}-disabled`]: props.disabled
		};

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
				step={props.step}
				getContainer={this.getContainer}
				disabled={props.disabled}
				onClick={this.handleMove}
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
				<VuiSliderDragger
					ref="minDragger"
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
					onMove={this.handleMove}
					onDragstart={this.handleDragstart}
					onDragging={this.handleDragging}
					onDragend={this.handleDragend}
				/>
			);
		}

		children.push(
			<VuiSliderDragger
				ref="maxDragger"
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
				onMove={this.handleMove}
				onDragstart={this.handleDragstart}
				onDragging={this.handleDragging}
				onDragend={this.handleDragend}
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