import { User } from "../../../domain/entities/User";
import { InMemoryUserRepository } from "../../../tests/repositories/in-memory-user-repository";
import { consoleResponse } from "../../../utils/consoleResponse";
import { dateNow } from "../../../utils/dateNow";
import { GetUserById } from "./GetUserById";

describe("Use Case | Get User By Id", () => {
    it("Should be able to get user by id", async () => {
        const userRepository = new InMemoryUserRepository();

        const getUserById = new GetUserById(userRepository);

        const newUser = User.create({
            name: "Galileu",
            created_at: dateNow,
            description: "sou galileu",
            email: "galileu@gmail.com",
            password: "56sad465as4d65as465a4sd65as465sa4d",
            updated_at: dateNow,
        });

        userRepository.users.push(newUser);

        const response = await getUserById.execute({
            userId: newUser.id,
        });

        consoleResponse({
            text: "Get User By Id",
            response,
        });

        expect(response).toBeTruthy();
    });
});
