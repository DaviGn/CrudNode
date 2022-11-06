import UserDto from '../../dtos/userDto';
import User from '../../models/User';
export default class CreateUserUseCase {
    private _repository;
    constructor();
    execute({ name, email, password, roleId, }: Omit<UserDto, 'id'>): Promise<User | null>;
}
//# sourceMappingURL=createUser.d.ts.map