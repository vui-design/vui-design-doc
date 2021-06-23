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
				dragPosition: 0
			}
		};
	},
	methods: {
		changePosition(position) {
			const { $props: props } = this;

			if (position === null || is.nan(position)) {
				return;
			}

			if (position < 0) {
				position = 0;
			}
			else if (position > 100) {
				position = 100;
			}

			const average = 100 / ((props.max - props.min) / props.step);
			const steps = Math.round(position / average);
			const precision = utils.getValuePrecision(props.min, props.max, props.step);
			let value = steps * average * (props.max - props.min) * 0.01 + props.min;

			value = parseFloat(value.toFixed(precision));

			this.$emit("change", props.type, value);
			this.$nextTick(() => this.$refs.tooltip && this.$refs.tooltip.reregister());
		},
		handleDragstart(e) {
			const { $props: props } = this;

			this.state.dragging = true;

			if (props.vertical) {
				this.state.dragStart = e.type === "touchstart" ? e.touches[0].clientY : e.clientY;
			}
			else {
				this.state.dragStart = e.type === "touchstart" ? e.touches[0].clientX : e.clientX;
			}

			this.state.dragPosition = (props.value - props.min) / (props.max - props.min) * 100;
			this.mousemoveEvent = addEventListener(document.body, "mousemove", this.handleDragging);
			this.touchmoveEvent = addEventListener(document.body, "touchmove", this.handleDragging);
			this.mouseupEvent = addEventListener(document.body, "mouseup", this.handleDragend);
			this.touchendEvent = addEventListener(document.body, "touchend", this.handleDragend);
		},
		handleDragging(e) {
			const { $props: props } = this;

			if (!this.state.dragging) {
				return;
			}

			const container = this.getContainer();
			const size = utils.getSliderSize(container, props.vertical);
			let difference = 0;

			if (props.vertical) {
				this.state.dragEnd = e.type === "touchstart" ? e.touches[0].clientY : e.clientY;
				difference = (this.state.dragEnd - this.state.dragStart) / size * 100;
			}
			else {
				this.state.dragEnd = e.type === "touchstart" ? e.touches[0].clientX : e.clientX;
				difference = (this.state.dragEnd - this.state.dragStart) / size * 100;
			}

			this.changePosition(this.state.dragPosition + difference);
		},
		handleDragend() {
			const { $props: props } = this;

			if (!this.state.dragging) {
				return;
			}

			this.state.dragging = false;
			this.state.dragStart = 0;
			this.state.dragEnd = 0;
			this.state.dragPosition = 0;
			this.mousemoveEvent && this.mousemoveEvent.remove();
			this.touchmoveEvent && this.touchmoveEvent.remove();
			this.mouseupEvent && this.mouseupEvent.remove();
			this.touchendEvent && this.touchendEvent.remove();
		}
	},
	render(h) {
		const { $props: props } = this;
		const offset = (props.value - props.min) / (props.max - props.min) * 100 + "%";

		// class
		const classNamePrefix = getClassNamePrefix(props.classNamePrefix, "handler");
		let classes = {};

		classes.elWrapper = `${classNamePrefix}-wrapper`;
		classes.el = `${classNamePrefix}`;

		// style
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
			<div tabIndex="0" class={classes.el}></div>
		);

		if (props.tooltip && is.function(props.tooltip.formatter)) {
			handler = (
				<VuiTooltip ref="tooltip" trigger="focus" color={props.tooltip.color} placement={props.tooltip.placement} getPopupContainer={props.tooltip.getPopupContainer}>
					{handler}
					<div slot="content">{props.tooltip.formatter(props.value)}</div>
				</VuiTooltip>
			);
		}

		return (
			<div class={classes.elWrapper} style={styles.elWrapper} onMousedown={this.handleDragstart} onTouchstart={this.handleDragstart}>
				{handler}
			</div>
		);
	}
};

export default VuiSliderHandler;