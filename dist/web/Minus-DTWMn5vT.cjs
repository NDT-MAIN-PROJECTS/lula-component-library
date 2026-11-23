const require_IconBase_es = require("./IconBase.es-EE9FjXbZ.cjs");
const require_createWebIcon = require("./createWebIcon-Jl-B8wXV.cjs");
let react = require("react");
react = require_IconBase_es.__toESM(react, 1);

//#region node_modules/@phosphor-icons/react/dist/defs/Minus.es.js
const a = /* @__PURE__ */ new Map([
	["bold", /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("path", { d: "M228,128a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128Z" }))],
	["duotone", /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("path", {
		d: "M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",
		opacity: "0.2"
	}), /* @__PURE__ */ react.createElement("path", { d: "M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128Z" }))],
	["fill", /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("path", { d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM184,136H72a8,8,0,0,1,0-16H184a8,8,0,0,1,0,16Z" }))],
	["light", /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("path", { d: "M222,128a6,6,0,0,1-6,6H40a6,6,0,0,1,0-12H216A6,6,0,0,1,222,128Z" }))],
	["regular", /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("path", { d: "M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128Z" }))],
	["thin", /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("path", { d: "M220,128a4,4,0,0,1-4,4H40a4,4,0,0,1,0-8H216A4,4,0,0,1,220,128Z" }))]
]);

//#endregion
//#region node_modules/@phosphor-icons/react/dist/csr/Minus.es.js
const e = react.forwardRef((r, s) => /* @__PURE__ */ react.createElement(require_IconBase_es.p, {
	ref: s,
	...r,
	weights: a
}));
e.displayName = "MinusIcon";

//#endregion
//#region src/icons/Minus.tsx
var Minus_default = require_createWebIcon.createWebIcon(e, "Minus");

//#endregion
Object.defineProperty(exports, "Minus_default", {
  enumerable: true,
  get: function () {
    return Minus_default;
  }
});