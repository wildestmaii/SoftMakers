import { Request, Response } from "express";
import { usuarioRepository } from "../repositories/usuarioRepository";


export class UsuarioController{
    async create(req: Request, res: Response) {
        const { nome, email, senha, tipo_usuario, habilidades, experiencia } = req.body;

        if (!nome) {
        res.status(400).json({ message: 'informe o nome!' });
        }

        try {
            const newUsuario = await usuarioRepository.create({nome, email, senha, tipo_usuario, habilidades, experiencia});

            await usuarioRepository.save(newUsuario);

            return res.status(201).json(newUsuario);
        } catch (error) {
          return res.status(500).json({ message: 'Erro interno'});
        }
      }
}





