const require_icon_base = require("./icon-base-DgTAot9z.cjs");
const require_createNativeIcon_native = require("./createNativeIcon.native-ChXgWi7-.cjs");
let react_native_svg = require("react-native-svg");
let react_jsx_runtime = require("react/jsx-runtime");

//#region node_modules/phosphor-react-native/lib/module/defs/Monitor.js
var Monitor_default = /* @__PURE__ */ new Map([
	["bold", /*#__PURE__*/ (0, react_jsx_runtime.jsx)(react_jsx_runtime.Fragment, { children: /*#__PURE__*/ (0, react_jsx_runtime.jsx)(react_native_svg.Path, { d: "M208 36H48a28 28 0 0 0-28 28v112a28 28 0 0 0 28 28h160a28 28 0 0 0 28-28V64a28 28 0 0 0-28-28m4 140a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V64a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4Zm-40 52a12 12 0 0 1-12 12H96a12 12 0 0 1 0-24h64a12 12 0 0 1 12 12" }) })],
	["duotone", ({ duotoneColor, duotoneOpacity }) => /*#__PURE__*/ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/*#__PURE__*/ (0, react_jsx_runtime.jsx)(react_native_svg.Path, {
		d: "M224 64v112a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V64a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16",
		opacity: duotoneOpacity,
		fill: duotoneColor
	}), /*#__PURE__*/ (0, react_jsx_runtime.jsx)(react_native_svg.Path, { d: "M208 40H48a24 24 0 0 0-24 24v112a24 24 0 0 0 24 24h160a24 24 0 0 0 24-24V64a24 24 0 0 0-24-24m8 136a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V64a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8Zm-48 48a8 8 0 0 1-8 8H96a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8" })] })],
	["fill", /*#__PURE__*/ (0, react_jsx_runtime.jsx)(react_jsx_runtime.Fragment, { children: /*#__PURE__*/ (0, react_jsx_runtime.jsx)(react_native_svg.Path, { d: "M232 64v112a24 24 0 0 1-24 24H48a24 24 0 0 1-24-24V64a24 24 0 0 1 24-24h160a24 24 0 0 1 24 24m-72 152H96a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16" }) })],
	["light", /*#__PURE__*/ (0, react_jsx_runtime.jsx)(react_jsx_runtime.Fragment, { children: /*#__PURE__*/ (0, react_jsx_runtime.jsx)(react_native_svg.Path, { d: "M208 42H48a22 22 0 0 0-22 22v112a22 22 0 0 0 22 22h160a22 22 0 0 0 22-22V64a22 22 0 0 0-22-22m10 134a10 10 0 0 1-10 10H48a10 10 0 0 1-10-10V64a10 10 0 0 1 10-10h160a10 10 0 0 1 10 10Zm-52 48a6 6 0 0 1-6 6H96a6 6 0 0 1 0-12h64a6 6 0 0 1 6 6" }) })],
	["regular", /*#__PURE__*/ (0, react_jsx_runtime.jsx)(react_jsx_runtime.Fragment, { children: /*#__PURE__*/ (0, react_jsx_runtime.jsx)(react_native_svg.Path, { d: "M208 40H48a24 24 0 0 0-24 24v112a24 24 0 0 0 24 24h160a24 24 0 0 0 24-24V64a24 24 0 0 0-24-24m8 136a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V64a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8Zm-48 48a8 8 0 0 1-8 8H96a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8" }) })],
	["thin", /*#__PURE__*/ (0, react_jsx_runtime.jsx)(react_jsx_runtime.Fragment, { children: /*#__PURE__*/ (0, react_jsx_runtime.jsx)(react_native_svg.Path, { d: "M208 44H48a20 20 0 0 0-20 20v112a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V64a20 20 0 0 0-20-20m12 132a12 12 0 0 1-12 12H48a12 12 0 0 1-12-12V64a12 12 0 0 1 12-12h160a12 12 0 0 1 12 12Zm-56 48a4 4 0 0 1-4 4H96a4 4 0 0 1 0-8h64a4 4 0 0 1 4 4" }) })]
]);

//#endregion
//#region node_modules/phosphor-react-native/lib/module/icons/Monitor.js
const I = ({ ...props }) => /*#__PURE__*/ (0, react_jsx_runtime.jsx)(require_icon_base.icon_base_default, {
	...props,
	weights: Monitor_default,
	name: "monitor"
});

//#endregion
//#region src/icons/Monitor.native.tsx
var Monitor_native_default = require_createNativeIcon_native.createNativeIcon(I, "Monitor");

//#endregion
Object.defineProperty(exports, "Monitor_native_default", {
  enumerable: true,
  get: function () {
    return Monitor_native_default;
  }
});