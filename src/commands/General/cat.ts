import { Command, CommandOptions } from '@sapphire/framework';
import { send } from '@sapphire/plugin-editable-commands';
import { ApplyOptions } from '@sapphire/decorators';
import { Message, MessageEmbed } from 'discord.js';
import { request } from 'undici';

@ApplyOptions<CommandOptions>({
	description: 'Fetch a kitty image!',
	preconditions: ['ZuhOnly']
})
export class UserCommand extends Command {
	public async messageRun(message: Message) {
		const msg = await send(message, 'Looking for a kitty...');
		const res = (await (await request('https://api.thecatapi.com/v1/images/search?limit=1')).body.json())[0];

		if (!res) return msg.edit("Can't find a kitty...");

		return msg.edit({
			content: 'Found one!',
			embeds: [new MessageEmbed().setTitle('🐱 Meowww..').setURL(res.url).setImage(res.url).setColor('BLUE')]
		});
	}
}
