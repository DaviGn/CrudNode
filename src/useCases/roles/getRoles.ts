import { Repository } from 'typeorm';
import Role from '../../models/Role';
import RolesRepository from '../../repositories/rolesRepository';

export default class GerRolesUseCase {
    private _repository: Repository<Role>;

    constructor() {
        this._repository = RolesRepository;
    }

    public async execute(): Promise<Role[]> {
        const roles = await this._repository.find();
        return roles;
    }
}
