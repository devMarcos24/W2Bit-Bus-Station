import Express from "express";
import cors from "cors";
import path from "path";

import morgan from "morgan";

import ModelUser from "../Models/users";
import ModelBus from "../Models/buses";
import ModelPassajeiros from "../Models/passajeiros";
import ModelAvatars from "../Models/avatars";
import ModelViagem from "../Models/viagens";

import * as ctrs from "./controller";
import * as rtrs from "./routes";

const setupApp = async () => {
  const UserController = new ctrs.UserController(ModelUser);
  const BusController = new ctrs.BusController(ModelBus);
  const PassajeirosController = new ctrs.PassajeiroController(ModelPassajeiros);
  const AvatarController = new ctrs.AvatarController(ModelAvatars);
  const ViagemController = new ctrs.ViagemController(ModelViagem);

  const rootRouter = Express.Router();

  rootRouter.use("/user", rtrs.UserRoutes.configure(UserController));
  rootRouter.use("/bus", rtrs.BusRoutes.configure(BusController));
  rootRouter.use(
    "/passajeiros",
    rtrs.PassajeirosRoutes.configure(PassajeirosController)
  );

  rootRouter.use("/avatar", rtrs.AvatarRoutes.configure(AvatarController));
  rootRouter.use("/viagem", rtrs.ViagemRoutes.configure(ViagemController));

  const app = Express();

  app.use([
    cors(),
    Express.json({ limit: "10mb" }),
    Express.urlencoded({ extended: true }),
  ]);

  app.use(morgan("dev"));
  app.use(
    "/files",
    Express.static(path.resolve(__dirname, "..", "..", "..", "tmp", "uploads"))
  );

  app.use(rootRouter);

  return app;
};

export default setupApp;
