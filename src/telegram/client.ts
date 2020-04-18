import { ChatID } from '../models/user';

import {Telegraf} from 'telegraf';

const TELEGRAM_BOT_API_KEY = '1247273754:AAG_kYMP1MVTFMCm2sdCGHAAFJzyLqsoR_8';

const bot = new Telegraf(TELEGRAM_BOT_API_KEY)


bot.start((ctx) => ctx.reply('Welcome!'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply(''))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()

export type TelegramRoute = string;

export type TelegramRequest<T> = {
    userId: ChatID;
    data: T;
};

export type TelegramResponse = {};

export type TelegramHandler<T = {}> = {
    handle: (request: TelegramRequest<T>) => Promise<TelegramResponse>;
};

export type TelegramClient = {
    handle: (route: TelegramRoute, handler: TelegramHandler) => void;
};

export class TelegramClientImpl implements TelegramClient {
    handle: (route: TelegramRoute, handler: TelegramHandler) => void;
}
