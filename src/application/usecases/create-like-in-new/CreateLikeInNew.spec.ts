import { New } from "../../../domain/entities/New";
import { User } from "../../../domain/entities/User";
import { InMemoryCreateUserRepository } from "../../../tests/repositories/in-memory-create-user-repository";
import { InMemoryCreateNewRepository } from "../../../tests/repositories/in-memory-create-new-repository";
import { CreateLikeInNew } from "./CreateLikeInNew";

describe("Use Case | Create Like New", () => {
    it("Should be able to create like in one new", async () => {
        const userRepository = new InMemoryCreateUserRepository();
        const newRepository = new InMemoryCreateNewRepository();

        const createLikeNew = new CreateLikeInNew(
            newRepository,
            userRepository
        );

        const newNew = New.create({
            author: "Galileu",
            description: "Novidade",
            title: "The Truth",
        });

        const newUser = User.create({
            description: "Hello",
            email: "teste@gmail.com",
            name: "teste",
            password: "13487",
        });

        userRepository.users.push(newUser);
        newRepository.news.push(newNew);

        const response = await createLikeNew.execute({
            newId: newNew.id,
            userId: newUser.id,
        });

        console.group("Create Like In New");
        console.dir(response, { depth: null });
        console.groupEnd();

        expect(response).toBeTruthy();
    });
});
