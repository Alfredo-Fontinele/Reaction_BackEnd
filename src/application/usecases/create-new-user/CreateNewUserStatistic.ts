import { IUserRepository } from "../../repositories/UserRepository";
import { INewRepository } from "../../repositories/NewRepository";
import { Statistic } from "../../../domain/entities/Statistic";

interface ICreateNewUserStatisticRequest {
    userId: string;
    newId: string;
}

export class CreateNewUserStatistic {
    constructor(
        private newRepository: INewRepository,
        private userRepository: IUserRepository
    ) {}
    async execute({ newId, userId }: ICreateNewUserStatisticRequest) {
        const userFound = await this.userRepository.findById(userId);
        if (!userFound) {
            throw new Error("User Not Found!");
        }
        const newFound = await this.newRepository.findById(newId);
        if (!newFound) {
            throw new Error("New Not Found!");
        }
        return Statistic.create(
            {
                userId: userFound.id,
                favorites: [{ ...newFound.props }],
                comments: [],
                likes: [],
            },
            userId
        );
    }
}
