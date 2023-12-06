export function getBorderWidth(elem: Element) {
	const computedStyleValues = getComputedStyle(elem);
	return {
		left: parseInt(computedStyleValues.borderLeftWidth),
		right: parseInt(computedStyleValues.borderRightWidth),
		top: parseInt(computedStyleValues.borderTopWidth),
		bottom: parseInt(computedStyleValues.borderBottomWidth),
	};
}
