import { Comment } from "../../../domain/entities/Comment";
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

        const newComment = Comment.create({
            new_id: newUser.id,
            description: "Muito Bom!",
        });

        userRepository.users.push(newUser);
        commentRepository.comments.push(newComment);

        const response = await createCommmentInComment.execute({
            user_id: newUser.id,
            comment_id: newComment.id,
        });

        console.group("Properties Comments");
        console.log(response.props);
        console.groupEnd();

        console.group("Response");
        console.log(response);
        console.groupEnd();

        expect(response).toBeTruthy();
    });
});
