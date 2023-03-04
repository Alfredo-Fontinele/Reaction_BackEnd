import { Statistic } from "../../../domain/entities/Statistic";
import { ICommentRepository } from "../../repositories/CommentRepository";
import { IUserRepository } from "../../repositories/UserRepository";

interface ICreateCommentInCommentRequest {
    commentId: string;
    otherCommentId: string;
    userId: string;
}

export class CreateCommentInComment {
    constructor(
        private commentRepository: ICommentRepository,
        private userRepository: IUserRepository
    ) {}
    async execute({
        userId,
        commentId,
        otherCommentId,
    }: ICreateCommentInCommentRequest) {
        const existUser = await this.userRepository.findById(userId);
        if (!existUser) {
            throw new Error("User Not Found!");
        }
        const existComment = await this.commentRepository.findById(commentId);
        if (!existComment) {
            throw new Error("Comment Not Exist!");
        }
        const existOtherComment = await this.commentRepository.findById(
            otherCommentId
        );
        if (!existOtherComment) {
            throw new Error("Other Comment Not Exist!");
        }
        existComment.props.comments?.push(existOtherComment);
        return Statistic.create({
            userId: existUser.id,
            comments: [existComment, existOtherComment],
        });
    }
}
