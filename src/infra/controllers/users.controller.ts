import { Request } from "express";
import { prisma } from "../database";

class UserController {
    static async getUserById(params: any) {
        const userRepository = prisma.user;
    }
}
