import 'source-map-support/register';

// Unless explicitly defined, set NODE_ENV as development:
process.env.NODE_ENV ??= 'development';

import 'reflect-metadata';
import '@sapphire/plugin-api/register';
import '@sapphire/plugin-editable-commands/register';
import '@sapphire/plugin-logger/register';

import * as colorette from 'colorette';
import { srcDir } from './constants';
import { config } from 'dotenv-cra';
import { inspect } from 'node:util';
import { join } from 'node:path';

// Read env var
config({ path: join(srcDir, '../.env') });

// Set default inspection depth
inspect.defaultOptions.depth = 1;

// Enable colorette
colorette.createColors({ useColor: true });
