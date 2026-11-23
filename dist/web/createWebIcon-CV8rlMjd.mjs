import { jsx } from "react/jsx-runtime";

//#region src/icons/internal/createWebIcon.tsx
function createWebIcon(VendorIcon, displayName) {
	const Icon = ({ accessibilityLabel, testID, ...props }) => /* @__PURE__ */ jsx(VendorIcon, {
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
export { createWebIcon as t };