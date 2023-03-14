// import { Prisma } from "@prisma/client";
// import { IUserRepository } from "../repositories/UserRepository";

export interface ICreatedDate {
    created_at?: Date;
}

export interface IUpdatedDate {
    updated_at?: Date;
}

export interface IDate extends ICreatedDate, IUpdatedDate {}

export interface UserNotFound {
    message: "User Not Found";
}

// export interface IRepositoryPrisma
//     extends Prisma.UserDelegate<
//             Prisma.RejectOnNotFound | Prisma.RejectPerOperation | undefined
//         >,
//         IUserRepository {}
