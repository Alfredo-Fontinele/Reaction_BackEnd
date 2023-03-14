import { userController } from "../../controllers/users.controller";
import { ExpressAdapter } from "../../../adapters/ExpressAdapter";
import { Router } from "express";

export const usersRoutes = Router();

usersRoutes.get("/", userController.getAll);
// usersRoutes.post("/", userController.createUser);
// usersRoutes.get("/:id", userController.getUserById);
// usersRoutes.patch("/:id", userController.updateUser);
// usersRoutes.delete("/:id", userController.deleteUser);
