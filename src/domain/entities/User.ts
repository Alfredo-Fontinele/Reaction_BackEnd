import { IDate } from "../../application/interfaces";
import { Entity } from "../../core/domain/Entity";
import { dateNow } from "../../utils/dateNow";

export interface IUserProps extends IDate {
    name: string;
    email: string;
    description: string;
    password: string;
}

export class User extends Entity<IUserProps> {
    private constructor(props: IUserProps, id?: string) {
        super(props, id);
    }
    static create(props: IUserProps, id?: string) {
        return new User(
            {
                ...props,
                created_at: dateNow,
                updated_at: dateNow,
            },
            id
        );
    }
}
