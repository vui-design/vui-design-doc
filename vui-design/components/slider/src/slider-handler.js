import VuiTooltip from "vui-design/components/tooltip";
import PropTypes from "vui-design/utils/prop-types";
import is from "vui-design/utils/is";
import addEventListener from "vui-design/utils/addEventListener";
import getClassNamePrefix from "vui-design/utils/getClassNamePrefix";
import utils from "./utils";

const VuiSliderHandler = {
	name: "vui-slider-handler",
	components: {
		VuiTooltip
	},
	props: {
		classNamePrefix: PropTypes.string.def("vui-slider"),
		type: PropTypes.oneOf(["min", "max"]).def("max"),
		vertical: PropTypes.bool.def(false),
		value: PropTypes.number,
		min: PropTypes.number.def(0),
		max: PropTypes.number.def(100),
		step: PropTypes.number.def(1),
		tooltip: PropTypes.object.def(() => {
			return {
				formatter: value => value,
				color: "dark",
				placement: "top",
				getPopupContainer: () => document.body
			};
		}),
		getContainer: PropTypes.func.def(element => element.parentNode),
		disabled: PropTypes.bool.def(false)
	},
	data() {
		return {
			state: {
				dragging: false,
				dragStart: 0,
				dragEnd: 0,
				dragStartOffset: 0,
				dragEndOffset: 0
			}
		};
	},
	methods: {
		change(offset) {
			const { $props: props } = this;

			if (!is.number(offset)) {
				return;
			}

			if (offset < 0) {
				offset = 0;
			}
			else if (offset > 100) {
				offset = 100;
			}

			const average = 100 / ((props.max - props.min) / props.step);
			const steps = Math.round(offset / average);
			const precision = utils.getPrecision(props.min, props.max, props.step);
			let value = (steps * average * (props.max - props.min)) / 100 + props.min;

			value = parseFloat(value.toFixed(precision));

			this.$nextTick(() => this.$refs.tooltip && this.$refs.tooltip.reregister());

			if (value === props.value) {
				return;
			}

			this.$emit("change", props.type, value);
		},
		handleDragstart(e) {
			const { $props: props } = this;

			if (props.disabled || this.state.dragging) {
				return;
			}

			let dragStart = 0;

			if (props.vertical) {
				dragStart = e.type === "touchstart" ? e.touches[0].clientY : e.clientY;
			}
			else {
				dragStart = e.type === "touchstart" ? e.touches[0].clientX : e.clientX;
			}

			this.state.dragging = true;
			this.state.dragStart = dragStart;
			this.state.dragEnd = 0;
			this.state.dragStartOffset = (props.value - props.min) / (props.max - props.min) * 100;
			this.mousemoveEvent = addEventListener(window, "mousemove", this.handleDragging);
			this.touchmoveEvent = addEventListener(window, "touchmove", this.handleDragging);
			this.mouseupEvent = addEventListener(window, "mouseup", this.handleDragend);
			this.touchendEvent = addEventListener(window, "touchend", this.handleDragend);
		},
		handleDragging(e) {
			const { $props: props } = this;

			if (props.disabled || !this.state.dragging) {
				return;
			}

			let dragEnd = 0;

			if (props.vertical) {
				dragEnd = e.type === "touchstart" ? e.touches[0].clientY : e.clientY;
			}
			else {
				dragEnd = e.type === "touchstart" ? e.touches[0].clientX : e.clientX;
			}

			const container = props.getContainer();
			const size = utils.getSliderSize(container, props.vertical);
			let distance = 0;

			if (props.vertical) {
				distance = (dragEnd - this.state.dragStart) / size * 100;
			}
			else {
				distance = (dragEnd - this.state.dragStart) / size * 100;
			}

			this.state.dragEnd = dragEnd;
			this.state.dragEndOffset = this.state.dragStartOffset + distance;
			this.change(this.state.dragEndOffset);
		},
		handleDragend() {
			const { $props: props } = this;

			if (props.disabled || !this.state.dragging) {
				return;
			}

			this.state.dragging = false;
			this.state.dragStart = 0;
			this.state.dragEnd = 0;
			this.state.dragStartOffset = 0;
			this.state.dragEndOffset = 0;
			this.mousemoveEvent && this.mousemoveEvent.remove();
			this.touchmoveEvent && this.touchmoveEvent.remove();
			this.mouseupEvent && this.mouseupEvent.remove();
			this.touchendEvent && this.touchendEvent.remove();
		}
	},
	render(h) {
		const { $props: props } = this;

		// class
		const classNamePrefix = getClassNamePrefix(props.classNamePrefix, "handler");
		let classes = {};

		classes.elWrapper = `${classNamePrefix}-wrapper`;
		classes.el = `${classNamePrefix}`;

		// style
		const offset = (props.value - props.min) / (props.max - props.min) * 100 + "%";
		let styles = {};

		styles.elWrapper = {};

		if (props.vertical) {
			styles.elWrapper.bottom = offset;
		}
		else {
			styles.elWrapper.left = offset;
		}

		// render
		let handler = (
			<button type="button" class={classes.el} />
		);

		if (props.tooltip && is.function(props.tooltip.formatter)) {
			handler = (
				<VuiTooltip
					ref="tooltip"
					trigger="focus"
					color={props.tooltip.color}
					placement={props.tooltip.placement}
					getPopupContainer={props.tooltip.getPopupContainer}
				>
					{handler}
					<div slot="content">{props.tooltip.formatter(props.value)}</div>
				</VuiTooltip>
			);
		}

		return (
			<div
				class={classes.elWrapper}
				style={styles.elWrapper}
				onMousedown={this.handleDragstart}
				onTouchstart={this.handleDragstart}
			>
				{handler}
			</div>
		);
	}
};

export default VuiSliderHandler;