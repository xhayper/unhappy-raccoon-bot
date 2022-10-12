import { Message, MessageEmbed, type ColorResolvable } from 'discord.js';
import { send } from '@sapphire/plugin-editable-commands';
import { RandomLoadingMessage } from './constants';

export type ImageData = {
	url: string;
	source: string;
	titleOverride?: string;
	colorOverride?: ColorResolvable;
};

export type MessageImageData = {
	title: string;
	color: ColorResolvable;
	images: ImageData[];
};

/**
 * Picks a random item from an array
 * @param array The array to pick a random item from
 * @example
 * const randomEntry = pickRandom([1, 2, 3, 4]) // 1
 */
export function pickRandom<T>(array: readonly T[]): T {
	const { length } = array;
	return array[Math.floor(Math.random() * length)];
}

/**
 * Sends a loading message to the current channel
 * @param message The message data for which to send the loading message
 */
export function sendLoadingMessage(message: Message): Promise<typeof message> {
	return send(message, { embeds: [new MessageEmbed().setDescription(pickRandom(RandomLoadingMessage)).setColor('#FF0000')] });
}

/**
 * Create a image response
 * @param message The message data for which to send the loading message
 * @param messageImageData The data to use for the image response
 */
export function sendImageResponse(message: Message, messageImageData: MessageImageData): Promise<typeof message> {
	const randomImage = pickRandom(messageImageData.images);

	const embed = new MessageEmbed()
		.setTitle(randomImage.titleOverride ?? messageImageData.title)
		.setColor(randomImage.colorOverride ?? messageImageData.color);

	if (randomImage.url) embed.setImage(randomImage.url);
	if (randomImage.source) embed.setDescription(`[Source](${randomImage.source})`);

	return send(message, {
		embeds: [embed]
	});
}
