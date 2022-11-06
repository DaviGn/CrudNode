import AuthDto from '../../dtos/authDto';
import User from '../../models/User';
interface AuthResponse {
    user: User;
    jwt: string;
}
export default class AuthUserUseCase {
    private _repository;
    constructor();
    execute({ email, password }: AuthDto): Promise<AuthResponse>;
}
export {};
//# sourceMappingURL=authUserUseCase.d.ts.map