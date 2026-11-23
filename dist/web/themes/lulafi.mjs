//#region src/themes/lulafi.ts
const screenSurface = {
	light: "#f1f5f9",
	dark: "#0b1220"
};
const lightAction = "#0b736a";
const lightActionTint = "#e7f8f8";
const lightRoles = {
	surface: {
		screen: screenSurface.light,
		elevated: "#ffffff",
		list: "#ffffff",
		muted: "#f8fafc",
		strong: "#f1f5f9",
		interactive: lightActionTint,
		interactiveStrong: lightAction,
		selected: lightActionTint,
		accent: lightAction,
		icon: lightActionTint,
		overlay: "rgba(15, 23, 42, 0.45)",
		scrim: "rgba(0, 0, 0, 0.6)"
	},
	content: {
		primary: "#0f172a",
		secondary: "#475569",
		muted: "#52627b",
		subtle: "#5f6f86",
		inverse: "#ffffff",
		interactive: lightAction,
		onInteractive: "#ffffff",
		selected: lightAction,
		accent: lightAction,
		link: lightAction
	},
	stroke: {
		default: "#dce5ef",
		subtle: "#e2e8f0",
		control: "#7b899d",
		selected: lightAction,
		accent: lightAction,
		focus: lightAction
	},
	status: {
		danger: {
			surface: "#fff1f2",
			content: "#be123c",
			stroke: "#fecdd3",
			solid: "#e11d48",
			onSolid: "#ffffff"
		},
		success: {
			surface: "#ecfdf5",
			content: "#047857",
			stroke: "#a7f3d0",
			solid: "#047857",
			onSolid: "#ffffff"
		},
		warning: {
			surface: "#fffbeb",
			content: "#b45309",
			stroke: "#fde68a",
			solid: "#b45309",
			onSolid: "#ffffff"
		},
		info: {
			surface: "#e8ecf7",
			content: "#1431a5",
			stroke: "#c5ceed",
			solid: "#1431a5",
			onSolid: "#ffffff"
		}
	},
	brand: {
		main: "#1431a5",
		pressed: "#0e2277"
	},
	chat: {
		sent: "#d4f1ec",
		received: "#ffffff",
		sentText: "#0f172a",
		receivedText: "#0f172a"
	},
	identity: [
		"#1431a5",
		"#18214f",
		"#047857",
		"#b45309",
		"#be123c"
	],
	shadow: "#0f172a"
};
const darkTeal = {
	interactive: "#4fe0ca",
	onInteractive: "#061b19"
};
const darkRoles = {
	surface: {
		screen: screenSurface.dark,
		elevated: "#151f30",
		list: screenSurface.dark,
		muted: "#111b2b",
		strong: "#1f2b3d",
		interactive: "#123b3a",
		interactiveStrong: darkTeal.interactive,
		selected: "#123b3a",
		accent: darkTeal.interactive,
		icon: "#143834",
		overlay: "rgba(0, 0, 0, 0.65)",
		scrim: "rgba(0, 0, 0, 0.72)"
	},
	content: {
		primary: "#f4f7fc",
		secondary: "#cbd5e1",
		muted: "#aab9cc",
		subtle: "#91a2b7",
		inverse: darkTeal.onInteractive,
		interactive: darkTeal.interactive,
		onInteractive: darkTeal.onInteractive,
		selected: darkTeal.interactive,
		accent: darkTeal.interactive,
		link: darkTeal.interactive
	},
	stroke: {
		default: "#314158",
		subtle: "#26364b",
		control: "#657991",
		selected: darkTeal.interactive,
		accent: darkTeal.interactive,
		focus: darkTeal.interactive
	},
	status: {
		danger: {
			surface: "#401f2b",
			content: "#ff9aab",
			stroke: "#8b4354",
			solid: "#ff7187",
			onSolid: "#2a0a12"
		},
		success: {
			surface: "#103b32",
			content: "#70e6b4",
			stroke: "#2e755d",
			solid: "#34d399",
			onSolid: "#052e22"
		},
		warning: {
			surface: "#3a2a0c",
			content: "#fcd34d",
			stroke: "#7a5a14",
			solid: "#fbbf24",
			onSolid: "#2a1a02"
		},
		info: {
			surface: "#17214a",
			content: "#a4b5ff",
			stroke: "#3a4a8a",
			solid: "#90a4ff",
			onSolid: "#0a1030"
		}
	},
	brand: {
		main: "#90a4ff",
		pressed: "#b8c5ff"
	},
	chat: {
		sent: lightAction,
		received: "#1f2b3d",
		sentText: "#ffffff",
		receivedText: "#f4f7fc"
	},
	identity: [
		"#4d64cb",
		"#4d5792",
		"#047857",
		"#b45309",
		"#e11d48"
	],
	shadow: "#000000"
};
/**
* Chrome drawn over photos, video and the camera (viewers, capture): black and
* white in both appearances, since the media sets the backdrop, not the theme.
*/
const mediaChrome = {
	background: "#000000",
	foreground: "#ffffff",
	/** Buttons and pills on the media. */
	control: "rgba(0, 0, 0, 0.25)",
	/** Bars and labels over the media. */
	scrim: "rgba(0, 0, 0, 0.55)",
	/** Status toasts that must read over any frame. */
	toast: "rgba(15, 23, 42, 0.9)",
	success: "#34d399"
};
const semanticColors = {
	light: lightRoles,
	dark: darkRoles
};
const palette = {
	primary: {
		50: "#e8ecf7",
		100: "#c5ceed",
		200: "#9daae2",
		300: "#7587d6",
		400: "#4d64cb",
		500: "#1431a5",
		600: "#112a8e",
		700: "#0e2277",
		800: "#0b1a60",
		900: "#071140"
	},
	accent: {
		50: "#e8eaf2",
		100: "#c5c9de",
		200: "#9da3c5",
		300: "#757dab",
		400: "#4d5792",
		500: "#18214f",
		600: "#141b43",
		700: "#101537",
		800: "#0c102b",
		900: "#080a1f"
	},
	teal: {
		50: "#e7f8f8",
		100: "#c3eeee",
		200: "#8fdddc",
		300: "#5bcccb",
		400: "#38c4c2",
		500: "#17bebb",
		600: "#13a09d",
		700: "#0f807e",
		800: "#0b605f",
		900: "#074040"
	},
	success: {
		50: "#ecfdf5",
		100: "#d1fae5",
		200: "#a7f3d0",
		300: "#6ee7b7",
		400: "#34d399",
		500: "#10b981",
		600: "#059669",
		700: "#047857",
		800: "#065f46",
		900: "#064e3b"
	},
	warning: {
		50: "#fffbeb",
		100: "#fef3c7",
		200: "#fde68a",
		300: "#fcd34d",
		400: "#fbbf24",
		500: "#f59e0b",
		600: "#d97706",
		700: "#b45309",
		800: "#92400e",
		900: "#78350f"
	},
	error: {
		50: "#fff1f2",
		100: "#ffe4e6",
		200: "#fecdd3",
		300: "#fda4af",
		400: "#fb7185",
		500: "#f43f5e",
		600: "#e11d48",
		700: "#be123c",
		800: "#9f1239",
		900: "#881337"
	},
	gray: {
		50: "#f8fafc",
		100: "#f1f5f9",
		200: "#e2e8f0",
		300: "#cbd5e1",
		400: "#94a3b8",
		500: "#64748b",
		600: "#475569",
		700: "#334155",
		800: "#1e293b",
		900: "#0f172a"
	}
};
const PARTICLE_COLORS = [
	palette.primary[400],
	palette.primary[500],
	palette.teal[500],
	palette.teal[300],
	palette.primary[300],
	palette.teal[200]
];
const DOT_COLORS_LIST = [
	palette.primary[400],
	palette.primary[500],
	palette.teal[500]
];

//#endregion
export { DOT_COLORS_LIST, PARTICLE_COLORS, mediaChrome, palette, semanticColors };