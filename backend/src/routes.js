import { Router } from "express";

/**
 * Nessa pasta ficam todas as rotas para as funcionalidades do backend. Exemplo
 * POST /users (cria um usuário)
 * DELETE /users/${id} (deleta um usuário por id)
 * GET /users (busca todos os usuários) (pode ter filtros se mandar informações nas querys parameters)
 */

// Controllers
import materialController from "./app/controllers/MaterialController";

const routes = new Router();

// Authenticate
/**
 * Criar coisas POST
 * Deletar coisas DELETE
 * Buscar coisas no banco GET (consultas)
 * Alterar coisas que foram cadastradas anteriormente(pelo POST), usar PUT
 */
routes.post("/material", materialController.store);
routes.get("/material", materialController.find);
routes.put("/material/:id", materialController.update);
routes.delete("/material/:id", materialController.delete);

export default routes;
