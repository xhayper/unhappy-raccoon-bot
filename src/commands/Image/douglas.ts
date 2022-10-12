import { Command, CommandOptions } from '@sapphire/framework';
import { ApplyOptions } from '@sapphire/decorators';
import { sendImageResponse } from '../../lib/utils';
import { Douglas } from '../../lib/imageData';
import type { Message } from 'discord.js';

@ApplyOptions<CommandOptions>({
	description: '🐶'
})
export class UserCommand extends Command {
	public async messageRun(message: Message) {
		sendImageResponse(message, Douglas);
	}
}
