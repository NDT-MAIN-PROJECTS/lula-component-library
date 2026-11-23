import { jsx } from "react/jsx-runtime";

//#region src/icons/internal/createNativeIcon.native.tsx
function createNativeIcon(VendorIcon, displayName) {
	const Icon = ({ accessibilityLabel, testID, ...props }) => /* @__PURE__ */ jsx(VendorIcon, {
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
export { createNativeIcon as t };