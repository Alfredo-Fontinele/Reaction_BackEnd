import { ICommentRepository } from "../../repositories/CommentRepository";
import { IUserRepository } from "../../repositories/UserRepository";
import { Statistic } from "../../../domain/entities/Statistic";

interface ICreateCommentInNewRequest {
    userId: string;
    commentId: string;
}

export class CreateCommentInNew {
    constructor(
        private userRepository: IUserRepository,
        private commentRepository: ICommentRepository
    ) {}
    async execute({ userId, commentId }: ICreateCommentInNewRequest) {
        const existUser = await this.userRepository.findById(userId);
        if (!existUser) {
            throw new Error("User Not Found!");
        }
        const existComment = await this.commentRepository.findById(commentId);
        if (!existComment) {
            throw new Error("Comment Not Found!");
        }
        return Statistic.create({
            userId: existUser.id,
            comments: [existComment],
        });
    }
}
