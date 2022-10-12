import './lib/setup';

import { LogLevel, SapphireClient } from '@sapphire/framework';

const client = new SapphireClient({
	defaultPrefix: 'ur?',
	caseInsensitiveCommands: true,
	logger: {
		level: LogLevel.Debug
	},
	intents: ['GUILDS', 'GUILD_MEMBERS', 'GUILD_EMOJIS_AND_STICKERS', 'GUILD_VOICE_STATES', 'GUILD_MESSAGES', 'GUILD_MESSAGE_REACTIONS'],
	partials: [],
	loadMessageCommandListeners: true
});

(async () => {
	try {
		await client.login();
	} catch (error) {
		client.logger.fatal(error);
		client.destroy();
		process.exit(1);
	}
})();
