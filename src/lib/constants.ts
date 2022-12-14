import { join } from 'node:path';

export const rootDir = join(__dirname, '..', '..');
export const srcDir = join(rootDir, 'src');

export const RandomLoadingMessage = ['Computing...', 'Thinking...', 'Cooking some food', 'Give me a moment', 'Loading...'];

export const CharacterName = ['Audhum', 'Ares', 'Caenis', 'Carlotta', 'Douglas', 'Kitana'] as const;
