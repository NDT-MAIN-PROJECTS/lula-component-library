import { t as icon_base_default } from "./icon-base-DFWgYxEV.mjs";
import { t as createNativeIcon } from "./createNativeIcon.native-Ccswoz6b.mjs";
import { Path } from "react-native-svg";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";

//#region node_modules/phosphor-react-native/lib/module/defs/SidebarSimple.js
var SidebarSimple_default = /* @__PURE__ */ new Map([
	["bold", /*#__PURE__*/ jsx(Fragment, { children: /*#__PURE__*/ jsx(Path, { d: "M216 36H40a20 20 0 0 0-20 20v144a20 20 0 0 0 20 20h176a20 20 0 0 0 20-20V56a20 20 0 0 0-20-20M44 60h32v136H44Zm168 136H100V60h112Z" }) })],
	["duotone", ({ duotoneColor, duotoneOpacity }) => /*#__PURE__*/ jsxs(Fragment, { children: [/*#__PURE__*/ jsx(Path, {
		d: "M88 48v160H40a8 8 0 0 1-8-8V56a8 8 0 0 1 8-8Z",
		opacity: duotoneOpacity,
		fill: duotoneColor
	}), /*#__PURE__*/ jsx(Path, { d: "M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M40 56h40v144H40Zm176 144H96V56h120z" })] })],
	["fill", /*#__PURE__*/ jsx(Fragment, { children: /*#__PURE__*/ jsx(Path, { d: "M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m0 160H88V56h128z" }) })],
	["light", /*#__PURE__*/ jsx(Fragment, { children: /*#__PURE__*/ jsx(Path, { d: "M216 42H40a14 14 0 0 0-14 14v144a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14M38 200V56a2 2 0 0 1 2-2h42v148H40a2 2 0 0 1-2-2m180 0a2 2 0 0 1-2 2H94V54h122a2 2 0 0 1 2 2Z" }) })],
	["regular", /*#__PURE__*/ jsx(Fragment, { children: /*#__PURE__*/ jsx(Path, { d: "M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M40 56h40v144H40Zm176 144H96V56h120z" }) })],
	["thin", /*#__PURE__*/ jsx(Fragment, { children: /*#__PURE__*/ jsx(Path, { d: "M216 44H40a12 12 0 0 0-12 12v144a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12M36 200V56a4 4 0 0 1 4-4h44v152H40a4 4 0 0 1-4-4m184 0a4 4 0 0 1-4 4H92V52h124a4 4 0 0 1 4 4Z" }) })]
]);

//#endregion
//#region node_modules/phosphor-react-native/lib/module/icons/SidebarSimple.js
const I = ({ ...props }) => /*#__PURE__*/ jsx(icon_base_default, {
	...props,
	weights: SidebarSimple_default,
	name: "sidebar-simple"
});

//#endregion
//#region src/icons/Sidebar.native.tsx
var Sidebar_native_default = createNativeIcon(I, "Sidebar");

//#endregion
export { Sidebar_native_default as t };