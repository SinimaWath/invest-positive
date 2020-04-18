import { UserId } from '../models/user';

export type TelegramRoute = string;

export type TelegramRequest<T> = {
    userId: UserId;
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
