import { Router } from "express";
import Authenticate from "../../../shared/middlewares/authenticateMiddleware";

class passajeiroRoutes {
  static configure(passajeiroController) {
    const passajeiroRouter = Router();

    passajeiroRouter.get("/", Authenticate, passajeiroController.index);
    passajeiroRouter.post("/", Authenticate, passajeiroController.create);
    passajeiroRouter.put("/:id", Authenticate, passajeiroController.update);
    passajeiroRouter.delete("/:id", Authenticate, passajeiroController.delete);

    return passajeiroRouter;
  }
}

export default passajeiroRoutes;
