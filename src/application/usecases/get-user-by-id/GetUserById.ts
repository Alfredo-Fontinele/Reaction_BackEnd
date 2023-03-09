import { IUserRepository } from "./../../repositories/UserRepository";

interface IGetUserByIdRequest {
    userId: string;
}

export class GetUserById {
    constructor(private userRepository: IUserRepository) {}
    async execute({ userId }: IGetUserByIdRequest) {
        const existUser = await this.userRepository.findById(userId);
        if (!existUser) {
            throw new Error("User Not Found");
        }
        return existUser;
    }
}
