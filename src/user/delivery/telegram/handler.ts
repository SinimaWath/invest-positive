import { TelegramClient, TelegramHandler, TelegramRequest } from '../../../telegram/client';
import { UserUsecase } from '../../usecase';
import { Token } from '../../../models/user';

class Start implements TelegramHandler {
    private readonly userUsecase: UserUsecase;
    constructor(userUsecase: UserUsecase) {
        this.userUsecase = userUsecase;
    }

    async handle(request: TelegramRequest<Token>) {
        try {
            await this.userUsecase.store({
                id: request.userId,
                token: request.data,
            });

            return {};
        } catch (e) {
            return {};
        }
    }
}

export const startHandle = (client: TelegramClient) => {
    client.handle('/start', new Start({} as any));
};
