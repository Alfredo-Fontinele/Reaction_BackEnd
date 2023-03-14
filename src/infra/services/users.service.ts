// import { UserRepository } from "../repositories/UserRepository.prisma";
import { UserNotFound } from "../../application/interfaces";
import { IUserProps } from "../../domain/entities/User";
import { prisma } from "./../database/";
// import { User } from "@prisma/client";
import { Request } from "express";

class UserService {
    async getAll() {
        return await prisma.user.findMany();
    }
    async createUser(user: IUserProps) {
        return await prisma.user.create({
            data: {
                ...user,
            },
        });
    }
    async updateUser(id: string, user: IUserProps) {
        return await prisma.user.update({
            data: {
                ...user,
            },
            where: {
                id,
            },
        });
    }
    async deleteUser(id: string) {
        return await prisma.user.delete({
            where: {
                id,
            },
        });
    }
    async findById(id: string) {
        const userFound = await prisma.user.findUnique({
            where: {
                id,
            },
        });
        if (!userFound) {
            return {
                message: "User Not Found",
            };
        }
        return userFound;
    }
}

export const userService = new UserService();
