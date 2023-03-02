import { Entity } from "../../core/domain/Entity";

export interface ICommentProps {
    description: string;
    new_id: string;
    created_at: Date;
}

export class Comment extends Entity<ICommentProps> {
    private constructor(props: ICommentProps, id?: string) {
        super(props, id);
    }
    static create(props: ICommentProps, id?: string) {
        return new Comment(props, id);
    }
}
