import { Positive } from '../models/positive';
import { User } from '../models/user';

export type PortfolioUsecase = {
    getPositiveForUser(user: User): Promise<Positive>;
};
