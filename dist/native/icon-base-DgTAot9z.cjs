//#region \0rolldown/runtime.js
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") {
		for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
			key = keys[i];
			if (!__hasOwnProp.call(to, key) && key !== except) {
				__defProp(to, key, {
					get: ((k) => from[k]).bind(null, key),
					enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
				});
			}
		}
	}
	return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule || !__hasOwnProp.call(mod, "default") ? __defProp(target, "default", {
	value: mod,
	enumerable: true
}) : target, mod));

//#endregion
let react = require("react");
react = __toESM(react);
let react_native_svg = require("react-native-svg");
react_native_svg = __toESM(react_native_svg);
let react_jsx_runtime = require("react/jsx-runtime");

//#region node_modules/phosphor-react-native/lib/module/lib/index.js
const IconContext = /*#__PURE__*/ (0, react.createContext)({
	color: "#000",
	size: 24,
	weight: "regular",
	mirrored: false,
	duotoneOpacity: .2
});

//#endregion
//#region node_modules/phosphor-react-native/lib/module/lib/icon-base.js
function IconBase({ weight, color, size, style, mirrored, duotoneColor, duotoneOpacity, title, titleId, name, weights, ...props }) {
	const { color: contextColor = "#000", size: contextSize = 24, weight: contextWeight = "regular", mirrored: contextMirrored = false, style: contextStyle, duotoneColor: contextDuotoneColor, duotoneOpacity: contextDuotoneOpacity = .2 } = (0, react.useContext)(IconContext);
	return /*#__PURE__*/ (0, react_jsx_runtime.jsxs)(react_native_svg.default, {
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
		children: [title ? /*#__PURE__*/ (0, react_jsx_runtime.jsx)("title", {
			id: titleId,
			children: title
		}) : null, (weight ?? contextWeight) === "duotone" ? weights.get(weight ?? contextWeight)({
			duotoneColor: duotoneColor ?? contextDuotoneColor ?? color,
			duotoneOpacity: duotoneOpacity ?? contextDuotoneOpacity
		}) : /*#__PURE__*/ (0, react_jsx_runtime.jsx)(react_native_svg.G, {
			fill: color ?? contextColor,
			children: weights.get(weight ?? contextWeight)
		})]
	});
}
var icon_base_default = /*#__PURE__*/ react.default.memo(IconBase);

//#endregion
Object.defineProperty(exports, "icon_base_default", {
  enumerable: true,
  get: function () {
    return icon_base_default;
  }
});