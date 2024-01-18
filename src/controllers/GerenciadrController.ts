import {Response, Request } from "express";
import { gerenciadorRepository } from "../repositories/gerenciadorRepository";

export class GerenciadorController{
    async create(req: Request, res: Response) {
        const { nome, email, senha, tipo_gerenciador } = req.body;

        if (!nome) {
        res.status(400).json({ message: 'informe o tipo de usuário!' });
        }

        try {
            const newGerenciador = await gerenciadorRepository.create({nome, email, senha, tipo_gerenciador});

            await gerenciadorRepository.save(newGerenciador);

            return res.status(201).json(newGerenciador);
        } catch (error) {
          return res.status(500).json({ message: 'Erro interno'});
        }
      }
}