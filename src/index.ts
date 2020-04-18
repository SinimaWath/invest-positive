import './bootstrap';
import { startHandle } from './user/delivery/telegram/handler';
import { TelegramClientImpl } from './telegram/client';
import { UserUsecaseImpl } from './user/usecase/usecase';

const telegramClient = new TelegramClientImpl();
const userUsecase = new UserUsecaseImpl();

startHandle(telegramClient, userUsecase);
