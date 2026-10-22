import { defineConfig, type UserConfig } from 'tsdown';

import { allIconNames } from './scripts/icon-definitions.mjs';

function iconEntries(platform: 'web' | 'native'): Record<string, string> {
  const suffix = platform === 'native' ? '.native' : '';

  return Object.fromEntries(
    allIconNames.map((iconName) => [`icons/${iconName}`, `src/icons/${iconName}${suffix}.tsx`]),
  );
}

const sharedConfig: UserConfig = {
  cjsDefault: false,
  clean: false,
  dts: false,
  fixedExtension: true,
  format: ['esm', 'cjs'],
  minify: false,
  sourcemap: false,
  target: 'es2020',
  treeshake: true,
};

export default defineConfig([
  {
    ...sharedConfig,
    entry: {
      'icons/index': 'src/icons/index.ts',
      'themes/lulafi': 'src/themes/lulafi.ts',
      ...iconEntries('web'),
    },
    deps: {
      neverBundle: ['react', 'react/jsx-runtime'],
      alwaysBundle: ['@phosphor-icons/react'],
      onlyBundle: ['@phosphor-icons/react'],
    },
    outDir: 'dist/web',
    platform: 'browser',
  },
  {
    ...sharedConfig,
    entry: {
      'icons/index': 'src/icons/index.native.ts',
      'themes/lulafi': 'src/themes/lulafi.ts',
      ...iconEntries('native'),
    },
    deps: {
      neverBundle: ['react', 'react/jsx-runtime', 'react-native', 'react-native-svg'],
      alwaysBundle: ['phosphor-react-native'],
      onlyBundle: ['phosphor-react-native'],
    },
    outDir: 'dist/native',
    platform: 'neutral',
  },
]);
