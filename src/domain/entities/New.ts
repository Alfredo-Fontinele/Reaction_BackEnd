import { IDate } from "../../application/interfaces";
import { Entity } from "../../core/domain/Entity";

export interface INewProps extends IDate {
    title: string;
    description: string;
    author: string;
}

export class New extends Entity<INewProps> {
    private constructor(props: INewProps, id?: string) {
        super(props, id);
    }
    static create(props: INewProps, id?: string) {
        return new New(
            {
                ...props,
                created_at: props.created_at ?? new Date(),
            },
            id
        );
    }
}
