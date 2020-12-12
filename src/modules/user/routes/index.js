import { Router } from "express";

class UserRoutes {
  static configure(userController) {
    const route = Router();

    route.post("/", userController.index);
    route.post("/sessions", userController.sessions);

    return route;
  }
}

export default UserRoutes;
