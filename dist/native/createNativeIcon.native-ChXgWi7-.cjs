let react_jsx_runtime = require("react/jsx-runtime");

//#region src/icons/internal/createNativeIcon.native.tsx
function createNativeIcon(VendorIcon, displayName) {
	const Icon = ({ accessibilityLabel, testID, ...props }) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(VendorIcon, {
		...props,
		...accessibilityLabel ? {
			accessible: true,
			accessibilityLabel,
			accessibilityRole: "image"
		} : {
			accessible: false,
			accessibilityElementsHidden: true,
			importantForAccessibility: "no-hide-descendants"
		},
		...testID ? { testID } : {}
	});
	Icon.displayName = displayName;
	return Icon;
}

//#endregion
Object.defineProperty(exports, "createNativeIcon", {
  enumerable: true,
  get: function () {
    return createNativeIcon;
  }
});