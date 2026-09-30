/** Lulafi's cross-platform semantic color tokens. */
export const brandColors = {
  action: '#0b736a',
  actionTint: '#e7f8f8',
  brandBlue: '#1431a5',
  teal: '#17bebb',
  navy: '#18214f',
} as const;

export type ColorMode = 'light' | 'dark';

export interface StatusRole {
  /** Tinted background for banners, pills, and icon circles. */
  surface: string;
  /** Text and icons on `surface` or the screen background. */
  content: string;
  stroke: string;
  /** Filled background for badges and destructive buttons. */
  solid: string;
  /** Text and icons on `solid`. */
  onSolid: string;
}

export interface ColorRoles {
  surface: {
    screen: string;
    elevated: string;
    list: string;
    muted: string;
    strong: string;
    interactive: string;
    interactiveStrong: string;
    selected: string;
    accent: string;
    icon: string;
    overlay: string;
    scrim: string;
  };
  content: {
    primary: string;
    secondary: string;
    muted: string;
    subtle: string;
    inverse: string;
    interactive: string;
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
  identity: readonly string[];
  shadow: string;
}

const lightRoles: ColorRoles = {
  surface: {
    screen: '#f1f5f9',
    elevated: '#ffffff',
    list: '#ffffff',
    muted: '#f8fafc',
    strong: '#f1f5f9',
    interactive: brandColors.actionTint,
    interactiveStrong: brandColors.action,
    selected: brandColors.actionTint,
    accent: brandColors.action,
    icon: brandColors.actionTint,
    overlay: 'rgba(15, 23, 42, 0.45)',
    scrim: 'rgba(0, 0, 0, 0.6)',
  },
  content: {
    primary: '#0f172a',
    secondary: '#475569',
    muted: '#64748b',
    subtle: '#94a3b8',
    inverse: '#ffffff',
    interactive: brandColors.action,
    onInteractive: '#ffffff',
    selected: brandColors.action,
    accent: brandColors.action,
    link: brandColors.action,
  },
  stroke: {
    default: '#dce5ef',
    subtle: '#e2e8f0',
    control: '#cbd5e1',
    selected: brandColors.action,
    accent: brandColors.action,
    focus: brandColors.action,
  },
  status: {
    danger: {
      surface: '#fff1f2',
      content: '#e11d48',
      stroke: '#fecdd3',
      solid: '#e11d48',
      onSolid: '#ffffff',
    },
    success: {
      surface: '#ecfdf5',
      content: '#047857',
      stroke: '#a7f3d0',
      solid: '#059669',
      onSolid: '#ffffff',
    },
    warning: {
      surface: '#fffbeb',
      content: '#b45309',
      stroke: '#fde68a',
      solid: '#d97706',
      onSolid: '#ffffff',
    },
    info: {
      surface: '#e8ecf7',
      content: brandColors.brandBlue,
      stroke: '#c5ceed',
      solid: brandColors.brandBlue,
      onSolid: '#ffffff',
    },
  },
  brand: {
    main: brandColors.brandBlue,
    pressed: '#0e2277',
  },
  chat: {
    sent: '#d4f1ec',
    received: '#ffffff',
    sentText: '#0f172a',
    receivedText: '#0f172a',
  },
  identity: ['#1431a5', '#18214f', '#10b981', '#f59e0b', '#f43f5e'],
  shadow: '#0f172a',
};

const darkRoles: ColorRoles = {
  surface: {
    screen: '#0b1220',
    elevated: '#151f30',
    list: '#0b1220',
    muted: '#111b2b',
    strong: '#1f2b3d',
    interactive: '#123b3a',
    interactiveStrong: '#4fe0ca',
    selected: '#123b3a',
    accent: '#4fe0ca',
    icon: '#143834',
    overlay: 'rgba(0, 0, 0, 0.65)',
    scrim: 'rgba(0, 0, 0, 0.72)',
  },
  content: {
    primary: '#f4f7fc',
    secondary: '#cbd5e1',
    muted: '#aab9cc',
    subtle: '#91a2b7',
    inverse: '#061b19',
    interactive: '#4fe0ca',
    onInteractive: '#061b19',
    selected: '#4fe0ca',
    accent: '#4fe0ca',
    link: '#4fe0ca',
  },
  stroke: {
    default: '#314158',
    subtle: '#26364b',
    control: '#42536b',
    selected: '#4fe0ca',
    accent: '#4fe0ca',
    focus: '#4fe0ca',
  },
  status: {
    danger: {
      surface: '#401f2b',
      content: '#ff9aab',
      stroke: '#8b4354',
      solid: '#ff7187',
      onSolid: '#2a0a12',
    },
    success: {
      surface: '#103b32',
      content: '#70e6b4',
      stroke: '#2e755d',
      solid: '#34d399',
      onSolid: '#052e22',
    },
    warning: {
      surface: '#3a2a0c',
      content: '#fcd34d',
      stroke: '#7a5a14',
      solid: '#fbbf24',
      onSolid: '#2a1a02',
    },
    info: {
      surface: '#17214a',
      content: '#a4b5ff',
      stroke: '#3a4a8a',
      solid: '#90a4ff',
      onSolid: '#0a1030',
    },
  },
  brand: {
    main: '#90a4ff',
    pressed: '#b8c5ff',
  },
  chat: {
    sent: brandColors.action,
    received: '#1f2b3d',
    sentText: '#ffffff',
    receivedText: '#f4f7fc',
  },
  identity: ['#4d64cb', '#4d5792', '#059669', '#d97706', '#e11d48'],
  shadow: '#000000',
};

export const semanticColors: Record<ColorMode, ColorRoles> = {
  light: lightRoles,
  dark: darkRoles,
};
