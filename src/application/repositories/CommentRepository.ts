import { Comment } from "../../domain/entities/Comment";

export interface ICommentRepository {
    findById(id: string): Promise<Comment | null>;
}
