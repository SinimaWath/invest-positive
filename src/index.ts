import './bootstrap';
/*import { startHandle } from './user/delivery/telegram/handler';
import { TelegramClientImpl } from './telegram/client';
import { UserUsecaseImpl } from './user/usecase/usecase';
*/
import {Telegraf} from 'telegraf';

//const telegramClient = new TelegramClientImpl();
//const userUsecase = new UserUsecaseImpl();

//startHandle(telegramClient, userUsecase);

const TELEGRAM_BOT_API_KEY = '1247273754:AAG_kYMP1MVTFMCm2sdCGHAAFJzyLqsoR_8';

const bot = new Telegraf(TELEGRAM_BOT_API_KEY);

bot.start((ctx) => ctx.reply('Welcome!'));
bot.help((ctx) => ctx.reply('Send me a sticker'));
bot.on('sticker', (ctx) => ctx.reply(''));
bot.hears('hi', (ctx) => ctx.reply('Hey there'));
bot.launch();