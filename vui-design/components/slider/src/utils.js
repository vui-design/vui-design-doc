import is from "vui-design/utils/is";
import clone from "vui-design/utils/clone";

export const getSliderSize = (container, vertical) => {
	if (!is.element(container)) {
		return;
	}

	return container[vertical ? "clientHeight" : "clientWidth"];
};

const getPrecision = value => {
	const decimal = String(value).split(".")[1];

	return decimal ? decimal.length : 0;
};

export const getValuePrecision = (min, max, step) => {
	const precisions = [min, max, step].map(getPrecision);

	return Math.max.apply(null, precisions);
};

export const getValueFromProps = (value, props) => {
	if (props.range) {
		if (is.array(value) && value.length === 2) {
			value = [
				Math.max(props.min, value[0]),
				Math.min(props.max, value[1])
			];
		}
		else {
			value = Array(...Array(2)).map(() => props.min);
		}
	}
	else {
		if (is.number(value)) {
			value = Math.max(props.min, value);
			value = Math.min(props.max, value);
		}
		else {
			value = props.min;
		}
	}

	return value;
};

export const getSteps = (min, max, step, showSteps, marks) => {
	const steps = Object.keys(marks).map(parseFloat);

	if (step && showSteps) {
		for (let i = min; i <= max; i += step) {
			if (steps.indexOf(i) === -1) {
				steps.push(i);
			}
		}
	}

	return steps.filter(step => step <= max && step >= min).sort((a, b) => a - b);
};

export const getMarks = (min, max, marks) => {
	const marksKeys = Object.keys(marks).map(parseFloat);

	return marksKeys.filter(marksKey => marksKey <= max && marksKey >= min).sort((a, b) => a - b).map(marksKey => {
		let attributes = {};

		if (is.json(marks[marksKey])) {
			attributes = clone(marks[marksKey]);
		}
		else {
			attributes.label = marks[marksKey];
		}

		return {
			value: marksKey,
			attributes
		};
	});
};

export default {
	getSliderSize,
	getValuePrecision,
	getValueFromProps,
	getSteps,
	getMarks
};










