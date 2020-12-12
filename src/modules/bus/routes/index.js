import { Router } from "express";
import Authenticate from "../../../shared/middlewares/authenticateMiddleware";

class BusRoutes {
  static configure(busController) {
    const busRouter = Router();

    busRouter.post("/", Authenticate, busController.create);
    busRouter.get("/", Authenticate, busController.index);
    busRouter.get("/:id", Authenticate, busController.show);
    busRouter.put("/:id", Authenticate, busController.update);
    busRouter.delete("/:id", Authenticate, busController.delete);

    return busRouter;
  }
}

export default BusRoutes;
