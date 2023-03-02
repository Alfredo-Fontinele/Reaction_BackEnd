import { ICommentRepository } from "../../application/repositories/CommentRepository";
import { Comment } from "../../domain/entities/Comment";

export class InMemoryCreateCommentRepository implements ICommentRepository {
    comments: Comment[] = [];
    async findById(id: string): Promise<Comment | null> {
        const foundComment = await this.comments.find(
            (comment) => comment.id === id
        );
        if (!foundComment) {
            throw new Error("Comment Not Found.");
        }
        return foundComment;
    }
}
