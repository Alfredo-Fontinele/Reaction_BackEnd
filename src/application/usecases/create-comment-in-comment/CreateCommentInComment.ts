import { Statistic } from "../../../domain/entities/Statistic";
import { ICommentRepository } from "../../repositories/CommentRepository";
import { IUserRepository } from "../../repositories/UserRepository";

interface ICreateCommentInCommentRequest {
    comment_id: string;
    user_id: string;
}

export class CreateCommentInComment {
    constructor(
        private commentRepository: ICommentRepository,
        private userRepository: IUserRepository
    ) {}
    async execute({ user_id, comment_id }: ICreateCommentInCommentRequest) {
        const existUser = await this.userRepository.findById(user_id);
        if (!existUser) {
            throw new Error("User Not Found!");
        }
        const existComment = await this.commentRepository.findById(comment_id);
        if (!existComment) {
            throw new Error("Comment Not Exist!");
        }
        return Statistic.create({
            userId: existUser.id,
            comments: [
                {
                    ...existComment.props,
                    comments: existComment.props.comments,
                },
            ],
        });
    }
}
