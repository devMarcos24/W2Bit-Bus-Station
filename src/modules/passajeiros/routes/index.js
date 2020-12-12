import { Router } from "express";
import Authenticate from "../../../shared/middlewares/authenticateMiddleware";

class passajeiroRoutes {
  static configure(passajeiroController) {
    const passajeiroRouter = Router();

    passajeiroRouter.post("/", Authenticate, passajeiroController.create);

    return passajeiroRouter;
  }
}

export default passajeiroRoutes;
