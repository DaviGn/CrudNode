import { Router } from 'express';
import GetRolesUseCase from '../useCases/roles/getRoles';

const authRoutes = Router();

authRoutes.get('/', async (request, response) => {
    const useCase = new GetRolesUseCase();
    const result = await useCase.execute();
    return response.send(result);
});

export default authRoutes;
