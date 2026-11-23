import { t as icon_base_default } from "./icon-base-DFWgYxEV.mjs";
import { t as createNativeIcon } from "./createNativeIcon.native-Ccswoz6b.mjs";
import { Path } from "react-native-svg";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";

//#region node_modules/phosphor-react-native/lib/module/defs/ArrowDown.js
var ArrowDown_default = /* @__PURE__ */ new Map([
	["bold", /*#__PURE__*/ jsx(Fragment, { children: /*#__PURE__*/ jsx(Path, { d: "m208.49 152.49-72 72a12 12 0 0 1-17 0l-72-72a12 12 0 0 1 17-17L116 187V40a12 12 0 0 1 24 0v147l51.51-51.52a12 12 0 0 1 17 17Z" }) })],
	["duotone", ({ duotoneColor, duotoneOpacity }) => /*#__PURE__*/ jsxs(Fragment, { children: [/*#__PURE__*/ jsx(Path, {
		d: "m200 144-72 72-72-72Z",
		opacity: duotoneOpacity,
		fill: duotoneColor
	}), /*#__PURE__*/ jsx(Path, { d: "M207.39 140.94A8 8 0 0 0 200 136h-64V40a8 8 0 0 0-16 0v96H56a8 8 0 0 0-5.66 13.66l72 72a8 8 0 0 0 11.32 0l72-72a8 8 0 0 0 1.73-8.72M128 204.69 75.31 152h105.38Z" })] })],
	["fill", /*#__PURE__*/ jsx(Fragment, { children: /*#__PURE__*/ jsx(Path, { d: "m205.66 149.66-72 72a8 8 0 0 1-11.32 0l-72-72A8 8 0 0 1 56 136h64V40a8 8 0 0 1 16 0v96h64a8 8 0 0 1 5.66 13.66" }) })],
	["light", /*#__PURE__*/ jsx(Fragment, { children: /*#__PURE__*/ jsx(Path, { d: "m204.24 148.24-72 72a6 6 0 0 1-8.48 0l-72-72a6 6 0 0 1 8.48-8.48L122 201.51V40a6 6 0 0 1 12 0v161.51l61.76-61.75a6 6 0 0 1 8.48 8.48" }) })],
	["regular", /*#__PURE__*/ jsx(Fragment, { children: /*#__PURE__*/ jsx(Path, { d: "m205.66 149.66-72 72a8 8 0 0 1-11.32 0l-72-72a8 8 0 0 1 11.32-11.32L120 196.69V40a8 8 0 0 1 16 0v156.69l58.34-58.35a8 8 0 0 1 11.32 11.32" }) })],
	["thin", /*#__PURE__*/ jsx(Fragment, { children: /*#__PURE__*/ jsx(Path, { d: "m202.83 146.83-72 72a4 4 0 0 1-5.66 0l-72-72a4 4 0 0 1 5.66-5.66L124 206.34V40a4 4 0 0 1 8 0v166.34l65.17-65.17a4 4 0 0 1 5.66 5.66" }) })]
]);

//#endregion
//#region node_modules/phosphor-react-native/lib/module/icons/ArrowDown.js
const I = ({ ...props }) => /*#__PURE__*/ jsx(icon_base_default, {
	...props,
	weights: ArrowDown_default,
	name: "arrow-down"
});

//#endregion
//#region src/icons/ArrowDown.native.tsx
var ArrowDown_native_default = createNativeIcon(I, "ArrowDown");

//#endregion
export { ArrowDown_native_default as t };