import { UserUsecase } from '../usecase';
import { User } from '../../models/user';

export class UserUsecaseImpl implements UserUsecase {
    store: (user: User) => Promise<void>;
}
