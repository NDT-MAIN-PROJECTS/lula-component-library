import { access, readFile } from 'node:fs/promises';

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
];

const expectedFiles = [
  'dist/web/icons/index.mjs',
  'dist/web/icons/index.cjs',
  'dist/native/icons/index.mjs',
  'dist/native/icons/index.cjs',
  'dist/types/icons/index.d.ts',
  ...iconNames.flatMap((iconName) => [
    `dist/web/icons/${iconName}.mjs`,
    `dist/web/icons/${iconName}.cjs`,
    `dist/native/icons/${iconName}.mjs`,
    `dist/native/icons/${iconName}.cjs`,
    `dist/types/icons/${iconName}.d.ts`,
  ]),
];

await Promise.all(expectedFiles.map((filePath) => access(filePath)));

const nativePerson = await readFile('dist/native/icons/Person.mjs', 'utf8');
const webPerson = await readFile('dist/web/icons/Person.mjs', 'utf8');

if (nativePerson.includes('@phosphor-icons/react')) {
  throw new Error('The native build contains a web-only Phosphor import.');
}

if (webPerson.includes('phosphor-react-native')) {
  throw new Error('The web build contains a React Native Phosphor import.');
}

console.log(`Validated ${expectedFiles.length} package files.`);
