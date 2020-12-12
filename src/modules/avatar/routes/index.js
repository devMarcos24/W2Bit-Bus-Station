import { Router } from "express";
import multer from "multer";

import multerConfig from "../../../config/multer";
import authenticateMiddleware from "../../../shared/middlewares/authenticateMiddleware";

class AvatarRouter {
  static configure(avatarController) {
    const route = Router();

    route.post(
      "/files",
      multer(multerConfig).single("file"),
      authenticateMiddleware,
      avatarController.uploadAvatar
    );
    return route;
  }
}

export default AvatarRouter;
