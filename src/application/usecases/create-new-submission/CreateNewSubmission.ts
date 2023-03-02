import { Submission } from "../../../domain/entities/Submission";
import { INewRepository } from "../../repositories/NewRepository";
import { IUserRepository } from "../../repositories/UserRepository";

type CreateNewStatisticRequest = {
    newId: string;
    userId: string;
};

export class CreateNewSubmission {
    constructor(
        private newRepository: INewRepository,
        private userRepository: IUserRepository
    ) {}
    async execute({ newId, userId }: CreateNewStatisticRequest) {
        const userFound = await this.userRepository.findById(userId);
        if (!userFound) {
            throw new Error("User Not Found!");
        }
        const newFound = await this.newRepository.findById(newId);
        if (!newFound) {
            throw new Error("New Not Found!");
        }
        return Submission.create({ newId, userId });
    }
}
