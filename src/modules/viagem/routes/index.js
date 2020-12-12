import { Router } from "express";

import AuthenticatedMiddleware from "../../../shared/middlewares/authenticateMiddleware";

class UserRoutes {
  static configure(viagemController) {
    const route = Router();

    route.post("/", AuthenticatedMiddleware, viagemController.create);

    return route;
  }
}

export default UserRoutes;
