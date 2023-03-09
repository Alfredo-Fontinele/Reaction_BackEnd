import { UserRepository } from "../repositories/UserRepository.prisma";
import { UserNotFound } from "../../application/interfaces";
import { IUserProps } from "../../domain/entities/User";
import { prisma } from "./../database/";
import { User } from "@prisma/client";
import { Request } from "express";

export class UserService implements UserRepository {
    async getAll(req: Request): Promise<User[]> {
        return await prisma.user.findMany();
    }
    async createUser(user: IUserProps): Promise<User> {
        return await prisma.user.create({
            data: {
                ...user,
            },
        });
    }
    async updateUser(
        id: string,
        user: IUserProps
    ): Promise<User | UserNotFound> {
        return await prisma.user.update({
            data: {
                ...user,
            },
            where: {
                id,
            },
        });
    }
    async deleteUser(id: string): Promise<User | UserNotFound> {
        return await prisma.user.delete({
            where: {
                id,
            },
        });
    }
    async findById(id: string): Promise<User | UserNotFound> {
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
