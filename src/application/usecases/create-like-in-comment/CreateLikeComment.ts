import { IUserRepository } from "../../repositories/UserRepository";
import { ICommentRepository } from "../../repositories/CommentRepository";
import { Statistic } from "../../../domain/entities/Statistic";

interface ICreateLikeCommentRequest {
    commentId: string;
    userId: string;
}

export class CreateLikeComment {
    constructor(
        private userRepository: IUserRepository,
        private commentRepository: ICommentRepository
    ) {}
    async execute({ commentId, userId }: ICreateLikeCommentRequest) {
        const existUser = await this.userRepository.findById(userId);
        if (!existUser) {
            throw new Error("User Not Found");
        }
        const existComment = await this.commentRepository.findById(commentId);
        if (!existComment) {
            throw new Error("Comment Not Found");
        }
        return Statistic.create({
            userId: existUser.id,
            likes: [
                {
                    comments: [existComment],
                },
            ],
        });
    }
}
