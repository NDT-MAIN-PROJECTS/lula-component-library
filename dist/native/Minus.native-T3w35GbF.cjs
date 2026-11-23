const require_icon_base = require("./icon-base-DgTAot9z.cjs");
const require_createNativeIcon_native = require("./createNativeIcon.native-ChXgWi7-.cjs");
let react_native_svg = require("react-native-svg");
let react_jsx_runtime = require("react/jsx-runtime");

//#region node_modules/phosphor-react-native/lib/module/defs/Minus.js
var Minus_default = /* @__PURE__ */ new Map([
	["bold", /*#__PURE__*/ (0, react_jsx_runtime.jsx)(react_jsx_runtime.Fragment, { children: /*#__PURE__*/ (0, react_jsx_runtime.jsx)(react_native_svg.Path, { d: "M228 128a12 12 0 0 1-12 12H40a12 12 0 0 1 0-24h176a12 12 0 0 1 12 12" }) })],
	["duotone", ({ duotoneColor, duotoneOpacity }) => /*#__PURE__*/ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/*#__PURE__*/ (0, react_jsx_runtime.jsx)(react_native_svg.Path, {
		d: "M216 56v144a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16",
		opacity: duotoneOpacity,
		fill: duotoneColor
	}), /*#__PURE__*/ (0, react_jsx_runtime.jsx)(react_native_svg.Path, { d: "M224 128a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8" })] })],
	["fill", /*#__PURE__*/ (0, react_jsx_runtime.jsx)(react_jsx_runtime.Fragment, { children: /*#__PURE__*/ (0, react_jsx_runtime.jsx)(react_native_svg.Path, { d: "M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-24 104H72a8 8 0 0 1 0-16h112a8 8 0 0 1 0 16" }) })],
	["light", /*#__PURE__*/ (0, react_jsx_runtime.jsx)(react_jsx_runtime.Fragment, { children: /*#__PURE__*/ (0, react_jsx_runtime.jsx)(react_native_svg.Path, { d: "M222 128a6 6 0 0 1-6 6H40a6 6 0 0 1 0-12h176a6 6 0 0 1 6 6" }) })],
	["regular", /*#__PURE__*/ (0, react_jsx_runtime.jsx)(react_jsx_runtime.Fragment, { children: /*#__PURE__*/ (0, react_jsx_runtime.jsx)(react_native_svg.Path, { d: "M224 128a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8" }) })],
	["thin", /*#__PURE__*/ (0, react_jsx_runtime.jsx)(react_jsx_runtime.Fragment, { children: /*#__PURE__*/ (0, react_jsx_runtime.jsx)(react_native_svg.Path, { d: "M220 128a4 4 0 0 1-4 4H40a4 4 0 0 1 0-8h176a4 4 0 0 1 4 4" }) })]
]);

//#endregion
//#region node_modules/phosphor-react-native/lib/module/icons/Minus.js
const I = ({ ...props }) => /*#__PURE__*/ (0, react_jsx_runtime.jsx)(require_icon_base.icon_base_default, {
	...props,
	weights: Minus_default,
	name: "minus"
});

//#endregion
//#region src/icons/Minus.native.tsx
var Minus_native_default = require_createNativeIcon_native.createNativeIcon(I, "Minus");

//#endregion
Object.defineProperty(exports, "Minus_native_default", {
  enumerable: true,
  get: function () {
    return Minus_native_default;
  }
});