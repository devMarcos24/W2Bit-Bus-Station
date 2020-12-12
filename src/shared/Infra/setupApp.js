import Express from "express";
import cors from "cors";

import ModelUser from "../Models/users";
import ModelBus from "../Models/buses";
import ModelPassajeiros from "../Models/passajeiros";

import * as ctrs from "./controller";
import * as rtrs from "./routes";

const setupApp = async () => {
  const UserController = new ctrs.UserController(ModelUser);
  const BusController = new ctrs.BusController(ModelBus);
  const PassajeirosController = new ctrs.PassajeiroController(ModelPassajeiros);

  const rootRouter = Express.Router();

  rootRouter.use("/user", rtrs.UserRoutes.configure(UserController));
  rootRouter.use("/bus", rtrs.BusRoutes.configure(BusController));
  rootRouter.use(
    "/passajeiros",
    rtrs.PassajeirosRoutes.configure(PassajeirosController)
  );

  const app = Express();

  app.use([
    cors(),
    Express.json({ limit: "10mb" }),
    Express.urlencoded({ extended: false }),
  ]);

  app.use(rootRouter);

  return app;
};

export default setupApp;
