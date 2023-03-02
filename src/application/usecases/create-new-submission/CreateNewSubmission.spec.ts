import { InMemoryCreateUserRepository } from "../../../tests/repositories/in-memory-create-user-repository";
import { InMemoryCreateNewRepository } from "../../../tests/repositories/in-memory-create-new-repository";
import { CreateNewSubmission } from "./CreateNewSubmission";
import { User } from "../../../domain/entities/User";
import { New } from "../../../domain/entities/New";

describe("Create New Submission | use case", () => {
    it("Should be able to create a new submission ", async () => {
        const userRepositoryInMemory = new InMemoryCreateUserRepository();
        const newRepositoryInMemory = new InMemoryCreateNewRepository();

        const createNewSubmission = new CreateNewSubmission(
            newRepositoryInMemory,
            userRepositoryInMemory
        );

        const dateNow = new Date();

        const newUser = User.create({
            name: "Galileu",
            created_at: dateNow,
            description: "sou galileu",
            email: "galileu@gmail.com",
            password: "56sad465as4d65as465a4sd65as465sa4d",
            updated_at: dateNow,
        });

        const newNew = New.create({
            author: "News Gali",
            created_at: dateNow,
            description: "Nova Noticia",
            title: "Novo titulo",
        });

        userRepositoryInMemory.users.push(newUser);
        newRepositoryInMemory.news.push(newNew);

        const response = await createNewSubmission.execute({
            newId: newNew.id,
            userId: newUser.id,
        });

        const responseStatistic = await console.log(response);
        expect(response).toBeTruthy();
    });
});
