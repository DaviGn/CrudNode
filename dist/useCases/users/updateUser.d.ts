import UserDto from '../../dtos/userDto';
import User from '../../models/User';
export default class UpdateUserUseCase {
    private _repository;
    constructor();
    execute({ id, name, email, roleId, }: Omit<UserDto, 'password'>): Promise<User | null>;
}
//# sourceMappingURL=updateUser.d.ts.map