import type { CommandInteraction, ContextMenuInteraction, Message, Snowflake } from 'discord.js';
import { AllFlowsPrecondition } from '@sapphire/framework';

export class UserPrecondition extends AllFlowsPrecondition {
	public override chatInputRun(interaction: CommandInteraction) {
		return this.doZuhCheck(interaction.user.id);
	}

	public override contextMenuRun(interaction: ContextMenuInteraction) {
		return this.doZuhCheck(interaction.user.id);
	}

	public override messageRun(message: Message) {
		return this.doZuhCheck(message.author.id);
	}

	private doZuhCheck(userId: Snowflake) {
		return userId === '312333089349042176' ? this.ok() : this.error();
	}
}

declare module '@sapphire/framework' {
	interface Preconditions {
		ZuhOnly: never;
	}
}
