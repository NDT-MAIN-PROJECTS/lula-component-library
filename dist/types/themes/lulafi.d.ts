export interface StatusRole {
    /** Tinted background for banners, pills and icon circles. */
    surface: string;
    /** Text and icons on `surface` or on the screen background. */
    content: string;
    stroke: string;
    /** Filled background (badges, destructive buttons). */
    solid: string;
    /** Text and icons on `solid`. */
    onSolid: string;
}
export interface ColorRoles {
    surface: {
        screen: string;
        elevated: string;
        /**
         * Full-width list sections (e.g. conversation rows): an elevated sheet in
         * light mode, continuous with the canvas and header in dark mode.
         */
        list: string;
        muted: string;
        strong: string;
        interactive: string;
        interactiveStrong: string;
        selected: string;
        accent: string;
        icon: string;
        /** Backdrop behind sheets and dialogs. */
        overlay: string;
        /** Heavier backdrop over media and camera content. */
        scrim: string;
    };
    content: {
        primary: string;
        secondary: string;
        muted: string;
        subtle: string;
        inverse: string;
        interactive: string;
        /** Text and icons on `surface.interactiveStrong`. */
        onInteractive: string;
        selected: string;
        accent: string;
        link: string;
    };
    stroke: {
        default: string;
        subtle: string;
        control: string;
        selected: string;
        accent: string;
        focus: string;
    };
    status: {
        danger: StatusRole;
        success: StatusRole;
        warning: StatusRole;
        info: StatusRole;
    };
    brand: {
        main: string;
        pressed: string;
    };
    chat: {
        sent: string;
        received: string;
        sentText: string;
        receivedText: string;
    };
    /**
     * Fills that tell people apart (avatars), always with white initials. Same
     * order in both modes so a person keeps their hue family.
     */
    identity: readonly string[];
    shadow: string;
}
/**
 * Chrome drawn over photos, video and the camera (viewers, capture): black and
 * white in both appearances, since the media sets the backdrop, not the theme.
 */
export declare const mediaChrome: {
    readonly background: "#000000";
    readonly foreground: "#ffffff";
    /** Buttons and pills on the media. */
    readonly control: "rgba(0, 0, 0, 0.25)";
    /** Bars and labels over the media. */
    readonly scrim: "rgba(0, 0, 0, 0.55)";
    /** Status toasts that must read over any frame. */
    readonly toast: "rgba(15, 23, 42, 0.9)";
    readonly success: "#34d399";
};
export type ColorMode = 'light' | 'dark';
export declare const semanticColors: Record<ColorMode, ColorRoles>;
export declare const palette: {
    primary: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
    };
    accent: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
    };
    teal: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
    };
    success: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
    };
    warning: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
    };
    error: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
    };
    gray: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
    };
};
export declare const PARTICLE_COLORS: readonly [string, string, string, string, string, string];
export declare const DOT_COLORS_LIST: string[];
