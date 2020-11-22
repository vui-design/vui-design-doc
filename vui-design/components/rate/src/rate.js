import VuiRateStar from "./rate-star";
import Emitter from "vui-design/mixins/emitter";
import PropTypes from "vui-design/utils/prop-types";
import is from "vui-design/utils/is";
import getClassNamePrefix from "vui-design/utils/getClassNamePrefix";

const VuiRate = {
	name: "vui-rate",
	provide() {
		return {
			vuiRate: this
		};
	},
	components: {
		VuiRateStar
	},
	mixins: [
		Emitter
	],
	model: {
		prop: "value",
		event: "input"
	},
	props: {
		classNamePrefix: PropTypes.string,
		value: PropTypes.number.def(0),
		count: PropTypes.number.def(5),
		character: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
		tooltips: PropTypes.array.def([]),
		allowHalf: PropTypes.bool.def(false),
		clearable: PropTypes.bool.def(true),
		disabled: PropTypes.bool.def(false)
	},
	data() {
		const { $props: props } = this;
		const state = {
			value: props.value,
			mouseenter: undefined
		};

		return {
			state
		};
	},
	watch: {
		value(value) {
			this.state.value = value;
		}
	},
	methods: {
		getStarValue(value, half) {
			const { $props: props } = this;

			if (props.allowHalf && half) {
				return value - 0.5;
			}

			return value;
		},
		handleMouseenter(e, value, half) {
			const newValue = this.getStarValue(value, half);

			this.state.mouseenter = newValue;
		},
		handleMouseleave() {
			this.state.mouseenter = undefined;
		},
		handleClick(e, value, half) {
			const { $props: props, state } = this;
			let newValue = this.getStarValue(value, half);
			let maybeClean = false;

			if (props.clearable) {
				maybeClean = newValue === state.value;
			}

			newValue = maybeClean ? 0 : newValue;

			this.state.value = newValue;
			this.$emit("input", newValue);
			this.$emit("change", newValue);
			this.dispatch("vui-form-item", "change", newValue);
			this.handleMouseleave();
		}
	},
	render() {
		const { $slots: slots, $props: props, state } = this;
		const { handleMouseleave } = this;

		// class
		const classNamePrefix = getClassNamePrefix(props.classNamePrefix, "rate");
		let classes = {};

		classes.el = {
			[`${classNamePrefix}`]: true,
			[`${classNamePrefix}-disabled`]: props.disabled
		};

		// render
		let stars = [];

		for (let index = 0; index < props.count; index++) {
			const mergedStarProps = {
				ref: "star" + index,
				key: index,
				props: {
					classNamePrefix: classNamePrefix,
					index: index,
					value: index + 1,
					character: props.character,
					tooltip: props.tooltips[index],
					disabled: props.disabled
				},
				on: {
					mouseenter: this.handleMouseenter,
					click: this.handleClick
				}
			};

			stars.push(
				<li>
					<VuiRateStar {...mergedStarProps}>
						{slots.character}
					</VuiRateStar>
				</li>
			);
		}

		return (
			<ul class={classes.el} onMouseleave={handleMouseleave}>{stars}</ul>
		);
	}
};

export default VuiRate;