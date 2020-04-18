import './bootstrap';
import { startHandle } from './user/delivery/telegram/handler';
import { TelegramClientImpl } from './telegram/client';

const telegramClient = new TelegramClientImpl();

startHandle(telegramClient);
