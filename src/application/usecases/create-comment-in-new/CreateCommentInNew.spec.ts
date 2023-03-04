import { InMemoryCreateUserRepository } from "../../../tests/repositories/in-memory-create-user-repository";
import { InMemoryCreateCommentRepository } from "../../../tests/repositories/in-memory-create-comment-repository";
import { CreateCommentInNew } from "./CreateCommentInNew";
import { User } from "../../../domain/entities/User";
import { Comment } from "../../../domain/entities/Comment";
import { New } from "../../../domain/entities/New";

describe("Use Case | Create User Comment", () => {
    it("Should be able to create user comment", async () => {
        const userRepository = new InMemoryCreateUserRepository();
        const commentRepository = new InMemoryCreateCommentRepository();

        const createCommentInNew = new CreateCommentInNew(
            userRepository,
            commentRepository
        );

        const newUser = User.create({
            description: "Olá. Sou Neto",
            email: "neto@gmail.com",
            name: "Neto",
            password: "@asd54",
        });

        const newNew = New.create({
            author: "Chaplin",
            description: "Oi",
            title: "hello",
        });

        const newComment = Comment.create({
            new_id: newNew.id,
            description: "Muito Bom!",
        });

        userRepository.users.push(newUser);
        commentRepository.comments.push(newComment);

        const response = await createCommentInNew.execute({
            userId: newUser.id,
            commentId: newComment.id,
        });

        console.group("Create Comment In New");
        console.dir(response, { depth: null });
        console.groupEnd();

        expect(response).toBeTruthy();
    });
});
