import { InMemoryCreateUserRepository } from "../../../tests/repositories/in-memory-create-user-repository";
import { InMemoryCreateCommentRepository } from "../../../tests/repositories/in-memory-create-comment-repository";
import { CreateUserComment } from "./CreateUserComment";
import { User } from "../../../domain/entities/User";
import { Comment } from "../../../domain/entities/Comment";

describe("Use Case | Create User Comment", () => {
    it("Should be able to create user comment", async () => {
        const userRepository = new InMemoryCreateUserRepository();
        const commentRepository = new InMemoryCreateCommentRepository();

        const createUserComment = new CreateUserComment(
            userRepository,
            commentRepository
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

        const response = await createUserComment.execute({
            userId: newUser.id,
            commentId: newComment.id,
        });

        // console.group("Properties");
        // console.log(response.props);
        // console.groupEnd();

        // console.group("Response");
        // console.info(response);
        // console.groupEnd();

        expect(response).toBeTruthy();
    });
});
