import { InMemoryCreateUserRepository } from "../../../tests/repositories/in-memory-create-user-repository";
import { InMemoryCreateNewRepository } from "../../../tests/repositories/in-memory-create-new-repository";
import { CreateNewUserStatistic } from "./CreateNewUser";
import { User } from "../../../domain/entities/User";
import { New } from "../../../domain/entities/New";

describe("Use Case | Create New User Statistic", () => {
    it("Should be able to create a news item and associate it with a user", async () => {
        const userRepository = new InMemoryCreateUserRepository();
        const newRepository = new InMemoryCreateNewRepository();

        const createNewUserStatistic = new CreateNewUserStatistic(
            newRepository,
            userRepository
        );

        const newUser = User.create({
            description: "Olá",
            email: "neto@gmail.com",
            name: "Neto",
            password: "asd54a65d4as65d",
        });

        const newNew = New.create({
            title: "Novidade",
            author: "Desconhecido",
            description: "Teste",
        });

        userRepository.users.push(newUser);
        newRepository.news.push(newNew);

        const response = await createNewUserStatistic.execute({
            newId: newNew.id,
            userId: newUser.id,
        });

        console.group("Response");
        console.dir(response, { depth: null });
        console.groupEnd();

        expect(response).toBeTruthy();
    });
});
