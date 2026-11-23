let react_jsx_runtime = require("react/jsx-runtime");

//#region src/icons/internal/createWebIcon.tsx
function createWebIcon(VendorIcon, displayName) {
	const Icon = ({ accessibilityLabel, testID, ...props }) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(VendorIcon, {
		...props,
		...accessibilityLabel ? {
			role: "img",
			"aria-label": accessibilityLabel
		} : { "aria-hidden": true },
		...testID ? { "data-testid": testID } : {}
	});
	Icon.displayName = displayName;
	return Icon;
}

//#endregion
Object.defineProperty(exports, "createWebIcon", {
  enumerable: true,
  get: function () {
    return createWebIcon;
  }
});