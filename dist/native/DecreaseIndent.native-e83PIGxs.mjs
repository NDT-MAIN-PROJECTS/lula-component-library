import { t as icon_base_default } from "./icon-base-DFWgYxEV.mjs";
import { t as createNativeIcon } from "./createNativeIcon.native-Ccswoz6b.mjs";
import { Path } from "react-native-svg";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";

//#region node_modules/phosphor-react-native/lib/module/defs/TextOutdent.js
var TextOutdent_default = /* @__PURE__ */ new Map([
	["bold", /*#__PURE__*/ jsx(Fragment, { children: /*#__PURE__*/ jsx(Path, { d: "M228 128a12 12 0 0 1-12 12h-96a12 12 0 0 1 0-24h96a12 12 0 0 1 12 12M120 76h96a12 12 0 0 0 0-24h-96a12 12 0 0 0 0 24m96 104H40a12 12 0 0 0 0 24h176a12 12 0 0 0 0-24M72 148a12 12 0 0 0 8.49-20.49L49 96l31.49-31.52a12 12 0 0 0-17-17l-40 40a12 12 0 0 0 0 17l40 40A12 12 0 0 0 72 148" }) })],
	["duotone", ({ duotoneColor, duotoneOpacity }) => /*#__PURE__*/ jsxs(Fragment, { children: [/*#__PURE__*/ jsx(Path, {
		d: "M216 64v128H40V88l24-24Z",
		opacity: duotoneOpacity,
		fill: duotoneColor
	}), /*#__PURE__*/ jsx(Path, { d: "M224 128a8 8 0 0 1-8 8H112a8 8 0 0 1 0-16h104a8 8 0 0 1 8 8M112 72h104a8 8 0 0 0 0-16H112a8 8 0 0 0 0 16m104 112H40a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16M72 144a8 8 0 0 0 5.66-13.66L43.31 96l34.35-34.34a8 8 0 0 0-11.32-11.32l-40 40a8 8 0 0 0 0 11.32l40 40A8 8 0 0 0 72 144" })] })],
	["fill", /*#__PURE__*/ jsx(Fragment, { children: /*#__PURE__*/ jsx(Path, { d: "M224 128a8 8 0 0 1-8 8H112a8 8 0 0 1 0-16h104a8 8 0 0 1 8 8M112 72h104a8 8 0 0 0 0-16H112a8 8 0 0 0 0 16m104 112H40a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16M72 144a8 8 0 0 0 8-8V56a8 8 0 0 0-13.66-5.66l-40 40a8 8 0 0 0 0 11.32l40 40A8 8 0 0 0 72 144" }) })],
	["light", /*#__PURE__*/ jsx(Fragment, { children: /*#__PURE__*/ jsx(Path, { d: "M222 128a6 6 0 0 1-6 6H112a6 6 0 0 1 0-12h104a6 6 0 0 1 6 6M112 70h104a6 6 0 0 0 0-12H112a6 6 0 0 0 0 12m104 116H40a6 6 0 0 0 0 12h176a6 6 0 0 0 0-12M72 142a6 6 0 0 0 4.24-10.24L40.49 96l35.75-35.76a6 6 0 0 0-8.48-8.48l-40 40a6 6 0 0 0 0 8.48l40 40A6 6 0 0 0 72 142" }) })],
	["regular", /*#__PURE__*/ jsx(Fragment, { children: /*#__PURE__*/ jsx(Path, { d: "M224 128a8 8 0 0 1-8 8H112a8 8 0 0 1 0-16h104a8 8 0 0 1 8 8M112 72h104a8 8 0 0 0 0-16H112a8 8 0 0 0 0 16m104 112H40a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16M72 144a8 8 0 0 0 5.66-13.66L43.31 96l34.35-34.34a8 8 0 0 0-11.32-11.32l-40 40a8 8 0 0 0 0 11.32l40 40A8 8 0 0 0 72 144" }) })],
	["thin", /*#__PURE__*/ jsx(Fragment, { children: /*#__PURE__*/ jsx(Path, { d: "M220 128a4 4 0 0 1-4 4H112a4 4 0 0 1 0-8h104a4 4 0 0 1 4 4M112 68h104a4 4 0 0 0 0-8H112a4 4 0 0 0 0 8m104 120H40a4 4 0 0 0 0 8h176a4 4 0 0 0 0-8M72 140a4 4 0 0 0 2.83-6.83L37.66 96l37.17-37.17a4 4 0 0 0-5.66-5.66l-40 40a4 4 0 0 0 0 5.66l40 40A4 4 0 0 0 72 140" }) })]
]);

//#endregion
//#region node_modules/phosphor-react-native/lib/module/icons/TextOutdent.js
const I = ({ ...props }) => /*#__PURE__*/ jsx(icon_base_default, {
	...props,
	weights: TextOutdent_default,
	name: "text-outdent"
});

//#endregion
//#region src/icons/DecreaseIndent.native.tsx
var DecreaseIndent_native_default = createNativeIcon(I, "DecreaseIndent");

//#endregion
export { DecreaseIndent_native_default as t };