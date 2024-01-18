import { Router } from 'express';
import { UsuarioController } from './controllers/UsuarioController';
import { GerenciadorController } from './controllers/GerenciadrController';
import { AvaliacaoController } from './controllers/AvaliacaoController';
import { IndicacaoTrilha } from './entities/IndicacaoTrilha';


const routes = Router();

//POST
routes.post('/aula', new UsuarioController().create);

routes.post('/avaliacao', new AvaliacaoController().create);

routes.post('/gerenciador', new GerenciadorController().create);

routes.post('/indicacaoTrilha', new IndicacaoTrilhaController().create);

routes.post('/metaUsuario', new MetaUsuarioController().create);

routes.post('/modulo', new ModuloController().create);

routes.post('/progressoTrilha', new ProgressoTrilhaController().create);

routes.post('/trilha', new TrilhaController().create);

routes.post('/usuario', new UsuarioController().create);


//GET
routes.get('/users')

routes.get('/gerenciador')

routes.get('/aula')

routes.get('/aulas')

routes .get('/avaliacao')

routes.get('/indicacaoTrilha')

routes.get('/metaUsuario')

routes.get('/modulo')

routes.get('/modulos')

routes.get('/progressoTrilha')

routes.get('/trilha')



//PUT
routes.put('/usuarios/:id')




//DELETE
routes.delete('/users/:id')













export default routes;