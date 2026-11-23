const require_icon_base = require("./icon-base-DgTAot9z.cjs");
const require_createNativeIcon_native = require("./createNativeIcon.native-ChXgWi7-.cjs");
let react_native_svg = require("react-native-svg");
let react_jsx_runtime = require("react/jsx-runtime");

//#region node_modules/phosphor-react-native/lib/module/defs/AppWindow.js
var AppWindow_default = /* @__PURE__ */ new Map([
	["bold", /*#__PURE__*/ (0, react_jsx_runtime.jsx)(react_jsx_runtime.Fragment, { children: /*#__PURE__*/ (0, react_jsx_runtime.jsx)(react_native_svg.Path, { d: "M216 36H40a20 20 0 0 0-20 20v144a20 20 0 0 0 20 20h176a20 20 0 0 0 20-20V56a20 20 0 0 0-20-20m-4 160H44V60h168ZM60 92a16 16 0 1 1 16 16 16 16 0 0 1-16-16m48 0a16 16 0 1 1 16 16 16 16 0 0 1-16-16" }) })],
	["duotone", ({ duotoneColor, duotoneOpacity }) => /*#__PURE__*/ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/*#__PURE__*/ (0, react_jsx_runtime.jsx)(react_native_svg.Path, {
		d: "M224 56v144a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8V56a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8",
		opacity: duotoneOpacity,
		fill: duotoneColor
	}), /*#__PURE__*/ (0, react_jsx_runtime.jsx)(react_native_svg.Path, { d: "M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m0 160H40V56h176zM80 84a12 12 0 1 1-12-12 12 12 0 0 1 12 12m40 0a12 12 0 1 1-12-12 12 12 0 0 1 12 12" })] })],
	["fill", /*#__PURE__*/ (0, react_jsx_runtime.jsx)(react_jsx_runtime.Fragment, { children: /*#__PURE__*/ (0, react_jsx_runtime.jsx)(react_native_svg.Path, { d: "M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M68 96a12 12 0 1 1 12-12 12 12 0 0 1-12 12m40 0a12 12 0 1 1 12-12 12 12 0 0 1-12 12" }) })],
	["light", /*#__PURE__*/ (0, react_jsx_runtime.jsx)(react_jsx_runtime.Fragment, { children: /*#__PURE__*/ (0, react_jsx_runtime.jsx)(react_native_svg.Path, { d: "M216 42H40a14 14 0 0 0-14 14v144a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14m2 158a2 2 0 0 1-2 2H40a2 2 0 0 1-2-2V56a2 2 0 0 1 2-2h176a2 2 0 0 1 2 2ZM78 84a10 10 0 1 1-10-10 10 10 0 0 1 10 10m40 0a10 10 0 1 1-10-10 10 10 0 0 1 10 10" }) })],
	["regular", /*#__PURE__*/ (0, react_jsx_runtime.jsx)(react_jsx_runtime.Fragment, { children: /*#__PURE__*/ (0, react_jsx_runtime.jsx)(react_native_svg.Path, { d: "M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m0 160H40V56h176zM80 84a12 12 0 1 1-12-12 12 12 0 0 1 12 12m40 0a12 12 0 1 1-12-12 12 12 0 0 1 12 12" }) })],
	["thin", /*#__PURE__*/ (0, react_jsx_runtime.jsx)(react_jsx_runtime.Fragment, { children: /*#__PURE__*/ (0, react_jsx_runtime.jsx)(react_native_svg.Path, { d: "M216 44H40a12 12 0 0 0-12 12v144a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12m4 156a4 4 0 0 1-4 4H40a4 4 0 0 1-4-4V56a4 4 0 0 1 4-4h176a4 4 0 0 1 4 4ZM76 84a8 8 0 1 1-8-8 8 8 0 0 1 8 8m40 0a8 8 0 1 1-8-8 8 8 0 0 1 8 8" }) })]
]);

//#endregion
//#region node_modules/phosphor-react-native/lib/module/icons/AppWindow.js
const I = ({ ...props }) => /*#__PURE__*/ (0, react_jsx_runtime.jsx)(require_icon_base.icon_base_default, {
	...props,
	weights: AppWindow_default,
	name: "app-window"
});

//#endregion
//#region src/icons/AppWindow.native.tsx
var AppWindow_native_default = require_createNativeIcon_native.createNativeIcon(I, "AppWindow");

//#endregion
Object.defineProperty(exports, "AppWindow_native_default", {
  enumerable: true,
  get: function () {
    return AppWindow_native_default;
  }
});