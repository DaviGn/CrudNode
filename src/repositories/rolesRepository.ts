import Role from '../models/Role';
import dataSource from '../db/context';

// Criando repositório customizado
const RolesRepository = dataSource.getRepository(Role).extend({});
export default RolesRepository;
