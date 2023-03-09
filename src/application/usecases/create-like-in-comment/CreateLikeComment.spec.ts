import { InMemoryUserRepository } from "../../../tests/repositories/in-memory-user-repository";
import { InMemoryCommentRepository } from "../../../tests/repositories/in-memory-comment-repository";
import { InMemoryNewRepository } from "../../../tests/repositories/in-memory-new-repository";
import { consoleResponse } from "../../../utils/consoleResponse";
import { Comment } from "../../../domain/entities/Comment";
import { CreateLikeComment } from "./CreateLikeComment";
import { User } from "../../../domain/entities/User";
import { New } from "../../../domain/entities/New";

describe("Use Case | Create Like Comment", () => {
    it("Should be able to create like in one comment", async () => {
        const userRepository = new InMemoryUserRepository();
        const commentRepository = new InMemoryCommentRepository();
        const newRepository = new InMemoryNewRepository();

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

        consoleResponse({
            text: "Create Like In Comment",
            response,
        });

        expect(response).toBeTruthy();
    });
});
