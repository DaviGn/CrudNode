import { Repository } from 'typeorm';
import FieldError from '../dtos/fieldError';
import UserDto from '../dtos/userDto';
import User from '../models/User';
export declare function validateCreateUser(user: Omit<UserDto, 'id'>, usersRepository: Repository<User>): Promise<FieldError[]>;
export declare function validateUpdateUser(user: Omit<UserDto, 'password'>, usersRepository: Repository<User>): Promise<FieldError[]>;
//# sourceMappingURL=user.d.ts.map