const require_icon_base = require("./icon-base-DgTAot9z.cjs");
const require_createNativeIcon_native = require("./createNativeIcon.native-ChXgWi7-.cjs");
let react_native_svg = require("react-native-svg");
let react_jsx_runtime = require("react/jsx-runtime");

//#region node_modules/phosphor-react-native/lib/module/defs/Stop.js
var Stop_default = /* @__PURE__ */ new Map([
	["bold", /*#__PURE__*/ (0, react_jsx_runtime.jsx)(react_jsx_runtime.Fragment, { children: /*#__PURE__*/ (0, react_jsx_runtime.jsx)(react_native_svg.Path, { d: "M200 36H56a20 20 0 0 0-20 20v144a20 20 0 0 0 20 20h144a20 20 0 0 0 20-20V56a20 20 0 0 0-20-20m-4 160H60V60h136Z" }) })],
	["duotone", ({ duotoneColor, duotoneOpacity }) => /*#__PURE__*/ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/*#__PURE__*/ (0, react_jsx_runtime.jsx)(react_native_svg.Path, {
		d: "M208 56v144a8 8 0 0 1-8 8H56a8 8 0 0 1-8-8V56a8 8 0 0 1 8-8h144a8 8 0 0 1 8 8",
		opacity: duotoneOpacity,
		fill: duotoneColor
	}), /*#__PURE__*/ (0, react_jsx_runtime.jsx)(react_native_svg.Path, { d: "M200 40H56a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m0 160H56V56h144z" })] })],
	["fill", /*#__PURE__*/ (0, react_jsx_runtime.jsx)(react_jsx_runtime.Fragment, { children: /*#__PURE__*/ (0, react_jsx_runtime.jsx)(react_native_svg.Path, { d: "M216 56v144a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16" }) })],
	["light", /*#__PURE__*/ (0, react_jsx_runtime.jsx)(react_jsx_runtime.Fragment, { children: /*#__PURE__*/ (0, react_jsx_runtime.jsx)(react_native_svg.Path, { d: "M200 42H56a14 14 0 0 0-14 14v144a14 14 0 0 0 14 14h144a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14m2 158a2 2 0 0 1-2 2H56a2 2 0 0 1-2-2V56a2 2 0 0 1 2-2h144a2 2 0 0 1 2 2Z" }) })],
	["regular", /*#__PURE__*/ (0, react_jsx_runtime.jsx)(react_jsx_runtime.Fragment, { children: /*#__PURE__*/ (0, react_jsx_runtime.jsx)(react_native_svg.Path, { d: "M200 40H56a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m0 160H56V56h144z" }) })],
	["thin", /*#__PURE__*/ (0, react_jsx_runtime.jsx)(react_jsx_runtime.Fragment, { children: /*#__PURE__*/ (0, react_jsx_runtime.jsx)(react_native_svg.Path, { d: "M200 44H56a12 12 0 0 0-12 12v144a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12m4 156a4 4 0 0 1-4 4H56a4 4 0 0 1-4-4V56a4 4 0 0 1 4-4h144a4 4 0 0 1 4 4Z" }) })]
]);

//#endregion
//#region node_modules/phosphor-react-native/lib/module/icons/Stop.js
const I = ({ ...props }) => /*#__PURE__*/ (0, react_jsx_runtime.jsx)(require_icon_base.icon_base_default, {
	...props,
	weights: Stop_default,
	name: "stop"
});

//#endregion
//#region src/icons/Stop.native.tsx
var Stop_native_default = require_createNativeIcon_native.createNativeIcon(I, "Stop");

//#endregion
Object.defineProperty(exports, "Stop_native_default", {
  enumerable: true,
  get: function () {
    return Stop_native_default;
  }
});