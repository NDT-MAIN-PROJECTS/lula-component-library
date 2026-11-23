import React, { createContext, useContext } from "react";
import Svg, { G } from "react-native-svg";
import { jsx, jsxs } from "react/jsx-runtime";

//#region node_modules/phosphor-react-native/lib/module/lib/index.js
const IconContext = /*#__PURE__*/ createContext({
	color: "#000",
	size: 24,
	weight: "regular",
	mirrored: false,
	duotoneOpacity: .2
});

//#endregion
//#region node_modules/phosphor-react-native/lib/module/lib/icon-base.js
function IconBase({ weight, color, size, style, mirrored, duotoneColor, duotoneOpacity, title, titleId, name, weights, ...props }) {
	const { color: contextColor = "#000", size: contextSize = 24, weight: contextWeight = "regular", mirrored: contextMirrored = false, style: contextStyle, duotoneColor: contextDuotoneColor, duotoneOpacity: contextDuotoneOpacity = .2 } = useContext(IconContext);
	return /*#__PURE__*/ jsxs(Svg, {
		style: [
			contextStyle,
			style,
			{ ...(mirrored ?? contextMirrored) && { transform: [{ scaleX: -1 }] } }
		],
		className: `${name}-${weight}__svg-icon-phosphor`,
		testID: props.testID ?? `phosphor-react-native-${name}-${weight}`,
		fill: "currentColor",
		viewBox: "0 0 256 256",
		width: size ?? contextSize,
		height: size ?? contextSize,
		color: color ?? contextColor,
		"aria-labelledby": titleId,
		...props,
		children: [title ? /*#__PURE__*/ jsx("title", {
			id: titleId,
			children: title
		}) : null, (weight ?? contextWeight) === "duotone" ? weights.get(weight ?? contextWeight)({
			duotoneColor: duotoneColor ?? contextDuotoneColor ?? color,
			duotoneOpacity: duotoneOpacity ?? contextDuotoneOpacity
		}) : /*#__PURE__*/ jsx(G, {
			fill: color ?? contextColor,
			children: weights.get(weight ?? contextWeight)
		})]
	});
}
var icon_base_default = /*#__PURE__*/ React.memo(IconBase);

//#endregion
export { icon_base_default as t };