import { InMemoryCreateUserRepository } from "../../../tests/repositories/in-memory-create-user-repository";
import { InMemoryCreateCommentRepository } from "../../../tests/repositories/in-memory-create-comment-repository";
import { CreateLikeComment } from "./CreateLikeComment";
import { User } from "../../../domain/entities/User";
import { Comment } from "../../../domain/entities/Comment";
import { New } from "../../../domain/entities/New";
import { InMemoryCreateNewRepository } from "../../../tests/repositories/in-memory-create-new-repository";

describe("Use Case | Create Like Comment", () => {
    it("Should be able to create like in one comment", async () => {
        const userRepository = new InMemoryCreateUserRepository();
        const commentRepository = new InMemoryCreateCommentRepository();
        const newRepository = new InMemoryCreateNewRepository();

        const createLikeComment = new CreateLikeComment(
            userRepository,
            commentRepository
        );

        const newUser = User.create({
            description: "Hello",
            email: "teste@gmail.com",
            name: "teste",
            password: "13487",
        });

        const newNew = New.create({
            title: "Novidade",
            author: "Desconhecido",
            description: "Teste",
        });

        const newComment = Comment.create({
            new_id: newNew.id,
            description: "Muito Bom!",
        });

        commentRepository.comments.push(newComment);
        userRepository.users.push(newUser);
        newRepository.news.push(newNew);

        const response = await createLikeComment.execute({
            commentId: newComment.id,
            userId: newUser.id,
        });

        console.group("Create Like In Comment");
        console.dir(response, { depth: null });
        console.groupEnd();

        expect(response).toBeTruthy();
    });
});
