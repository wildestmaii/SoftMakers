import { Avaliacao } from "../entities/Avaliacao";
import { AppDataSource } from "../data-source";

export const avaliacaoRepository = AppDataSource.getRepository(Avaliacao);