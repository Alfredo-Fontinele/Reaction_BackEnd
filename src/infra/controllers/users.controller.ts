import { GetUserById } from "../../application/usecases/get-user-by-id/GetUserById";
import { UserService } from "../services/users.service";
import { prisma } from "../database";
import { Request, Response } from "express";

const userService = new UserService();

class UserController {
    static async getUserById(params: any) {
        // const userRepository = prisma.user
        // const getUserById = new GetUserById(userRepository);
    }
}
