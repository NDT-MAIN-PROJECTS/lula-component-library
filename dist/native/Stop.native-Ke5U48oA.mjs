import { t as icon_base_default } from "./icon-base-DFWgYxEV.mjs";
import { t as createNativeIcon } from "./createNativeIcon.native-Ccswoz6b.mjs";
import { Path } from "react-native-svg";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";

//#region node_modules/phosphor-react-native/lib/module/defs/Stop.js
var Stop_default = /* @__PURE__ */ new Map([
	["bold", /*#__PURE__*/ jsx(Fragment, { children: /*#__PURE__*/ jsx(Path, { d: "M200 36H56a20 20 0 0 0-20 20v144a20 20 0 0 0 20 20h144a20 20 0 0 0 20-20V56a20 20 0 0 0-20-20m-4 160H60V60h136Z" }) })],
	["duotone", ({ duotoneColor, duotoneOpacity }) => /*#__PURE__*/ jsxs(Fragment, { children: [/*#__PURE__*/ jsx(Path, {
		d: "M208 56v144a8 8 0 0 1-8 8H56a8 8 0 0 1-8-8V56a8 8 0 0 1 8-8h144a8 8 0 0 1 8 8",
		opacity: duotoneOpacity,
		fill: duotoneColor
	}), /*#__PURE__*/ jsx(Path, { d: "M200 40H56a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m0 160H56V56h144z" })] })],
	["fill", /*#__PURE__*/ jsx(Fragment, { children: /*#__PURE__*/ jsx(Path, { d: "M216 56v144a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16" }) })],
	["light", /*#__PURE__*/ jsx(Fragment, { children: /*#__PURE__*/ jsx(Path, { d: "M200 42H56a14 14 0 0 0-14 14v144a14 14 0 0 0 14 14h144a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14m2 158a2 2 0 0 1-2 2H56a2 2 0 0 1-2-2V56a2 2 0 0 1 2-2h144a2 2 0 0 1 2 2Z" }) })],
	["regular", /*#__PURE__*/ jsx(Fragment, { children: /*#__PURE__*/ jsx(Path, { d: "M200 40H56a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m0 160H56V56h144z" }) })],
	["thin", /*#__PURE__*/ jsx(Fragment, { children: /*#__PURE__*/ jsx(Path, { d: "M200 44H56a12 12 0 0 0-12 12v144a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12m4 156a4 4 0 0 1-4 4H56a4 4 0 0 1-4-4V56a4 4 0 0 1 4-4h144a4 4 0 0 1 4 4Z" }) })]
]);

//#endregion
//#region node_modules/phosphor-react-native/lib/module/icons/Stop.js
const I = ({ ...props }) => /*#__PURE__*/ jsx(icon_base_default, {
	...props,
	weights: Stop_default,
	name: "stop"
});

//#endregion
//#region src/icons/Stop.native.tsx
var Stop_native_default = createNativeIcon(I, "Stop");

//#endregion
export { Stop_native_default as t };