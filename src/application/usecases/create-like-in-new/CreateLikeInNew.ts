import { Statistic } from "../../../domain/entities/Statistic";
import { INewRepository } from "../../repositories/NewRepository";
import { IUserRepository } from "../../repositories/UserRepository";

interface ICreateLikeInNewRequest {
    newId: string;
    userId: string;
}

export class CreateLikeInNew {
    constructor(
        private newRepository: INewRepository,
        private userRepository: IUserRepository
    ) {}
    async execute({ newId, userId }: ICreateLikeInNewRequest) {
        const existNew = await this.newRepository.findById(newId);
        if (!existNew) {
            throw new Error("New Not Found");
        }
        const existUser = await this.userRepository.findById(userId);
        if (!existUser) {
            throw new Error("User Not Found");
        }
        return Statistic.create({
            userId: existUser.id,
            likes: [
                {
                    news: [existNew],
                },
            ],
        });
    }
}
