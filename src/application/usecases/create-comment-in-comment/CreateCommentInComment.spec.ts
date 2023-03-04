import { Comment } from "../../../domain/entities/Comment";
import { New } from "../../../domain/entities/New";
import { User } from "../../../domain/entities/User";
import { InMemoryCreateCommentRepository } from "../../../tests/repositories/in-memory-create-comment-repository";
import { InMemoryCreateUserRepository } from "../../../tests/repositories/in-memory-create-user-repository";
import { CreateCommentInComment } from "./CreateCommentInComment";

describe("Use Case | Create Comment in Comment", () => {
    it("Should be able to create a comment in a comment", async () => {
        const commentRepository = new InMemoryCreateCommentRepository();
        const userRepository = new InMemoryCreateUserRepository();

        const createCommmentInComment = new CreateCommentInComment(
            commentRepository,
            userRepository
        );

        const newUser = User.create({
            description: "Olá. Sou Neto",
            email: "neto@gmail.com",
            name: "Neto",
            password: "@asd54",
        });

        const newNew = New.create({
            author: "Folha",
            description: "Noticia Nova",
            title: "Futebol",
        });

        const newComment = Comment.create({
            new_id: newNew.id,
            description: "Muito Bom!",
        });

        const otherComment = Comment.create({
            new_id: newNew.id,
            description: "Muito Bom Mesmo cara!",
        });

        userRepository.users.push(newUser);
        commentRepository.comments.push(newComment);
        commentRepository.comments.push(otherComment);

        const response = await createCommmentInComment.execute({
            userId: newUser.id,
            otherCommentId: otherComment.id,
            commentId: newComment.id,
        });

        console.group("Create Comment In Comment");
        console.dir(response, { depth: null });
        console.groupEnd();

        expect(response).toBeTruthy();
    });
});
