import { Router } from "express";

/**
 * Nessa pasta ficam todas as rotas para as funcionalidades do backend. Exemplo
 * POST /users (cria um usuário)
 * DELETE /users/${id} (deleta um usuário por id)
 * GET /users (busca todos os usuários) (pode ter filtros se mandar informações nas querys parameters)
 */

// Controllers
import materialController from "./app/controllers/MaterialController";
import userController from "./app/controllers/UserController";

const routes = new Router();

// Authenticate
/**
 * Criar coisas POST
 * Deletar coisas DELETE
 * Buscar coisas no banco GET (consultas)
 * Alterar coisas que foram cadastradas anteriormente(pelo POST), usar PUT
 */
routes.post("/material", materialController.create);
routes.get("/material", materialController.find);
routes.put("/material/:id", materialController.update);
routes.delete("/material/:id", materialController.delete);

routes.post("/user", userController.create);
routes.get("/user", userController.find);
routes.put("/user/:id", userController.update);
routes.delete("/user/:id", userController.delete);

export default routes;