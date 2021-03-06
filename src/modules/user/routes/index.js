import { Router } from "express";

import AuthenticatedMiddleware from "../../../shared/middlewares/authenticateMiddleware";

class UserRoutes {
  static configure(userController) {
    const route = Router();

    route.post("/", userController.index);
    route.put("/", AuthenticatedMiddleware, userController.update);
    route.post("/sessions", userController.sessions);

    return route;
  }
}

export default UserRoutes;
