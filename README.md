# Component Library

Standalone cross-platform UI primitives for Hubnet applications. The package includes a shared
icon catalogue backed by Phosphor on web and React Native, plus Lulafi colour tokens.

The public API is owned by this package. Applications do not import Phosphor directly, so the
underlying icon implementation can be changed without changing application imports.

## Install

Configure GitHub Packages for the `@hubnet-systems` scope, then install the package:

```sh
npm install @hubnet-systems/component-library
```

React applications must provide React 19. React Native applications must also provide React Native
and `react-native-svg`.

## Use

Import from the catalogue:

```tsx
import { Camera, MicrophoneOff, Person } from '@hubnet-systems/component-library/icons';

export function MeetingControls() {
  return (
    <>
      <Camera size={24} accessibilityLabel="Turn on camera" />
      <MicrophoneOff size={24} weight="fill" color="#ef4444" />
      <Person size={24} />
    </>
  );
}
```

Screens driven by icon-name configuration can use the typed compatibility component:

```tsx
import { Icon, type IconName } from '@hubnet-systems/component-library/icons';

const icon: IconName = 'search-outline';

export function SearchAction() {
  return <Icon name={icon} size={20} accessibilityLabel="Search" />;
}
```

For the smallest possible import surface, import one icon directly:

```tsx
import Person from '@hubnet-systems/component-library/icons/Person';
```

React Native bundlers select the native implementation through the package's `react-native` export
condition. Web bundlers receive the web implementation.

## Lulafi colours

The Lulafi scheme has matching light and dark semantic roles for web and React Native:

```ts
import { semanticColors, type ColorRoles } from '@hubnet-systems/component-library/themes/lulafi';

const colors: ColorRoles = semanticColors.light;
const buttonBackground = colors.surface.interactiveStrong;
const buttonText = colors.content.onInteractive;
```

Choose the `light` or `dark` scheme in the application. The package provides values and types; each
application owns its appearance setting and theme hook. Use `surface`, `content`, `stroke`, `status`,
`brand`, `chat`, `identity`, and `shadow` roles for UI. `palette` is for fixed brand artwork, while
`mediaChrome` is for controls over photos and video. `PARTICLE_COLORS` and `DOT_COLORS_LIST` support
the existing Lulafi splash artwork. Native build configuration can use the CommonJS export to read
the same screen backgrounds as the runtime theme.

## Icon contract

Every icon accepts the same library-owned props:

- `size?: number`
- `color?: string`
- `weight?: 'thin' | 'light' | 'regular' | 'bold' | 'fill' | 'duotone'`
- `mirrored?: boolean`
- `style?: unknown` (forwarded to the active platform renderer)
- `className?: string` (web integrations)
- `onClick?: () => void` (web integrations)
- `accessibilityLabel?: string`
- `testID?: string`

Prefer explicit semantic wrappers for new reusable controls. Use `Icon` when a screen selects an
icon by name at runtime. Both APIs expose library-owned names, keeping vendor naming and rendering
private to this package.

## Development

```sh
npm ci
npm test
npm run build
```

`npm run generate:icons` refreshes the web and native wrappers declared in
`scripts/icon-definitions.mjs`. Generated files are committed so every public icon also has a
tree-shakeable per-icon package entry.

`npm run build` emits independent web and native bundles, TypeScript declarations, and validates
the publishable package layout.

## Publishing

Pull requests run tests and package validation. A merge to `main` increments the patch version,
publishes to GitHub Packages, tags the release, and pushes the version commit. The repository needs
the same organization publishing secrets used by other Hubnet npm packages:

- `PUBLISHER_GITHUB_PERSONAL_ACCESS_TOKEN`
- `PUBLISH_GITHUB_PACKAGES_TOKEN`
