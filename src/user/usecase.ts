import { User } from '../models/user';

export type UserUsecase = {
    store(user: User): Promise<void>;
};
