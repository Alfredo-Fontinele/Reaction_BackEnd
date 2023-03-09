import { Router } from "express";
import { ExpressAdapter } from "../../../adapters/ExpressAdapter";

export const usersRoutes = Router();

usersRoutes.get("/:id", ExpressAdapter.create);
