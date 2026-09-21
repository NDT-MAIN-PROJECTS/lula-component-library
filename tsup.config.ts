import { defineConfig, type Options } from 'tsup';

const iconNames = [
  'Camera',
  'CameraOff',
  'CaretDown',
  'Chat',
  'Close',
  'HandRaise',
  'HangUp',
  'Microphone',
  'MicrophoneOff',
  'Participants',
  'Person',
  'Reaction',
  'Record',
  'ScreenShare',
  'Share',
  'Stop',
] as const;

function iconEntries(platform: 'web' | 'native'): Record<string, string> {
  const suffix = platform === 'native' ? '.native' : '';

  return Object.fromEntries(
    iconNames.map((iconName) => [`icons/${iconName}`, `src/icons/${iconName}${suffix}.tsx`]),
  );
}

const sharedConfig: Options = {
  bundle: true,
  clean: false,
  dts: false,
  format: ['esm', 'cjs'],
  minify: false,
  outExtension({ format }) {
    return { js: format === 'esm' ? '.mjs' : '.cjs' };
  },
  sourcemap: false,
  splitting: false,
  target: 'es2020',
  treeshake: true,
};

export default defineConfig([
  {
    ...sharedConfig,
    entry: {
      'icons/index': 'src/icons/index.ts',
      ...iconEntries('web'),
    },
    external: ['react', 'react/jsx-runtime'],
    noExternal: ['@phosphor-icons/react'],
    outDir: 'dist/web',
    platform: 'browser',
  },
  {
    ...sharedConfig,
    entry: {
      'icons/index': 'src/icons/index.native.ts',
      ...iconEntries('native'),
    },
    external: ['react', 'react/jsx-runtime', 'react-native', 'react-native-svg'],
    noExternal: ['phosphor-react-native'],
    outDir: 'dist/native',
    platform: 'neutral',
  },
]);
