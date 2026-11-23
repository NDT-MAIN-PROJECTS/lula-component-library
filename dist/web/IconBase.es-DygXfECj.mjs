import * as e from "react";
import { createContext } from "react";

//#region node_modules/@phosphor-icons/react/dist/lib/context.es.js
const o = createContext({
	color: "currentColor",
	size: "1em",
	weight: "regular",
	mirrored: !1
});

//#endregion
//#region node_modules/@phosphor-icons/react/dist/lib/IconBase.es.js
const p = e.forwardRef((s, a) => {
	const { alt: n, color: r, size: t, weight: o$1, mirrored: c, children: i, weights: m, ...x } = s, { color: d = "currentColor", size: l, weight: f = "regular", mirrored: g = !1, ...w } = e.useContext(o);
	return /* @__PURE__ */ e.createElement("svg", {
		ref: a,
		xmlns: "http://www.w3.org/2000/svg",
		width: t != null ? t : l,
		height: t != null ? t : l,
		fill: r != null ? r : d,
		viewBox: "0 0 256 256",
		transform: c || g ? "scale(-1, 1)" : void 0,
		...w,
		...x
	}, !!n && /* @__PURE__ */ e.createElement("title", null, n), i, m.get(o$1 != null ? o$1 : f));
});
p.displayName = "IconBase";

//#endregion
export { p as t };