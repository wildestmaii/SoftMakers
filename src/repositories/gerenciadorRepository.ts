import { AppDataSource } from '../data-source';
import { Gerenciador } from '../entities/Gerenciador';

export const gerenciadorRepository = AppDataSource.getRepository(Gerenciador);