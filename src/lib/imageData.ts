import type { CharacterName } from './constants';
import type { MessageImageData } from './utils';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const data: {
	[key in typeof CharacterName[number]]: MessageImageData;
} = JSON.parse(readFileSync(join(__dirname, '../../imageData.json')).toString());

export const Audhum: MessageImageData = data.Audhum;
export const Ares: MessageImageData = data.Ares;
export const Caenis: MessageImageData = data.Caenis;
export const Carlotta: MessageImageData = data.Carlotta;
export const Douglas: MessageImageData = data.Douglas;
export const Kitana: MessageImageData = data.Kitana;
