import { userService } from "../services/users.service";
import { Request, Response } from "express";

class UserController {
    async getAll(req: Request, res: Response) {
        const data = await userService.getAll();
        return res.json(data);
    }
    async getUserById(req: Request, res: Response) {
        const data = await userService.findById(req.params.id);
        return res.json(data);
    }
    async createUser(req: Request, res: Response) {
        const data = await userService.createUser(req.body);
        return res.status(201).json(data);
    }
    async updateUser(req: Request, res: Response) {
        const data = await userService.findById(req.params.id);
        return res.json(data);
    }
    async deleteUser(req: Request, res: Response) {
        const data = await userService.deleteUser(req.params.id);
        return res.status(204).json(data);
    }
}

export const userController = new UserController();
