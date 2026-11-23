import { t as icon_base_default } from "./icon-base-DFWgYxEV.mjs";
import { Path } from "react-native-svg";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";

//#region node_modules/phosphor-react-native/lib/module/defs/Circle.js
var Circle_default = /* @__PURE__ */ new Map([
	["bold", /*#__PURE__*/ jsx(Fragment, { children: /*#__PURE__*/ jsx(Path, { d: "M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84 84.09 84.09 0 0 1-84 84" }) })],
	["duotone", ({ duotoneColor, duotoneOpacity }) => /*#__PURE__*/ jsxs(Fragment, { children: [/*#__PURE__*/ jsx(Path, {
		d: "M224 128a96 96 0 1 1-96-96 96 96 0 0 1 96 96",
		opacity: duotoneOpacity,
		fill: duotoneColor
	}), /*#__PURE__*/ jsx(Path, { d: "M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88 88.1 88.1 0 0 1-88 88" })] })],
	["fill", /*#__PURE__*/ jsx(Fragment, { children: /*#__PURE__*/ jsx(Path, { d: "M232 128A104 104 0 1 1 128 24a104.13 104.13 0 0 1 104 104" }) })],
	["light", /*#__PURE__*/ jsx(Fragment, { children: /*#__PURE__*/ jsx(Path, { d: "M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90 90.1 90.1 0 0 1-90 90" }) })],
	["regular", /*#__PURE__*/ jsx(Fragment, { children: /*#__PURE__*/ jsx(Path, { d: "M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88 88.1 88.1 0 0 1-88 88" }) })],
	["thin", /*#__PURE__*/ jsx(Fragment, { children: /*#__PURE__*/ jsx(Path, { d: "M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92 92.1 92.1 0 0 1-92 92" }) })]
]);

//#endregion
//#region node_modules/phosphor-react-native/lib/module/icons/Circle.js
const I = ({ ...props }) => /*#__PURE__*/ jsx(icon_base_default, {
	...props,
	weights: Circle_default,
	name: "circle"
});

//#endregion
export { I as t };