import { Response, Request } from "express";
import { avaliacaoRepository } from "../repositories/avaliacaoRepository";

export class AvaliacaoController {
  async create(req: Request, res: Response) {
    const { usuario_id, gerenciador_id, dados, tipo_relatorio } = req.body;

    if (!dados) {
      res.status(400).json({ message: 'informe os dados!' });
    }

    try {
      const newAvaliacao = await avaliacaoRepository.create({usuario_id, gerenciador_id, dados, tipo_relatorio});

      await avaliacaoRepository.save(newAvaliacao);

      return res.status(201).json(newAvaliacao);
    } catch (error) {
      return res.status(500).json({ message: 'Erro interno' });
    }
  }
}