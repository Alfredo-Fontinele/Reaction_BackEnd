import { InMemoryCommentRepository } from "../../../tests/repositories/in-memory-comment-repository";
import { InMemoryUserRepository } from "../../../tests/repositories/in-memory-user-repository";
import { consoleResponse } from "../../../utils/consoleResponse";
import { Comment } from "../../../domain/entities/Comment";
import { CreateCommentInNew } from "./CreateCommentInNew";
import { User } from "../../../domain/entities/User";
import { New } from "../../../domain/entities/New";

describe("Use Case | Create User Comment", () => {
    it("Should be able to create user comment", async () => {
        const userRepository = new InMemoryUserRepository();
        const commentRepository = new InMemoryCommentRepository();

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

        consoleResponse({
            text: "Create Comment In New",
            response,
        });

        expect(response).toBeTruthy();
    });
});
