import { IUserRepository } from "../../application/repositories/UserRepository";
import { User } from "../../domain/entities/User";

export class InMemoryUserRepository implements IUserRepository {
    users: User[] = [];
    async findById(id: string): Promise<User | null> {
        const userFound = await this.users.find((user) => user.id === id);
        if (!userFound) {
            throw new Error("User Not Found!");
        }
        return userFound;
    }
}
